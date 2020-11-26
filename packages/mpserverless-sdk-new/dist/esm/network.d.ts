import { BaseService, GenericObject } from '@ant-basement/core';
export declare class NetworkService extends BaseService {
    forward(method: string, params: GenericObject<any>): Promise<any>;
}
