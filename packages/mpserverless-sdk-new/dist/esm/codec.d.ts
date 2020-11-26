import { GenericObject, HTTPRequestEncoder, HTTPResponseObject, HTTPResponseDecoder, HTTPMethod, PREFIX } from '@ant-basement/core';
export interface MiniProgramHTTPRequestObject {
    url: string;
    data?: GenericObject<any>;
    method?: HTTPMethod;
    timeout?: number;
    headers?: GenericObject<string>;
    header?: GenericObject<string>;
    dataType?: 'json' | 'text' | 'base64';
}
export interface MiniProgramFileUploadObject {
    url: string;
    fileName?: string;
    name?: string;
    filePath?: string;
    formData?: GenericObject<any>;
    fileType?: 'image' | 'audio' | 'video';
    header?: GenericObject<string>;
}
export interface MiniProgramGetFileInfoObject {
    apFilePath: string;
}
export interface MiniProgramGetImageInfoObject {
    src: string;
}
export declare class MiniProgramHTTPRequestEncoder extends HTTPRequestEncoder {
    protected spaceId: string;
    protected prefix: PREFIX;
    protected serviceHeaders: GenericObject<string>;
    constructor(endpoint: string, spaceId: string);
    sign(clientSecret: string): void;
    encodeAsHTTPRequestObject(additionalObject: GenericObject<any>): MiniProgramHTTPRequestObject;
    clone(): MiniProgramHTTPRequestEncoder;
}
export declare class MiniProgramHTTPResponseDecoder extends HTTPResponseDecoder {
    protected ERROR_CODES: number[];
    setStatusAndBody(status: number, body: any): void;
    decode(res: GenericObject<any>): HTTPResponseObject;
}
