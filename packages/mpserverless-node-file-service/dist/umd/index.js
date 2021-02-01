"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
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
        const uploadRes = await this.getOSSUploadOptionsFromPath(fileName, fileSize);
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
            form.field(key, uploadOptions[key]);
        });
        if (options.filePath) {
            form.file('file', options.filePath, fileName, fileSize);
        }
        else {
            form.buffer('file', options.fileBuffer, fileName);
        }
        await this.upload(uploadUrl, form);
        await this.reportOSSUpload(uploadOptions.id);
        return {
            fileUrl: `https://${uploadOptions.cdnDomain}/${uploadOptions.key}`,
            filePath: uploadOptions.key,
        };
    }
    async getOSSUploadOptionsFromPath(fileName, fileSize) {
        const options = { env: OSSEnv.PUBLIC };
        options.filename = fileName;
        options.size = fileSize;
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
            headers: form.headers(),
        });
    }
}
exports.FunctionFileService = FunctionFileService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQUEsbUVBS3FDO0FBQ3JDLG9EQUFvQjtBQUNwQixvRUFBb0M7QUFDcEMsbUNBQW1DO0FBaUNuQyxTQUFnQix1QkFBdUIsQ0FBQyxJQUEyQjtJQUNqRSxPQUFPO1FBQ0wsRUFBRSxFQUFFLElBQUksQ0FBQyxFQUFFO1FBQ1gsR0FBRyxFQUFFLElBQUksQ0FBQyxPQUFPO1FBQ2pCLElBQUksRUFBRSxJQUFJLENBQUMsSUFBSTtRQUNmLE1BQU0sRUFBRSxJQUFJLENBQUMsTUFBTTtRQUNuQixTQUFTLEVBQUUsSUFBSSxDQUFDLFNBQVM7UUFDekIsY0FBYyxFQUFFLElBQUksQ0FBQyxXQUFXO1FBQ2hDLGFBQWEsRUFBRSxJQUFJLENBQUMsYUFBYTtRQUNqQyxTQUFTLEVBQUUsSUFBSSxDQUFDLFNBQVM7S0FDMUIsQ0FBQztBQUNKLENBQUM7QUFYRCwwREFXQztBQUVZLFFBQUEsbUJBQW1CLEdBQUc7SUFDakMsU0FBUztJQUNULGVBQWU7SUFDZixjQUFjO0lBQ2Qsa0JBQWtCO0lBQ2xCLHFCQUFxQjtDQUN0QixDQUFDO0FBRUYsSUFBSyxNQUdKO0FBSEQsV0FBSyxNQUFNO0lBQ1QsMkJBQWlCLENBQUE7SUFDakIsNkJBQW1CLENBQUE7QUFDckIsQ0FBQyxFQUhJLE1BQU0sS0FBTixNQUFNLFFBR1Y7QUFnQkQsTUFBYSxtQkFBb0IsU0FBUSwrQkFBVztJQUlsRCxZQUFZLFNBQXdCLEVBQUUsT0FBWTtRQUNoRCxLQUFLLENBQUMsU0FBUyxDQUFDLENBQUM7UUFDakIsSUFBSSxDQUFDLE9BQU8sR0FBRyxPQUFPLENBQUM7SUFDekIsQ0FBQztJQU1NLEtBQUssQ0FBQyxVQUFVLENBQUMsR0FBVztRQUNqQyxNQUFNLE9BQU8sR0FBRyxJQUFJLENBQUMsVUFBVSxFQUFFLENBQUM7UUFDbEMsT0FBTyxDQUFDLFlBQVksQ0FB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