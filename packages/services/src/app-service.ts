import {
  BaseService,
  BasementClientError,
  ErrorType,
  ErrorName,
  ErrorCode,
} from '@alicloud/mpserverless-core';

export class AppService extends BaseService {
  /**
   * 调用 sas handler
   * @params {string} target 目标云引擎名称，以换取目标路由 host
   * @params {object} arg
   */
  public async invoke(target: string, arg: {
    method: string, // 目标路由 HTTP 方法
    path: string, // 目标路由，这里是直接组装好发送 /a/b/c
    header: object, // 发送给目标路由的 HTTP header
    params: object, // 如果目标路由 SDK 组装好，params 就不需要了
    query: object, // 发送给目标路由的 HTTP query
    body: object, // 发送给目标路由的 HTTP body
  }): Promise<object> {
    const {
      method = '',
      path = '',
      header = {},
      params = {},
      query = {},
      body = {},
    } = arg;

    if (!target || !arg || !method) {
      throw new BasementClientError(
        ErrorName.VALIDATION_ERROR,
        ErrorCode.VALIDATION_FAILED,
        ErrorType.COMMON_ERROR,
        'missing method or target',
      );
    }
    const encoder = this.getEncoder();
    encoder.setBodyField({
      method: 'serverless.appService.runtime.invoke',
      params: {
        sasHTTPMethod: method,
        sasTarget: target,
        sasPath: path,
        sasHeader: header,
        sasParams: params,
        sasQuery: query,
        sasBody: body,
      },
    });

    const response = await this.transport.request(encoder);
    return { ...response.body, requestId: response.headers['request-id'] };
  }
}
