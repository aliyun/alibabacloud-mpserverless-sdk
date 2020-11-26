import { __awaiter } from "tslib";
import { BaseService, assert, } from '@alicloud/mpserverless-core';
import { FileValidator, uploadFileSchema, deleteFileSchema } from './validator';
import mime from 'mime/lite';
import { bizError } from './error';
export function OSSUploadResponseFormat(data) {
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
export const OSSUploadHeaderList = [
    'Expires',
    'Cache-Control',
    'Content-Type',
    'Content-Encoding',
    'Content-Disposition',
];
export const WHITELIST_EXTENSIONS = [
    'jpg',
    'jpeg',
    'png',
    'gif',
    'webp',
    'svg',
    'image',
];
var OSSEnv;
(function (OSSEnv) {
    OSSEnv["PUBLIC"] = "public";
    OSSEnv["PRIVATE"] = "private";
})(OSSEnv || (OSSEnv = {}));
export class MPFileService extends BaseService {
    constructor(transport, options) {
        super(transport);
        assert(options, '[MPFileService]初始化时缺少参数');
        assert(options.uploadFile, '[MPFileService]初始化时缺少 uploadFile 参数');
        this.upload = options.uploadFile;
    }
    deleteFile(url) {
        return __awaiter(this, void 0, void 0, function* () {
            this.validate(deleteFileSchema, { url });
            const request = this.getEncoder();
            request.setBodyField({
                method: 'serverless.file.resource.delete',
                params: {
                    id: url,
                },
            });
            const response = yield this.transport.request(request);
            return response.body;
        });
    }
    uploadFile(options) {
        return __awaiter(this, void 0, void 0, function* () {
            this.validate(uploadFileSchema, { options });
            const relativePath = options.filePath.replace(/(.*):\/\//, '');
            const extension = relativePath.split('.').pop();
            assert(WHITELIST_EXTENSIONS.indexOf(extension.toLowerCase()) >= 0, `[MPFileService]目前不支持 ${extension} 类型文件`);
            const meta = Object.keys(options.meta || {}).reduce((accu, key) => {
                accu[`x-oss-meta-${key}`] = options.meta[key];
                return accu;
            }, {});
            const headers = options.headers ? OSSUploadHeaderList.reduce((accu, key) => {
                const fieldName = key.replace(/\-[A-Z]/g, match => match[1]).replace(/^[A-Z]/, match => match.toLowerCase());
                if (options.headers.hasOwnProperty(fieldName))
                    accu[key] = options.headers[fieldName];
                return accu;
            }, {}) : {};
            const uploadRes = yield this.getOSSUploadOptionsFromPath(relativePath, options.path, options.fileSize);
            if (uploadRes.error) {
                throw new bizError.InterfaceError();
            }
            const uploadOptions = OSSUploadResponseFormat(uploadRes.result);
            const formData = ['key', 'policy', 'Signature', 'OSSAccessKeyId'].reduce((accu, key) => {
                accu[key] = uploadOptions[key];
                return accu;
            }, {});
            const uploadHeader = {
                'X-OSS-server-side-encrpytion': 'AES256',
            };
            if (options.extension) {
                const contentType = mime.getType(options.extension);
                uploadHeader['Content-Type'] = contentType;
            }
            headers['Cache-Control'] = 'max-age=2592000';
            if (uploadOptions.securityToken) {
                headers['x-oss-security-token'] = uploadOptions.securityToken;
            }
            yield this.upload({
                url: `https://${uploadOptions.host}`,
                formData: Object.assign({ success_action_status: 200 }, headers, meta, formData),
                name: 'file',
                fileName: 'file',
                filePath: options.filePath,
                fileType: 'image',
                header: uploadHeader,
            });
            yield this.reportOSSUpload(uploadOptions.id, mime.getType(options.extension));
            return {
                fileUrl: `https://${uploadOptions.cdnDomain}/${uploadOptions.key}`,
                filePath: uploadOptions.key,
            };
        });
    }
    getOSSUploadOptionsFromPath(relativePath, targetPath, fileSize) {
        return __awaiter(this, void 0, void 0, function* () {
            const options = { env: OSSEnv.PUBLIC };
            options.filename = relativePath.split('/').pop();
            options.size = fileSize;
            if (targetPath)
                options.targetPath = targetPath;
            const request = this.getEncoder();
            request.setBodyField({
                method: 'serverless.file.resource.generateProximalSign',
                params: options,
            });
            const response = yield this.transport.request(request);
            return response.body;
        });
    }
    reportOSSUpload(id, contentType) {
        return __awaiter(this, void 0, void 0, function* () {
            const request = this.transport.getEncoder();
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
            yield this.transport.request(request);
        });
    }
    validate(scheam, value) {
        const v = new FileValidator();
        try {
            v.validate(scheam, value);
        }
        catch (err) {
            throw err;
        }
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFDTCxXQUFXLEVBRVgsTUFBTSxHQUVQLE1BQU0sNkJBQTZCLENBQUM7QUFDckMsT0FBTyxFQUFFLGFBQWEsRUFBRSxnQkFBZ0IsRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLGFBQWEsQ0FBQztBQUNoRixPQUFPLElBQUksTUFBTSxXQUFXLENBQUM7QUFFN0IsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLFNBQVMsQ0FBQztBQWlDbkMsTUFBTSxVQUFVLHVCQUF1QixDQUFDLElBQTJCO0lBQ2pFLE9BQU87UUFDTCxFQUFFLEVBQUUsSUFBSSxDQUFDLEVBQUU7UUFDWCxHQUFHLEVBQUUsSUFBSSxDQUFDLE9BQU87UUFDakIsSUFBSSxFQUFFLElBQUksQ0FBQyxJQUFJO1FBQ2YsTUFBTSxFQUFFLElBQUksQ0FBQyxNQUFNO1FBQ25CLFNBQVMsRUFBRSxJQUFJLENBQUMsU0FBUztRQUN6QixjQUFjLEVBQUUsSUFBSSxDQUFDLFdBQVc7UUFDaEMsYUFBYSxFQUFFLElBQUksQ0FBQyxhQUFhO1FBQ2pDLFNBQVMsRUFBRSxJQUFJLENBQUMsU0FBUztLQUMxQixDQUFDO0FBQ0osQ0FBQztBQUVELE1BQU0sQ0FBQyxNQUFNLG1CQUFtQixHQUFHO0lBQ2pDLFNBQVM7SUFDVCxlQUFlO0lBQ2YsY0FBYztJQUNkLGtCQUFrQjtJQUNsQixxQkFBcUI7Q0FDdEIsQ0FBQztBQUVGLE1BQU0sQ0FBQyxNQUFNLG9CQUFvQixHQUFHO0lBRWxDLEtBQUs7SUFDTCxNQUFNO0lBQ04sS0FBSztJQUNMLEtBQUs7SUFDTCxNQUFNO0lBQ04sS0FBSztJQUNMLE9BQU87Q0FDUixDQUFDO0FBRUYsSUFBSyxNQUdKO0FBSEQsV0FBSyxNQUFNO0lBQ1QsMkJBQWlCLENBQUE7SUFDakIsNkJBQW1CLENBQUE7QUFDckIsQ0FBQyxFQUhJLE1B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