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
            get: (url, query, header) => this.user.proxyHttpClientGetRequest(url, query, header),
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