"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mpserverless_core_1 = require("@alicloud/mpserverless-core");
class FunctionUserService extends mpserverless_core_1.BaseService {
    async getInfo(options) {
        const request = this.getEncoder();
        let params = {};
        if (options) {
            params = {
                ...options,
            };
        }
        request.setBodyField({
            method: 'serverless.auth.user.getProfileInfo',
            params,
        });
        const response = await this.transport.request(request);
        return response.body.result;
    }
}
exports.FunctionUserService = FunctionUserService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxtRUFFcUM7QUFNckMsTUFBYSxtQkFBb0IsU0FBUSwrQkFBVztJQU8zQyxLQUFLLENBQUMsT0FBTyxDQUFDLE9BQXdCO1FBQzNDLE1BQU0sT0FBTyxHQUFHLElBQUksQ0FBQyxVQUFVLEVBQUUsQ0FBQztRQUNsQyxJQUFJLE1BQU0sR0FBRyxFQUFFLENBQUM7UUFDaEIsSUFBSSxPQUFPLEVBQUU7WUFDWCxNQUFNLEdBQUc7Z0JBQ1AsR0FBRyxPQUFPO2FBQ1gsQ0FBQztTQUNIO1FBQ0QsT0FBTyxDQUFDLFlBQVksQ0FBQztZQUNuQixNQUFNLEVBQUUscUNBQXFDO1lBQzdDLE1BQU07U0FDUCxDQUFDLENBQUM7UUFFSCxNQUFNLFFBQVEsR0FBRyxNQUFNLElBQUksQ0FBQyxTQUFTLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBQ3ZELE9BQU8sUUFBUSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUM7SUFDOUIsQ0FBQztDQUNGO0FBdkJELGtEQXVCQyJ9