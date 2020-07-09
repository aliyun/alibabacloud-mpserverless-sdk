import { HTTPTransport, HTTPResponseObject, PREFIX } from '@alicloud/mpserverless-core';
import { NodeCoreHTTPRequestEncoder } from './codec';
export declare class FunctionHTTPTransport extends HTTPTransport {
    protected userId: string;
    protected token: string;
    protected uid: string;
    protected requestId: string;
    protected httpRequest: any;
    constructor(endpoint: string);
    setAuthUID(uid: string): void;
    setRequestId(requestId: string): void;
    setUserId(userId: string): void;
    setToken(token: string): void;
    setRequest(request: any): void;
    getEncoder(prefix?: PREFIX): NodeCoreHTTPRequestEncoder;
    request(encoder: NodeCoreHTTPRequestEncoder): Promise<HTTPResponseObject>;
}
