export * from './logger';
export * from './validator';
import { BasementClientError } from '../error';
import { ErrorName, ErrorType, ErrorCode } from '../constant';
import { GenericObject } from '../global';

/**
 * mock assert
 * @param  {boolean} expr expression
 * @param  {string} message error message
 */
export function assert(expr, message): void {
  if (!expr) {
    throw new BasementClientError(
      ErrorName.VALIDATION_ERROR,
      ErrorCode.VALIDATION_FAILED,
      ErrorType.COMMON_ERROR,
      message,
    );
  }
}

/**
 * query object to query string
 * @param  {object} kvmap
 * @return {string} string
 */
export function queryToString(kvmap: { [key: string]: any }): string {
  return Object.keys(kvmap).sort()
          .map(key => `${key}=${encodeURIComponent(kvmap[key].toString())}`)
          .join('&');
}

/**
 * convert from camel case to lisp case
 * @param  {string} key key
 * @return {string} string
 */
export function camelToLisp(key): string {
  return key.replace(/[A-Z]/g, match => {
    return `-${match.toLowerCase()}`;
  });
}

/**
 * 从任意信息中获取到错误消息
 * @param  {any} e
 */
export function extractMessage(e?: any): string {
  if (!e) {
    return;
  }

  if (Array.isArray(e)) {
    return e.map(extractMessage).join('; ');
  } else if (typeof e === 'object') {
    return e && (e.message || e.msg || e.desc);
  } else if (typeof e === 'string') {
    return e;
  }
}

export interface OSSUploadResponseDataJSONObject {
  id: string;
  key: string;
  host: string;
  policy: string;
  Signature: string;
  OSSAccessKeyId: string;
  securityToken: string;
  cdnDomain: string;
}

/**
 * OSS 上传的响应字段格式化
 */
export function OSSUploadResponseFormat(data: GenericObject<string>): OSSUploadResponseDataJSONObject {
  return {
    id: data.id,
    key: data.ossPath,
    host: data.host,
    policy: data.policy,
    Signature: data.signature,
    OSSAccessKeyId: data.accessKeyId,
    securityToken: data.securityToken,
    cdnDomain: data.cdnDomain,
  };
}
