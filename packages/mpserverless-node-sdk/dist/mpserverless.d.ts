import { MPServerlessCore as Base, MPServerlessOptions as BaseOptions, GenericObject } from '@alicloud/mpserverless-core';
import { FunctionHTTPTransport } from './transport';
import { FunctionService } from '@alicloud/mp-function-service';
import { FunctionFileService } from '@alicloud/mpserverless-node-file-service';
import { FunctionUserService } from '@alicloud/mpserverless-node-user-service';
import { DbService } from '@alicloud/mp-db-service';
export declare class MPServerless extends Base {
    db: DbService;
    user: FunctionUserService;
    file: FunctionFileService;
    function: FunctionService;
    protected options: BaseOptions;
    protected transport: FunctionHTTPTransport;
    private pkg;
    constructor(options: BaseOptions);
    protected getPackage(): GenericObject<string>;
    setUserId(userId: string): MPServerless;
    get version(): string;
    setUA(userAgent: string): void;
    protected createTransport(options: BaseOptions): void;
}
