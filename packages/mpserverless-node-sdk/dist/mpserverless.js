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
        const request = urllib_1.default.request;
        this.db = new mp_db_service_1.DbService(this.transport);
        this.user = new mpserverless_node_user_service_1.FunctionUserService(this.transport);
        this.file = new mpserverless_node_file_service_1.FunctionFileService(this.transport, request);
        this.function = new mp_function_service_1.FunctionService(this.transport);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibXBzZXJ2ZXJsZXNzLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vc3JjL21wc2VydmVybGVzcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFBQSxtRUFLcUM7QUFDckMsMkNBQW9EO0FBQ3BELDREQUE0QjtBQUM1Qix1RUFBZ0U7QUFDaEUsNkZBQStFO0FBQy9FLDZGQUErRTtBQUMvRSwyREFBb0Q7QUFFcEQsTUFBYSxZQUFhLFNBQVEsb0NBQUk7SUFTcEMsWUFBWSxPQUFvQjtRQUM5QixLQUFLLENBQUMsRUFBRSxVQUFVLEVBQUUsZ0JBQU0sRUFBRSxHQUFHLE9BQU8sRUFBRSxhQUFhLEVBQUUsaUNBQXFCLEVBQUUsQ0FBQyxDQUFDO1FBQ2hGLDBCQUFNLENBQUMsT0FBTyxDQUFDLFlBQVksRUFBRSwwQkFBMEIsQ0FBQyxDQUFDO1FBRXpELElBQUksT0FBTyxDQUFDLE1BQU0sRUFBRTtZQUNsQixJQUFJLENBQUMsU0FBUyxDQUFDLFVBQVUsQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLENBQUM7U0FDM0M7UUFFRCxJQUFJLE9BQU8sQ0FBQyxTQUFTLEVBQUU7WUFDckIsSUFBSSxDQUFDLFNBQVMsQ0FBQyxZQUFZLENBQUMsT0FBTyxDQUFDLFNBQVMsQ0FBQyxDQUFDO1NBQ2hEO1FBRUQsTUFBTSxPQUFPLEdBQUcsZ0JBQU0sQ0FBQyxPQUFPLENBQUM7UUFDL0IsSUFBSSxDQUFDLEVBQUUsR0FBRyxJQUFJLHlCQUFTLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDO1FBQ3hDLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxvREFBbUIsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUM7UUFDcEQsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLG9EQUFtQixDQUFDLElBQUksQ0FBQyxTQUFTLEVBQUUsT0FBTyxDQUFDLENBQUM7UUFDN0QsSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLHFDQUFlLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDO1FBQ3BELElBQUksQ0FBQyxTQUFTLENBQUMsVUFBVSxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBRW5DLElBQUksQ0FBQyxPQUFPLEdBQUcsT0FBTyxDQUFDO0lBQ3pCLENBQUM7SUFNUyxVQUFVO1FBQ2xCLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxFQUFFO1lBR2IsSUFBSSxDQUFDLEdBQUcsR0FBRyxPQUFPLENBQUMsaUJBQWlCLENBQUMsQ0FBQztTQUN2QztRQUNELE9BQU8sSUFBSSxDQUFDLEdBQUcsQ0FBQztJQUNsQixDQUFDO0lBT00sU0FBUyxDQUFDLE1BQWM7UUFFN0IsT0FBTyxJQUFJLGdCQUFnQixDQUFDLElBQUksQ0FBQyxPQUFPLEVBQUUsTUFBTSxDQUFDLENBQUM7SUFDcEQsQ0FBQztJQU1ELElBQVcsT0FBTztRQUNoQixPQUFPLElBQUksQ0FBQyxVQUFVLEVBQUUsQ0FBQyxPQUFPLENBQUM7SUFDbkMsQ0FBQztJQU1NLEtBQUssQ0FBQyxTQUFpQjtRQUM1QixJQUFJLFNBQVMsSUFBSSxJQUFJLENBQUMsU0FBUyxFQUFFO1lBQy9CLElBQUksQ0FBQyxTQUFTLENBQUMsS0FBSyxDQUFDLFNBQVMsQ0FBQyxDQUFDO1NBQ2pDO0lBQ0gsQ0FBQztJQU9TLGVBQWUsQ0FBQyxPQUFvQjtRQUM1QyxLQUFLLENBQUMsZUFBZSxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBQy9CLElBQUksQ0FBQyxTQUFTLENBQUMsWUFBWSxDQUFDLE9BQU8sQ0FBQyxZQUFZLENBQUMsQ0FBQztRQUNsRCxNQUFNLEdBQUcsR0FBRyxJQUFJLENBQUMsVUFBVSxFQUFFLENBQUM7UUFDOUIsSUFBSSxDQUFDLFNBQVMsQ0FBQyxLQUFLLENBQUMsWUFBWSxHQUFHLENBQUMsSUFBSSxRQUFRLEdBQUcsQ0FBQyxPQUFPLEdBQUcsQ0FBQyxDQUFDO1FBQ2pFLElBQUksT0FBTyxDQUFDLEtBQUssRUFBRTtZQUNqQixJQUFJLENBQUMsU0FBUyxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLENBQUM7U0FDeEM7SUFDSCxDQUFDO0NBQ0Y7QUF0RkQsb0NBc0ZDO0FBR0QsTUFBTSxnQkFBaUIsU0FBUSxZQUFZO0lBRXpDLFlBQVksT0FBb0IsRUFBRSxNQUFjO1FBQzlDLEtBQUssQ0FBQyxFQUFFLEdBQUcsT0FBTyxFQUFFLENBQUMsQ0FBQztRQUN0QixJQUFJLENBQUMsU0FBUyxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMsQ0FBQztJQUNuQyxDQUFDO0NBQ0YifQ==