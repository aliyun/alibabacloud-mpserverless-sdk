import { __awaiter } from "tslib";
import { HTTPTransport, assert, } from '@alicloud/mpserverless-core';
import { MPHTTPRequestEncoder, MPHTTPResponseDecoder, } from './codec';
import { bizError } from './error';
export class MPHTTPTransport extends HTTPTransport {
    constructor(endpoint) {
        super(endpoint);
    }
    setUserService(userService) {
        this.userService = userService;
    }
    setRequest(request) {
        assert(request, '初始化时缺少 request 参数');
        this.httpRequest = request;
    }
    getEncoder(prefix) {
        return new MPHTTPRequestEncoder(this.endpoint, this.spaceId);
    }
    request(encoder, retried = false) {
        return __awaiter(this, void 0, void 0, function* () {
            const cloned = encoder.clone();
            const newEncoder = yield this.userService.setRequestToken(encoder, retried);
            if (this.ua) {
                newEncoder.setBaseHeaders({
                    'x-serverless-ua': this.ua,
                });
            }
            try {
                const encoded = newEncoder.encodeAsHTTPRequestObject({
                    timeout: this.timeout,
                    dataType: 'json',
                });
                this.logger.info('request encode data', encoded);
                const decoded = yield this.httpRequest(encoded);
                return decoded;
            }
            catch (e) {
                this.logger.error('request error', e);
                const isUnAuthorized = e.error.code === 'GATEWAY_INVALID_TOKEN'
                    || e.error.code === 'InvalidParameter.InvalidToken';
                if (isUnAuthorized) {
                    if (retried) {
                        throw new bizError.UnauthorizedError('授权 token 已过期，重新获取失败');
                    }
                    return yield this.request(cloned, true);
                }
                if (e.error) {
                    throw e.error;
                }
                throw e;
            }
        });
    }
    wrapApi(myMethod) {
        return (args) => __awaiter(this, void 0, void 0, function* () {
            const res = yield myMethod(args);
            this.logger.info('completed request');
            this.logger.info(JSON.stringify(res, null, 2));
            const decoder = new MPHTTPResponseDecoder();
            const response = decoder.decode(res);
            if (response.error) {
                throw response;
            }
            return response;
        });
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHJhbnNwb3J0LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL3RyYW5zcG9ydC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUNMLGFBQWEsRUFFYixNQUFNLEdBRVAsTUFBTSw2QkFBNkIsQ0FBQztBQUVyQyxPQUFPLEVBRUwsb0JBQW9CLEVBQ3BCLHFCQUFxQixHQUN0QixNQUFNLFNBQVMsQ0FBQztBQUNqQixPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sU0FBUyxDQUFDO0FBRW5DLE1BQU0sT0FBTyxlQUFnQixTQUFRLGFBQWE7SUFJaEQsWUFDRSxRQUFnQjtRQUVoQixLQUFLLENBQUMsUUFBUSxDQUFDLENBQUM7SUFDbEIsQ0FBQztJQU1NLGNBQWMsQ0FBQyxXQUFXO1FBQy9CLElBQUksQ0FBQyxXQUFXLEdBQUcsV0FBVyxDQUFDO0lBQ2pDLENBQUM7SUFNTSxVQUFVLENBQUMsT0FBTztRQUN2QixNQUFNLENBQUMsT0FBTyxFQUFFLG1CQUFtQixDQUFDLENBQUM7UUFDckMsSUFBSSxDQUFDLFdBQVcsR0FBRyxPQUFPLENBQUM7SUFDN0IsQ0FBQztJQU1NLFVBQVUsQ0FBQyxNQUFlO1FBQy9CLE9BQU8sSUFBSSxvQkFBb0IsQ0FBQyxJQUFJLENBQUMsUUFBUSxFQUFFLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQztJQUMvRCxDQUFDO0lBT1ksT0FBTyxDQUNsQixPQUE2QixFQUM3QixVQUFtQixLQUFLOztZQUV4QixNQUFNLE1BQU0sR0FBRyxPQUFPLENBQUMsS0FBSyxFQUFFLENBQUM7WUFFL0IsTUFBTSxVQUFVLEdBQUcsTUFBTSxJQUFJLENBQUMsV0FBVyxDQUFDLGVBQWUsQ0FBQyxPQUFPLEVBQUUsT0FBTyxDQUFDLENBQUM7WUFFNUUsSUFBSSxJQUFJLENBQUMsRUFBRSxFQUFFO2dCQUNYLFVBQVUsQ0FBQyxjQUFjLENBQUM7b0JBQ3hCLGlCQUFpQixFQUFFLElBQUksQ0FBQyxFQUFFO2lCQUMzQixDQUFDLENBQUM7YUFDSjtZQUVELElBQUk7Z0JBQ0YsTUFBTSxPQUFPLEdBQUcsVUFBVSxDQUFDLHlCQUF5QixDQUFDO29CQUNuRCxPQUFPLEVBQUUsSUFBSSxDQUFDLE9BQU87b0JBQ3JCLFFBQVEsRUFBRSxNQUFNO2lCQUNqQixDQUFDLENBQUM7Z0JBQ0gsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMscUJBQXFCLEVBQUUsT0FBTyxDQUFDLENBQUM7Z0JBQ2pELE1BQU0sT0FBTyxHQUFHLE1BQU0sSUFBSSxDQUFDLFdBQVcsQ0FBQyxPQUFPLENBQUMsQ0FBQztnQkFDaEQsT0FBTyxPQUFPLENBQUM7YUFDaEI7WUFBQyxPQUFPLENBQUMsRUFBRTtnQkFDVixJQUFJLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxlQUFlLEVBQUUsQ0FBQyxDQUFDLENBQUM7Z0JBQ3RDLE1BQU0sY0FBYyxHQUFHLENBQUMsQ0FBQyxLQUFLLENBQUMsSUFBSSxLQUFLLHVCQUF1Qjt1QkFDNUQsQ0FBQyxDQUFDLEtBQUssQ0FBQyxJQUFJLEtBQUssK0JBQStCLENBQUM7Z0JBRXBELElBQUksY0FBYyxFQUFFO29CQUNsQixJQUFJLE9BQU8sRUFBRTt3QkFDWCxNQUFNLElBQUksUUFBUSxDQUFDLGlCQUFpQixDQUFDLHFCQUFxQixDQUFDLENBQUM7cUJBQzdEO29CQUNELE9BQU8sTUFBTSxJQUFJLENBQUMsT0FBTyxDQUFDLE1BQU0sRUFBRSxJQUFJLENBQUMsQ0FBQztpQkFDekM7Z0JBQ0QsSUFBSSxDQUFDLENBQUMsS0FBSyxFQUFFO29CQUNYLE1BQU0sQ0FBQyxDQUFDLEtBQUssQ0FBQztpQkFDZjtnQkFDRCxNQUFNLENBQUMsQ0FBQzthQUNUO1FBQ0gsQ0FBQztLQUFBO0lBTU0sT0FBTyxDQUFDLFFBQVE7UUFDckIsT0FBTyxDQUFNLElBQUksRUFBQyxFQUFFO1lBQ2xCLE1BQU0sR0FBRyxHQUFHLE1BQU0sUUFBUSxDQUFDLElBQUksQ0FBQyxDQUFDO1lBQ2pDLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLG1CQUFtQixDQUFDLENBQUM7WUFDdEMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxHQUFHLEVBQUUsSUFBSSxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDL0MsTUFBTSxPQUFPLEdBQUcsSUFBSSxxQkFBcUIsRUFBRSxDQUFDO1lBQzVDLE1BQU0sUUFBUSxHQUFHLE9BQU8sQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUM7WUFDckMsSUFBSSxRQUFRLENBQUMsS0FBSyxFQUFFO2dCQUNsQixNQUFNLFFBQVEsQ0FBQzthQUNoQjtZQUNELE9BQU8sUUFBUSxDQUFDO1FBQ2xCLENBQUMsQ0FBQSxDQUFDO0lBQ0osQ0FBQztDQUNGIn0=