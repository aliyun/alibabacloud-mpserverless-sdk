import { HTTPTransport, HTTPResponseObject, GenericObject } from '@ant-basement/core';
import { MiniProgramFileUploadObject, MiniProgramHTTPRequestObject, MiniProgramHTTPRequestEncoder, MiniProgramGetFileInfoObject, MiniProgramGetImageInfoObject } from './codec';
export declare type OAuthScope = 'auth_user' | 'auth_zhima' | 'auth_base';
export declare type OAuthProvider = 'alipay_openapi' | 'wechat_openapi';
export interface MiniProgramOAuthObject {
    scopes: OAuthScope | OAuthScope[];
}
export interface AuthorizeOptions {
    authProvider?: OAuthProvider;
    authType?: AuthType;
}
export declare enum AuthType {
    ANONYMOUS = "anonymous",
    DEFAULT = ""
}
export declare class MiniProgramHTTPTransport extends HTTPTransport {
    getFileInfo: (options: MiniProgramGetFileInfoObject) => Promise<HTTPResponseObject>;
    getImageInfo: (options: MiniProgramGetImageInfoObject) => Promise<HTTPResponseObject>;
    protected scope: OAuthScope;
    protected accessToken: string;
    protected authorizeOptions: AuthorizeOptions;
    protected pendingRequest: Promise<any>;
    protected uploadFile: (options: MiniProgramFileUploadObject) => Promise<HTTPResponseObject>;
    protected getAuthCode: (options: MiniProgramOAuthObject) => Promise<HTTPResponseObject>;
    protected httpRequest: (options: MiniProgramHTTPRequestObject) => Promise<HTTPResponseObject>;
    private currentAuthType;
    constructor(endpoint: string, library: any);
    getEncoder(): MiniProgramHTTPRequestEncoder;
    request(encoder: MiniProgramHTTPRequestEncoder, retried?: boolean): Promise<HTTPResponseObject>;
    hasToken(): boolean;
    get authType(): string;
    authorize(options: AuthorizeOptions): Promise<string>;
    anonymousAuthorize(options: AuthorizeOptions): Promise<string>;
    getAccessToken(refresh?: boolean): Promise<string>;
    upload(host: string, formData: object, fileName: string, filePath: string, header?: GenericObject<string>): Promise<HTTPResponseObject>;
    protected wrap(myMethod: any): (args: any) => Promise<HTTPResponseObject>;
}
