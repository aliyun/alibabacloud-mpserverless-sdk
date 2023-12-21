/// <reference types="node" />
import { GenericObject, HTTPRequestEncoder, HTTPResponseObject, HTTPResponseDecoder, HTTPMethod, PREFIX } from '@alicloud/mpserverless-core';
export interface NodeCoreHTTPRequestObject {
    url: string;
    data: GenericObject<any>;
    method: HTTPMethod;
    timeout?: number;
    headers: GenericObject<string>;
    dataType?: 'json' | 'text' | 'base64';
    contentType: 'json';
    content?: Buffer;
}
export declare class NodeCoreHTTPRequestEncoder extends HTTPRequestEncoder {
    protected spaceId: string;
    protected prefix: PREFIX;
    protected serviceHeaders: GenericObject<string>;
    constructor(endpoint: string, spaceId: string, prefix?: PREFIX);
    sign(serverSecret: string): void;
    encodeAsHTTPRequestObject(additionalObject: GenericObject<any>): NodeCoreHTTPRequestObject;
    setToken(token: string): NodeCoreHTTPRequestEncoder;
    gzipRequest(options: NodeCoreHTTPRequestObject): Promise<NodeCoreHTTPRequestObject>;
}
export declare class NodeCoreHTTPResponseDecoder extends HTTPResponseDecoder {
    decode(res: GenericObject<any>, isDBRequest: boolean): HTTPResponseObject;
}
