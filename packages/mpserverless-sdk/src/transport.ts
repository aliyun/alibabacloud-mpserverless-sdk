import {
  // classes
  HTTPTransport,
  HTTPResponseObject,
  // constants
  HTTP_UNAUTHORIZED,
  ErrorCode,
  ErrorName,
  ErrorType,
  // utility
  assert,
  GenericObject,
} from '@alicloud/mpserverless-core';
import {
  MiniProgramFileUploadObject,
  MiniProgramHTTPRequestObject,
  MiniProgramHTTPRequestEncoder,
  MiniProgramHTTPResponseDecoder,
  MiniProgramGetFileInfoObject,
  MiniProgramGetImageInfoObject,
} from './codec';
import { MPServerlessClientError } from './error';

export type OAuthScope = 'auth_user' | 'auth_zhima' | 'auth_base'; // 只能是 auth_user, auth_base 拿不到用户信息
export type OAuthProvider = 'alipay_openapi' | 'wechat_openapi';

export interface MiniProgramOAuthObject {
  scopes: OAuthScope | OAuthScope[];
}

export interface AuthorizeOptions {
  authProvider?: OAuthProvider;
  authType?: AuthType;
}

export enum AuthType {
  ANONYMOUS = 'anonymous',
  DEFAULT = '',
}

export class MiniProgramHTTPTransport extends HTTPTransport {
  public getFileInfo: (options: MiniProgramGetFileInfoObject) => Promise<HTTPResponseObject>;
  public getImageInfo: (options: MiniProgramGetImageInfoObject) => Promise<HTTPResponseObject>;
  protected scope: OAuthScope = 'auth_base';
  protected accessToken: string;
  protected authorizeOptions: AuthorizeOptions;
  protected pendingRequest: Promise<any>;
  protected uploadFile: (options: MiniProgramFileUploadObject) => Promise<HTTPResponseObject>;
  protected getAuthCode: (options: MiniProgramOAuthObject) => Promise<HTTPResponseObject>;
  protected httpRequest: (options: MiniProgramHTTPRequestObject) => Promise<HTTPResponseObject>;
  private currentAuthType: AuthType;

  constructor(
    endpoint: string,
    library: any,
  ) {
    super(endpoint, library);
    assert(library.uploadFile, 'missing uploadFile');
    assert(library.getAuthCode, 'missing getAuthCode');
    assert(library.request, 'missing request');

    this.uploadFile = this.wrap(library.uploadFile);
    this.getAuthCode = this.wrap(library.getAuthCode);
    this.httpRequest = this.wrap(library.request);
    if (library.getFileInfo) {
      this.getFileInfo = this.wrap(library.getFileInfo);
    }
    if (library.getImageInfo) {
      this.getImageInfo = this.wrap(library.getImageInfo);
    }
  }

  /**
   * get MiniProgram specific encoder
   * @returns MiniProgramHTTPRequestEncoder
   */
  public getEncoder(): MiniProgramHTTPRequestEncoder {
    return new MiniProgramHTTPRequestEncoder(this.endpoint, this.spaceId);
  }

  /**
   * make actual request with retry logic
   * @param  {MiniProgramHTTPRequestEncoder} encoder
   * @param  {boolean=false} retried
   */
  public async request(
    encoder: MiniProgramHTTPRequestEncoder,
    retried: boolean = false,
  ): Promise<HTTPResponseObject> {
    const cloned = encoder.clone();

    const token = await this.getAccessToken();
    encoder.setBodyField({
      token,
    });
    encoder.sign(this.appSecret);
    encoder.setBaseHeaders({
      'Content-Type': 'application/json',
      'x-basement-token': token,
    });
    if (this.ua) {
      encoder.setBaseHeaders({
        'x-serverless-ua': this.ua,
      });
    }

    try {
      const encoded = encoder.encodeAsHTTPRequestObject({
        timeout: this.timeout,
        dataType: 'json',
      });
      this.logger.info('request encode data', encoded);
      const decoded = await this.httpRequest(encoded);
      return decoded;
    } catch (e) {
      this.logger.error('request error', e);
      const isUnAuthorized = e.error.code === 'GATEWAY_INVALID_TOKEN'
      || e.error.code === 'InvalidParameter.InvalidToken' || e.status === HTTP_UNAUTHORIZED;
      // token 失效情况下，需要重新获取 token
      if (isUnAuthorized) {
        if (retried) {
          throw new MPServerlessClientError(
            ErrorName.UNAUTHORIZED_ERROR,
            ErrorCode.AUTHENTICATION_FAILED,
            ErrorType.COMMON_ERROR,
            'authentication failed',
          );
        }
        // start promise in action
        await this.getAccessToken(true);
        return await this.request(cloned, true);
      }
      if (e.error) {
        throw e.error;
      }
      throw e;
    }
  }

  /**
   * 是否存在 accessToken
   */
  public hasToken(): boolean {
    return !!this.accessToken;
  }

  /**
   * 获取授权方式
   */
  public get authType(): string {
    return this.currentAuthType;
  }

  /**
   * make actual request
   * @param  {MiniProgramHTTPRequestEncoder} encoder
   * @returns Promise
   */
  public async authorize(options: AuthorizeOptions): Promise<string> {
    this.pendingRequest = this
      .getAuthCode({ scopes: this.scope } as MiniProgramOAuthObject)
      .then((res: HTTPResponseObject) => {
        this.logger.info(`Request authcode is ${res.body.authCode || res.body.code} `);
        return res.body.authCode || res.body.code;
      })
      .then((authCode: string) => {
        const encoder = this.getEncoder();
        encoder.setBodyField({
          method: 'serverless.auth.user.authorize',
          params: {
            authProvider: options.authProvider || 'alipay_openapi',
            clientIdentifier: this.appId,
            authCode,
          },
        });
        encoder.sign(this.appSecret);
        encoder.setBaseHeaders({ 'Content-Type': 'application/json' });
        if (this.ua) {
          encoder.setBaseHeaders({
            'x-serverless-ua': this.ua,
          });
        }

        const encoded = encoder.encodeAsHTTPRequestObject({
          timeout: this.timeout,
          dataType: 'json',
        });
        return this.httpRequest(encoded);
      })
      .then((res: HTTPResponseObject) => {
        this.logger.info('Request accessToken ' + (res.body.success ? 'success' : 'failed'));
        if (res.body && res.body.result) {
          this.authorizeOptions = options;
          this.accessToken = res.body.result.accessToken;
          this.currentAuthType = AuthType.DEFAULT;
        }
        this.pendingRequest = null;
        return Promise.resolve(this.accessToken);
      });

    return this.pendingRequest;
  }

  /**
   * 匿名授权
   * @param options
   */
  public async anonymousAuthorize(options: AuthorizeOptions): Promise<string> {
    const encoder = this.getEncoder();
    encoder.setBodyField({
      method: 'serverless.auth.user.anonymousAuthorize',
      params: {
        clientIdentifier: this.appId,
      },
    });
    encoder.sign(this.appSecret);
    encoder.setBaseHeaders({ 'Content-Type': 'application/json' });
    if (this.ua) {
      encoder.setBaseHeaders({
        'x-serverless-ua': this.ua,
      });
    }

    const encoded = encoder.encodeAsHTTPRequestObject({
      timeout: this.timeout,
      dataType: 'json',
    });

    this.pendingRequest = this.httpRequest(encoded)
      .then((res: HTTPResponseObject) => {
        this.logger.info('Request accessToken ' + (res.body.success ? 'success' : 'failed'));
        if (res.body && res.body.result) {
          this.authorizeOptions = options;
          this.accessToken = res.body.result.accessToken;
          this.currentAuthType = AuthType.ANONYMOUS;
        }
        this.pendingRequest = null;
        return Promise.resolve(this.accessToken);
      });

    return this.pendingRequest;
  }

  /**
   * wrapper for getting token
   * @param  {boolean=false} refresh
   * @returns Promise<string>
   */
  public async getAccessToken(refresh: boolean = false): Promise<string> {
    if (this.pendingRequest) {
      this.logger.info('getAccessToken: reuse');
      return this.pendingRequest;
    }
    if (!this.accessToken) {
      throw new MPServerlessClientError(
        ErrorName.UNAUTHORIZED_ERROR,
        ErrorCode.UNAUTHENTICATION,
        ErrorType.COMMON_ERROR,
        '未进行用户授权，请先调用三方授权或匿名授权',
      );
    }
    if (refresh && this.authorizeOptions) {
      this.logger.info('getAccessToken: start');
      if (this.authorizeOptions.authType === AuthType.ANONYMOUS) {
        return this.anonymousAuthorize(this.authorizeOptions);
      }
      return this.authorize(this.authorizeOptions);
    }

    return this.accessToken;
  }

  /**
   * 上传文件，此处不做重试，由 getUploadMeta 保障 token 的存在
   * @param  {string} host
   * @param  {object} formData
   * @param  {string} fileName
   * @param  {string} filePath
   * @returns Promise<HTTPResponseObject>
   */
  public async upload(
    host: string,
    formData: object,
    fileName: string,
    filePath: string,
    header?: GenericObject<string>,
  ): Promise<HTTPResponseObject> {
    this.logger.info('upload with params');
    this.logger.info(JSON.stringify(formData, null, 2));
    return await this.uploadFile({
      url: host,
      formData,
      fileName,
      name: fileName,
      filePath,
      fileType: 'image',
      header: {
        ...header,
        'X-OSS-server-side-encrpytion': 'AES256',
      },
    });
  }

  /**
   * convert jQuery style ajax to async/await compatible
   * @param  {Function} myMethod method from appGlobal
   * @return {Function} async function
   */
  protected wrap(myMethod): (args: any) => Promise<HTTPResponseObject> {
    return args => {
      return new Promise<HTTPResponseObject>((resolve, reject) => {
        myMethod(Object.assign(args, {
          complete: (res: any = {}) => {
            this.logger.info('completed request');
            this.logger.info(JSON.stringify(res, null, 2));
            const decoder = new MiniProgramHTTPResponseDecoder();
            const response = decoder.decode(res);
            if (response.error) {
              return reject(response);
            }

            return resolve(response);
          },
        }));
      });
    };
  }
}
