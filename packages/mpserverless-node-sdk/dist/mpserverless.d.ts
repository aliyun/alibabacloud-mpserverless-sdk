import { MPServerlessCore as Base, MPServerlessOptions as BaseOptions, GenericObject } from '@ali/mpserverless-core-inner';
import { FunctionHTTPTransport } from './transport';
import { FunctionService } from '@ali/mp-function-service-inner';
import { FunctionFileService } from '@ali/mpserverless-node-file-service-inner';
import { FunctionUserService } from '@ali/mpserverless-node-user-service-inner';
import { DbService } from '@ali/mp-db-service-inner';
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
