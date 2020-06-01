import { __assign, __awaiter, __extends, __generator } from "tslib";
import { HTTPTransport, HTTP_UNAUTHORIZED, ErrorCode, ErrorName, ErrorType, assert, } from '@ant-basement/core';
import { MiniProgramHTTPRequestEncoder, MiniProgramHTTPResponseDecoder, } from './codec';
import { MPServerlessClientError } from './error';
export var AuthType;
(function (AuthType) {
    AuthType["ANONYMOUS"] = "anonymous";
    AuthType["DEFAULT"] = "";
})(AuthType || (AuthType = {}));
var MiniProgramHTTPTransport = (function (_super) {
    __extends(MiniProgramHTTPTransport, _super);
    function MiniProgramHTTPTransport(endpoint, library) {
        var _this = _super.call(this, endpoint, library) || this;
        _this.scope = 'auth_base';
        assert(library.uploadFile, 'missing uploadFile');
        assert(library.getAuthCode, 'missing getAuthCode');
        assert(library.request, 'missing request');
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
        return new MiniProgramHTTPRequestEncoder(this.endpoint, this.spaceId);
    };
    MiniProgramHTTPTransport.prototype.request = function (encoder, retried) {
        if (retried === void 0) { retried = false; }
        return __awaiter(this, void 0, void 0, function () {
            var cloned, token, encoded, decoded, e_1, isUnAuthorized;
            return __generator(this, function (_a) {
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
                            || e_1.error.code === 'InvalidParameter.InvalidToken' || e_1.status === HTTP_UNAUTHORIZED;
                        if (!isUnAuthorized) return [3, 7];
                        if (retried) {
                            throw new MPServerlessClientError(ErrorName.UNAUTHORIZED_ERROR, ErrorCode.AUTHENTICATION_FAILED, ErrorType.COMMON_ERROR, 'authentication failed');
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
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
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
        return __awaiter(this, void 0, void 0, function () {
            var encoder, encoded;
            var _this = this;
            return __generator(this, function (_a) {
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
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                if (this.pendingRequest) {
                    this.logger.info('getAccessToken: reuse');
                    return [2, this.pendingRequest];
                }
                if (!this.accessToken) {
                    throw new MPServerlessClientError(ErrorName.UNAUTHORIZED_ERROR, ErrorCode.UNAUTHENTICATION, ErrorType.COMMON_ERROR, '未进行用户授权，请先调用三方授权或匿名授权');
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
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
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
                                header: __assign(__assign({}, header), { 'X-OSS-server-side-encrpytion': 'AES256' }),
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
                        var decoder = new MiniProgramHTTPResponseDecoder();
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
}(HTTPTransport));
export { MiniProgramHTTPTransport };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHJhbnNwb3J0LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL3RyYW5zcG9ydC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUVMLGFBQWEsRUFHYixpQkFBaUIsRUFDakIsU0FBUyxFQUNULFNBQVMsRUFDVCxTQUFTLEVBRVQsTUFBTSxHQUVQLE1BQU0sb0JBQW9CLENBQUM7QUFDNUIsT0FBTyxFQUdMLDZCQUE2QixFQUM3Qiw4QkFBOEIsR0FHL0IsTUFBTSxTQUFTLENBQUM7QUFDakIsT0FBTyxFQUFFLHVCQUF1QixFQUFFLE1BQU0sU0FBUyxDQUFDO0FBY2xELE1BQU0sQ0FBTixJQUFZLFFBR1g7QUFIRCxXQUFZLFFBQVE7SUFDbEIsbUNBQXVCLENBQUE7SUFDdkIsd0JBQVksQ0FBQTtBQUNkLENBQUMsRUFIVyxRQUFRLEtBQVIsUUFBUSxRQUduQjtBQUVEO0lBQThDLDRDQUFhO0lBWXpELGtDQUNFLFFBQWdCLEVBQ2hCLE9BQVk7UUFGZCxZQUlFLGtCQUFNLFFBQVEsRUFBRSxPQUFPLENBQUMsU0FjekI7UUEzQlMsV0FBSyxHQUFlLFdBQVcsQ0FBQztRQWN4QyxNQUFNLENBQUMsT0FBTyxDQUFDLFVBQVUsRUFBRSxvQkFBb0IsQ0FBQyxDQUFDO1FBQ2pELE1BQU0sQ0FBQyxPQUFPLENBQUMsV0FBVyxFQUFFLHFCQUFxQixDQUFDLENBQUM7UUFDbkQsTUFBTSxDQUFDLE9BQU8sQ0FBQyxPQUFPLEVBQUUsaUJBQWlCLENBQUMsQ0FBQztRQUUzQyxLQUFJLENBQUMsVUFBVSxHQUFHLEtBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLFVBQVUsQ0FBQyxDQUFDO1FBQ2hELEtBQUksQ0FBQyxXQUFXLEdBQUcsS0FBSSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsV0FBVyxDQUFDLENBQUM7UUFDbEQsS0FBSSxDQUFDLFdBQVcsR0FBRyxLQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMs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