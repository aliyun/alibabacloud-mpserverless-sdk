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
    async proxyHttpClientGetRequest(url, query) {
        let queryStr = '';
        if (query && typeof query === 'object') {
            let headStr = '?';
            Object.keys(query).forEach((key) => {
                queryStr += `${headStr}${key}=${query[key]}`;
                headStr = '&';
            });
        }
        return await this.proxyHttpClientRequest(url + queryStr, 'GET');
    }
    async proxyHttpClientPostRequest(url, text, headers) {
        return await this.proxyHttpClientRequest(url, 'POST', text, headers);
    }
    async proxyHttpClientPostJsonRequest(url, json, headers) {
        return await this.proxyHttpClientRequest(url, 'POST', JSON.stringify(json), {
            'Content-Type': 'application/json',
            ...(headers || {}),
        });
    }
    async proxyHttpClientPostFormDataRequest(url, data, headers) {
        let queryStr = '';
        if (data && typeof data === 'object') {
            let headStr = '';
            Object.keys(data).forEach((key) => {
                queryStr += `${headStr}${key}=${encodeURIComponent(data[key])}`;
                headStr = '&';
            });
        }
        return await this.proxyHttpClientRequest(url, 'POST', queryStr, {
            'Content-Type': 'application/x-www-form-urlencoded',
            ...(headers || {}),
        });
    }
    async proxyHttpClientRequest(url, method, body, headers) {
        const request = this.getEncoder();
        let params = {
            method,
            url,
        };
        if (body) {
            params = {
                ...params,
                body,
            };
        }
        if (headers) {
            params = {
                ...params,
                headers,
            };
        }
        request.setBodyField({
            method: 'serverless.http.proxy.request',
            params,
        });
        const response = await this.transport.request(request);
        return response.body.result;
    }
}
exports.FunctionUserService = FunctionUserService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQUEsbUVBQTBEO0FBTTFELE1BQWEsbUJBQW9CLFNBQVEsK0JBQVc7SUFPM0MsS0FBSyxDQUFDLE9BQU8sQ0FBQyxPQUF3QjtRQUMzQyxNQUFNLE9BQU8sR0FBRyxJQUFJLENBQUMsVUFBVSxFQUFFLENBQUM7UUFDbEMsSUFBSSxNQUFNLEdBQUcsRUFBRSxDQUFDO1FBQ2hCLElBQUksT0FBTyxFQUFFO1lBQ1gsTUFBTSxHQUFHO2dCQUNQLEdBQUcsT0FBTzthQUNYLENBQUM7U0FDSDtRQUNELE9BQU8sQ0FBQyxZQUFZLENBQUM7WUFDbkIsTUFBTSxFQUFFLHFDQUFxQztZQUM3QyxNQUFNO1NBQ1AsQ0FBQyxDQUFDO1FBRUgsTUFBTSxRQUFRLEdBQUcsTUFBTSxJQUFJLENBQUMsU0FBUyxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUN2RCxPQUFPLFFBQVEsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDO0lBQzlCLENBQUM7SUFLTSxLQUFLLENBQUMseUJBQXlCLENBQ3BDLEdBQVcsRUFDWCxLQUFjO1FBRWQsSUFBSSxRQUFRLEdBQUcsRUFBRSxDQUFDO1FBQ2xCLElBQUksS0FBSyxJQUFJLE9BQU8sS0FBSyxLQUFLLFFBQVEsRUFBRTtZQUN0QyxJQUFJLE9BQU8sR0FBRyxHQUFHLENBQUM7WUFDbEIsTUFBTSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxHQUFHLEVBQUUsRUFBRTtnQkFDakMsUUFBUSxJQUFJLEdBQUcsT0FBTyxHQUFHLEdBQUcsSUFBSSxLQUFLLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQztnQkFDN0MsT0FBTyxHQUFHLEdBQUcsQ0FBQztZQUNoQixDQUFDLENBQUMsQ0FBQztTQUNKO1FBQ0QsT0FBTyxNQUFNLElBQUksQ0FBQyxzQkFBc0IsQ0FBQyxHQUFHLEdBQUcsUUFBUSxFQUFFLEtBQUssQ0FBQyxDQUFDO0lBQ2xFLENBQUM7SUFLTSxLQUFLLENBQUMsMEJBQTBCLENBQ3JDLEdBQVcsRUFDWCxJQUFhLEVBQ2IsT0FBZ0I7UUFFaEIsT0FBTyxNQUFNLElBQUksQ0FBQyxzQkFBc0IsQ0FBQyxHQUFHLEVBQUUsTUFBTSxFQUFFLElBQUksRUFBRSxPQUFPLENBQUMsQ0FBQztJQUN2RSxDQUFDO0lBS00sS0FBSyxDQUFDLDhCQUE4QixDQUN6QyxHQUFXLEVBQ1gsSUFBYSxFQUNiLE9BQWdCO1FBRWhCLE9BQU8sTUFBTSxJQUFJLENBQUMsc0JBQXNCLENBQ3RDLEdBQUcsRUFDSCxNQUFNLEVBQ04sSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsRUFDcEI7WUFDRSxjQUFjLEVBQUUsa0JBQWtCO1lBQ2xDLEdBQUcsQ0FBQyxPQUFPLElBQUksRUFBRSxDQUFDO1NBQ25CLENBQ0YsQ0FBQztJQUNKLENBQUM7SUFLTSxLQUFLLENBQUMsa0NBQWtDLENBQzdDLEdBQVcsRUFDWCxJQUFhLEVBQ2IsT0FBZ0I7UUFFaEIsSUFBSSxRQUFRLEdBQUcsRUFBRSxDQUFDO1FBQ2xCLElBQUksSUFBSSxJQUFJLE9BQU8sSUFBSSxLQUFLLFFBQVEsRUFBRTtZQUNwQyxJQUFJLE9BQU8sR0FBRyxFQUFFLENBQUM7WUFDakIsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxHQUFHLEVBQUUsRUFBRTtnQkFDaEMsUUFBUSxJQUFJLEdBQUcsT0FBTyxHQUFHLEdBQUcsSUFBSSxrQkFBa0IsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsRUFBRSxDQUFDO2dCQUNoRSxPQUFPLEdBQUcsR0FBRyxDQUFDO1lBQ2hCLENBQUMsQ0FBQyxDQUFDO1NBQ0o7UUFFRCxPQUFPLE1BQU0sSUFBSSxDQUFDLHNCQUFzQixDQUFDLEdBQUcsRUFBRSxNQUFNLEVBQUUsUUFBUSxFQUFFO1lBQzlELGNBQWMsRUFBRSxtQ0FBbUM7WUFDbkQsR0FBRyxDQUFDLE9BQU8sSUFBSSxFQUFFLENBQUM7U0FDbkIsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQUVTLEtBQUssQ0FBQyxzQkFBc0IsQ0FDcEMsR0FBVyxFQUNYLE1BQXNCLEVBQ3RCLElBQXNCLEVBQ3RCLE9BQWdCO1FBRWhCLE1BQU0sT0FBTyxHQUFHLElBQUksQ0FBQyxVQUFVLEVBQUUsQ0FBQztRQUNsQyxJQUFJLE1BQU0sR0FLTjtZQUNGLE1BQU07WUFDTixHQUFHO1NBQ0osQ0FBQztRQUNGLElBQUksSUFBSSxFQUFFO1lBQ1IsTUFBTSxHQUFHO2dCQUNQLEdBQUcsTUFBTTtnQkFDVCxJQUFJO2FBQ0wsQ0FBQztTQUNIO1FBQ0QsSUFBSSxPQUFPLEVBQUU7WUFDWCxNQUFNLEdBQUc7Z0JBQ1AsR0FBRyxNQUFNO2dCQUNULE9BQU87YUFDUixDQUFDO1NBQ0g7UUFDRCxPQUFPLENBQUMsWUFBWSxDQUFDO1lBQ25CLE1BQU0sRUFBRSwrQkFBK0I7WUFDdkMsTUFBTTtTQUNQLENBQUMsQ0FBQztRQUVILE1BQU0sUUFBUSxHQUFHLE1BQU0sSUFBSSxDQUFDLFNBQVMsQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLENBQUM7UUFDdkQsT0FBTyxRQUFRLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQztJQUM5QixDQUFDO0NBQ0Y7QUFuSUQsa0RBbUlDIn0=