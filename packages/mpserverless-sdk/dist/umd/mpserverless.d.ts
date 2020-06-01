import { Basement as Base, BasementOptions } from '@alicloud/mpserverless-core';
import { DbService, FileService, AuthService, FunctionService } from '@alicloud/mpserverless-services';
import { MiniProgramHTTPTransport, AuthorizeOptions } from './transport';
import { NetworkService } from './network';
interface UserService extends AuthService {
    authorize(options: AuthorizeOptions): Promise<{
        success: boolean;
    }>;
}
export declare class MPServerless extends Base {
    db: DbService;
    file: FileService;
    user: UserService;
    function: FunctionService;
    network: NetworkService;
    protected transport: MiniProgramHTTPTransport;
    constructor(appGlobal: any, options: BasementOptions);
    get version(): string;
    protected get ua(): string;
    protected createTransport(options: BasementOptions): void;
}
export {};
