import { BuiltInError, ErrorJSONObject } from '@ant-basement/core';
export declare class MPServerlessClientError extends BuiltInError {
    name: string;
    code: string;
    type: string;
    message: string;
    constructor(name: string, code: string, type: string, message: string);
    static from(raw: ErrorJSONObject): MPServerlessClientError;
}
