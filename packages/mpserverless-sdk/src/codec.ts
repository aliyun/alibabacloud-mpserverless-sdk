import {
  GenericObject,
  HTTPRequestEncoder,
  HTTPResponseObject,
  HTTPResponseDecoder,
  HTTPMethod,
  PREFIX,
  ErrorName,
  ErrorType,
} from '@alicloud/mpserverless-core';
import crypto from 'crypto-js/core';
import HmacMD5 from 'crypto-js/hmac-md5';
import { isNumber } from 'util';
import { MPServerlessClientError } from './error';

export interface MiniProgramHTTPRequestObject {
  url: string;
  data?: GenericObject<any>;
  method?: HTTPMethod;
  timeout?: number;
  headers?: GenericObject<string>;
  header?: GenericObject<string>;
  dataType?: 'json' | 'text' | 'base64';
}

export interface MiniProgramFileUploadObject {
  url: string;
  fileName?: string;
  name?: string;
  filePath?: string;
  formData?: GenericObject<any>;
  fileType?: 'image' | 'audio' | 'video';
  header?: GenericObject<string>;
}

export interface MiniProgramGetFileInfoObject {
  apFilePath: string;
}

export interface MiniProgramGetImageInfoObject {
  src: string;
}

export class MiniProgramHTTPRequestEncoder extends HTTPRequestEncoder {
  protected prefix = PREFIX.CLIENT;
  protected serviceHeaders: GenericObject<string> = {};

  /**
   * 初始化，每个请求生成时间戳和 sdkType 等
   * @param  {string} endpoint
   * @param  {string} spaceId
   */
  constructor(endpoint: string, protected spaceId: string) {
    super(endpoint);

    this.setBodyField({
      spaceId,
    });
  }

  /**
   * 加签
   * @param  {string} clientSecret
   */
  public sign(clientSecret: string): void {
    const { spaceId, method, params, token, userId } = this.body;
    const timestamp = Date.now();
    this.setBodyField({
      timestamp,
    });
    let signString = '';
    const signObject = {
      spaceId,
      timestamp,
      method,
      params: JSON.stringify(params),
      token,
      userId,
    };
    Object.keys(signObject).sort().forEach(key => {
      if (signObject[key]) {
        signString = `${signString}&${key}=${signObject[key]}`;
      }
    });
    signString = signString.slice(1);
    const sign = HmacMD5(signString, clientSecret).toString(crypto.enc.Hex);
    this.setServerlessHeaders({ sign });
  }

  /**
   * 以 my.httpRequest 入参输出
   * @param  {GenericObject<any>} additionalObject
   * @returns MiniProgramHTTPRequestObject
   */
  public encodeAsHTTPRequestObject(additionalObject: GenericObject<any>): MiniProgramHTTPRequestObject {
    if (this.body.params) {
      this.body.params = JSON.stringify(this.body.params);
    }
    return {
      url: this.url,
      data: this.body,
      method: this.method,
      headers: this.headers,
      header: this.headers,
      dataType: 'json',
      ...additionalObject,
    };
  }

  /**
   * 返回当前 encoder 一样的配置
   * @returns MiniProgramHTTPRequestEncoder
   */
  public clone(): MiniProgramHTTPRequestEncoder {
    const encoder = new MiniProgramHTTPRequestEncoder(this.endpoint, this.spaceId);
    encoder.setBodyField(this.body);
    encoder.setBaseHeaders(this.baseHeaders);
    encoder.setServerlessHeaders(this.serverlessHeaders);
    return encoder;
  }
}

export class MiniProgramHTTPResponseDecoder extends HTTPResponseDecoder {
  protected ERROR_CODES = [ 11, 12, 13, 14, 19, 20 ];
  /**
   * set response status and body
   * @param  {number} status
   * @param  {any} body
   */
  public setStatusAndBody(status: number, body: any): void {
    super.setStatusAndBody(status, body);

    if (this.ERROR_CODES.indexOf(status) >= 0) {
      this._error = MPServerlessClientError.from({
        name: ErrorName.IDE_ERROR,
        code: status.toString(),
        type: ErrorType.IDE_ERROR,
        message: 'request error from Alipay IDE',
      });
    }
  }

  /**
   * decode response from my.xx methods
   * @param  {GenericObject<any>} res
   * @returns HTTPResponseObject
   */
  public decode(res: GenericObject<any>): HTTPResponseObject {
    this.setHeaders(res.headers || {});
    let body = res.data || res.body;

    if (typeof body === 'string') {
      body = JSON.parse(body);
    }
    // 如果响应数据已经有 result 字段，则不做处理
    if (body && body.data) {
      if (isNumber(body.data.affectedDocs)) {
        // 如果是 db 数据，则把 data 的数据提取到上一层级
        body = Object.assign({}, body, {
          ...body.data,
        });
      } else if (Object.prototype.toString.call(body.data) === '[object Object]') {
        // 如果是 Object 对象
        body.result = Object.assign({}, body.data);
      } else if (Object.prototype.toString.call(body.data) === '[object Array]') {
        // 如果是数组对象
        [ ...body.result ] = body.data;
      } else {
        body.result = body.data;
      }
      delete body.data;
    }

    // 微信 IDE 网络错误信息
    if (/^request:fail+/.test(res.errMsg)) {
      this.setErrorMessage(res.errMsg);
      return super.decode();
    }

    // 接口非 200 的话，新版支付宝 IDE 返回的是 number 类型的 error
    const responseErrorCode = parseInt(res.error, 10);
    if (responseErrorCode) {
      this.setStatusAndBody(responseErrorCode, body);
      return super.decode();
    }
    // 旧版支付宝 IDE 返回的是 err
    const responseErrorMessage = res.err;
    if (responseErrorMessage) {
      this.setErrorMessage(responseErrorMessage);
      return super.decode();
    }
    // or in the form of error object itself
    if (res instanceof Error) {
      this.setErrorObject(res);
      return super.decode();
    }
    // 新版网关接口规范一律返回 200，error 字段直接透传
    if (body && typeof body.error === 'object') {
      this.setErrorObject(body.error);
      return super.decode();
    }

    // get status code and parse as an integer
    const responseStatusCode = parseInt(res.status || res.statusCode, 10);
    if (responseStatusCode) {
      this.setStatusAndBody(responseStatusCode, body);
      return super.decode();
    }

    // since myMethod wraps many methods, should also consider the case where it isn't my.httpRequest
    this.setStatusAndBody(200, res);
    return super.decode();
  }
}
