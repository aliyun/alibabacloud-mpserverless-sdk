import {
  BaseService,
  HTTPResponseObject,
  OSSEnv,
  BasementClientError,
  ErrorName,
  ErrorType,
  GenericObject,
} from '@alicloud/mpserverless-core';

export interface FileUploadOptions {
  filePath: string;
  fileName?: string;
  fileType?: 'image' | 'video' | 'audio';
  fileSize?: number;
  extension?: string; // 实际文件扩展
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

export class FileService extends BaseService {
  /**
   * remove file by url from upload API
   * @param  {string} url
   */
  public async deleteFile(url: string): Promise<any> {
    const request = this.getEncoder();
    request.setBodyField({
      method: 'serverless.file.resource.delete',
      params: {
        id: url,
      },
    });

    const response = await this.transport.request(request);
    return response.body;
  }

  /**
   * upload file
   * @param  {FileUploadOptions} options
   * @returns Promise
   */
  public async uploadFile(options: FileUploadOptions): Promise<HTTPResponseObject> {
    throw new BasementClientError(
      ErrorName.UNSUPPORTED_ERROR,
      '',
      ErrorType.COMMON_ERROR,
      'children implementation required',
    );
  }

  /**
   * get upload configuration for proximal file upload
   * @param  {string} relativePath
   * @param  {string} targetPath
   * @param  {string} fileSize
   * @returns Promise<OSSUploadOptions>
   */
  public async getOSSUploadOptionsFromPath(
    relativePath: string,
    targetPath: string,
    fileSize?: number,
  ): Promise<any> {
    const options: any = { env: OSSEnv.PUBLIC };
    options.filename = relativePath.split('/').pop();
    options.size = fileSize;
    if (targetPath) options.targetPath = targetPath;

    const request = this.getEncoder();
    request.setBodyField({
      method: 'serverless.file.resource.generateProximalSign',
      params: options,
    });
    const response = await this.transport.request(request);
    // nodec-core decode 会解开 data，但是 miniprogram-sdk decode 不会解 data，所以直接返回 body 内容，让 sdk 自己去格式化结果
    return response.body;
  }

  /**
   * report to BaaS file, marking upload as completed
   * @param  {string} id
   * @param  {string} contentType
   * @returns Promise<void>
   */
  public async reportOSSUpload(id: string, contentType?: string): Promise<void> {
    const request = this.transport.getEncoder();
    const params: GenericObject<string> = {
      id,
    };
    if (contentType) {
      params.contentType = contentType;
    }
    request.setBodyField({
      method: 'serverless.file.resource.report',
      params,
    });
    await this.transport.request(request);
  }
}
