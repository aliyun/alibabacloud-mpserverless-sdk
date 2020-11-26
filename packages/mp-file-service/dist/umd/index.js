(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "tslib", "@alicloud/mpserverless-core", "./validator", "mime/lite", "./error"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.MPFileService = exports.WHITELIST_EXTENSIONS = exports.OSSUploadHeaderList = exports.OSSUploadResponseFormat = void 0;
    const tslib_1 = require("tslib");
    const mpserverless_core_1 = require("@alicloud/mpserverless-core");
    const validator_1 = require("./validator");
    const lite_1 = tslib_1.__importDefault(require("mime/lite"));
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
    exports.WHITELIST_EXTENSIONS = [
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
    class MPFileService extends mpserverless_core_1.BaseService {
        constructor(transport, options) {
            super(transport);
            mpserverless_core_1.assert(options, '[MPFileService]初始化时缺少参数');
            mpserverless_core_1.assert(options.uploadFile, '[MPFileService]初始化时缺少 uploadFile 参数');
            this.upload = options.uploadFile;
        }
        deleteFile(url) {
            return tslib_1.__awaiter(this, void 0, void 0, function* () {
                this.validate(validator_1.deleteFileSchema, { url });
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
            return tslib_1.__awaiter(this, void 0, void 0, function* () {
                this.validate(validator_1.uploadFileSchema, { options });
                const relativePath = options.filePath.replace(/(.*):\/\//, '');
                const extension = relativePath.split('.').pop();
                mpserverless_core_1.assert(exports.WHITELIST_EXTENSIONS.indexOf(extension.toLowerCase()) >= 0, `[MPFileService]目前不支持 ${extension} 类型文件`);
                const meta = Object.keys(options.meta || {}).reduce((accu, key) => {
                    accu[`x-oss-meta-${key}`] = options.meta[key];
                    return accu;
                }, {});
                const headers = options.headers ? exports.OSSUploadHeaderList.reduce((accu, key) => {
                    const fieldName = key.replace(/\-[A-Z]/g, match => match[1]).replace(/^[A-Z]/, match => match.toLowerCase());
                    if (options.headers.hasOwnProperty(fieldName))
                        accu[key] = options.headers[fieldName];
                    return accu;
                }, {}) : {};
                const uploadRes = yield this.getOSSUploadOptionsFromPath(relativePath, options.path, options.fileSize);
                if (uploadRes.error) {
                    throw new error_1.bizError.InterfaceError();
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
                    const contentType = lite_1.default.getType(options.extension);
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
                yield this.reportOSSUpload(uploadOptions.id, lite_1.default.getType(options.extension));
                return {
                    fileUrl: `https://${uploadOptions.cdnDomain}/${uploadOptions.key}`,
                    filePath: uploadOptions.key,
                };
            });
        }
        getOSSUploadOptionsFromPath(relativePath, targetPath, fileSize) {
            return tslib_1.__awaiter(this, void 0, void 0, function* () {
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
            return tslib_1.__awaiter(this, void 0, void 0, function* () {
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
            const v = new validator_1.FileValidator();
            try {
                v.validate(scheam, value);
            }
            catch (err) {
                throw err;
            }
        }
    }
    exports.MPFileService = MPFileService;
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztJQUFBLG1FQUtxQztJQUNyQywyQ0FBZ0Y7SUFDaEYsNkRBQTZCO0lBRTdCLG1DQUFtQztJQWlDbkMsU0FBZ0IsdUJBQXVCLENBQUMsSUFBMkI7UUFDakUsT0FBTztZQUNMLEVBQUUsRUFBRSxJQUFJLENBQUMsRUFBRTtZQUNYLEdBQUcsRUFBRSxJQUFJLENBQUMsT0FBTztZQUNqQixJQUFJLEVBQUUsSUFBSSxDQUFDLElBQUk7WUFDZixNQUFNLEVBQUUsSUFBSSxDQUFDLE1BQU07WUFDbkIsU0FBUyxFQUFFLElBQUksQ0FBQyxTQUFTO1lBQ3pCLGNBQWMsRUFBRSxJQUFJLENBQUMsV0FBVztZQUNoQyxhQUFhLEVBQUUsSUFBSSxDQUFDLGFBQWE7WUFDakMsU0FBUyxFQUFFLElBQUksQ0FBQyxTQUFTO1NBQzFCLENBQUM7SUFDSixDQUFDO0lBWEQsMERBV0M7SUFFWSxRQUFBLG1CQUFtQixHQUFHO1FBQ2pDLFNBQVM7UUFDVCxlQUFlO1FBQ2YsY0FBYztRQUNkLGtCQUFrQjtRQUNsQixxQkFBcUI7S0FDdEIsQ0FBQztJQUVXLFFBQUEsb0JBQW9CLEdBQUc7UUFFbEMsS0FBSztRQUNMLE1BQU07UUFDTixLQUFLO1FBQ0wsS0FBSztRQUNMLE1BQU07UUFDTixLQUFLO1FBQ0wsT0FBTztLQUNSLENBQUM7SUFFRixJQUFLLE1BR0o7SUFIRCxXQUFLLE1BQU07UUFDVCwyQkFBaUIsQ0FBQTtRQUNqQiw2QkFBbUIsQ0FBQTtJQUNyQixDQUFDLEVBSEksTUFBTSxLQUFOLE1BQU0sUUFHVjtJQW9CRCxNQUFhLGFBQWMsU0FBUSwrQkFBVztRQUU1QyxZQUFZLFNBQXdCLEVBQUUsT0FBWTtZQUNoRCxLQUFLLENBQUMsU0FBUyxDQUFDLENBQUM7WUFFakIsMEJBQU0sQ0FBQyxPQUFPLEVBQUUseUJBQXlCLENB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