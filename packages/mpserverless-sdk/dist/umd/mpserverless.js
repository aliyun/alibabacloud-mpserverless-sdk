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
    exports.MPServerless = void 0;
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
                return '2.3.3';
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(MPServerless.prototype, "ua", {
            get: function () {
                return 'pkg_name:@alicloud/mpserverless-sdk;ver:2.3.3;';
            },
            enumerable: false,
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibXBzZXJ2ZXJsZXNzLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL21wc2VydmVybGVzcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0lBQUEsMkNBYTRCO0lBQzVCLG1EQUVnQztJQUNoQyx5Q0FBbUY7SUFDbkYsMkRBQTZCO0lBQzdCLGlDQUFrRDtJQUNsRCxxQ0FFbUI7SUFFbkI7UUFBcUMsa0RBQVc7UUFBaEQ7O1FBb0dBLENBQUM7UUE5RmMsMkNBQVUsR0FBdkIsVUFBd0IsT0FBMEI7Ozs7Ozs0QkFDaEQsYUFBTSxDQUFDLE9BQU8sQ0FBQyxRQUFRLElBQUksT0FBTyxPQUFPLENBQUMsUUFBUSxLQUFLLFFBQVEsRUFBRSwwQkFBMEIsQ0FBQyxDQUFDOzRCQUV2RixZQUFZLEdBQUcsT0FBTyxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUMsV0FBVyxFQUFFLEVBQUUsQ0FBQyxDQUFDOzRCQUN6RCxTQUFTLEdBQUcsWUFBWSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFHLEVBQUUsQ0FBQzs0QkFDaEQsYUFBTSxDQUFDLDJCQUFvQixDQUFDLE9BQU8sQ0FBQyxTQUFTLENBQUMsV0FBVyxFQUFFLENBQUMsSUFBSSxDQUFDLEVBQUUsb0NBQVMsU0FBUyw4QkFBTyxDQUFDLENBQUM7NEJBRXhGLElBQUksR0FBRyxNQUFNLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLElBQUksRUFBRSxDQUFDLENBQUMsTUFBTSxDQUFDLFVBQUMsSUFBSSxFQUFFLEdBQUc7Z0NBQzVELElBQUksQ0FBQyxnQkFBYyxHQUFLLENBQUMsR0FBRyxPQUFPLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDO2dDQUM5QyxPQUFPLElBQUksQ0FBQzs0QkFDZCxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUM7NEJBQ0QsT0FBTyxHQUFHLE9BQU8sQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLDBCQUFtQixDQUFDLE1B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