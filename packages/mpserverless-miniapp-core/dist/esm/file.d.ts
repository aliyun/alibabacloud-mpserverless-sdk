import { MPFileService, FileUploadOptions } from '@alicloud/mp-file-service';
import { HTTPTransport } from '@alicloud/mpserverless-core';
export declare class HighFileSevice extends MPFileService {
    private getFileUploadInfo;
    constructor(transport: HTTPTransport, options: any);
    uploadFile(options: FileUploadOptions): Promise<any>;
}
