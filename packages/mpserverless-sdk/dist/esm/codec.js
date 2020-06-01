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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29kZWMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvY29kZWMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFFTCxrQkFBa0IsRUFFbEIsbUJBQW1CLEVBRW5CLE1BQU0sRUFDTixTQUFTLEVBQ1QsU0FBUyxHQUNWLE1BQU0sb0JBQW9CLENBQUM7QUFDNUIsT0FBTyxNQUFNLE1BQU0sZ0JBQWdCLENBQUM7QUFDcEMsT0FBTyxPQUFPLE1BQU0sb0JBQW9CLENBQUM7QUFDekMsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUNoQyxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsTUFBTSxTQUFTLENBQUM7QUE4QmxEO0lBQW1ELGlEQUFrQjtJQVNuRSx1Q0FBWSxRQUFnQixFQUFZLE9BQWU7UUFBdkQsWUFDRSxrQkFBTSxRQUFRLENBQUMsU0FLaEI7UUFOdUMsYUFBTyxHQUFQLE9BQU8sQ0FBUTtRQVI3QyxZQUFNLEdBQUcsTUFBTSxDQUFDLE1BQU0sQ0FBQztRQUN2QixvQkFBYyxHQUEwQixFQUFFLENBQUM7UUFVbkQsS0FBSSxDQUFDLFlBQVksQ0FBQztZQUNoQixPQUFPLFNBQUE7U0FDUixDQUFDLENBQUM7O0lBQ0wsQ0FBQztJQU1NLDRDQUFJLEdBQVgsVUFBWSxZQUFvQjtRQUN4QixJQUFBLGNBQXNELEVBQXBELG9CQUFPLEVBQUUsa0JBQU0sRUFBRSxrQkFBTSxFQUFFLGdCQUFLLEVBQUUsa0JBQW9CLENBQUM7UUFDN0QsSUFBTSxTQUFTLEdBQUcsSUFBSSxDQUFDLEdBQUcsRUFBRSxDQUFDO1FBQzdCLElBQUksQ0FBQyxZQUFZLENBQUM7WUFDaEIsU0FBUyxXQUFBO1NBQ1YsQ0FBQyxDQUFDO1FBQ0gsSUFBSSxVQUFVLEdBQUcsRUFBRSxDQUFDO1FBQ3BCLElBQU0sVUFBVSxHQUFHO1lBQ2pCLE9BQU8sU0FBQTtZQUNQLFNBQVMsV0FBQTtZQUNULE1BQU0sUUFBQTtZQUNOLE1BQU0sRUFB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