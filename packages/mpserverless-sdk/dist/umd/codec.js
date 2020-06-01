(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "tslib", "@alicloud/mpserverless-core", "crypto-js/core", "crypto-js/hmac-md5", "util", "./error"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.MiniProgramHTTPResponseDecoder = exports.MiniProgramHTTPRequestEncoder = void 0;
    var tslib_1 = require("tslib");
    var mpserverless_core_1 = require("@alicloud/mpserverless-core");
    var core_1 = tslib_1.__importDefault(require("crypto-js/core"));
    var hmac_md5_1 = tslib_1.__importDefault(require("crypto-js/hmac-md5"));
    var util_1 = require("util");
    var error_1 = require("./error");
    var MiniProgramHTTPRequestEncoder = (function (_super) {
        tslib_1.__extends(MiniProgramHTTPRequestEncoder, _super);
        function MiniProgramHTTPRequestEncoder(endpoint, spaceId) {
            var _this = _super.call(this, endpoint) || this;
            _this.spaceId = spaceId;
            _this.prefix = mpserverless_core_1.PREFIX.CLIENT;
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
            var sign = hmac_md5_1.default(signString, clientSecret).toString(core_1.default.enc.Hex);
            this.setServerlessHeaders({ sign: sign });
        };
        MiniProgramHTTPRequestEncoder.prototype.encodeAsHTTPRequestObject = function (additionalObject) {
            if (this.body.params) {
                this.body.params = JSON.stringify(this.body.params);
            }
            return tslib_1.__assign({ url: this.url, data: this.body, method: this.method, headers: this.headers, header: this.headers, dataType: 'json' }, additionalObject);
        };
        MiniProgramHTTPRequestEncoder.prototype.clone = function () {
            var encoder = new MiniProgramHTTPRequestEncoder(this.endpoint, this.spaceId);
            encoder.setBodyField(this.body);
            encoder.setBaseHeaders(this.baseHeaders);
            encoder.setServerlessHeaders(this.serverlessHeaders);
            return encoder;
        };
        return MiniProgramHTTPRequestEncoder;
    }(mpserverless_core_1.HTTPRequestEncoder));
    exports.MiniProgramHTTPRequestEncoder = MiniProgramHTTPRequestEncoder;
    var MiniProgramHTTPResponseDecoder = (function (_super) {
        tslib_1.__extends(MiniProgramHTTPResponseDecoder, _super);
        function MiniProgramHTTPResponseDecoder() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.ERROR_CODES = [11, 12, 13, 14, 19, 20];
            return _this;
        }
        MiniProgramHTTPResponseDecoder.prototype.setStatusAndBody = function (status, body) {
            _super.prototype.setStatusAndBody.call(this, status, body);
            if (this.ERROR_CODES.indexOf(status) >= 0) {
                this._error = error_1.MPServerlessClientError.from({
                    name: mpserverless_core_1.ErrorName.IDE_ERROR,
                    code: status.toString(),
                    type: mpserverless_core_1.ErrorType.IDE_ERROR,
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
                if (util_1.isNumber(body.data.affectedDocs)) {
                    body = Object.assign({}, body, tslib_1.__assign({}, body.data));
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
    }(mpserverless_core_1.HTTPResponseDecoder));
    exports.MiniProgramHTTPResponseDecoder = MiniProgramHTTPResponseDecoder;
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29kZWMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvY29kZWMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztJQUFBLGlFQVNxQztJQUNyQyxnRUFBb0M7SUFDcEMsd0VBQXlDO0lBQ3pDLDZCQUFnQztJQUNoQyxpQ0FBa0Q7SUE4QmxEO1FBQW1ELHlEQUFrQjtRQVNuRSx1Q0FBWSxRQUFnQixFQUFZLE9BQWU7WUFBdkQsWUFDRSxrQkFBTSxRQUFRLENBQUMsU0FLaEI7WUFOdUMsYUFBTyxHQUFQLE9BQU8sQ0FBUTtZQVI3QyxZQUFNLEdBQUcsMEJBQU0sQ0FBQyxNQUFNLENBQUM7WUFDdkIsb0JBQWMsR0FBMEIsRUFBRSxDQUFDO1lBVW5ELEtBQUksQ0FBQyxZQUFZLENBQUM7Z0JBQ2hCLE9BQU8sU0FBQTthQUNSLENBQUMsQ0FBQzs7UUFDTCxDQUFDO1FBTU0sNENBQUksR0FBWCxVQUFZLFlBQW9CO1lBQ3hCLElBQUEsS0FBNkMsSUFBSSxDQUFDLElBQUksRUFBcEQsT0FBTyxhQUFBLEVBQUUsTUFBTSxZQUFBLEVBQUUsTUFBTSxZQUFBLEVBQUUsS0FBSyxXQUFBLEVBQUUsTUFBTSxZQUFjLENBQUM7WUFDN0QsSUFBTSxTQUFTLEdBQUcsSUFBSSxDQUFDLEdBQUcsRUFBRSxDQUFDO1lBQzdCLElBQUksQ0FBQyxZQUFZLENBQUM7Z0JBQ2hCLFNBQVMsV0FBQTthQUNWLENBQUMsQ0FBQztZQUNILElBQUksVUFBVSxHQUFHLEVBQUUsQ0FBQztZQUNwQixJQUFNLFVBQVUsR0FBRztnQkFDakIsT0FBTyxTQUFBO2dCQUNQLFNBQVMsV0FBQTtnQkFDVCxNQUFNLFFBQUE7Z0JBQ04sTUFBTSxFQUFFLElBQUksQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDO2dCQUM5QixLQUFLLE9BQUE7Z0JBQ0wsTUFBTSxRQUFBO2FBQ1AsQ0FBQztZQUNGLE1BQU0sQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUMsSUFBSSxF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