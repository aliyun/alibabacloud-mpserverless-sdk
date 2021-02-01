/// <reference types="node" />
import { HTTPTransport, BaseService, GenericObject } from '@alicloud/mpserverless-core';
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
export interface FileUploadOptions {
    filePath?: string;
    fileBuffer?: Buffer;
    fileName?: string;
    extension?: string;
    meta?: GenericObject<string>;
    headers?: {
        contentType?: string;
        cacheControl?: string;
        contentEncoding?: string;
        contentDisposition?: string;
    };
}
export declare class FunctionFileService extends BaseService {
    private request;
    constructor(transport: HTTPTransport, request: any);
    deleteFile(url: string): Promise<any>;
    getUploadFileOptions(options: FileUploadOptions): Promise<any>;
    getFileSize(filePath: string): Promise<number>;
    reportOSSUpload(id: string, contentType?: string): Promise<void>;
    uploadFile(options: FileUploadOptions): Promise<any>;
    private getOSSUploadOptionsFromPath;
    private upload;
}
