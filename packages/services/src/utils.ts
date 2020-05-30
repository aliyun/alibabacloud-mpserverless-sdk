import {
  BasementClientError,
  ErrorName,
} from '@alicloud/mpserverless-core';

export interface ResBodyJSONObject {
  success?: boolean;
  data?: object;
  error?: {
    type: string;
    code: string;
    message: string;
  };
}

/**
 * 解 data 字段到上一层
 * @param body
 */
export function handlerBody (body: ResBodyJSONObject): object {
  if (body.error) {
    throw new BasementClientError(
      ErrorName.INTERFACE_ERROR,
      body.error.code,
      body.error.type,
      body.error.message,
    );
  }
  return body.data;
}
