import {
  BaseService,
} from '@alicloud/mpserverless-core';

export class AlipayOpenAPIService extends BaseService {
  /**
   * todo
   * 调用 function handler
   * @param  {string} handler handler 名称
   * @param  {object={}} params handler 入参
   */
  public async exec(method: string, params: object = {}): Promise<object> {
    const encoder = this.getEncoder();
    encoder.setBodyField({
      method: 'antopen',
      params: {
        method,
        params,
      },
    });

    const response = await this.transport.request(encoder);
    return response.body;
  }
}
