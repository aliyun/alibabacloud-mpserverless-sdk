"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FunctionUserService = void 0;
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQUEsbUVBRXFDO0FBTXJDLE1BQWEsbUJBQW9CLFNBQVEsK0JBQVc7SUFPM0MsS0FBSyxDQUFDLE9BQU8sQ0FBQyxPQUF3QjtRQUMzQyxNQUFNLE9BQU8sR0FBRyxJQUFJLENBQUMsVUFBVSxFQUFFLENBQUM7UUFDbEMsSUFBSSxNQUFNLEdBQUcsRUFBRSxDQUFDO1FBQ2hCLElBQUksT0FBTyxFQUFFO1lBQ1gsTUFBTSxHQUFHO2dCQUNQLEdBQUcsT0FBTzthQUNYLENBQUM7U0FDSDtRQUNELE9BQU8sQ0FBQyxZQUFZLENBQUM7WUFDbkIsTUFBTSxFQUFFLHFDQUFxQztZQUM3QyxNQUFNO1NBQ1AsQ0FBQyxDQUFDO1FBRUgsTUFBTSxRQUFRLEdBQUcsTUFBTSxJQUFJLENBQUMsU0FBUyxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUN2RCxPQUFPLFFBQVEsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDO0lBQzlCLENBQUM7Q0FDRjtBQXZCRCxrREF1QkMifQ==