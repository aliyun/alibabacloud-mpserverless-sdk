import {
  BaseService,
  GenericObject,
} from '@alicloud/mpserverless-core';

export class NetworkService extends BaseService {
   /**
    * 数据通过网关转发
    * @param method
    * @param params
    */
  public async forward(method: string, params: GenericObject<any>): Promise<any> {
    const request = this.getEncoder();
    request.setBodyField({
      method,
      params,
    });

    const response = await this.transport.request(request);
    return response.body;
  }
}
