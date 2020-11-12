import { __assign, __extends } from "tslib";
import { HTTPRequestEncoder, HTTPResponseDecoder, PREFIX, ErrorName, ErrorType, } from '@ant-basement/core';
import crypto from 'crypto-js/core';
import HmacMD5 from 'crypto-js/hmac-md5';
import { isNumber } from 'util';
import { MPServerlessClientError } from './error';
var MiniProgramHTTPRequestEncoder = (function (_super) {
    __extends(MiniProgramHTTPRequestEncoder, _super);
    function MiniProgramHTTPRequestEncoder(endpoint, spaceId) {
        var _this = _super.call(this, endpoint) || this;
        _this.spaceId = spaceId;
        _this.prefix = PREFIX.CLIENT;
        _this.serviceHeaders = {};
        _this.setBodyField({
            spaceId: spaceId,
        });
        return _this;
    }
    MiniProgramHTTPRequestEncoder.prototype.sign = function (clientSecret) {
        var _a = this.body, spaceId = _a.spaceId, method = _a.method, params = _a.params, token = _a.token, userId = _a.userId;
        var timestamp = Date.now();
        this.setBodyField({
            timestamp: timestamp,
        });
        var signString = '';
        var signObject = {
            spaceId: spaceId,
            timestamp: timestamp,
            method: method,
            params: JSON.stringify(params),
            token: token,
            userId: userId,
        };
        Object.keys(signObject).sort().forEach(function (key) {
            if (signObject[key]) {
                signString = signString + "&" + key + "=" + signObject[key];
            }
        });
        signString = signString.slice(1);
        var sign = HmacMD5(signString, clientSecret).toString(crypto.enc.Hex);
        this.setServerlessHeaders({ sign: sign });
    };
    MiniProgramHTTPRequestEncoder.prototype.encodeAsHTTPRequestObject = function (additionalObject) {
        if (this.body.params) {
            this.body.params = JSON.stringify(this.body.params);
        }
        return __assign({ url: this.url, data: this.body, method: this.method, headers: this.headers, header: this.headers, dataType: 'json' }, additionalObject);
    };
    MiniProgramHTTPRequestEncoder.prototype.clone = function () {
        var encoder = new MiniProgramHTTPRequestEncoder(this.endpoint, this.spaceId);
        encoder.setBodyField(this.body);
        encoder.setBaseHeaders(this.baseHeaders);
        encoder.setServerlessHeaders(this.serverlessHeaders);
        return encoder;
    };
    return MiniProgramHTTPRequestEncoder;
}(HTTPRequestEncoder));
export { MiniProgramHTTPRequestEncoder };
var MiniProgramHTTPResponseDecoder = (function (_super) {
    __extends(MiniProgramHTTPResponseDecoder, _super);
    function MiniProgramHTTPResponseDecoder() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.ERROR_CODES = [11, 12, 13, 14, 19, 20];
        return _this;
    }
    MiniProgramHTTPResponseDecoder.prototype.setStatusAndBody = function (status, body) {
        _super.prototype.setStatusAndBody.call(this, status, body);
        if (this.ERROR_CODES.indexOf(status) >= 0) {
            this._error = MPServerlessClientError.from({
                name: ErrorName.IDE_ERROR,
                code: status.toString(),
                type: ErrorType.IDE_ERROR,
                message: 'request error from Alipay IDE',
            });
        }
    };
    MiniProgramHTTPResponseDecoder.prototype.decode = function (res) {
        this.setHeaders(res.headers || {});
        var body = res.data || res.body;
        if (typeof body === 'string') {
            body = JSON.parse(body);
        }
        if (body && body.data) {
            if (isNumber(body.data.affectedDocs)) {
                body = Object.assign({}, body, __assign({}, body.data));
            }
            else if (Object.prototype.toString.call(body.data) === '[object Object]') {
                body.result = Object.assign({}, body.data);
            }
            else if (Object.prototype.toString.call(body.data) === '[object Array]') {
                body.result = body.data.slice(0);
            }
            else {
                body.result = body.data;
            }
            delete body.data;
        }
        if (/^request:fail+/.test(res.errMsg)) {
            this.setErrorMessage(res.errMsg);
            return _super.prototype.decode.call(this);
        }
        var responseErrorCode = parseInt(res.error, 10);
        if (responseErrorCode) {
            this.setStatusAndBody(responseErrorCode, body);
            return _super.prototype.decode.call(this);
        }
        var responseErrorMessage = res.err;
        if (responseErrorMessage) {
            this.setErrorMessage(responseErrorMessage);
            return _super.prototype.decode.call(this);
        }
        if (res instanceof Error) {
            this.setErrorObject(res);
            return _super.prototype.decode.call(this);
        }
        if (body && typeof body.error === 'object') {
            this.setErrorObject(body.error);
            return _super.prototype.decode.call(this);
        }
        var responseStatusCode = parseInt(res.status || res.statusCode, 10);
        if (responseStatusCode) {
            this.setStatusAndBody(responseStatusCode, body);
            return _super.prototype.decode.call(this);
        }
        this.setStatusAndBody(200, res);
        return _super.prototype.decode.call(this);
    };
    return MiniProgramHTTPResponseDecoder;
}(HTTPResponseDecoder));
export { MiniProgramHTTPResponseDecoder };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29kZWMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvY29kZWMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFFTCxrQkFBa0IsRUFFbEIsbUJBQW1CLEVBRW5CLE1BQU0sRUFDTixTQUFTLEVBQ1QsU0FBUyxHQUNWLE1BQU0sb0JBQW9CLENBQUM7QUFDNUIsT0FBTyxNQUFNLE1BQU0sZ0JBQWdCLENBQUM7QUFDcEMsT0FBTyxPQUFPLE1BQU0sb0JBQW9CLENBQUM7QUFDekMsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUNoQyxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsTUFBTSxTQUFTLENBQUM7QUE4QmxEO0lBQW1ELGlEQUFrQjtJQVNuRSx1Q0FBWSxRQUFnQixFQUFZLE9BQWU7UUFBdkQsWUFDRSxrQkFBTSxRQUFRLENBQUMsU0FLaEI7UUFOdUMsYUFBTyxHQUFQLE9BQU8sQ0FBUTtRQVI3QyxZQUFNLEdBQUcsTUFBTSxDQUFDLE1BQU0sQ0FBQztRQUN2QixvQkFBYyxHQUEwQixFQUFFLENBQUM7UUFVbkQsS0FBSSxDQUFDLFlBQVksQ0FBQztZQUNoQixPQUFPLFNBQUE7U0FDUixDQUFDLENBQUM7O0lBQ0wsQ0FBQztJQU1NLDRDQUFJLEdBQVgsVUFBWSxZQUFvQjtRQUN4QixJQUFBLEtBQTZDLElBQUksQ0FBQyxJQUFJLEVBQXBELE9BQU8sYUFBQSxFQUFFLE1BQU0sWUFBQSxFQUFFLE1BQU0sWUFBQSxFQUFFLEtBQUssV0FBQSxFQUFFLE1BQU0sWUFBYyxDQUFDO1FBQzdELElBQU0sU0FBUyxHQUFHLElBQUksQ0FBQyxHQUFHLEVBQUUsQ0FBQztRQUM3QixJQUFJLENBQUMsWUFBWSxDQUFDO1lBQ2hCLFNBQVMsV0FBQTtTQUNWLENBQUMsQ0FBQztRQUNILElBQUksVUFBVSxHQUFHLEVBQUUsQ0FBQztRQUNwQixJQUFNLFVBQVUsR0FBRztZQUNqQixPQUFPLFNBQUE7WUFDUCxTQUFTLFdBQUE7WUFDVCxNQUFNLFFBQUE7WUFDTixNQUFNLEVBQUUsSUFBSSxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUM7WUFDOUIsS0FBSyxPQUFBO1lBQ0wsTUFBTSxRQUFBO1NBQ1AsQ0FBQztRQUNGLE1BQU0sQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUMsSUFBSSxFQUFFLENBQUMsT0FBTyxDQUFDLFVBQUEsR0FBRztZQUN4QyxJQUFJLFVBQVUsQ0FBQyxHQUFHLENBQUMsRUFBRTtnQkFDbkIsVUFBVSxHQUFNLFVBQVUsU0FBSSxHQUFHLFNBQUksVUFBVSxDQUFDLEdBQUcsQ0FBRyxDQUFDO2FBQ3hEO1FBQ0gsQ0FBQyxDQUFDLENBQUM7UUFDSCxVQUFVLEdBQUcsVUFBVSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUNqQyxJQUFNLElBQUksR0FBRyxPQUFPLENBQUMsVUFBVSxFQUFFLFlBQVksQ0FBQyxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQ3hFLElBQUksQ0FBQyxvQkFBb0IsQ0FBQyxFQUFFLElBQUksTUFBQSxFQUFFLENBQUMsQ0FBQztJQUN0QyxDQUFDO0lBT00saUVBQXlCLEdBQWhDLFVBQWlDLGdCQUFvQztRQUNuRSxJQUFJLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFO1lBQ3BCLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztTQUNyRDtRQUNELGtCQUNFLEdBQUcsRUFBRSxJQUFJLENBQUMsR0FBRyxFQUNiLElBQUksRUFBRSxJQUFJLENBQUMsSUFBSSxFQUNmLE1BQU0sRUFBRSxJQUFJLENBQUMsTUFBTSxFQUNuQixPQUFPLEVBQUUsSUFBSSxDQUFDLE9BQU8sRUFDckIsTUFBTSxFQUFFLElBQUksQ0FBQyxPQUFPLEVBQ3BCLFFBQVEsRUFBRSxNQUFNLElBQ2IsZ0JBQWdCLEVBQ25CO0lBQ0osQ0FBQztJQU1NLDZDQUFLLEdBQVo7UUFDRSxJQUFNLE9BQU8sR0FBRyxJQUFJLDZCQUE2QixDQUFDLElBQUksQ0FBQyxRQUFRLEVBQUUsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBQy9FLE9BQU8sQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ2hDLE9BQU8sQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDO1FBQ3pDLE9BQU8sQ0FBQyxvQkFBb0IsQ0FBQyxJQUFJLENBQUMsaUJBQWlCLENBQUMsQ0FBQztRQUNyRCxPQUFPLE9BQU8sQ0FBQztJQUNqQixDQUFDO0lBQ0gsb0NBQUM7QUFBRCxDQUFDLEFBN0VELENBQW1ELGtCQUFrQixHQTZFcEU7O0FBRUQ7SUFBb0Qsa0RBQW1CO0lBQXZFO1FBQUEscUVBMkZDO1FBMUZXLGlCQUFXLEdBQUcsQ0FBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsQ0FBRSxDQUFDOztJQTBGckQsQ0FBQztJQXBGUSx5REFBZ0IsR0FBdkIsVUFBd0IsTUFBYyxFQUFFLElBQVM7UUFDL0MsaUJBQU0sZ0JBQWdCLFlBQUMsTUFBTSxFQUFFLElBQUksQ0FBQyxDQUFDO1FBRXJDLElBQUksSUFBSSxDQUFDLFdBQVcsQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxFQUFFO1lBQ3pDLElBQUksQ0FBQyxNQUFNLEdBQUcsdUJBQXVCLENBQUMsSUFBSSxDQUFDO2dCQUN6QyxJQUFJLEVBQUUsU0FBUyxDQUFDLFNBQVM7Z0JBQ3pCLElBQUksRUFBRSxNQUFNLENBQUMsUUFBUSxFQUFFO2dCQUN2QixJQUFJLEVBQUUsU0FBUyxDQUFDLFNBQVM7Z0JBQ3pCLE9BQU8sRUFBRSwrQkFBK0I7YUFDekMsQ0FBQyxDQUFDO1NBQ0o7SUFDSCxDQUFDO0lBT00sK0NBQU0sR0FBYixVQUFjLEdBQXVCO1FBQ25DLElBQUksQ0FBQyxVQUFVLENBQUMsR0FBRyxDQUFDLE9BQU8sSUFBSSxFQUFFLENBQUMsQ0FBQztRQUNuQyxJQUFJLElBQUksR0FBRyxHQUFHLENBQUMsSUFBSSxJQUFJLEdBQUcsQ0FBQyxJQUFJLENBQUM7UUFFaEMsSUFBSSxPQUFPLElBQUksS0FBSyxRQUFRLEVBQUU7WUFDNUIsSUFBSSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUM7U0FDekI7UUFFRCxJQUFJLElBQUksSUFBSSxJQUFJLENBQUMsSUFBSSxFQUFFO1lBQ3JCLElBQUksUUFBUSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLEVBQUU7Z0JBRXBDLElBQUksR0FBRyxNQUFNLENBQUMsTUFBTSxDQUFDLEVBQUUsRUFBRSxJQUFJLGVBQ3hCLElBQUksQ0FBQyxJQUFJLEVBQ1osQ0FBQzthQUNKO2lCQUFNLElBQUksTUFBTSxDQUFDLFNBQVMsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxpQkFBaUIsRUFBRTtnQkFFMUUsSUFBSSxDQUFDLE1BQU0sR0FBRyxNQUFNLENBQUMsTUFBTSxDQUFDLEVBQUUsRUFBRSxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7YUFDNUM7aUJBQU0sSUFBSSxNQUFNLENBQUMsU0FBUyxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLGdCQUFnQixFQUFFO2dCQUVwRSxJQUFJLENBQUMsTUFBTSxHQUFLLElBQUksQ0FBQyxJQUFJLFNBQWQsQ0FBZTthQUNoQztpQkFBTTtnQkFDTCxJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUM7YUFDekI7WUFDRCxPQUFPLElBQUksQ0FBQyxJQUFJLENBQUM7U0FDbEI7UUFHRCxJQUFJLGdCQUFnQixDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLEVBQUU7WUFDckMsSUFBSSxDQUFDLGVBQWUsQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLENBQUM7WUFDakMsT0FBTyxpQkFBTSxNQUFNLFdBQUUsQ0FBQztTQUN2QjtRQUdELElBQU0saUJBQWlCLEdBQUcsUUFBUSxDQUFDLEdBQUcsQ0FBQyxLQUFLLEVBQUUsRUFBRSxDQUFDLENBQUM7UUFDbEQsSUFBSSxpQkFBaUIsRUFBRTtZQUNyQixJQUFJLENBQUMsZ0JBQWdCLENBQUMsaUJBQWlCLEVBQUUsSUFBSSxDQUFDLENBQUM7WUFDL0MsT0FBTyxpQkFBTSxNQUFNLFdBQUUsQ0FBQztTQUN2QjtRQUVELElBQU0sb0JBQW9CLEdBQUcsR0FBRyxDQUFDLEdBQUcsQ0FBQztRQUNyQyxJQUFJLG9CQUFvQixFQUFFO1lBQ3hCLElBQUksQ0FBQyxlQUFlLENBQUMsb0JBQW9CLENBQUMsQ0FBQztZQUMzQyxPQUFPLGlCQUFNLE1BQU0sV0FBRSxDQUFDO1NBQ3ZCO1FBRUQsSUFBSSxHQUFHLFlBQVksS0FBSyxFQUFFO1lBQ3hCLElBQUksQ0FBQyxjQUFjLENBQUMsR0FBRyxDQUFDLENBQUM7WUFDekIsT0FBTyxpQkFBTSxNQUFNLFdBQUUsQ0FBQztTQUN2QjtRQUVELElBQUksSUFBSSxJQUFJLE9BQU8sSUFBSSxDQUFDLEtBQUssS0FBSyxRQUFRLEVBQUU7WUFDMUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7WUFDaEMsT0FBTyxpQkFBTSxNQUFNLFdBQUUsQ0FBQztTQUN2QjtRQUdELElBQU0sa0JBQWtCLEdBQUcsUUFBUSxDQUFDLEdBQUcsQ0FBQyxNQUFNLElBQUksR0FBRyxDQUFDLFVBQVUsRUFBRSxFQUFFLENBQUMsQ0FBQztRQUN0RSxJQUFJLGtCQUFrQixFQUFFO1lBQ3RCLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxrQkFBa0IsRUFBRSxJQUFJLENBQUMsQ0FBQztZQUNoRCxPQUFPLGlCQUFNLE1BQU0sV0FBRSxDQUFDO1NBQ3ZCO1FBR0QsSUFBSSxDQUFDLGdCQUFnQixDQUFDLEdBQUcsRUFBRSxHQUFHLENBQUMsQ0FBQztRQUNoQyxPQUFPLGlCQUFNLE1BQU0sV0FBRSxDQUFDO0lBQ3hCLENBQUM7SUFDSCxxQ0FBQztBQUFELENBQUMsQUEzRkQsQ0FBb0QsbUJBQW1CLEdBMkZ0RSJ9