"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mpserverless_core_1 = require("@alicloud/mpserverless-core");
const codec_1 = require("./codec");
class FunctionHTTPTransport extends mpserverless_core_1.HTTPTransport {
    constructor(endpoint) {
        super(endpoint);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHJhbnNwb3J0LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vc3JjL3RyYW5zcG9ydC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLG1FQUtxQztBQUNyQyxtQ0FFaUI7QUFFakIsTUFBYSxxQkFBc0IsU0FBUSxpQ0FBYTtJQU90RCxZQUNFLFFBQWdCO1FBRWhCLEtBQUssQ0FBQyxRQUFRLENBQUMsQ0FBQztJQUNsQixDQUFDO0lBTU0sVUFBVSxDQUFDLEdBQVc7UUFDM0IsMEJBQU0sQ0FBQyxHQUFHLEVBQUUsbUNBQW1DLENBQUMsQ0FBQztRQUVqRCxJQUFJLENBQUMsR0FBRyxHQUFHLEdBQUcsQ0FBQztJQUNqQixDQUFDO0lBTU0sWUFBWSxDQUFDLFNBQWlCO1FBQ25DLDBCQUFNLENBQUMsU0FBUyxFQUFFLGlDQUFpQyxDQUFDLENBQUM7UUFFckQsSUFBSSxDQUFDLFNBQVMsR0FBRyxTQUFTLENBQUM7SUFDN0IsQ0FBQztJQU1NLFNBQVMsQ0FBQyxNQUFjO1FBQzdCLDBCQUFNLENBQUMsTUFBTSxFQUFFLG9CQUFvQixDQUFDLENBQUM7UUFFckMsSUFBSSxDQUFDLE1BQU0sR0FBRyxNQUFNLENBQUM7SUFDdkIsQ0FBQztJQU1NLFFBQVEsQ0FBQyxLQUFhO1FBQzNCLDBCQUFNLENBQUMsS0FBSyxFQUFFLG1CQUFtQixDQUFDLENBQUM7UUFFbkMsSUFBSSxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUM7SUFDckIsQ0FBQztJQU1NLFVBQVUsQ0FBQyxPQUFPO1FBQ3ZCLDBCQUFNLENBQUMsT0FBTyxFQUFFLG1CQUFtQixDQUFDLENBQUM7UUFDckMsSUFBSSxDQUFDLFdBQVcsR0FBRyxPQUFPLENBQUM7SUFDN0IsQ0FBQztJQU1NLFVBQVUsQ0FBQyxNQUFlO1FBQy9CLE1BQU0sT0FBTyxHQUFHLElBQUksa0NBQTBCLENBQUMsSUFBSSxDQUFDLFFBQVEsRUFBRSxJQUFJLENBQUMsT0FBTyxFQUFFLE1BQU0sQ0FBQyxDQUFDO1FBQ3BGLElBQUksSUFBSSxDQUFDLE1BQU0sRUFBRTtZQUNmLE9BQU8sQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1NBQ2hDO1FBQ0QsSUFBSSxJQUFJLENBQUMsS0FBSyxFQUFFO1lBQ2QsT0FBTyxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7U0FDOUI7UUFDRCxPQUFPLE9BQU8sQ0FBQztJQUNqQixDQUFDO0lBTU0sS0FBSyxDQUFDLE9BQU8sQ0FDbEIsT0FBbUM7UUFFbkMsT0FBTyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUM7UUFDN0IsSUFBSSxJQUFJLENBQUMsRUFBRSxFQUFFO1lBQ1gsT0FBTyxDQUFDLGNBQWMsQ0FBQztnQkFDckIsaUJBQWlCLEVBQUUsSUFBSSxDQUFDLEVBQUU7YUFDM0IsQ0FBQyxDQUFDO1NBQ0o7UUFDRCxJQUFJLElBQUksQ0FBQyxHQUFHLEVBQUU7WUFFWixPQUFPLENBQUMsY0FBYyxDQUFDO2dCQUNyQixxQkFBcUIsRUFBRSxJQUFJLENBQUMsR0FBRzthQUNoQyxDQUFDLENBQUM7U0FDSjtRQUNELElBQUksSUFBSSxDQUFDLFNBQVMsRUFBRTtZQUVsQixPQUFPLENBQUMsY0FBYyxDQUFDO2dCQUNyQixjQUFjLEVBQUUsSUFBSSxDQUFDLFNBQVM7YUFDL0IsQ0FBQyxDQUFDO1NBQ0o7UUFDRCxNQUFNLE9BQU8sR0FBRyxPQUFPLENBQUMseUJBQXlCLENBQUM7WUFDaEQsT0FBTyxFQUFFLElBQUksQ0FBQyxPQUFPO1lBQ3JCLFFBQVEsRUFBRSxNQUFNO1NBQ2pCLENBQUMsQ0FBQztRQUVILE1BQU0sRUFBRSxHQUFHLEVBQUUsSUFBSSxFQUFFLEdBQUcsT0FBTyxDQUFDO1FBQzlCLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLEdBQUcsR0FBRyxZQUFZLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxPQUFPLEVBQUUsSUFBSSxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDeEUsTUFBTSxHQUFHLEdBQUcsTUFBTSxJQUFJLENBQUMsV0FBVyxDQUFDLEdBQUcsRUFBRSxPQUFPLENBQUMsQ0FBQztRQUNqRCxNQUFNLE9BQU8sR0FBRyxJQUFJLG1DQUEyQixFQUFFLENBQUM7UUFFbEQsTUFBTSxRQUFRLEdBQUcsT0FBTyxDQUFDLE1BQU0sQ0FBQyxHQUFHLEVBQUUsSUFBSSxJQUFJLElBQUksQ0FBQyxNQUFNLEtBQUssK0JBQStCLENBQUMsQ0FBQztRQUM5RixJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxHQUFHLEdBQUcsYUFBYSxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsUUFBUSxFQUFFLElBQUksRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQzFFLE9BQU8sUUFBUSxDQUFDO0lBQ2xCLENBQUM7Q0FDRjtBQXBIRCxzREFvSEMifQ==