import {
  Basement as Base,
  WHITELIST_EXTENSIONS,
  BasementOptions,
  assert,
  GenericObject,
  OSSUploadOptions,
  OSSUploadHeaders,
  OSSUploadHeaderList,
  ErrorType,
  ErrorName,
  ErrorCode,
  OSSUploadResponseFormat,
} from '@alicloud/mpserverless-core';
import {
  DbService, FileService, AuthService, FunctionService, FileUploadOptions,
} from '@alicloud/mpserverless-services';
import { MiniProgramHTTPTransport, AuthorizeOptions, AuthType } from './transport';
import mime from 'mime/lite';
import { MPServerlessClientError } from './error';
import {
  NetworkService,
} from './network';

class MiniProgramFileService extends FileService {
  /**
   * upload file for miniprogram
   * @param  {FileUploadOptions} options
   * @returns Promise
   */
  public async uploadFile(options: FileUploadOptions): Promise<any> {
    assert(options.filePath && typeof options.filePath === 'string', 'missing options.filePath');

    const relativePath = options.filePath.replace(/(.*):\/\//, '');
    const extension = relativePath.split('.').pop();
    assert(WHITELIST_EXTENSIONS.indexOf(extension.toLowerCase()) >= 0, `目前不支持 ${extension} 类型文件`);

    const meta = Object.keys(options.meta || {}).reduce((accu, key) => {
      accu[`x-oss-meta-${key}`] = options.meta[key];
      return accu;
    }, {});
    const headers = options.headers ? OSSUploadHeaderList.reduce((accu, key) => {
      const fieldName = key.replace(/\-[A-Z]/g, match => match[1]).replace(/^[A-Z]/, match => match.toLowerCase());
      if (options.headers.hasOwnProperty(fieldName)) accu[key] = options.headers[fieldName];
      return accu;
    }, {}) : {};

    let fileSize = options.fileSize;
    const getFileInfo = (this.transport as MiniProgramHTTPTransport).getFileInfo;
    if (!fileSize && getFileInfo) {
      const fileInfo = await getFileInfo({
        apFilePath: options.filePath,
      });
      fileSize = fileInfo.body.size;
    }

    let imageExt = options.extension;
    const getImageInfo = (this.transport as MiniProgramHTTPTransport).getImageInfo;
    if (!imageExt && getImageInfo) {
      const imageInfo = await getImageInfo({
        src: options.filePath,
      });
      imageExt = imageInfo.body.type;
    }

    // create signature
    const uploadRes = await this.getOSSUploadOptionsFromPath(relativePath, options.path, fileSize);
    if (uploadRes.error) {
      throw new MPServerlessClientError(
        ErrorName.INTERFACE_ERROR,
        ErrorCode.INTERFACE_RESPONSE_FAILED,
        ErrorType.COMMON_ERROR,
        uploadRes.error.message,
      );
    }
    const uploadOptions = OSSUploadResponseFormat(uploadRes.result);
    // upload file
    await this.uploadFileToOSS(options, uploadOptions, headers, meta);
    // report data
    await this.reportOSSUpload(uploadOptions.id, mime.getType(imageExt));
    // return result
    return {
      fileUrl: `https://${uploadOptions.cdnDomain}/${uploadOptions.key}`,
      filePath: uploadOptions.key,
    };
  }

  private async uploadFileToOSS(
    fileUploadOptions: FileUploadOptions,
    ossUploadOptions: OSSUploadOptions,
    headers: OSSUploadHeaders,
    meta: GenericObject<string>,
  ): Promise<void> {
    const options = [ 'key', 'policy', 'Signature', 'OSSAccessKeyId' ].reduce((accu, key) => {
      accu[key] = ossUploadOptions[key];
      return accu;
    }, {});
    const uploadHeader: GenericObject<string> = {};

    if (fileUploadOptions.extension) {
      const contentType = mime.getType(fileUploadOptions.extension);
      if (!contentType) {
        throw new MPServerlessClientError(
          ErrorName.VALIDATION_ERROR,
          ErrorCode.VALIDATION_FAILED,
          ErrorType.COMMON_ERROR,
          '文件扩展错误，无法解析正确的 MIME',
        );
      }
      uploadHeader['Content-Type'] = contentType;
    }
    // cdn 缓存时间
    headers['Cache-Control'] = 'max-age=2592000';
    if (ossUploadOptions.securityToken) {
      headers['x-oss-security-token'] = ossUploadOptions.securityToken;
    }
    await (this.transport as MiniProgramHTTPTransport).upload(
      `https://${ossUploadOptions.host}`,
      Object.assign({ success_action_status: 200 }, headers, meta, options),
      'file',
      fileUploadOptions.filePath,
      uploadHeader,
    );
  }
}

interface UserService extends AuthService {
  /**
   * authorize
   */
  authorize(options: AuthorizeOptions): Promise<{ success: boolean}>;
}

export class MPServerless extends Base {
  public db: DbService;
  public file: FileService;
  public user: UserService;
  public function: FunctionService;
  public network: NetworkService;
  protected transport: MiniProgramHTTPTransport;

  constructor(appGlobal: any, options: BasementOptions) {
    super({ ...options, httpClient: appGlobal, httpTransport: MiniProgramHTTPTransport, logger: appGlobal.logger });
    // options 参数检查
    assert(options.clientSecret, 'clientSecret is required');
    assert(options.appId, 'appId is required');

    this.db = new DbService(this.transport);
    this.user = new AuthService(this.transport) as UserService;
    this.file = new MiniProgramFileService(this.transport);
    this.function = new FunctionService(this.transport);
    this.network = new NetworkService(this.transport);

    this.user.authorize = async (options: AuthorizeOptions): Promise<{ success: boolean}> => {
      const hasToken = this.transport.hasToken();

      // 以下几种情况才去请求 authorize 接口
      // 1. 匿名方式
      // 2. 没有 token
      // 3. 有 token 但是当前已授权方式与未来授权方式不同
      if (options.authType === AuthType.ANONYMOUS) {
        const token = await this.transport.anonymousAuthorize(options);
        if (token) {
          return {
            success: true,
          };
        }
        return {
          success: false,
        };
      } else if (!hasToken || hasToken && this.transport.authType !== options.authType) {
        const token = await this.transport.authorize(options);
        if (token) {
          return {
            success: true,
          };
        }
        return {
          success: false,
        };
      }
    };
  }

  /**
   * 返回当前版本号
   * @returns string
   */
  public get version(): string {
    return VERSION;
  }

  /**
   * 返回 sdk ua
   */
  protected get ua(): string {
    return PKGUA;
  }

  protected createTransport(options: BasementOptions): void {
    super.createTransport(options);
    this.transport.setAppSecret(options.clientSecret).setUA(this.ua);
  }
}
