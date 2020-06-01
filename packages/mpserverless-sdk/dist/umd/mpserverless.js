(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "tslib", "@ant-basement/core", "@ant-basement/services", "./transport", "mime/lite", "./error", "./network"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var tslib_1 = require("tslib");
    var core_1 = require("@ant-basement/core");
    var services_1 = require("@ant-basement/services");
    var transport_1 = require("./transport");
    var lite_1 = tslib_1.__importDefault(require("mime/lite"));
    var error_1 = require("./error");
    var network_1 = require("./network");
    var MiniProgramFileService = (function (_super) {
        tslib_1.__extends(MiniProgramFileService, _super);
        function MiniProgramFileService() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        MiniProgramFileService.prototype.uploadFile = function (options) {
            return tslib_1.__awaiter(this, void 0, void 0, function () {
                var relativePath, extension, meta, headers, fileSize, getFileInfo, fileInfo, imageExt, getImageInfo, imageInfo, uploadRes, uploadOptions;
                return tslib_1.__generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            core_1.assert(options.filePath && typeof options.filePath === 'string', 'missing options.filePath');
                            relativePath = options.filePath.replace(/(.*):\/\//, '');
                            extension = relativePath.split('.').pop();
                            core_1.assert(core_1.WHITELIST_EXTENSIONS.indexOf(extension.toLowerCase()) >= 0, "\u76EE\u524D\u4E0D\u652F\u6301 " + extension + " \u7C7B\u578B\u6587\u4EF6");
                            meta = Object.keys(options.meta || {}).reduce(function (accu, key) {
                                accu["x-oss-meta-" + key] = options.meta[key];
                                return accu;
                            }, {});
                            headers = options.headers ? core_1.OSSUploadHeaderList.reduce(function (accu, key) {
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
                                throw new error_1.MPServerlessClientError(core_1.ErrorName.INTERFACE_ERROR, core_1.ErrorCode.INTERFACE_RESPONSE_FAILED, core_1.ErrorType.COMMON_ERROR, uploadRes.error.message);
                            }
                            uploadOptions = core_1.OSSUploadResponseFormat(uploadRes.result);
                            return [4, this.uploadFileToOSS(options, uploadOptions, headers, meta)];
                        case 6:
                            _a.sent();
                            return [4, this.reportOSSUpload(uploadOptions.id, lite_1.default.getType(imageExt))];
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
            return tslib_1.__awaiter(this, void 0, void 0, function () {
                var options, uploadHeader, contentType;
                return tslib_1.__generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            options = ['key', 'policy', 'Signature', 'OSSAccessKeyId'].reduce(function (accu, key) {
                                accu[key] = ossUploadOptions[key];
                                return accu;
                            }, {});
                            uploadHeader = {};
                            if (fileUploadOptions.extension) {
                                contentType = lite_1.default.getType(fileUploadOptions.extension);
                                if (!contentType) {
                                    throw new error_1.MPServerlessClientError(core_1.ErrorName.VALIDATION_ERROR, core_1.ErrorCode.VALIDATION_FAILED, core_1.ErrorType.COMMON_ERROR, '文件扩展错误，无法解析正确的 MIME');
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
    }(services_1.FileService));
    var MPServerless = (function (_super) {
        tslib_1.__extends(MPServerless, _super);
        function MPServerless(appGlobal, options) {
            var _this = _super.call(this, tslib_1.__assign(tslib_1.__assign({}, options), { httpClient: appGlobal, httpTransport: transport_1.MiniProgramHTTPTransport, logger: appGlobal.logger })) || this;
            core_1.assert(options.clientSecret, 'clientSecret is required');
            core_1.assert(options.appId, 'appId is required');
            _this.db = new services_1.DbService(_this.transport);
            _this.user = new services_1.AuthService(_this.transport);
            _this.file = new MiniProgramFileService(_this.transport);
            _this.function = new services_1.FunctionService(_this.transport);
            _this.network = new network_1.NetworkService(_this.transport);
            _this.user.authorize = function (options) { return tslib_1.__awaiter(_this, void 0, void 0, function () {
                var hasToken, token, token;
                return tslib_1.__generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            hasToken = this.transport.hasToken();
                            if (!(options.authType === transport_1.AuthType.ANONYMOUS)) return [3, 2];
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
    }(core_1.Basement));
    exports.MPServerless = MPServerless;
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibXBzZXJ2ZXJsZXNzLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL21wc2VydmVybGVzcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7SUFBQSwyQ0FhNEI7SUFDNUIsbURBRWdDO0lBQ2hDLHlDQUFtRjtJQUNuRiwyREFBNkI7SUFDN0IsaUNBQWtEO0lBQ2xELHFDQUVtQjtJQUVuQjtRQUFxQyxrREFBVztRQUFoRDs7UUFvR0EsQ0FBQztRQTlGYywyQ0FBVSxHQUF2QixVQUF3QixPQUEwQjs7Ozs7OzRCQUNoRCxhQUFNLENBQUMsT0FBTyxDQUFDLFFBQVEsSUFBSSxPQUFPLE9BQU8sQ0FBQyxRQUFRLEtBQUssUUFBUSxFQUFFLDBCQUEwQixDQUFDLENBQUM7NEJBRXZGLFlBQVksR0FBRyxPQUFPLENBQUMsUUFBUSxDQUFDLE9BQU8sQ0FBQyxXQUFXLEVBQUUsRUFBRSxDQUFDLENBQUM7NEJBQ3pELFNBQVMsR0FBRyxZQUFZLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsRUFBRSxDQUFDOzRCQUNoRCxhQUFNLENBQUMsMkJBQW9CLENBQUMsT0FBTyxDQUFDLFNBQVMsQ0FBQyxXQUFXLEVBQUUsQ0FBQyxJQUFJLENBQUMsRUFBRSxvQ0FBUyxTQUFTLDhCQUFPLENBQUMsQ0FBQzs0QkFFeEYsSUFBSSxHQUFHLE1BQU0sQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksSUFBSSxFQUFFLENBQUMsQ0FBQyxNQUFNLENBQUMsVUFBQyxJQUFJLEVBQUUsR0FBRztnQ0FDNUQsSUFBSSxDQUFDLGdCQUFjLEdBQUssQ0FBQyxHQUFHLE9BQU8sQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7Z0NBQzlDLE9BQU8sSUFBSSxDQUFDOzRCQUNkLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQzs0QkFDRCxPQUFPLEdBQUcsT0FBTyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsMEJBQW1CLENBQUMsTUFB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