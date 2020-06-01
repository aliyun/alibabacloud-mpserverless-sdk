import { __assign, __awaiter, __extends, __generator } from "tslib";
import { Basement as Base, WHITELIST_EXTENSIONS, assert, OSSUploadHeaderList, ErrorType, ErrorName, ErrorCode, OSSUploadResponseFormat, } from '@ant-basement/core';
import { DbService, FileService, AuthService, FunctionService, } from '@ant-basement/services';
import { MiniProgramHTTPTransport, AuthType } from './transport';
import mime from 'mime/lite';
import { MPServerlessClientError } from './error';
import { NetworkService, } from './network';
var MiniProgramFileService = (function (_super) {
    __extends(MiniProgramFileService, _super);
    function MiniProgramFileService() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    MiniProgramFileService.prototype.uploadFile = function (options) {
        return __awaiter(this, void 0, void 0, function () {
            var relativePath, extension, meta, headers, fileSize, getFileInfo, fileInfo, imageExt, getImageInfo, imageInfo, uploadRes, uploadOptions;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        assert(options.filePath && typeof options.filePath === 'string', 'missing options.filePath');
                        relativePath = options.filePath.replace(/(.*):\/\//, '');
                        extension = relativePath.split('.').pop();
                        assert(WHITELIST_EXTENSIONS.indexOf(extension.toLowerCase()) >= 0, "\u76EE\u524D\u4E0D\u652F\u6301 " + extension + " \u7C7B\u578B\u6587\u4EF6");
                        meta = Object.keys(options.meta || {}).reduce(function (accu, key) {
                            accu["x-oss-meta-" + key] = options.meta[key];
                            return accu;
                        }, {});
                        headers = options.headers ? OSSUploadHeaderList.reduce(function (accu, key) {
                            var fieldName = key.replace(/\-[A-Z]/g, function (match) { return match[1]; }).replace(/^[A-Z]/, function (match) { return match.toLowerCase(); });
                            if (options.headers.hasOwnProperty(fieldName))
                                accu[key] = options.headers[fieldName];
                            return accu;
                        }, {}) : {};
                        fileSize = options.fileSize;
                        getFileInfo = this.transport.getFileInfo;
                        if (!(!fileSize && getFileInfo)) return [3, 2];
                        return [4, getFileInfo({
                                apFilePath: options.filePath,
                            })];
                    case 1:
                        fileInfo = _a.sent();
                        fileSize = fileInfo.body.size;
                        _a.label = 2;
                    case 2:
                        imageExt = options.extension;
                        getImageInfo = this.transport.getImageInfo;
                        if (!(!imageExt && getImageInfo)) return [3, 4];
                        return [4, getImageInfo({
                                src: options.filePath,
                            })];
                    case 3:
                        imageInfo = _a.sent();
                        imageExt = imageInfo.body.type;
                        _a.label = 4;
                    case 4: return [4, this.getOSSUploadOptionsFromPath(relativePath, options.path, fileSize)];
                    case 5:
                        uploadRes = _a.sent();
                        if (uploadRes.error) {
                            throw new MPServerlessClientError(ErrorName.INTERFACE_ERROR, ErrorCode.INTERFACE_RESPONSE_FAILED, ErrorType.COMMON_ERROR, uploadRes.error.message);
                        }
                        uploadOptions = OSSUploadResponseFormat(uploadRes.result);
                        return [4, this.uploadFileToOSS(options, uploadOptions, headers, meta)];
                    case 6:
                        _a.sent();
                        return [4, this.reportOSSUpload(uploadOptions.id, mime.getType(imageExt))];
                    case 7:
                        _a.sent();
                        return [2, {
                                fileUrl: "https://" + uploadOptions.cdnDomain + "/" + uploadOptions.key,
                                filePath: uploadOptions.key,
                            }];
                }
            });
        });
    };
    MiniProgramFileService.prototype.uploadFileToOSS = function (fileUploadOptions, ossUploadOptions, headers, meta) {
        return __awaiter(this, void 0, void 0, function () {
            var options, uploadHeader, contentType;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        options = ['key', 'policy', 'Signature', 'OSSAccessKeyId'].reduce(function (accu, key) {
                            accu[key] = ossUploadOptions[key];
                            return accu;
                        }, {});
                        uploadHeader = {};
                        if (fileUploadOptions.extension) {
                            contentType = mime.getType(fileUploadOptions.extension);
                            if (!contentType) {
                                throw new MPServerlessClientError(ErrorName.VALIDATION_ERROR, ErrorCode.VALIDATION_FAILED, ErrorType.COMMON_ERROR, '文件扩展错误，无法解析正确的 MIME');
                            }
                            uploadHeader['Content-Type'] = contentType;
                        }
                        headers['Cache-Control'] = 'max-age=2592000';
                        if (ossUploadOptions.securityToken) {
                            headers['x-oss-security-token'] = ossUploadOptions.securityToken;
                        }
                        return [4, this.transport.upload("https://" + ossUploadOptions.host, Object.assign({ success_action_status: 200 }, headers, meta, options), 'file', fileUploadOptions.filePath, uploadHeader)];
                    case 1:
                        _a.sent();
                        return [2];
                }
            });
        });
    };
    return MiniProgramFileService;
}(FileService));
var MPServerless = (function (_super) {
    __extends(MPServerless, _super);
    function MPServerless(appGlobal, options) {
        var _this = _super.call(this, __assign(__assign({}, options), { httpClient: appGlobal, httpTransport: MiniProgramHTTPTransport, logger: appGlobal.logger })) || this;
        assert(options.clientSecret, 'clientSecret is required');
        assert(options.appId, 'appId is required');
        _this.db = new DbService(_this.transport);
        _this.user = new AuthService(_this.transport);
        _this.file = new MiniProgramFileService(_this.transport);
        _this.function = new FunctionService(_this.transport);
        _this.network = new NetworkService(_this.transport);
        _this.user.authorize = function (options) { return __awaiter(_this, void 0, void 0, function () {
            var hasToken, token, token;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        hasToken = this.transport.hasToken();
                        if (!(options.authType === AuthType.ANONYMOUS)) return [3, 2];
                        return [4, this.transport.anonymousAuthorize(options)];
                    case 1:
                        token = _a.sent();
                        if (token) {
                            return [2, {
                                    success: true,
                                }];
                        }
                        return [2, {
                                success: false,
                            }];
                    case 2:
                        if (!(!hasToken || hasToken && this.transport.authType !== options.authType)) return [3, 4];
                        return [4, this.transport.authorize(options)];
                    case 3:
                        token = _a.sent();
                        if (token) {
                            return [2, {
                                    success: true,
                                }];
                        }
                        return [2, {
                                success: false,
                            }];
                    case 4: return [2];
                }
            });
        }); };
        return _this;
    }
    Object.defineProperty(MPServerless.prototype, "version", {
        get: function () {
            return '2.2.5';
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MPServerless.prototype, "ua", {
        get: function () {
            return 'pkg_name:@alicloud/mpserverless-sdk;ver:2.2.5;';
        },
        enumerable: true,
        configurable: true
    });
    MPServerless.prototype.createTransport = function (options) {
        _super.prototype.createTransport.call(this, options);
        this.transport.setAppSecret(options.clientSecret).setUA(this.ua);
    };
    return MPServerless;
}(Base));
export { MPServerless };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibXBzZXJ2ZXJsZXNzLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL21wc2VydmVybGVzcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUNMLFFBQVEsSUFBSSxJQUFJLEVBQ2hCLG9CQUFvQixFQUVwQixNQUFNLEVBSU4sbUJBQW1CLEVBQ25CLFNBQVMsRUFDVCxTQUFTLEVBQ1QsU0FBUyxFQUNULHVCQUF1QixHQUN4QixNQUFNLG9CQUFvQixDQUFDO0FBQzVCLE9BQU8sRUFDTCxTQUFTLEVBQUUsV0FBVyxFQUFFLFdBQVcsRUFBRSxlQUFlLEdBQ3JELE1BQU0sd0JBQXdCLENBQUM7QUFDaEMsT0FBTyxFQUFFLHdCQUF3QixFQUFvQixRQUFRLEVBQUUsTUFBTSxhQUFhLENBQUM7QUFDbkYsT0FBTyxJQUFJLE1BQU0sV0FBVyxDQUFDO0FBQzdCLE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxNQUFNLFNBQVMsQ0FBQztBQUNsRCxPQUFPLEVBQ0wsY0FBYyxHQUNmLE1BQU0sV0FBVyxDQUFDO0FBRW5CO0lBQXFDLDBDQUFXO0lBQWhEOztJQW9HQSxDQUFDO0lBOUZjLDJDQUFVLEdBQXZCLFVBQXdCLE9BQTBCOzs7Ozs7d0JBQ2hELE1BQU0sQ0FBQyxPQUFPLENBQUMsUUFBUSxJQUFJLE9BQU8sT0FBTyxDQUFDLFFBQVEsS0FBSyxRQUFRLEVBQUUsMEJBQTBCLENBQUMsQ0FBQzt3QkFFdkYsWUFBWSxHQUFHLE9BQU8sQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDLFdBQVcsRUFBRSxFQUFFLENBQUMsQ0FBQzt3QkFDekQsU0FBUyxHQUFHLFlBQVksQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBRyxFQUFFLENBQUM7d0JBQ2hELE1BQU0sQ0FBQyxvQkFBb0IsQ0FBQyxPQUFPLENBQUMsU0FBUyxDQUFDLFdBQVcsRUFBRSxDQUFDLElBQUksQ0FBQyxFQUFFLG9DQUFTLFNBQVMsOEJBQU8sQ0FBQyxDQUFDO3dC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