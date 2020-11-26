import { BaseService } from '@alicloud/mpserverless-core';
export declare class FunctionService extends BaseService {
    invoke(functionTarget: string, functionArgs?: any): Promise<object>;
    private validate;
}
