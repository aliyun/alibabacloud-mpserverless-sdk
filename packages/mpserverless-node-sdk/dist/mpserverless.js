"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MPServerless = void 0;
const tslib_1 = require("tslib");
const mpserverless_core_1 = require("@alicloud/mpserverless-core");
const transport_1 = require("./transport");
const urllib_1 = tslib_1.__importDefault(require("urllib"));
const mp_function_service_1 = require("@alicloud/mp-function-service");
const mpserverless_node_file_service_1 = require("@alicloud/mpserverless-node-file-service");
const mpserverless_node_user_service_1 = require("@alicloud/mpserverless-node-user-service");
const mp_db_service_1 = require("@alicloud/mp-db-service");
class MPServerless extends mpserverless_core_1.MPServerlessCore {
    constructor(options) {
        super({
            httpClient: urllib_1.default,
            ...options,
            httpTransport: transport_1.FunctionHTTPTransport,
        });
        mpserverless_core_1.assert(options.serverSecret, 'serverSecret is required');
        if (options.userId) {
            this.transport.setAuthUID(options.userId);
        }
        if (options.requestId) {
            this.transport.setRequestId(options.requestId);
        }
        const request = urllib_1.default.request;
        this.db = new mp_db_service_1.DbService(this.transport);
        this.user = new mpserverless_node_user_service_1.FunctionUserService(this.transport);
        this.file = new mpserverless_node_file_service_1.FunctionFileService(this.transport, request);
        this.function = new mp_function_service_1.FunctionService(this.transport);
        this.transport.setRequest(request);
        this.httpProxyClient = {
            get: (url, query) => this.user.proxyHttpClientGetRequest(url, query),
            post: (url, text, header) => this.user.proxyHttpClientPostRequest(url, text, header),
            postJson: (url, json, header) => this.user.proxyHttpClientPostJsonRequest(url, json, header),
            postForm: (url, data, header) => this.user.proxyHttpClientPostFormDataRequest(url, data, header),
        };
        this.options = options;
    }
    getPackage() {
        if (!this.pkg) {
            this.pkg = require('../package.json');
        }
        return this.pkg;
    }
    setUserId(userId) {
        return new UserMPServerless(this.options, userId);
    }
    get version() {
        return this.getPackage().version;
    }
    setUA(userAgent) {
        if (userAgent && this.transport) {
            this.transport.setUA(userAgent);
        }
    }
    createTransport(options) {
        super.createTransport(options);
        this.transport.setAppSecret(options.serverSecret);
        const pkg = this.getPackage();
        this.transport.setUA(`pkg_name:${pkg.name};ver:${pkg.version};`);
        if (options.token) {
            this.transport.setToken(options.token);
        }
    }
}
exports.MPServerless = MPServerless;
class UserMPServerless extends MPServerless {
    constructor(options, userId) {
        super({ ...options });
        this.transport.setUserId(userId);
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibXBzZXJ2ZXJsZXNzLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vc3JjL21wc2VydmVybGVzcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsbUVBS3FDO0FBQ3JDLDJDQUFvRDtBQUNwRCw0REFBNEI7QUFDNUIsdUVBQWdFO0FBQ2hFLDZGQUErRTtBQUMvRSw2RkFBK0U7QUFDL0UsMkRBQW9EO0FBRXBELE1BQWEsWUFBYSxTQUFRLG9DQUFJO0lBVXBDLFlBQVksT0FBb0I7UUFDOUIsS0FBSyxDQUFDO1lBQ0osVUFBVSxFQUFFLGdCQUFNO1lBQ2xCLEdBQUcsT0FBTztZQUNWLGFBQWEsRUFBRSxpQ0FBcUI7U0FDckMsQ0FBQyxDQUFDO1FBQ0gsMEJBQU0sQ0FBQyxPQUFPLENBQUMsWUFBWSxFQUFFLDBCQUEwQixDQUFDLENBQUM7UUFFekQsSUFBSSxPQUFPLENBQUMsTUFBTSxFQUFFO1lBQ2xCLElBQUksQ0FBQyxTQUFTLENBQUMsVUFBVSxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsQ0FBQztTQUMzQztRQUVELElBQUksT0FBTyxDQUFDLFNBQVMsRUFBRTtZQUNyQixJQUFJLENBQUMsU0FBUyxDQUFDLFlBQVksQ0FBQyxPQUFPLENBQUMsU0FBUyxDQUFDLENBQUM7U0FDaEQ7UUFFRCxNQUFNLE9BQU8sR0FBRyxnQkFBTSxDQUFDLE9BQU8sQ0FBQztRQUMvQixJQUFJLENBQUMsRUFBRSxHQUFHLElBQUkseUJBQVMsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUM7UUFDeEMsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLG9EQUFtQixDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQztRQUNwRCxJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksb0RBQW1CLENBQUMsSUFBSSxDQUFDLFNBQVMsRUFBRSxPQUFPLENBQUMsQ0FBQztRQUM3RCxJQUFJLENBQUMsUUFBUSxHQUFHLElBQUkscUNBQWUsQ0FBQyxJQUFJLENBQUMsU0FB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