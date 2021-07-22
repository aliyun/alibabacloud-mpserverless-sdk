"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MPServerless = void 0;
const tslib_1 = require("tslib");
const mpserverless_core_inner_1 = require("@ali/mpserverless-core-inner");
const transport_1 = require("./transport");
const urllib_1 = tslib_1.__importDefault(require("urllib"));
const mp_function_service_inner_1 = require("@ali/mp-function-service-inner");
const mpserverless_node_file_service_inner_1 = require("@ali/mpserverless-node-file-service-inner");
const mpserverless_node_user_service_inner_1 = require("@ali/mpserverless-node-user-service-inner");
const mp_db_service_inner_1 = require("@ali/mp-db-service-inner");
class MPServerless extends mpserverless_core_inner_1.MPServerlessCore {
    constructor(options) {
        super({ httpClient: urllib_1.default, ...options, httpTransport: transport_1.FunctionHTTPTransport });
        mpserverless_core_inner_1.assert(options.serverSecret, 'serverSecret is required');
        if (options.userId) {
            this.transport.setAuthUID(options.userId);
        }
        if (options.requestId) {
            this.transport.setRequestId(options.requestId);
        }
        const request = urllib_1.default.request;
        this.db = new mp_db_service_inner_1.DbService(this.transport);
        this.user = new mpserverless_node_user_service_inner_1.FunctionUserService(this.transport);
        this.file = new mpserverless_node_file_service_inner_1.FunctionFileService(this.transport, request);
        this.function = new mp_function_service_inner_1.FunctionService(this.transport);
        this.transport.setRequest(request);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibXBzZXJ2ZXJsZXNzLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vc3JjL21wc2VydmVybGVzcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsMEVBS3NDO0FBQ3RDLDJDQUFvRDtBQUNwRCw0REFBNEI7QUFDNUIsOEVBQWlFO0FBQ2pFLG9HQUFnRjtBQUNoRixvR0FBZ0Y7QUFDaEYsa0VBQXFEO0FBRXJELE1BQWEsWUFBYSxTQUFRLDBDQUFJO0lBU3BDLFlBQVksT0FBb0I7UUFDOUIsS0FBSyxDQUFDLEVBQUUsVUFBVSxFQUFFLGdCQUFNLEVBQUUsR0FBRyxPQUFPLEVBQUUsYUFBYSxFQUFFLGlDQUFxQixFQUFFLENBQUMsQ0FBQztRQUNoRixnQ0FBTSxDQUFDLE9BQU8sQ0FBQyxZQUFZLEVBQUUsMEJBQTBCLENBQUMsQ0FBQztRQUV6RCxJQUFJLE9BQU8sQ0FBQyxNQUFNLEVBQUU7WUFDbEIsSUFBSSxDQUFDLFNBQVMsQ0FBQyxVQUFVLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxDQUFDO1NBQzNDO1FBRUQsSUFBSSxPQUFPLENBQUMsU0FBUyxFQUFFO1lBQ3JCLElBQUksQ0FBQyxTQUFTLENBQUMsWUFBWSxDQUFDLE9BQU8sQ0FBQyxTQUFTLENBQUMsQ0FBQztTQUNoRDtRQUVELE1BQU0sT0FBTyxHQUFHLGdCQUFNLENBQUMsT0FBTyxDQUFDO1FBQy9CLElBQUksQ0FBQyxFQUFFLEdBQUcsSUFBSSwrQkFBUyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQztRQUN4QyxJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksMERBQW1CLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDO1FBQ3BELElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSwwREFBbUIsQ0FBQyxJQUFJLENBQUMsU0FBUyxFQUFFLE9BQU8sQ0FBQyxDQUFDO1FBQzdELElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSwyQ0FBZSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQztRQUNwRCxJQUFJLENBQUMsU0FBUyxDQUFDLFVBQVUsQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUVuQyxJQUFJLENBQUMsT0FBTyxHQUFHLE9BQU8sQ0FBQztJQUN6QixDQUFDO0lBTVMsVUFBVTtRQUNsQixJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsRUFBRTtZQUdiLElBQUksQ0FBQyxHQUFHLEdBQUcsT0FBTyxDQUFDLGlCQUFpQixDQUFDLENBQUM7U0FDdkM7UUFDRCxPQUFPLElBQUksQ0FBQyxHQUFHLENBQUM7SUFDbEIsQ0FBQztJQU9NLFNBQVMsQ0FBQyxNQUFjO1FBRTdCLE9BQU8sSUFBSSxnQkFBZ0IsQ0FBQyxJQUFJLENBQUMsT0FBTyxFQUFFLE1BQU0sQ0FBQyxDQUFDO0lBQ3BELENBQUM7SUFNRCxJQUFXLE9BQU87UUFDaEIsT0FBTyxJQUFJLENBQUMsVUFBVSxFQUFFLENBQUMsT0FBTyxDQUFDO0lBQ25DLENBQUM7SUFNTSxLQUFLLENBQUMsU0FBaUI7UUFDNUIsSUFBSSxTQUFTLElBQUksSUFBSSxDQUFDLFNBQVMsRUFBRTtZQUMvQixJQUFJLENBQUMsU0FBUyxDQUFDLEtBQUssQ0FBQyxTQUFTLENBQUMsQ0FBQztTQUNqQztJQUNILENBQUM7SUFPUyxlQUFlLENBQUMsT0FBb0I7UUFDNUMsS0FBSyxDQUFDLGVBQWUsQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUMvQixJQUFJLENBQUMsU0FBUyxDQUFDLFlBQVksQ0FBQyxPQUFPLENBQUMsWUFBWSxDQUFDLENBQUM7UUFDbEQsTUFBTSxHQUFHLEdBQUcsSUFBSSxDQUFDLFVBQVUsRUFBRSxDQUFDO1FBQzlCLElBQUksQ0FBQyxTQUFTLENBQUMsS0FBSyxDQUFDLFlBQVksR0FBRyxDQUFDLElBQUksUUFBUSxHQUFHLENBQUMsT0FBTyxHQUFHLENBQUMsQ0FBQztRQUNqRSxJQUFJLE9BQU8sQ0FBQyxLQUFLLEVBQUU7WUFDakIsSUFBSSxDQUFDLFNBQVMsQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxDQUFDO1NBQ3hDO0lBQ0gsQ0FBQztDQUNGO0FBdEZELG9DQXNGQztBQUdELE1BQU0sZ0JBQWlCLFNBQVEsWUFBWTtJQUV6QyxZQUFZLE9BQW9CLEVBQUUsTUFBYztRQUM5QyxLQUFLLENBQUMsRUFBRSxHQUFHLE9BQU8sRUFBRSxDQUFDLENBQUM7UUFDdEIsSUFBSSxDQUFDLFNBQVMsQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLENBQUM7SUFDbkMsQ0FBQztDQUNGIn0=