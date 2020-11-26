(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "tslib", "@ant-basement/core", "crypto-js/core", "crypto-js/hmac-md5", "util", "./error"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.MiniProgramHTTPResponseDecoder = exports.MiniProgramHTTPRequestEncoder = void 0;
    var tslib_1 = require("tslib");
    var core_1 = require("@ant-basement/core");
    var core_2 = tslib_1.__importDefault(require("crypto-js/core"));
    var hmac_md5_1 = tslib_1.__importDefault(require("crypto-js/hmac-md5"));
    var util_1 = require("util");
    var error_1 = require("./error");
    var MiniProgramHTTPRequestEncoder = (function (_super) {
        tslib_1.__extends(MiniProgramHTTPRequestEncoder, _super);
        function MiniProgramHTTPRequestEncoder(endpoint, spaceId) {
            var _this = _super.call(this, endpoint) || this;
            _this.spaceId = spaceId;
            _this.prefix = core_1.PREFIX.CLIENT;
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
            var sign = hmac_md5_1.default(signString, clientSecret).toString(core_2.default.enc.Hex);
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
    }(core_1.HTTPRequestEncoder));
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
                    name: core_1.ErrorName.IDE_ERROR,
                    code: status.toString(),
                    type: core_1.ErrorType.IDE_ERROR,
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
    }(core_1.HTTPResponseDecoder));
    exports.MiniProgramHTTPResponseDecoder = MiniProgramHTTPResponseDecoder;
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29kZWMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvY29kZWMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztJQUFBLDJDQVM0QjtJQUM1QixnRUFBb0M7SUFDcEMsd0VBQXlDO0lBQ3pDLDZCQUFnQztJQUNoQyxpQ0FBa0Q7SUE4QmxEO1FBQW1ELHlEQUFrQjtRQVNuRSx1Q0FBWSxRQUFnQixFQUFZLE9BQWU7WUFBdkQsWUFDRSxrQkFBTSxRQUFRLENBQUMsU0FLaEI7WUFOdUMsYUFBTyxHQUFQLE9BQU8sQ0FBUTtZQVI3QyxZQUFNLEdBQUcsYUFBTSxDQUFDLE1BQU0sQ0FBQztZQUN2QixvQkFBYyxHQUEwQixFQUFFLENBQUM7WUFVbkQsS0FBSSxDQUFDLFlBQVksQ0FBQztnQkFDaEIsT0FBTyxTQUFBO2FBQ1IsQ0FBQyxDQUFDOztRQUNMLENBQUM7UUFNTSw0Q0FBSSxHQUFYLFVBQVksWUFBb0I7WUFDeEIsSUFBQSxLQUE2QyxJQUFJLENBQUMsSUFBSSxFQUFwRCxPQUFPLGFBQUEsRUFBRSxNQUFNLFlBQUEsRUFBRSxNQUFNLFlBQUEsRUFBRSxLQUFLLFdBQUEsRUFBRSxNQUFNLFlBQWMsQ0FBQztZQUM3RCxJQUFNLFNBQVMsR0FBRyxJQUFJLENBQUMsR0FBRyxFQUFFLENBQUM7WUFDN0IsSUFBSSxDQUFDLFlBQVksQ0FBQztnQkFDaEIsU0FBUyxXQUFBO2FBQ1YsQ0FBQyxDQUFDO1lBQ0gsSUFBSSxVQUFVLEdBQUcsRUFBRSxDQUFDO1lBQ3BCLElBQU0sVUFBVSxHQUFHO2dCQUNqQixPQUFPLFNBQUE7Z0JBQ1AsU0FBUyxXQUFBO2dCQUNULE1BQU0sUUFBQTtnQkFDTixNQUFNLEVBQUUsSUFBSSxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUM7Z0JBQzlCLEtBQUssT0FBQTtnQkFDTCxNQUFNLFFBQUE7YUFDUCxDQUFDO1lBQ0YsTUFBTSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQyxJQUFJLEVB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