import { BaseService, GenericObject } from '@alicloud/mpserverless-core';
export interface OSSUploadOptions {
    id: string;
    key: string;
    host: string;
    policy: string;
    Signature: string;
    OSSAccessKeyId: string;
}
export interface OSSUploadHeaders {
    'Expires'?: string;
    'Cache-Control'?: string;
    'Content-Type'?: string;
    'Content-Encoding'?: string;
    'Content-Disposition'?: string;
}
export interface OSSUploadResponseDataJSONObject {
    id: string;
    key: string;
    host: string;
    policy: string;
    Signature: string;
    OSSAccessKeyId: string;
    securityToken: string;
    cdnDomain: string;
}
export declare function OSSUploadResponseFormat(data: GenericObject<string>): OSSUploadResponseDataJSONObject;
export declare const OSSUploadHeaderList: string[];
export declare const WHITELIST_EXTENSIONS: string[];
declare enum OSSEnv {
    PUBLIC = "public",
    PRIVATE = "private"
}
export interface FileUploadOptions {
    filePath: string;
    fileName?: string;
    fileType?: 'image';
    fileSize?: number;
    extension?: string;
    env?: OSSEnv;
    path?: string;
    meta?: GenericObject<string>;
    headers?: {
        contentType?: string;
        cacheControl?: string;
        contentEncoding?: string;
        contentDisposition?: string;
    };
    file?: string | any;
    timeout?: number;
}
export declare class FunctionFileService extends BaseService {
    protected appSecret: string;
    deleteFile(url: string): Promise<any>;
    getUploadFileOptions(options: FileUploadOptions): Promise<any>;
    private getOSSUploadOptionsFromPath;
}
export {};
