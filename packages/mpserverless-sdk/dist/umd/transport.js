(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "tslib", "@ant-basement/core", "./codec", "./error"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.MiniProgramHTTPTransport = exports.AuthType = void 0;
    var tslib_1 = require("tslib");
    var core_1 = require("@ant-basement/core");
    var codec_1 = require("./codec");
    var error_1 = require("./error");
    var AuthType;
    (function (AuthType) {
        AuthType["ANONYMOUS"] = "anonymous";
        AuthType["DEFAULT"] = "";
    })(AuthType = exports.AuthType || (exports.AuthType = {}));
    var MiniProgramHTTPTransport = (function (_super) {
        tslib_1.__extends(MiniProgramHTTPTransport, _super);
        function MiniProgramHTTPTransport(endpoint, library) {
            var _this = _super.call(this, endpoint, library) || this;
            _this.scope = 'auth_base';
            core_1.assert(library.uploadFile, 'missing uploadFile');
            core_1.assert(library.getAuthCode, 'missing getAuthCode');
            core_1.assert(library.request, 'missing request');
            _this.uploadFile = _this.wrap(library.uploadFile);
            _this.getAuthCode = _this.wrap(library.getAuthCode);
            _this.httpRequest = _this.wrap(library.request);
            if (library.getFileInfo) {
                _this.getFileInfo = _this.wrap(library.getFileInfo);
            }
            if (library.getImageInfo) {
                _this.getImageInfo = _this.wrap(library.getImageInfo);
            }
            return _this;
        }
        MiniProgramHTTPTransport.prototype.getEncoder = function () {
            return new codec_1.MiniProgramHTTPRequestEncoder(this.endpoint, this.spaceId);
        };
        MiniProgramHTTPTransport.prototype.request = function (encoder, retried) {
            if (retried === void 0) { retried = false; }
            return tslib_1.__awaiter(this, void 0, void 0, function () {
                var cloned, token, encoded, decoded, e_1, isUnAuthorized;
                return tslib_1.__generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            cloned = encoder.clone();
                            return [4, this.getAccessToken()];
                        case 1:
                            token = _a.sent();
                            encoder.setBodyField({
                                token: token,
                            });
                            encoder.sign(this.appSecret);
                            encoder.setBaseHeaders({
                                'Content-Type': 'application/json',
                                'x-basement-token': token,
                            });
                            if (this.ua) {
                                encoder.setBaseHeaders({
                                    'x-serverless-ua': this.ua,
                                });
                            }
                            _a.label = 2;
                        case 2:
                            _a.trys.push([2, 4, , 8]);
                            encoded = encoder.encodeAsHTTPRequestObject({
                                timeout: this.timeout,
                                dataType: 'json',
                            });
                            this.logger.info('request encode data', encoded);
                            return [4, this.httpRequest(encoded)];
                        case 3:
                            decoded = _a.sent();
                            return [2, decoded];
                        case 4:
                            e_1 = _a.sent();
                            this.logger.error('request error', e_1);
                            isUnAuthorized = e_1.error.code === 'GATEWAY_INVALID_TOKEN'
                                || e_1.error.code === 'InvalidParameter.InvalidToken' || e_1.status === core_1.HTTP_UNAUTHORIZED;
                            if (!isUnAuthorized) return [3, 7];
                            if (retried) {
                                throw new error_1.MPServerlessClientError(core_1.ErrorName.UNAUTHORIZED_ERROR, core_1.ErrorCode.AUTHENTICATION_FAILED, core_1.ErrorType.COMMON_ERROR, 'authentication failed');
                            }
                            return [4, this.getAccessToken(true)];
                        case 5:
                            _a.sent();
                            return [4, this.request(cloned, true)];
                        case 6: return [2, _a.sent()];
                        case 7:
                            if (e_1.error) {
                                throw e_1.error;
                            }
                            throw e_1;
                        case 8: return [2];
                    }
                });
            });
        };
        MiniProgramHTTPTransport.prototype.hasToken = function () {
            return !!this.accessToken;
        };
        Object.defineProperty(MiniProgramHTTPTransport.prototype, "authType", {
            get: function () {
                return this.currentAuthType;
            },
            enumerable: false,
            configurable: true
        });
        MiniProgramHTTPTransport.prototype.authorize = function (options) {
            return tslib_1.__awaiter(this, void 0, void 0, function () {
                var _this = this;
                return tslib_1.__generator(this, function (_a) {
                    this.pendingRequest = this
                        .getAuthCode({ scopes: this.scope })
                        .then(function (res) {
                        _this.logger.info("Request authcode is " + (res.body.authCode || res.body.code) + " ");
                        return res.body.authCode || res.body.code;
                    })
                        .then(function (authCode) {
                        var encoder = _this.getEncoder();
                        encoder.setBodyField({
                            method: 'serverless.auth.user.authorize',
                            params: {
                                authProvider: options.authProvider || 'alipay_openapi',
                                clientIdentifier: _this.appId,
                                authCode: authCode,
                                isvAppId: _this.isvAppId,
                            },
                        });
                        encoder.sign(_this.appSecret);
                        encoder.setBaseHeaders({ 'Content-Type': 'application/json' });
                        if (_this.ua) {
                            encoder.setBaseHeaders({
                                'x-serverless-ua': _this.ua,
                            });
                        }
                        var encoded = encoder.encodeAsHTTPRequestObject({
                            timeout: _this.timeout,
                            dataType: 'json',
                        });
                        return _this.httpRequest(encoded);
                    })
                        .then(function (res) {
                        _this.logger.info('Request accessToken ' + (res.body.success ? 'success' : 'failed'));
                        if (res.body && res.body.result) {
                            _this.authorizeOptions = options;
                            _this.accessToken = res.body.result.accessToken;
                            _this.currentAuthType = AuthType.DEFAULT;
                        }
                        _this.pendingRequest = null;
                        return Promise.resolve(_this.accessToken);
                    });
                    return [2, this.pendingRequest];
                });
            });
        };
        MiniProgramHTTPTransport.prototype.anonymousAuthorize = function (options) {
            return tslib_1.__awaiter(this, void 0, void 0, function () {
                var encoder, encoded;
                var _this = this;
                return tslib_1.__generator(this, function (_a) {
                    encoder = this.getEncoder();
                    encoder.setBodyField({
                        method: 'serverless.auth.user.anonymousAuthorize',
                        params: {
                            clientIdentifier: this.appId,
                            isvAppId: this.isvAppId,
                        },
                    });
                    encoder.sign(this.appSecret);
                    encoder.setBaseHeaders({ 'Content-Type': 'application/json' });
                    if (this.ua) {
                        encoder.setBaseHeaders({
                            'x-serverless-ua': this.ua,
                        });
                    }
                    encoded = encoder.encodeAsHTTPRequestObject({
                        timeout: this.timeout,
                        dataType: 'json',
                    });
                    this.pendingRequest = this.httpRequest(encoded)
                        .then(function (res) {
                        _this.logger.info('Request accessToken ' + (res.body.success ? 'success' : 'failed'));
                        if (res.body && res.body.result) {
                            _this.authorizeOptions = options;
                            _this.accessToken = res.body.result.accessToken;
                            _this.currentAuthType = AuthType.ANONYMOUS;
                        }
                        _this.pendingRequest = null;
                        return Promise.resolve(_this.accessToken);
                    });
                    return [2, this.pendingRequest];
                });
            });
        };
        MiniProgramHTTPTransport.prototype.getAccessToken = function (refresh) {
            if (refresh === void 0) { refresh = false; }
            return tslib_1.__awaiter(this, void 0, void 0, function () {
                return tslib_1.__generator(this, function (_a) {
                    if (this.pendingRequest) {
                        this.logger.info('getAccessToken: reuse');
                        return [2, this.pendingRequest];
                    }
                    if (!this.accessToken) {
                        throw new error_1.MPServerlessClientError(core_1.ErrorName.UNAUTHORIZED_ERROR, core_1.ErrorCode.UNAUTHENTICATION, core_1.ErrorType.COMMON_ERROR, '未进行用户授权，请先调用三方授权或匿名授权');
                    }
                    if (refresh && this.authorizeOptions) {
                        this.logger.info('getAccessToken: start');
                        if (this.authorizeOptions.authType === AuthType.ANONYMOUS) {
                            return [2, this.anonymousAuthorize(this.authorizeOptions)];
                        }
                        return [2, this.authorize(this.authorizeOptions)];
                    }
                    return [2, this.accessToken];
                });
            });
        };
        MiniProgramHTTPTransport.prototype.upload = function (host, formData, fileName, filePath, header) {
            return tslib_1.__awaiter(this, void 0, void 0, function () {
                return tslib_1.__generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            this.logger.info('upload with params');
                            this.logger.info(JSON.stringify(formData, null, 2));
                            return [4, this.uploadFile({
                                    url: host,
                                    formData: formData,
                                    fileName: fileName,
                                    name: fileName,
                                    filePath: filePath,
                                    fileType: 'image',
                                    header: tslib_1.__assign(tslib_1.__assign({}, header), { 'X-OSS-server-side-encrpytion': 'AES256' }),
                                })];
                        case 1: return [2, _a.sent()];
                    }
                });
            });
        };
        MiniProgramHTTPTransport.prototype.wrap = function (myMethod) {
            var _this = this;
            return function (args) {
                return new Promise(function (resolve, reject) {
                    myMethod(Object.assign(args, {
                        complete: function (res) {
                            if (res === void 0) { res = {}; }
                            _this.logger.info('completed request');
                            _this.logger.info(JSON.stringify(res, null, 2));
                            var decoder = new codec_1.MiniProgramHTTPResponseDecoder();
                            var response = decoder.decode(res);
                            if (response.error) {
                                return reject(response);
                            }
                            return resolve(response);
                        },
                    }));
                });
            };
        };
        return MiniProgramHTTPTransport;
    }(core_1.HTTPTransport));
    exports.MiniProgramHTTPTransport = MiniProgramHTTPTransport;
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHJhbnNwb3J0LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL3RyYW5zcG9ydC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0lBQUEsMkNBWTRCO0lBQzVCLGlDQU9pQjtJQUNqQixpQ0FBa0Q7SUFjbEQsSUFBWSxRQUdYO0lBSEQsV0FBWSxRQUFRO1FBQ2xCLG1DQUF1QixDQUFBO1FBQ3ZCLHdCQUFZLENBQUE7SUFDZCxDQUFDLEVBSFcsUUFBUSxHQUFSLGdCQUFRLEtBQVIsZ0JBQVEsUUFHbkI7SUFFRDtRQUE4QyxvREFBYTtRQVl6RCxrQ0FDRSxRQUFnQixFQUNoQixPQUFZO1lBRmQsWUFJRSxrQkFBTSxRQUFRLEVBQUUsT0FBTyxDQUFDLFNBY3pCO1lBM0JTLFdBQUssR0FBZSxXQUFXLENBQUM7WUFjeEMsYUFBTSxDQUFDLE9BQU8sQ0FBQyxVQUFVLEVBQUUsb0JBQW9CLENBQUMsQ0FBQztZQUNqRCxhQUFNLENBQUMsT0FBTyxDQUFDLFdBQVcsRUFBRSxxQkFBcUIsQ0FBQyxDQUFDO1lBQ25ELGFBQU0sQ0FBQyxPQUFPLENBQUMsT0FBTyxFQUFFLGlCQUFpQixDQUFDLENBQUM7WUFFM0MsS0FBSSxDQUFDLFVBQVUsR0FBRyxLQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxVQUFVLENBQUMsQ0FBQztZQUNoRCxLQUFJLENBQUMsV0FBVyxHQUFHLEtBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLFdBQVcsQ0FBQyxDQUFDO1lBQ2xELEtBQUksQ0FBQyxXQUFXLEdBQUcsS0FBSSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLENBQUM7WUFDOUMsSUFBSSxPQUFPLENBQUMsV0FBVyxFQUFFO2dCQUN2QixLQUFJLENBQUMsV0FBVyxHQUFHLEtBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLFdBQVcsQ0FBQyxDQUFDO2FBQ25EO1lBQ0QsSUFBSSxPQUFPLENBQUMsWUFBWSxFQUFFO2dCQUN4QixLQUFJLENBQUMsWUFBWSxHQUFHLEtBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLFlBQVksQ0FBQyxDQUFDO2FBQ3JEOztRQUNILENBQUM7UUFNTSw2Q0FBVSxHQUFqQjtZQUNFLE9BQU8sSUFBSSxxQ0FBNkIsQ0FBQyxJQUFJLENBQUMsUUFBUSxFQUFFLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUN4RSxDQUFDO1FBT1ksMENBQU8sR0FBcEIsVUFDRSxPQUFzQyxFQUN0QyxPQUF3QjtZQUF4Qix3QkFBQSxFQUFBLGVBQXdCOzs7Ozs7NEJBRWxCLE1BQU0sR0FBRyxPQUFPLENBQUMsS0FBSyxFQUFFLENBQUM7NEJBRWpCLFdBQU0sSUFBSSxDQUFDLGNBQWMsRUFBRSxFQUFBOzs0QkFBbkMsS0FBSyxHQUFHLFNBQTJCOzRCQUN6QyxPQUFPLENBQUMsWUFBWSxDQUFDO2dDQUNuQixLQUFLLE9BQUE7NkJBQ04sQ0FBQyxDQUFDOzRCQUNILE9BQU8sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDOzRCQUM3QixPQUFPLENBQUMsY0FBYyxDQUFDO2dDQUNyQixjQUFjLEVBQUUsa0JBQWtCO2dDQUNsQyxrQkFBa0IsRUFBRSxLQUFLOzZCQUMxQixDQUFDLENBQUM7NEJBQ0gsSUFBSSxJQUFJLENBQUMsRUFBRSxFQUFFO2dDQUNYLE9BQU8sQ0FBQyxjQUFjLENBQUM7b0NBQ3JCLGlCQUFpQixFQUFFLElBQUksQ0FBQyxFQUFFO2lDQUMzQixDQUFDLENBQUM7NkJBQ0o7Ozs7NEJBR08sT0FBTyxHQUFHLE9BQU8sQ0FBQyx5QkFBeUIsQ0FBQztnQ0FDaEQsT0FBTyxFQUFFLElBQUksQ0FBQyxPQUFPO2dDQUNyQixRQUFRLEVBQUUsTUFBTTs2QkFDakIsQ0FBQyxDQUFDOzRCQUNILElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLHFCQUFxQixFQUFFLE9BQU8sQ0FBQyxDQUFDOzRCQUNqQyxXQUFNLElBQUksQ0FBQyxXQUFXLENBQUMsT0FBTyxDQUFDLEVBQUE7OzRCQUF6QyxPQUFPLEdBQUcsU0FBK0I7NEJBQy9DLFdBQU8sT0FBTyxFQUFDOzs7NEJBRWYsSUFBSSxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsZUFBZSxFQUFFLEdBQUMsQ0FBQyxDQUFDOzRCQUNoQyxjQUFjLEdBQUcsR0FBQyxDQUFDLEtBQUssQ0FBQyxJQUFJLEtBQUssdUJBQXVCO21DQUM1RCxHQUFDLENBQUMsS0FBSyxDQUFDLElBQUksS0FBSywrQkFBK0IsSUFBSSxHQUFDLENBQUMsTUFBTSxLQUFLLHdCQUFpQixDQUFDO2lDQUVsRixjQUFjLEVBQWQsY0FBYzs0QkFDaEIsSUFBSSxPQUFPLEVBQUU7Z0NBQ1gsTUFBTSxJQUFJLCtCQUF1QixDQUMvQixnQkFBUyxDQUFDLGtCQUFrQixFQUM1QixnQkFBUyxDQUFDLHFCQUFxQixFQUMvQixnQkFBUyxDQUFDLFlBQVksRUFDdEIsdUJBQXVCLENBQ3hCLENBQUM7NkJBQ0g7NEJBRUQsV0FBTSxJQUFJLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxFQUFBOzs0QkFBL0IsU0FBK0IsQ0FBQzs0QkFDekIsV0FBTSxJQUFJLENBQUMsT0FBTyxDQUFDLE1BQU0sRUFBRSxJQUFJLENBQUMsRUFBQTtnQ0FBdkMsV0FBTyxTQUFnQyxFQUFDOzs0QkFFMUMsSUFBSSxHQUFDLENBQUMsS0FBSyxFQUFFO2dDQUNYLE1BQU0sR0FBQyxDQUFDLEtBQUssQ0FBQzs2QkFDZjs0QkFDRCxNQUFNLEdBQUMsQ0FBQzs7Ozs7U0FFWDtRQUtNLDJDQUFRLEdBQWY7WUFDRSxPQUFPLENBQUMsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDO1FBQzVCLENBQUM7UUFLRCxzQkFBVyw4Q0FBUTtpQkFBbkI7Z0JBQ0UsT0FBTyxJQUFJLENBQUMsZUFBZSxDQUFDO1lBQzlCLENBQUM7OztXQUFBO1FBT1ksNENBQVMsR0FBdEIsVUFBdUIsT0FBeUI7Ozs7b0JBQzlDLElBQUksQ0FBQyxjQUFjLEdBQUcsSUFBSTt5QkFDdkIsV0FBVyxDQUFDLEVBQUUsTUFBTSxFQUFFLElBQUksQ0FBQyxLQUFLLEVBQTRCLENBQUM7eUJBQzdELElBQUksQ0FBQyxVQUFDLEdBQXVCO3dCQUM1QixLQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQywwQkFBdUIsR0FBRyxDQUFDLElBQUksQ0FBQyxRQUFRLElBQUksR0FBRyxDQUFDLElBQUksQ0FBQyxJQUFJLE9BQUcsQ0FBQyxDQUFDO3dCQUMvRSxPQUFPLEdBQUcsQ0FBQyxJQUFJLENBQUMsUUFBUSxJQUFJLEdBQUcsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDO29CQUM1QyxDQUFDLENBQUM7eUJBQ0QsSUFBSSxDQUFDLFVBQUMsUUFBZ0I7d0JBQ3JCLElBQU0sT0FBTyxHQUFHLEtBQUksQ0FBQyxVQUFVLEVBQUUsQ0FBQzt3QkFDbEMsT0FBTyxDQUFDLFlBQVksQ0FBQzs0QkFDbkIsTUFBTSxFQUFFLGdDQUFnQzs0QkFDeEMsTUFBTSxFQUFFO2dDQUNOLFlBQVksRUFBRSxPQUFPLENBQUMsWUFBWSxJQUFJLGdCQUFnQjtnQ0FDdEQsZ0JBQWdCLEVBQUUsS0FBSSxDQUFDLEtBQUs7Z0NBQzVCLFFBQVEsVUFBQTtnQ0FDUixRQUFRLEVBQUUsS0FBSSxDQUFDLFFBQVE7NkJBQ3hCO3lCQUNGLENBQUMsQ0FBQzt3QkFDSCxPQUFPLENBQUMsSUFBSSxDQUFDLEtBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQzt3QkFDN0IsT0FBTyxDQUFDLGNBQWMsQ0FBQyxFQUFFLGNBQWMsRUFBRSxrQkFBa0IsRUFBRSxDQUFDLENBQUM7d0JBQy9ELElBQUksS0FBSSxDQUFDLEVBQUUsRUFBRTs0QkFDWCxPQUFPLENBQUMsY0FBYyxDQUFDO2dDQUNyQixpQkFBaUIsRUFBRSxLQUFJLENBQUMsRUFBRTs2QkFDM0IsQ0FBQyxDQUFDO3lCQUNKO3dCQUVELElBQU0sT0FBTyxHQUFHLE9BQU8sQ0FBQyx5QkFBeUIsQ0FBQzs0QkFDaEQsT0FBTyxFQUFFLEtBQUksQ0FBQyxPQUFPOzRCQUNyQixRQUFRLEVBQUUsTUFBTTt5QkFDakIsQ0FBQyxDQUFDO3dCQUNILE9BQU8sS0FBSSxDQUFDLFdBQVcsQ0FBQyxPQUFPLENBQUMsQ0FBQztvQkFDbkMsQ0FBQyxDQUFDO3lCQUNELElBQUksQ0FBQyxVQUFDLEdBQXVCO3dCQUM1QixLQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxzQkFBc0IsR0FBRyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUM7d0JBQ3JGLElBQUksR0FBRyxDQUFDLElBQUksSUFBSSxHQUFHLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRTs0QkFDL0IsS0FBSSxDQUFDLGdCQUFnQixHQUFHLE9BQU8sQ0FBQzs0QkFDaEMsS0FBSSxDQUFDLFdBQVcsR0FBRyxHQUFHLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxXQUFXLENBQUM7NEJBQy9DLEtBQUksQ0FBQyxlQUFlLEdBQUcsUUFBUSxDQUFDLE9BQU8sQ0FBQzt5QkFDekM7d0JBQ0QsS0FBSSxDQUFDLGNBQWMsR0FBRyxJQUFJLENBQUM7d0JBQzNCLE9BQU8sT0FBTyxDQUFDLE9BQU8sQ0FBQyxLQUFJLENBQUMsV0FBVyxDQUFDLENBQUM7b0JBQzNDLENBQUMsQ0FBQyxDQUFDO29CQUVMLFdBQU8sSUFBSSxDQUFDLGNBQWMsRUFBQzs7O1NBQzVCO1FBTVkscURBQWtCLEdBQS9CLFVBQWdDLE9BQXlCOzs7OztvQkFDakQsT0FBTyxHQUFHLElBQUksQ0FBQyxVQUFVLEVBQUUsQ0FBQztvQkFDbEMsT0FBTyxDQUFDLFlBQVksQ0FBQzt3QkFDbkIsTUFBTSxFQUFFLHlDQUF5Qzt3QkFDakQsTUFBTSxFQUFFOzRCQUNOLGdCQUFnQixFQUFFLElBQUksQ0FBQyxLQUFLOzRCQUM1QixRQUFRLEVBQUUsSUFBSSxDQUFDLFFBQVE7eUJBQ3hCO3FCQUNGLENBQUMsQ0FBQztvQkFDSCxPQUFPLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQztvQkFDN0IsT0FBTyxDQUFDLGNBQWMsQ0FBQyxFQUFFLGNBQWMsRUFBRSxrQkFBa0IsRUFBRSxDQUFDLENBQUM7b0JBQy9ELElBQUksSUFBSSxDQUFDLEVBQUUsRUFBRTt3QkFDWCxPQUFPLENBQUMsY0FBYyxDQUFDOzRCQUNyQixpQkFBaUIsRUFBRSxJQUFJLENBQUMsRUFBRTt5QkFDM0IsQ0FBQyxDQUFDO3FCQUNKO29CQUVLLE9BQU8sR0FBRyxPQUFPLENBQUMseUJBQXlCLENBQUM7d0JBQ2hELE9BQU8sRUFBRSxJQUFJLENBQUMsT0FBTzt3QkFDckIsUUFBUSxFQUFFLE1BQU07cUJBQ2pCLENBQUMsQ0FBQztvQkFFSCxJQUFJLENBQUMsY0FBYyxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUMsT0FBTyxDQUFDO3lCQUM1QyxJQUFJLENBQUMsVUFBQyxHQUF1Qjt3QkFDNUIsS0FBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsc0JBQXNCLEdBQUcsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDO3dCQUNyRixJQUFJLEdBQUcsQ0FBQyxJQUFJLElBQUksR0FBRyxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUU7NEJBQy9CLEtBQUksQ0FBQyxnQkFBZ0IsR0FBRyxPQUFPLENBQUM7NEJBQ2hDLEtBQUksQ0FBQyxXQUFXLEdBQUcsR0FBRyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsV0FBVyxDQUFDOzRCQUMvQyxLQUFJLENBQUMsZUFBZSxHQUFHLFFBQVEsQ0FBQyxTQUFTLENBQUM7eUJBQzNDO3dCQUNELEtBQUksQ0FBQyxjQUFjLEdBQUcsSUFBSSxDQUFDO3dCQUMzQixPQUFPLE9BQU8sQ0FBQyxPQUFPLENBQUMsS0FBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDO29CQUMzQyxDQUFDLENBQUMsQ0FBQztvQkFFTCxXQUFPLElBQUksQ0FBQyxjQUFjLEVBQUM7OztTQUM1QjtRQU9ZLGlEQUFjLEdBQTNCLFVBQTRCLE9BQXdCO1lBQXhCLHdCQUFBLEVBQUEsZUFBd0I7OztvQkFDbEQsSUFBSSxJQUFJLENBQUMsY0FBYyxFQUFFO3dCQUN2QixJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyx1QkFBdUIsQ0FBQyxDQUFDO3dCQUMxQyxXQUFPLElBQUksQ0FBQyxjQUFjLEVBQUM7cUJBQzVCO29CQUNELElBQUksQ0FBQyxJQUFJLENBQUMsV0FBVyxFQUFFO3dCQUNyQixNQUFNLElBQUksK0JBQXVCLENBQy9CLGdCQUFTLENBQUMsa0JBQWtCLEVBQzVCLGdCQUFTLENBQUMsZ0JBQWdCLEVBQzFCLGdCQUFTLENBQUMsWUFBWSxFQUN0Qix1QkFBdUIsQ0FDeEIsQ0FBQztxQkFDSDtvQkFDRCxJQUFJLE9BQU8sSUFBSSxJQUFJLENBQUMsZ0JBQWdCLEVBQUU7d0JBQ3BDLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLHVCQUF1QixDQUFDLENBQUM7d0JBQzFDLElBQUksSUFBSSxDQUFDLGdCQUFnQixDQUFDLFFBQVEsS0FBSyxRQUFRLENBQUMsU0FBUyxFQUFFOzRCQUN6RCxXQUFPLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsRUFBQzt5QkFDdkQ7d0JBQ0QsV0FBTyxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxFQUFDO3FCQUM5QztvQkFFRCxXQUFPLElBQUksQ0FBQyxXQUFXLEVBQUM7OztTQUN6QjtRQVVZLHlDQUFNLEdBQW5CLFVBQ0UsSUFBWSxFQUNaLFFBQWdCLEVBQ2hCLFFBQWdCLEVBQ2hCLFFBQWdCLEVBQ2hCLE1BQThCOzs7Ozs0QkFFOUIsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsb0JBQW9CLENBQUMsQ0FBQzs0QkFDdkMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxRQUFRLEVBQUUsSUFBSSxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUM7NEJBQzdDLFdBQU0sSUFBSSxDQUFDLFVBQVUsQ0FBQztvQ0FDM0IsR0FBRyxFQUFFLElBQUk7b0NBQ1QsUUFBUSxVQUFBO29DQUNSLFFBQVEsVUFBQTtvQ0FDUixJQUFJLEVBQUUsUUFBUTtvQ0FDZCxRQUFRLFVBQUE7b0NBQ1IsUUFBUSxFQUFFLE9BQU87b0NBQ2pCLE1BQU0sd0NBQ0QsTUFBTSxLQUNULDhCQUE4QixFQUFFLFFBQVEsR0FDekM7aUNBQ0YsQ0FBQyxFQUFBO2dDQVhGLFdBQU8sU0FXTCxFQUFDOzs7O1NBQ0o7UUFPUyx1Q0FBSSxHQUFkLFVBQWUsUUFBUTtZQUF2QixpQkFrQkM7WUFqQkMsT0FBTyxVQUFBLElBQUk7Z0JBQ1QsT0FBTyxJQUFJLE9BQU8sQ0FBcUIsVUFBQyxPQUFPLEVBQUUsTUFBTTtvQkFDckQsUUFBUSxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsSUFBSSxFQUFFO3dCQUMzQixRQUFRLEVBQUUsVUFBQyxHQUFhOzRCQUFiLG9CQUFBLEVBQUEsUUFBYTs0QkFDdEIsS0FBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsbUJBQW1CLENBQUMsQ0FBQzs0QkFDdEMsS0FBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxHQUFHLEVBQUUsSUFBSSxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUM7NEJBQy9DLElBQU0sT0FBTyxHQUFHLElBQUksc0NBQThCLEVBQUUsQ0FBQzs0QkFDckQsSUFBTSxRQUFRLEdBQUcsT0FBTyxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQzs0QkFDckMsSUFBSSxRQUFRLENBQUMsS0FBSyxFQUFFO2dDQUNsQixPQUFPLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQzs2QkFDekI7NEJBRUQsT0FBTyxPQUFPLENBQUMsUUFBUSxDQUFDLENBQUM7d0JBQzNCLENBQUM7cUJBQ0YsQ0FBQyxDQUFDLENBQUM7Z0JBQ04sQ0FBQyxDQUFDLENBQUM7WUFDTCxDQUFDLENBQUM7UUFDSixDQUFDO1FBQ0gsK0JBQUM7SUFBRCxDQUFDLEFBalNELENBQThDLG9CQUFhLEdBaVMxRDtJQWpTWSw0REFBd0IifQ==