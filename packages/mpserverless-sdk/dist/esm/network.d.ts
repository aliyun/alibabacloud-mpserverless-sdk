import { BaseService, GenericObject } from '@alicloud/mpserverless-core';
export declare class NetworkService extends BaseService {
    forward(method: string, params: GenericObject<any>): Promise<any>;
}
