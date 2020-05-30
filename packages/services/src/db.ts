import {
  BaseService,
  HTTPTransport,
  HTTPRequestEncoder,
} from '@alicloud/mpserverless-core';
import {
  Query,
  Result,
  ResultJSONObject,
} from '@alicloud/mpserverless-mongo';

export class QueryService extends Query {
  public getEncoder: () => HTTPRequestEncoder;
  public getTransport: () => HTTPTransport;

  /**
   * compose and execute request
   * @returns Promise
   */
  public async execute(): Promise<ResultJSONObject> {
    const params = await super.execute();

    const request = this.getEncoder()
      .setBodyField({
        method: 'serverless.db.default.execute',
        params,
      });

    const response = await this.getTransport().request(request);
    return (new Result(response.body as any as ResultJSONObject)).inspect();
  }
}

export class DbService extends BaseService {
  /**
   * get collection instance
   * @param  {string} name
   * @returns CollectionService
   */
  public collection(name: string): QueryService {
    const q = (new QueryService()).collection(name);
    q.getEncoder = () => this.getEncoder();
    q.getTransport = () => this.transport;
    return q; // TODO
  }
}
