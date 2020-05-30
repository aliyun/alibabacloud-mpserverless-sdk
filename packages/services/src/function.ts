import {
  BaseService,
} from '@alicloud/mpserverless-core';

export class FunctionService extends BaseService {
  /**
   * 调用 function handler
   * @param  {string}    arg.functionTarget handler 名称
   * @param  {object={}} arg.functionArgs handler 入参
   */
  public async invoke(functionTarget: string, functionArgs = {}): Promise<object> {
    const encoder = this.getEncoder();
    encoder.setBodyField({
      method: 'serverless.function.runtime.invoke',
      params: {
        functionTarget,
        functionArgs,
      },
    });

    const response = await this.transport.request(encoder);
    return { ...response.body, requestId: response.headers['request-id'] };
  }
}
