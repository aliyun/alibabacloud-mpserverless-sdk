import { __awaiter } from "tslib";
import { BaseService, assert, } from '@alicloud/mpserverless-core';
import { UserValidator, authorizeSchema, getInfoSchema } from './validator';
import { bizError } from './error';
export var AuthType;
(function (AuthType) {
    AuthType["ANONYMOUS"] = "anonymous";
    AuthType["DEFAULT"] = "";
})(AuthType || (AuthType = {}));
export class UserService extends BaseService {
    constructor(transport, options) {
        super(transport);
        this.scope = 'auth_base';
        assert(options.getAuthCode, '[UserService]初始化时缺少 getAuthCode 参数');
        assert(options.request, '[UserService]初始化时缺少 request 参数');
        assert(options.appId, '[UserService]初始化时缺少 appId 参数');
        assert(options.appSecret, '[UserService]初始化时缺少 appSecret 参数');
        this.getAuthCode = options.getAuthCode;
        this.httpRequest = options.request;
        this.appId = options.appId;
        this.appSecret = options.appSecret;
        this.isvAppId = options.isvAppId;
        this.ua = options.ua;
    }
    authorize(options = { authType: AuthType.DEFAULT, authProvider: 'alipay_openapi' }) {
        return __awaiter(this, void 0, void 0, function* () {
            this.validate(authorizeSchema, { options });
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
        return __awaiter(this, void 0, void 0, function* () {
            this.validate(getInfoSchema, { options });
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
        return __awaiter(this, void 0, void 0, function* () {
            if (this.pendingRequest) {
                this.transport.logger.info('[UserService]pendingRequest...');
                yield this.pendingRequest;
            }
            if (!this.accessToken) {
                throw new bizError.UnauthorizedError('[UserService]未进行用户授权，请先手动调用三方授权或匿名授权方法');
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
        return __awaiter(this, void 0, void 0, function* () {
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
        return __awaiter(this, void 0, void 0, function* () {
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
        const v = new UserValidator();
        try {
            v.validate(schema, value);
        }
        catch (err) {
            throw err;
        }
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFDTCxXQUFXLEVBQ1gsTUFBTSxHQUtQLE1BQU0sNkJBQTZCLENBQUM7QUFDckMsT0FBTyxFQUFFLGFBQWEsRUFBRSxlQUFlLEVBQUUsYUFBYSxFQUFFLE1BQU0sYUFBYSxDQUFDO0FBQzVFLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxTQUFTLENBQUM7QUFjbkMsTUFBTSxDQUFOLElBQVksUUFHWDtBQUhELFdBQVksUUFBUTtJQUNsQixtQ0FBdUIsQ0FBQTtJQUN2Qix3QkFBWSxDQUFBO0FBQ2QsQ0FBQyxFQUhXLFFBQVEsS0FBUixRQUFRLFFBR25CO0FBTUQsTUFBTSxPQUFPLFdBQVksU0FBUSxXQUFXO0lBWTFDLFlBQVksU0FBd0IsRUFBRSxPQUFZO1FBQ2hELEtBQUssQ0FBQyxTQUFTLENBQUMsQ0FBQztRQVhULFVBQUssR0FBZSxXQUFXLENBQUM7UUFheEMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxXQUFXLEVBQUUsb0NBQW9DLENBQUMsQ0FBQztRQUNsRSxNQUFNLENBQUMsT0FBTyxDQUFDLE9BQU8sRUFBRSxnQ0FBZ0MsQ0FBQyxDQUFDO1FBQzFELE1BQU0sQ0FBQyxPQUFPLENBQUMsS0FBSyxFQUFFLDhCQUE4QixDQUFDLENBQUM7UUFDdEQsTUFBTSxDQUFDLE9BQU8sQ0FBQyxTQUFTLEVBQUUsa0NBQWtDLENBQUMsQ0FBQztRQUU5RCxJQUFJLENBQUMsV0FBVyxHQUFHLE9BQU8sQ0FBQyxXQUFXLENBQUM7UUFDdkMsSUFBSSxDQUFDLFdBQVcsR0FBRyxPQUFPLENBQUMsT0FBTyxDQUFDO1FBQ25DLElBQUksQ0FBQyxLQUFLLEdBQUcsT0FBTyxDQUFDLEtBQUssQ0FBQztRQUMzQixJQUFJLENBQUMsU0FBUyxHQUFHLE9BQU8sQ0FBQyxTQUFTLENBQUM7UUFDbkMsSUFBSSxDQUFDLFFBQVEs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