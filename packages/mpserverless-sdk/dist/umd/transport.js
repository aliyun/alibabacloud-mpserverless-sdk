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
            enumerable: true,
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHJhbnNwb3J0LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL3RyYW5zcG9ydC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7SUFBQSwyQ0FZNEI7SUFDNUIsaUNBT2lCO0lBQ2pCLGlDQUFrRDtJQWNsRCxJQUFZLFFBR1g7SUFIRCxXQUFZLFFBQVE7UUFDbEIsbUNBQXVCLENBQUE7UUFDdkIsd0JBQVksQ0FBQTtJQUNkLENBQUMsRUFIVyxRQUFRLEdBQVIsZ0JBQVEsS0FBUixnQkFBUSxRQUduQjtJQUVEO1FBQThDLG9EQUFhO1FBWXpELGtDQUNFLFFBQWdCLEVBQ2hCLE9BQVk7WUFGZCxZQUlFLGtCQUFNLFFBQVEsRUFBRSxPQUFPLENBQUMsU0FjekI7WUEzQlMsV0FBSyxHQUFlLFdBQVcsQ0FBQztZQWN4QyxhQUFNLENBQUMsT0FBTyxDQUFDLFVBQVUsRUFBRSxvQkFBb0IsQ0FBQyxDQUFDO1lBQ2pELGFBQU0sQ0FBQyxPQUFPLENBQUMsV0FBVyxFQUFFLHFCQUFxQixDQUFDLENBQUM7WUFDbkQsYUFBTSxDQUFDLE9BQU8sQ0FBQyxPQUFPLEVBQUUsaUJBQWlCLENBQUMsQ0FBQztZQUUzQyxLQUFJLENBQUMsVUFBVSxHQUFHLEtBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLFVBQVUsQ0FBQyxDQUFDO1lBQ2hELEtBQUksQ0FBQyxXQUFXLEdBQUcsS0FBSSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsV0FBVyxDQUFDLENBQUM7WUFDbEQsS0FBSSxDQUFDLFdBQVcsR0FBRyxLQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsQ0FBQztZQUM5QyxJQUFJLE9BQU8sQ0FBQyxXQUFXLEVBQUU7Z0JBQ3ZCLEtBQUksQ0FBQyxXQUFXLEdBQUcsS0FBSSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsV0FBVyxDQUFDLENBQUM7YUFDbkQ7WUFDRCxJQUFJLE9BQU8sQ0FBQyxZQUFZLEVBQUU7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