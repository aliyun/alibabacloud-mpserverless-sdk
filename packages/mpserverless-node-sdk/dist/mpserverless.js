"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
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
        super({ httpClient: urllib_1.default, ...options, httpTransport: transport_1.FunctionHTTPTransport });
        mpserverless_core_1.assert(options.serverSecret, 'serverSecret is required');
        if (options.userId) {
            this.transport.setAuthUID(options.userId);
        }
        if (options.requestId) {
            this.transport.setRequestId(options.requestId);
        }
        this.db = new mp_db_service_1.DbService(this.transport);
        this.user = new mpserverless_node_user_service_1.FunctionUserService(this.transport);
        this.file = new mpserverless_node_file_service_1.FunctionFileService(this.transport);
        this.function = new mp_function_service_1.FunctionService(this.transport);
        this.transport.setRequest(urllib_1.default.request);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibXBzZXJ2ZXJsZXNzLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vc3JjL21wc2VydmVybGVzcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFBQSxtRUFLcUM7QUFDckMsMkNBQW9EO0FBQ3BELDREQUE0QjtBQUM1Qix1RUFBZ0U7QUFDaEUsd0ZBQTBFO0FBQzFFLHdGQUEwRTtBQUMxRSwyREFBb0Q7QUFFcEQsTUFBYSxZQUFhLFNBQVEsb0NBQUk7SUFTcEMsWUFBWSxPQUFvQjtRQUM5QixLQUFLLENBQUMsRUFBRSxVQUFVLEVBQUUsZ0JBQU0sRUFBRSxHQUFHLE9BQU8sRUFBRSxhQUFhLEVBQUUsaUNBQXFCLEVBQUUsQ0FBQyxDQUFDO1FBQ2hGLDBCQUFNLENBQUMsT0FBTyxDQUFDLFlBQVksRUFBRSwwQkFBMEIsQ0FBQyxDQUFDO1FBRXpELElBQUksT0FBTyxDQUFDLE1BQU0sRUFBRTtZQUNsQixJQUFJLENBQUMsU0FBUyxDQUFDLFVBQVUsQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLENBQUM7U0FDM0M7UUFFRCxJQUFJLE9BQU8sQ0FBQyxTQUFTLEVBQUU7WUFDckIsSUFBSSxDQUFDLFNBQVMsQ0FBQyxZQUFZLENBQUMsT0FBTyxDQUFDLFNBQVMsQ0FBQyxDQUFDO1NBQ2hEO1FBRUQsSUFBSSxDQUFDLEVBQUUsR0FBRyxJQUFJLHlCQUFTLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDO1FBQ3hDLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxvREFBbUIsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUM7UUFDcEQsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLG9EQUFtQixDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQztRQUNwRCxJQUFJLENBQUMsUUFBUSxHQUFHLElBQUkscUNBQWUsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUM7UUFDcEQsSUFBSSxDQUFDLFNBQVMsQ0FBQyxVQUFVLENBQUMsZ0JBQU0sQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUUxQyxJQUFJLENBQUMsT0FBTyxHQUFHLE9BQU8sQ0FBQztJQUN6QixDQUFDO0lBTVMsVUFBVTtRQUNsQixJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsRUFBRTtZQUdiLElBQUksQ0FBQyxHQUFHLEdBQUcsT0FBTyxDQUFDLGlCQUFpQixDQUFDLENBQUM7U0FDdkM7UUFDRCxPQUFPLElBQUksQ0FBQyxHQUFHLENBQUM7SUFDbEIsQ0FBQztJQU9NLFNBQVMsQ0FBQyxNQUFjO1FBRTdCLE9BQU8sSUFBSSxnQkFBZ0IsQ0FBQyxJQUFJLENBQUMsT0FBTyxFQUFFLE1BQU0sQ0FBQyxDQUFDO0lBQ3BELENBQUM7SUFNRCxJQUFXLE9BQU87UUFDaEIsT0FBTyxJQUFJLENBQUMsVUFBVSxFQUFFLENBQUMsT0FBTyxDQUFDO0lBQ25DLENBQUM7SUFNTSxLQUFLLENBQUMsU0FBaUI7UUFDNUIsSUFBSSxTQUFTLElBQUksSUFBSSxDQUFDLFNBQVMsRUFBRTtZQUMvQixJQUFJLENBQUMsU0FBUyxDQUFDLEtBQUssQ0FBQyxTQUFTLENBQUMsQ0FBQztTQUNqQztJQUNILENBQUM7SUFPUyxlQUFlLENBQUMsT0FBb0I7UUFDNUMsS0FBSyxDQUFDLGVBQWUsQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUMvQixJQUFJLENBQUMsU0FBUyxDQUFDLFlBQVksQ0FBQyxPQUFPLENBQUMsWUFBWSxDQUFDLENBQUM7UUFDbEQsTUFBTSxHQUFHLEdBQUcsSUFBSSxDQUFDLFVBQVUsRUFBRSxDQUFDO1FBQzlCLElBQUksQ0FBQyxTQUFTLENBQUMsS0FBSyxDQUFDLFlBQVksR0FBRyxDQUFDLElBQUksUUFBUSxHQUFHLENBQUMsT0FBTyxHQUFHLENBQUMsQ0FBQztRQUNqRSxJQUFJLE9BQU8sQ0FBQyxLQUFLLEVBQUU7WUFDakIsSUFBSSxDQUFDLFNBQVMsQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxDQUFDO1NBQ3hDO0lBQ0gsQ0FBQztDQUNGO0FBckZELG9DQXFGQztBQUdELE1BQU0sZ0JBQWlCLFNBQVEsWUFBWTtJQUV6QyxZQUFZLE9BQW9CLEVBQUUsTUFBYztRQUM5QyxLQUFLLENBQUMsRUFBRSxHQUFHLE9BQU8sRUFBRSxDQUFDLENBQUM7UUFDdEIsSUFBSSxDQUFDLFNBQVMsQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLENBQUM7SUFDbkMsQ0FBQztDQUNGIn0=