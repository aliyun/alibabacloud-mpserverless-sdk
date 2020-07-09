import { BaseService } from '@alicloud/mpserverless-core';
export interface GetInfoOptions {
    authProvider?: string;
}
export declare class FunctionUserService extends BaseService {
    protected appSecret: string;
    getInfo(options?: GetInfoOptions): Promise<any>;
}
