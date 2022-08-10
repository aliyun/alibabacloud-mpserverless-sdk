import { BaseService } from '@alicloud/mpserverless-core';
export interface GetInfoOptions {
    authProvider?: string;
}
export declare class FunctionUserService extends BaseService {
    protected appSecret: string;
    getInfo(options?: GetInfoOptions): Promise<any>;
    proxyHttpClientGetRequest(url: string, query?: object): Promise<any>;
    proxyHttpClientPostRequest(url: string, text?: string, headers?: object): Promise<any>;
    proxyHttpClientPostJsonRequest(url: string, json?: object, headers?: object): Promise<any>;
    proxyHttpClientPostFormDataRequest(url: string, data?: object, headers?: object): Promise<any>;
    protected proxyHttpClientRequest(url: string, method: 'GET' | 'POST', body?: object | string, headers?: object): Promise<any>;
}
