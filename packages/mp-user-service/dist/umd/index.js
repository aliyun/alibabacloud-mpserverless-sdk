(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "tslib", "@alicloud/mpserverless-core", "./validator", "./error"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.UserService = exports.AuthType = void 0;
    const tslib_1 = require("tslib");
    const mpserverless_core_1 = require("@alicloud/mpserverless-core");
    const validator_1 = require("./validator");
    const error_1 = require("./error");
    var AuthType;
    (function (AuthType) {
        AuthType["ANONYMOUS"] = "anonymous";
        AuthType["DEFAULT"] = "";
    })(AuthType = exports.AuthType || (exports.AuthType = {}));
    class UserService extends mpserverless_core_1.BaseService {
        constructor(transport, options) {
            super(transport);
            this.scope = 'auth_base';
            mpserverless_core_1.assert(options.getAuthCode, '[UserService]初始化时缺少 getAuthCode 参数');
            mpserverless_core_1.assert(options.request, '[UserService]初始化时缺少 request 参数');
            mpserverless_core_1.assert(options.appId, '[UserService]初始化时缺少 appId 参数');
            mpserverless_core_1.assert(options.appSecret, '[UserService]初始化时缺少 appSecret 参数');
            this.getAuthCode = options.getAuthCode;
            this.httpRequest = options.request;
            this.appId = options.appId;
            this.appSecret = options.appSecret;
            this.isvAppId = options.isvAppId;
            this.ua = options.ua;
        }
        authorize(options = { authType: AuthType.DEFAULT, authProvider: 'alipay_openapi' }) {
            return tslib_1.__awaiter(this, void 0, void 0, function* () {
                this.validate(validator_1.authorizeSchema, { options });
                if (options.authType === AuthType.ANONYMOUS) {
                    yield this.anonymousAuthorizeHandler(options);
                    if (this.accessToken) {
                        return {
                            success: true,
                        };
                    }
                    return {
                        success: false,
                    };
                }
                else if (!this.accessToken || this.accessToken && this.currentAuthType !== options.authType) {
                    yield this.authorizeHandler(options);
                    if (this.accessToken) {
                        return {
                            success: true,
                        };
                    }
                    return {
                        success: false,
                    };
                }
            });
        }
        getInfo(options) {
            return tslib_1.__awaiter(this, void 0, void 0, function* () {
                this.validate(validator_1.getInfoSchema, { options });
                const request = this.getEncoder();
                let params = {};
                if (this.authorizeOptions) {
                    params = Object.assign({}, this.authorizeOptions);
                }
                if (options) {
                    params = Object.assign({}, options);
                }
                if (this.currentAuthType) {
                    params = {
                        authType: this.currentAuthType,
                    };
                }
                request.setBodyField({
                    method: 'serverless.auth.user.getProfileInfo',
                    params,
                });
                const response = yield this.transport.request(request);
                return response.body;
            });
        }
        setRequestToken(encoder, refresh = false) {
            return tslib_1.__awaiter(this, void 0, void 0, function* () {
                if (this.pendingRequest) {
                    this.transport.logger.info('[UserService]pendingRequest...');
                    yield this.pendingRequest;
                }
                if (!this.accessToken) {
                    throw new error_1.bizError.UnauthorizedError('[UserService]未进行用户授权，请先手动调用三方授权或匿名授权方法');
                }
                if (refresh && this.authorizeOptions) {
                    this.transport.logger.info('getAccessToken: start');
                    if (this.authorizeOptions.authType === AuthType.ANONYMOUS) {
                        yield this.anonymousAuthorizeHandler(this.authorizeOptions);
                    }
                    yield this.authorizeHandler(this.authorizeOptions);
                }
                encoder.setBodyField({
                    token: this.accessToken,
                });
                encoder.sign(this.appSecret);
                encoder.setBaseHeaders({
                    'Content-Type': 'application/json',
                    'x-basement-token': this.accessToken,
                });
                return encoder;
            });
        }
        authorizeHandler(options) {
            return tslib_1.__awaiter(this, void 0, void 0, function* () {
                this.pendingRequest = this
                    .getAuthCode({ scopes: this.scope })
                    .then((res) => {
                    this.transport.logger.info(`[UserService]Request authcode is ${res.body.authCode} `);
                    return res.body.authCode;
                })
                    .then((authCode) => {
                    const encoder = this.getEncoder();
                    encoder.setBodyField({
                        method: 'serverless.auth.user.authorize',
                        params: {
                            authProvider: options.authProvider || 'alipay_openapi',
                            clientIdentifier: this.appId,
                            authCode,
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
                    const encoded = encoder.encodeAsHTTPRequestObject({
                        timeout: this.transport.timeoutOption,
                        dataType: 'json',
                    });
                    return this.httpRequest(encoded);
                })
                    .then((res) => {
                    this.transport.logger.info('[UserService]Request accessToken ' + (res.body.success ? 'success' : 'failed'));
                    if (res.body && res.body.result) {
                        this.authorizeOptions = options;
                        this.accessToken = res.body.result.accessToken;
                        this.currentAuthType = AuthType.DEFAULT;
                    }
                    this.pendingRequest = null;
                    return Promise.resolve(this.accessToken);
                });
                return this.pendingRequest;
            });
        }
        anonymousAuthorizeHandler(options) {
            return tslib_1.__awaiter(this, void 0, void 0, function* () {
                const encoder = this.getEncoder();
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
                const encoded = encoder.encodeAsHTTPRequestObject({
                    timeout: this.transport.timeoutOption,
                    dataType: 'json',
                });
                this.pendingRequest = this.httpRequest(encoded)
                    .then((res) => {
                    this.transport.logger.info('[UserService]Request accessToken ' + (res.body.success ? 'success' : 'failed'));
                    if (res.body && res.body.result) {
                        this.authorizeOptions = options;
                        this.accessToken = res.body.result.accessToken;
                        this.currentAuthType = AuthType.ANONYMOUS;
                    }
                    this.pendingRequest = null;
                    return Promise.resolve(this.accessToken);
                });
                return this.pendingRequest;
            });
        }
        validate(schema, value) {
            const v = new validator_1.UserValidator();
            try {
                v.validate(schema, value);
            }
            catch (err) {
                throw err;
            }
        }
    }
    exports.UserService = UserService;
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztJQUFBLG1FQU9xQztJQUNyQywyQ0FBNEU7SUFDNUUsbUNBQW1DO0lBY25DLElBQVksUUFHWDtJQUhELFdBQVksUUFBUTtRQUNsQixtQ0FBdUIsQ0FBQTtRQUN2Qix3QkFBWSxDQUFBO0lBQ2QsQ0FBQyxFQUhXLFFBQVEsR0FBUixnQkFBUSxLQUFSLGdCQUFRLFFBR25CO0lBTUQsTUFBYSxXQUFZLFNBQVEsK0JBQVc7UUFZMUMsWUFBWSxTQUF3QixFQUFFLE9BQVk7WUFDaEQsS0FBSyxDQUFDLFNBQVMsQ0FBQyxDQUFDO1lBWFQsVUFBSyxHQUFlLFdBQVcsQ0FBQztZQWF4QywwQkFBTSxDQUFDLE9BQU8sQ0FBQyxXQUFXLEVBQUUsb0NBQW9DLENBQUMsQ0FBQztZQUNsRSwwQkFBTSxDQUFDLE9BQU8sQ0FBQyxPQUFPLEVBQUUsZ0NBQWdDLENBQUMsQ0FBQztZQUMxRCwwQkFBTSxDQUFDLE9BQU8sQ0FBQyxLQUFLLEVBQUUsOEJBQThCLENBQUMsQ0FBQztZQUN0RCwwQkFBTSxDQUFDLE9BQU8sQ0FBQyxTQUFTLEVBQUUsa0NBQWtDLENBQUMsQ0FBQztZQUU5RCxJQUFJLENBQUMsV0FBVyxHQUFHLE9BQU8sQ0FBQyxXQUFXLENBQUM7WUFDdkMsSUFBSSxDQUFDLFdBQVcsR0FBRyxPQUFPLENBQUMsT0FBTyxDQUFDO1lBQ25DLElBQUksQ0FBQyxLQUFLLEdBQUcsT0FBTyxDQUFDLEtBQUssQ0FBQztZQUMzQixJQUFJLENBQUMsU0FBUyxHQUFHLE9BQU8sQ0FBQyxTQUFTLENBQUM7WUFDbkMsSUFBSSxDQUFDLFFBQVEsR0FBRyxPQUFPLENBQUMsUUFBUSxDQUFDO1lBQ2pDLElBQUksQ0FBQyxFQUFFLEdBQUcsT0FBTyxDQUFDLEVBQUUsQ0FBQztRQUN2QixDQUFDO1FBS1ksU0FBUyxDQUFDLFVBQTRC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