(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "tslib", "@alicloud/mpserverless-core", "./codec", "./error"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.MiniProgramHTTPTransport = exports.AuthType = void 0;
    var tslib_1 = require("tslib");
    var mpserverless_core_1 = require("@alicloud/mpserverless-core");
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
            mpserverless_core_1.assert(library.uploadFile, 'missing uploadFile');
            mpserverless_core_1.assert(library.getAuthCode, 'missing getAuthCode');
            mpserverless_core_1.assert(library.request, 'missing request');
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
                                || e_1.error.code === 'InvalidParameter.InvalidToken' || e_1.status === mpserverless_core_1.HTTP_UNAUTHORIZED;
                            if (!isUnAuthorized) return [3, 7];
                            if (retried) {
                                throw new error_1.MPServerlessClientError(mpserverless_core_1.ErrorName.UNAUTHORIZED_ERROR, mpserverless_core_1.ErrorCode.AUTHENTICATION_FAILED, mpserverless_core_1.ErrorType.COMMON_ERROR, 'authentication failed');
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
                        throw new error_1.MPServerlessClientError(mpserverless_core_1.ErrorName.UNAUTHORIZED_ERROR, mpserverless_core_1.ErrorCode.UNAUTHENTICATION, mpserverless_core_1.ErrorType.COMMON_ERROR, '未进行用户授权，请先调用三方授权或匿名授权');
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
    }(mpserverless_core_1.HTTPTransport));
    exports.MiniProgramHTTPTransport = MiniProgramHTTPTransport;
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHJhbnNwb3J0LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL3RyYW5zcG9ydC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0lBQUEsaUVBWXFDO0lBQ3JDLGlDQU9pQjtJQUNqQixpQ0FBa0Q7SUFjbEQsSUFBWSxRQUdYO0lBSEQsV0FBWSxRQUFRO1FBQ2xCLG1DQUF1QixDQUFBO1FBQ3ZCLHdCQUFZLENBQUE7SUFDZCxDQUFDLEVBSFcsUUFBUSxHQUFSLGdCQUFRLEtBQVIsZ0JBQVEsUUFHbkI7SUFFRDtRQUE4QyxvREFBYTtRQVl6RCxrQ0FDRSxRQUFnQixFQUNoQixPQUFZO1lBRmQsWUFJRSxrQkFBTSxRQUFRLEVBQUUsT0FBTyxDQUFDLFNBY3pCO1lBM0JTLFdBQUssR0FBZSxXQUFXLENBQUM7WUFjeEMsMEJBQU0sQ0FBQyxPQUFPLENBQUMsVUFBVSxFQUFFLG9CQUFvQixDQUFDLENBQUM7WUFDakQsMEJBQU0sQ0FBQyxPQUFPLENBQUMsV0FBVyxFQUFFLHFCQUFxQixDQUFDLENBQUM7WUFDbkQsMEJBQU0sQ0FBQyxPQUFPLENBQUMsT0FBTyxFQUFFLGlCQUFpQixDQUFDLENBQUM7WUFFM0MsS0FBSSxDQUFDLFVBQVUsR0FBRyxLQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxVQUFVLENBQUMsQ0FBQztZQUNoRCxLQUFJLENBQUMsV0FBVyxHQUFHLEtBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLFdBQVcsQ0FBQyxDQUFDO1lBQ2xELEtBQUksQ0FBQyxXQUFXLEdBQUcsS0FBSSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLENBQUM7WUFDOUMsSUFBSSxPQUFPLENBQUMsV0FBVyxFQUFFO2dCQUN2QixLQUFJLENBQUMsV0FBVyxHQUFHLEtBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLFdBQVcsQ0FBQyxDQUFDO2FBQ25EO1lBQ0QsSUFBSSxPQUFPLENBQUMsWUFBWSxF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