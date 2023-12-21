"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FunctionHTTPTransport = void 0;
const mpserverless_core_1 = require("@alicloud/mpserverless-core");
const codec_1 = require("./codec");
class FunctionHTTPTransport extends mpserverless_core_1.HTTPTransport {
    constructor(endpoint) {
        super(endpoint);
        this.defaultHeaders = null;
    }
    setAuthUID(uid) {
        mpserverless_core_1.assert(uid, 'x-serverless-auth-uid is required');
        this.uid = uid;
    }
    setRequestId(requestId) {
        mpserverless_core_1.assert(requestId, 'x-basement-trace-id is required');
        this.requestId = requestId;
    }
    setUserId(userId) {
        mpserverless_core_1.assert(userId, 'userId is required');
        this.userId = userId;
    }
    setToken(token) {
        mpserverless_core_1.assert(token, 'token is required');
        this.token = token;
    }
    setRequest(request) {
        mpserverless_core_1.assert(request, '初始化时缺少 request 参数');
        this.httpRequest = request;
        if (process.env.FC_FUNCTION_NAME) {
            this.defaultHeaders = {
                'x-mpserverless-function-id': process.env.FC_FUNCTION_NAME,
                'Accept-Encoding': 'gzip, deflate',
            };
        }
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
        if (this.defaultHeaders) {
            Object.keys(this.defaultHeaders).forEach((key) => {
                encoder.setBaseHeaders({
                    [key]: this.defaultHeaders[key],
                });
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHJhbnNwb3J0LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vc3JjL3RyYW5zcG9ydC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFBQSxtRUFLcUM7QUFDckMsbUNBR2lCO0FBRWpCLE1BQWEscUJBQXNCLFNBQVEsaUNBQWE7SUFRdEQsWUFBWSxRQUFnQjtRQUMxQixLQUFLLENBQUMsUUFBUSxDQUFDLENBQUM7UUFIUixtQkFBYyxHQUFRLElBQUksQ0FBQztJQUlyQyxDQUFDO0lBTU0sVUFBVSxDQUFDLEdBQVc7UUFDM0IsMEJBQU0sQ0FBQyxHQUFHLEVBQUUsbUNBQW1DLENBQUMsQ0FBQztRQUVqRCxJQUFJLENBQUMsR0FBRyxHQUFHLEdBQUcsQ0FBQztJQUNqQixDQUFDO0lBTU0sWUFBWSxDQUFDLFNBQWlCO1FBQ25DLDBCQUFNLENBQUMsU0FBUyxFQUFFLGlDQUFpQyxDQUFDLENBQUM7UUFFckQsSUFBSSxDQUFDLFNBQVMsR0FBRyxTQUFTLENBQUM7SUFDN0IsQ0FBQztJQU1NLFNBQVMsQ0FBQyxNQUFjO1FBQzdCLDBCQUFNLENBQUMsTUFBTSxFQUFFLG9CQUFvQixDQUFDLENBQUM7UUFFckMsSUFBSSxDQUFDLE1BQU0sR0FBRyxNQUFNLENBQUM7SUFDdkIsQ0FBQztJQU1NLFFBQVEsQ0FBQyxLQUFhO1FBQzNCLDBCQUFNLENBQUMsS0FBSyxFQUFFLG1CQUFtQixDQUFDLENBQUM7UUFFbkMsSUFBSSxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUM7SUFDckIsQ0FBQztJQU1NLFVBQVUsQ0FBQyxPQUFPO1FBQ3ZCLDBCQUFNLENBQUMsT0FBTyxFQUFFLG1CQUFtQixDQUFDLENBQUM7UUFDckMsSUFBSSxDQUFDLFdBQVcsR0FBRyxPQUFPLENBQUM7UUFDM0IsSUFBSSxPQUFPLENBQUMsR0FBRyxDQUFDLGdCQUFnQixFQUFFO1lBQ2hDLElBQUksQ0FBQyxjQUFjLEdBQUc7Z0JBQ3BCLDRCQUE0QixFQUFFLE9BQU8sQ0FBQyxHQUFHLENB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