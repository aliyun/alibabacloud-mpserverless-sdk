import { MPServerlessCore, MPServerlessOptions as BaseOptions } from '@alicloud/mpserverless-core';
import { ProxyService } from '@alicloud/mp-proxy-service';
import { DbService } from '@alicloud/mp-db-service';
import { UserService } from '@alicloud/mp-user-service';
import { FunctionService } from '@alicloud/mp-function-service';
import { HighFileSevice } from './file';
export declare class MPServerlessMiniAppCore extends MPServerlessCore {
    db: DbService;
    file: HighFileSevice;
    user: UserService;
    function: FunctionService;
    network: ProxyService;
    constructor(appGlobal: any, options: BaseOptions);
    get version(): string;
    protected get ua(): string;
    protected createTransport(options: BaseOptions): void;
}
