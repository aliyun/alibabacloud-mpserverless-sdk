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
    async proxyHttpClientGetRequest(url, query, headers) {
        let queryStr = '';
        if (query && typeof query === 'object') {
            let headStr = '?';
            Object.keys(query).forEach((key) => {
                queryStr += `${headStr}${key}=${query[key]}`;
                headStr = '&';
            });
        }
        return await this.proxyHttpClientRequest(url + queryStr, 'GET', null, headers);
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
    async report(options) {
        const request = this.getEncoder();
        let params = {};
        if (options) {
            params = {
                ...options,
            };
        }
        request.setBodyField({
            method: 'inner.method.billing.report',
            params,
        });
        await this.transport.request(request);
    }
    async redisCli(commands) {
        const request = this.getEncoder();
        let params = {};
        if (commands) {
            params = {
                commands,
            };
        }
        request.setBodyField({
            method: 'serverless.redis.cli',
            params,
        });
        const response = await this.transport.request(request);
        return response.body.result;
    }
}
exports.FunctionUserService = FunctionUserService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQUEsbUVBQTBEO0FBTTFELE1BQWEsbUJBQW9CLFNBQVEsK0JBQVc7SUFPM0MsS0FBSyxDQUFDLE9BQU8sQ0FBQyxPQUF3QjtRQUMzQyxNQUFNLE9BQU8sR0FBRyxJQUFJLENBQUMsVUFBVSxFQUFFLENBQUM7UUFDbEMsSUFBSSxNQUFNLEdBQUcsRUFBRSxDQUFDO1FBQ2hCLElBQUksT0FBTyxFQUFFO1lBQ1gsTUFBTSxHQUFHO2dCQUNQLEdBQUcsT0FBTzthQUNYLENBQUM7U0FDSDtRQUNELE9BQU8sQ0FBQyxZQUFZLENBQUM7WUFDbkIsTUFBTSxFQUFFLHFDQUFxQztZQUM3QyxNQUFNO1NBQ1AsQ0FBQyxDQUFDO1FBRUgsTUFBTSxRQUFRLEdBQUcsTUFBTSxJQUFJLENBQUMsU0FBUyxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUN2RCxPQUFPLFFBQVEsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDO0lBQzlCLENBQUM7SUFLTSxLQUFLLENBQUMseUJBQXlCLENBQ3BDLEdBQVcsRUFDWCxLQUFjLEVBQ2QsT0FBZ0I7UUFFaEIsSUFBSSxRQUFRLEdBQUcsRUFBRSxDQUFDO1FBQ2xCLElBQUksS0FBSyxJQUFJLE9BQU8sS0FBSyxLQUFLLFFBQVEsRUFBRTtZQUN0QyxJQUFJLE9BQU8sR0FBRyxHQUFHLENBQUM7WUFDbEIsTUFBTSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxHQUFHLEVBQUUsRUFBRTtnQkFDakMsUUFBUSxJQUFJLEdBQUcsT0FBTyxHQUFHLEdBQUcsSUFBSSxLQUFLLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQztnQkFDN0MsT0FBTyxHQUFHLEdBQUcsQ0FBQztZQUNoQixDQUFDLENBQUMsQ0FBQztTQUNKO1FBQ0QsT0FBTyxNQUFNLElBQUksQ0FBQyxzQkFBc0IsQ0FDdEMsR0FBRyxHQUFHLFFBQVEsRUFDZCxLQUFLLEVBQ0wsSUFBSSxFQUNKLE9BQU8sQ0FDUixDQUFDO0lBQ0osQ0FBQztJQUtNLEtBQUssQ0FBQywwQkFBMEIsQ0FDckMsR0FBVyxFQUNYLElBQWEsRUFDYixPQUFnQjtRQUVoQixPQUFPLE1BQU0sSUFBSSxDQUFDLHNCQUFzQixDQUFDLEdBQUcsRUFBRSxNQUFNLEVBQUUsSUFBSSxFQUFFLE9BQU8sQ0FBQyxDQUFDO0lBQ3ZFLENBQUM7SUFLTSxLQUFLLENBQUMsOEJBQThCLENBQ3pDLEdBQVcsRUFDWCxJQUFhLEVBQ2IsT0FBZ0I7UUFFaEIsT0FBTyxNQUFNLElBQUksQ0FBQyxzQkFBc0IsQ0FDdEMsR0FBRyxFQUNILE1BQU0sRUFDTixJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxFQUNwQjtZQUNFLGNBQWMsRUFBRSxrQkFBa0I7WUFDbEMsR0FBRyxDQUFDLE9BQU8sSUFBSSxFQUFFLENBQUM7U0FDbkIsQ0FDRixDQUFDO0lBQ0osQ0FBQztJQUtNLEtBQUssQ0FBQyxrQ0FBa0MsQ0FDN0MsR0FBVyxFQUNYLElBQWEsRUFDYixPQUFnQjtRQUVoQixJQUFJLFFBQVEsR0FBRyxFQUFFLENBQUM7UUFDbEIsSUFBSSxJQUFJLElBQUksT0FBTyxJQUFJLEtBQUssUUFBUSxFQUFFO1lBQ3BDLElBQUksT0FBTyxHQUFHLEVBQUUsQ0FBQztZQUNqQixNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLEdBQUcsRUFBRSxFQUFFO2dCQUNoQyxRQUFRLElBQUksR0FBRyxPQUFPLEdBQUcsR0FBRyxJQUFJLGtCQUFrQixDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxFQUFFLENBQUM7Z0JBQ2hFLE9BQU8sR0FBRyxHQUFHLENBQUM7WUFDaEIsQ0FBQyxDQUFDLENBQUM7U0FDSjtRQUVELE9BQU8sTUFBTSxJQUFJLENBQUMsc0JBQXNCLENBQUMsR0FBRyxFQUFFLE1BQU0sRUFBRSxRQUFRLEVBQUU7WUFDOUQsY0FBYyxFQUFFLG1DQUFtQztZQUNuRCxHQUFHLENBQUMsT0FBTyxJQUFJLEVBQUUsQ0FBQztTQUNuQixDQUFDLENBQUM7SUFDTCxDQUFDO0lBRVMsS0FBSyxDQUFDLHNCQUFzQixDQUNwQyxHQUFXLEVBQ1gsTUFBc0IsRUFDdEIsSUFBc0IsRUFDdEIsT0FBZ0I7UUFFaEIsTUFBTSxPQUFPLEdBQUcsSUFBSSxDQUFDLFVBQVUsRUFBRSxDQUFDO1FBQ2xDLElBQUksTUFBTSxHQUtOO1lBQ0YsTUFBTTtZQUNOLEdBQUc7U0FDSixDQUFDO1FBQ0YsSUFBSSxJQUFJLEVBQUU7WUFDUixNQUFNLEdBQUc7Z0JBQ1AsR0FBRyxNQUFNO2dCQUNULElBQUk7YUFDTCxDQUFDO1NBQ0g7UUFDRCxJQUFJLE9BQU8sRUFBRTtZQUNYLE1BQU0sR0FBRztnQkFDUCxHQUFHLE1BQU07Z0JBQ1QsT0FBTzthQUNSLENBQUM7U0FDSDtRQUNELE9BQU8sQ0FBQyxZQUFZLENBQUM7WUFDbkIsTUFBTSxFQUFFLCtCQUErQjtZQUN2QyxNQUFNO1NBQ1AsQ0FBQyxDQUFDO1FBRUgsTUFBTSxRQUFRLEdBQUcsTUFBTSxJQUFJLENBQUMsU0FBUyxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUN2RCxPQUFPLFFBQVEsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDO0lBQzlCLENBQUM7SUFLUyxLQUFLLENBQUMsTUFBTSxDQUFDLE9BSXRCO1FBQ0MsTUFBTSxPQUFPLEdBQUcsSUFBSSxDQUFDLFVBQVUsRUFBRSxDQUFDO1FBQ2xDLElBQUksTUFBTSxHQUFHLEVBQUUsQ0FBQztRQUNoQixJQUFJLE9BQU8sRUFBRTtZQUNYLE1BQU0sR0FBRztnQkFDUCxHQUFHLE9BQU87YUFDWCxDQUFDO1NBQ0g7UUFDRCxPQUFPLENBQUMsWUFBWSxDQUFDO1lBQ25CLE1BQU0sRUFBRSw2QkFBNkI7WUFDckMsTUFBTTtTQUNQLENBQUMsQ0FBQztRQUVILE1BQU0sSUFBSSxDQUFDLFNBQVMsQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLENBQUM7SUFDeEMsQ0FBQztJQUtTLEtBQUssQ0FBQyxRQUFRLENBQUMsUUFBa0I7UUFDekMsTUFBTSxPQUFPLEdBQUcsSUFBSSxDQUFDLFVBQVUsRUFBRSxDQUFDO1FBQ2xDLElBQUksTUFBTSxHQUFHLEVBQUUsQ0FBQztRQUNoQixJQUFJLFFBQVEsRUFBRTtZQUNaLE1BQU0sR0FBRztnQkFDUCxRQUFRO2FBQ1QsQ0FBQztTQUNIO1FBQ0QsT0FBTyxDQUFDLFlBQVksQ0FBQztZQUNuQixNQUFNLEVBQUUsc0JBQXNCO1lBQzlCLE1BQU07U0FDUCxDQUFDLENBQUM7UUFFSCxNQUFNLFFBQVEsR0FBRyxNQUFNLElBQUksQ0FBQyxTQUFTLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBRXZELE9BQU8sUUFBUSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUM7SUFDOUIsQ0FBQztDQUNGO0FBckxELGtEQXFMQyJ9