"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FunctionHTTPTransport = void 0;
const mpserverless_core_inner_1 = require("@ali/mpserverless-core-inner");
const codec_1 = require("./codec");
class FunctionHTTPTransport extends mpserverless_core_inner_1.HTTPTransport {
    constructor(endpoint) {
        super(endpoint);
    }
    setAuthUID(uid) {
        mpserverless_core_inner_1.assert(uid, 'x-serverless-auth-uid is required');
        this.uid = uid;
    }
    setRequestId(requestId) {
        mpserverless_core_inner_1.assert(requestId, 'x-basement-trace-id is required');
        this.requestId = requestId;
    }
    setUserId(userId) {
        mpserverless_core_inner_1.assert(userId, 'userId is required');
        this.userId = userId;
    }
    setToken(token) {
        mpserverless_core_inner_1.assert(token, 'token is required');
        this.token = token;
    }
    setRequest(request) {
        mpserverless_core_inner_1.assert(request, '初始化时缺少 request 参数');
        this.httpRequest = request;
    }
    getEncoder(prefix) {
        const encoder = new codec_1.NodeCoreHTTPRequestEncoder(this.endpoint, this.spaceId, prefix);
        if (this.userId) {
            encoder.setUserId(this.userId);
        }
        if (this.token) {
            encoder.setToken(this.token);
        }
        return encoder;
    }
    async request(encoder) {
        encoder.sign(this.appSecret);
        if (this.ua) {
            encoder.setBaseHeaders({
                'x-serverless-ua': this.ua,
            });
        }
        if (this.uid) {
            encoder.setBaseHeaders({
                'x-basement-auth-uid': this.uid,
            });
        }
        if (this.requestId) {
            encoder.setBaseHeaders({
                'SOFA-TraceId': this.requestId,
            });
        }
        const encoded = encoder.encodeAsHTTPRequestObject({
            timeout: this.timeout,
            dataType: 'json',
        });
        const { url, data } = encoded;
        this.logger.info(url + ', request ' + JSON.stringify(encoded, null, 2));
        const raw = await this.httpRequest(url, encoded);
        const decoder = new codec_1.NodeCoreHTTPResponseDecoder();
        const response = decoder.decode(raw, data && data.method === 'serverless.db.default.execute');
        this.logger.info(url + ', response ' + JSON.stringify(response, null, 2));
        return response;
    }
}
exports.FunctionHTTPTransport = FunctionHTTPTransport;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHJhbnNwb3J0LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vc3JjL3RyYW5zcG9ydC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFBQSwwRUFLc0M7QUFDdEMsbUNBRWlCO0FBRWpCLE1BQWEscUJBQXNCLFNBQVEsdUNBQWE7SUFPdEQsWUFDRSxRQUFnQjtRQUVoQixLQUFLLENBQUMsUUFBUSxDQUFDLENBQUM7SUFDbEIsQ0FBQztJQU1NLFVBQVUsQ0FBQyxHQUFXO1FBQzNCLGdDQUFNLENBQUMsR0FBRyxFQUFFLG1DQUFtQyxDQUFDLENBQUM7UUFFakQsSUFBSSxDQUFDLEdBQUcsR0FBRyxHQUFHLENBQUM7SUFDakIsQ0FBQztJQU1NLFlBQVksQ0FBQyxTQUFpQjtRQUNuQyxnQ0FBTSxDQUFDLFNBQVMsRUFBRSxpQ0FBaUMsQ0FBQyxDQUFDO1FBRXJELElBQUksQ0FBQyxTQUFTLEdBQUcsU0FBUyxDQUFDO0lBQzdCLENBQUM7SUFNTSxTQUFTLENBQUMsTUFBYztRQUM3QixnQ0FBTSxDQUFDLE1BQU0sRUFBRSxvQkFBb0IsQ0FBQyxDQUFDO1FBRXJDLElBQUksQ0FBQyxNQUFNLEdBQUcsTUFBTSxDQUFDO0lBQ3ZCLENBQUM7SUFNTSxRQUFRLENBQUMsS0FBYTtRQUMzQixnQ0FBTSxDQUFDLEtBQUssRUFBRSxtQkFBbUIsQ0FBQyxDQUFDO1FBRW5DLElBQUksQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFDO0lBQ3JCLENBQUM7SUFNTSxVQUFVLENBQUMsT0FBTztRQUN2QixnQ0FBTSxDQUFDLE9BQU8sRUFBRSxtQkFBbUIsQ0FBQyxDQUFDO1FBQ3JDLElBQUksQ0FBQyxXQUFXLEdBQUcsT0FBTyxDQUFDO0lBQzdCLENBQUM7SUFNTSxVQUFVLENBQUMsTUFBZTtRQUMvQixNQUFNLE9BQU8sR0FBRyxJQUFJLGtDQUEwQixDQUFDLElBQUksQ0FBQyxRQUFRLEVBQUUsSUFBSSxDQUFDLE9BQU8sRUFBRSxNQUFNLENBQUMsQ0FBQztRQUNwRixJQUFJLElBQUksQ0FBQyxNQUFNLEVBQUU7WUFDZixPQUFPLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztTQUNoQztRQUNELElBQUksSUFBSSxDQUFDLEtBQUssRUFBRTtZQUNkLE9BQU8sQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO1NBQzlCO1FBQ0QsT0FBTyxPQUFPLENBQUM7SUFDakIsQ0FBQztJQU1NLEtBQUssQ0FBQyxPQUFPLENBQ2xCLE9BQW1DO1FBRW5DLE9BQU8sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDO1FBQzdCLElBQUksSUFBSSxDQUFDLEVBQUUsRUFBRTtZQUNYLE9BQU8sQ0FBQyxjQUFjLENBQUM7Z0JBQ3JCLGlCQUFpQixFQUFFLElBQUksQ0FBQyxFQUFFO2FBQzNCLENBQUMsQ0FBQztTQUNKO1FBQ0QsSUFBSSxJQUFJLENBQUMsR0FBRyxFQUFFO1lBRVosT0FBTyxDQUFDLGNBQWMsQ0FBQztnQkFDckIscUJBQXFCLEVBQUUsSUFBSSxDQUFDLEdBQUc7YUFDaEMsQ0FBQyxDQUFDO1NBQ0o7UUFDRCxJQUFJLElBQUksQ0FBQyxTQUFTLEVBQUU7WUFFbEIsT0FBTyxDQUFDLGNBQWMsQ0FBQztnQkFDckIsY0FBYyxFQUFFLElBQUksQ0FBQyxTQUFTO2FBQy9CLENBQUMsQ0FBQztTQUNKO1FBQ0QsTUFBTSxPQUFPLEdBQUcsT0FBTyxDQUFDLHlCQUF5QixDQUFDO1lBQ2hELE9BQU8sRUFBRSxJQUFJLENBQUMsT0FBTztZQUNyQixRQUFRLEVBQUUsTUFBTTtTQUNqQixDQUFDLENBQUM7UUFFSCxNQUFNLEVBQUUsR0FBRyxFQUFFLElBQUksRUFBRSxHQUFHLE9BQU8sQ0FBQztRQUM5QixJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxHQUFHLEdBQUcsWUFBWSxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsT0FBTyxFQUFFLElBQUksRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ3hFLE1BQU0sR0FBRyxHQUFHLE1BQU0sSUFBSSxDQUFDLFdBQVcsQ0FBQyxHQUFHLEVBQUUsT0FBTyxDQUFDLENBQUM7UUFDakQsTUFBTSxPQUFPLEdBQUcsSUFBSSxtQ0FBMkIsRUFBRSxDQUFDO1FBRWxELE1BQU0sUUFBUSxHQUFHLE9BQU8sQ0FBQyxNQUFNLENBQUMsR0FBRyxFQUFFLElBQUksSUFBSSxJQUFJLENBQUMsTUFBTSxLQUFLLCtCQUErQixDQUFDLENBQUM7UUFDOUYsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsR0FBRyxHQUFHLGFBQWEsR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLFFBQVEsRUFBRSxJQUFJLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUMxRSxPQUFPLFFBQVEsQ0FBQztJQUNsQixDQUFDO0NBQ0Y7QUFwSEQsc0RBb0hDIn0=