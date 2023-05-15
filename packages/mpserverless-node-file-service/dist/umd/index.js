"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FunctionFileService = exports.OSSUploadHeaderList = exports.OSSUploadResponseFormat = void 0;
const tslib_1 = require("tslib");
const mpserverless_core_1 = require("@alicloud/mpserverless-core");
const fs_1 = tslib_1.__importDefault(require("fs"));
const formstream_1 = tslib_1.__importDefault(require("formstream"));
const error_1 = require("./error");
function OSSUploadResponseFormat(data) {
    return {
        id: data.id,
        key: data.ossPath,
        host: data.host,
        policy: data.policy,
        Signature: data.signature,
        OSSAccessKeyId: data.accessKeyId,
        securityToken: data.securityToken,
        cdnDomain: data.cdnDomain,
        ossCallbackUrl: data.ossCallbackUrl,
    };
}
exports.OSSUploadResponseFormat = OSSUploadResponseFormat;
exports.OSSUploadHeaderList = [
    'Expires',
    'Cache-Control',
    'Content-Type',
    'Content-Encoding',
    'Content-Disposition',
];
var OSSEnv;
(function (OSSEnv) {
    OSSEnv["PUBLIC"] = "public";
    OSSEnv["PRIVATE"] = "private";
})(OSSEnv || (OSSEnv = {}));
class FunctionFileService extends mpserverless_core_1.BaseService {
    constructor(transport, request) {
        super(transport);
        this.request = request;
    }
    async deleteFile(url) {
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
    async info(fileIds, options) {
        const ids = typeof fileIds === 'string' ? fileIds : fileIds.join(',');
        const request = this.getEncoder();
        request.setBodyField({
            method: 'serverless.file.resource.info',
            params: {
                id: ids,
                ...(options || {}),
            },
        });
        const response = await this.transport.request(request);
        return response.body;
    }
    async getUploadFileOptions(options) {
        mpserverless_core_1.assert(options.filePath && typeof options.filePath === 'string', 'Invalid options.filePath');
        const fileName = options.fileName != null ? options.fileName : options.filePath.split(/\\|\//).pop();
        const uploadRes = await this.getOSSUploadOptionsFromPath(fileName);
        const uploadOptions = OSSUploadResponseFormat(uploadRes);
        return {
            ...uploadOptions,
        };
    }
    async getFileSize(filePath) {
        try {
            const info = await fs_1.default.statSync(filePath);
            return info.size;
        }
        catch (e) {
            throw new error_1.bizError.UploadFileError('读取文件失败');
        }
    }
    async reportOSSUpload(id, contentType) {
        const request = this.getEncoder();
        const params = {
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
    async uploadFile(options) {
        let fileSize;
        let fileName = options.fileName;
        if (options.filePath) {
            mpserverless_core_1.assert(typeof options.filePath === 'string', 'Invalid options.filePath');
            if (fileName == null) {
                fileName = options.filePath.split(/\\|\//).pop();
            }
            else {
                mpserverless_core_1.assert(typeof fileName === 'string' && fileName, 'Invalid options.fileName');
            }
            fileSize = await this.getFileSize(options.filePath);
        }
        else {
            mpserverless_core_1.assert(options.fileBuffer, 'filePath和fileBuffer不能都为空');
            mpserverless_core_1.assert(Buffer.isBuffer(options.fileBuffer), 'Invalid options.fileBuffer');
            mpserverless_core_1.assert(typeof fileName === 'string' && fileName, 'Invalid options.fileName');
            fileSize = options.fileBuffer.length;
        }
        const uploadRes = await this.getOSSUploadOptionsFromPath(fileName, fileSize, options.cloudPath);
        const uploadOptions = OSSUploadResponseFormat(uploadRes);
        const uploadUrl = uploadOptions.host;
        const form = new formstream_1.default();
        form.field('X-OSS-server-side-encrpytion', 'AES256');
        form.field('success_action_status', 200);
        Object.keys(options.meta || {}).forEach(key => {
            form.field(`x-oss-meta-${key}`, options.meta[key]);
        });
        if (options.headers) {
            exports.OSSUploadHeaderList.forEach(key => {
                const fieldName = key
                    .replace(/\-[A-Z]/g, match => match[1])
                    .replace(/^[A-Z]/, match => match.toLowerCase());
                if (options.headers.hasOwnProperty(fieldName)) {
                    form.field(key, options.headers[fieldName]);
                }
            });
        }
        if (uploadOptions.securityToken) {
            form.field('x-oss-security-token', uploadOptions.securityToken);
        }
        Object.keys(uploadOptions).forEach(key => {
            if (key === 'host' || key === 'securityToken')
                return;
            if (key === 'ossCallbackUrl') {
                const callback = JSON.stringify({
                    callbackUrl: uploadOptions.ossCallbackUrl,
                    callbackBody: JSON.stringify({
                        fileId: uploadOptions.id,
                        spaceId: this.transport.spaceIdOption,
                    }),
                    callbackBodyType: 'application/json',
                });
                form.field('callback', new Buffer(callback).toString('base64'));
                return;
            }
            form.field(key, uploadOptions[key]);
        });
        if (options.filePath) {
            form.file('file', options.filePath, fileName, fileSize);
        }
        else {
            form.buffer('file', options.fileBuffer, fileName);
        }
        await this.upload(uploadUrl, form);
        if (!uploadOptions.ossCallbackUrl) {
            await this.reportOSSUpload(uploadOptions.id);
        }
        return {
            fileUrl: `https://${uploadOptions.cdnDomain}/${uploadOptions.key}`,
            filePath: uploadOptions.key,
            fileId: uploadOptions.id,
        };
    }
    async getOSSUploadOptionsFromPath(fileName, fileSize, cloudPath) {
        const options = { env: OSSEnv.PUBLIC };
        options.filename = fileName;
        options.size = fileSize;
        if (cloudPath) {
            options.fileId = cloudPath;
        }
        const request = this.getEncoder();
        request.setBodyField({
            method: 'serverless.file.resource.generateProximalSign',
            params: options,
        });
        const response = await this.transport.request(request);
        return response.body.result;
    }
    async upload(host, form) {
        await this.request(host, {
            method: 'POST',
            stream: form,
            timeout: 300000,
            headers: form.headers(),
        });
    }
}
exports.FunctionFileService = FunctionFileService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLG1FQUtxQztBQUNyQyxvREFBb0I7QUFDcEIsb0VBQW9DO0FBQ3BDLG1DQUFtQztBQWtDbkMsU0FBZ0IsdUJBQXVCLENBQUMsSUFBMkI7SUFDakUsT0FBTztRQUNMLEVBQUUsRUFBRSxJQUFJLENBQUMsRUFBRTtRQUNYLEdBQUcsRUFBRSxJQUFJLENBQUMsT0FBTztRQUNqQixJQUFJLEVBQUUsSUFBSSxDQUFDLElBQUk7UUFDZixNQUFNLEVBQUUsSUFBSSxDQUFDLE1BQU07UUFDbkIsU0FBUyxFQUFFLElBQUksQ0FBQyxTQUFTO1FBQ3pCLGNBQWMsRUFBRSxJQUFJLENBQUMsV0FBVztRQUNoQyxhQUFhLEVBQUUsSUFBSSxDQUFDLGFBQWE7UUFDakMsU0FBUyxFQUFFLElBQUksQ0FBQyxTQUFTO1FBQ3pCLGNBQWMsRUFBRSxJQUFJLENBQUMsY0FBYztLQUNwQyxDQUFDO0FBQ0osQ0FBQztBQVpELDBEQVlDO0FBRVksUUFBQSxtQkFBbUIsR0FBRztJQUNqQyxTQUFTO0lBQ1QsZUFBZTtJQUNmLGNBQWM7SUFDZCxrQkFBa0I7SUFDbEIscUJBQXFCO0NBQ3RCLENBQUM7QUFFRixJQUFLLE1BR0o7QUFIRCxXQUFLLE1BQU07SUFDVCwyQkFBaUIsQ0FBQTtJQUNqQiw2QkFBbUIsQ0FBQTtBQUNyQixDQUFDLEVBSEksTUFBTSxLQUFOLE1BQU0sUUFHVjtBQWlCRCxNQUFhLG1CQUFvQixTQUFRLCtCQUFXO0lBSWxELFlBQVksU0FBd0IsRUFBRSxPQUFZO1FBQ2hELEtBQUssQ0FBQyxTQUFTLENBQUMsQ0FBQztRQUNqQixJQUFJLENBQUMsT0FBTyxHQUFHLE9BQU8sQ0FBQztJQUN6QixDQUFDO0lBTU0sS0FBSyxDQUFDLFVBQVUsQ0FBQyxHQUFXO1FBQ2pDLE1BQU0sT0FBTyxHQUFHLElBQUksQ0FBQyxVQUFVLEVB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