(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "../constant", "../utility"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.HTTPRequestEncoder = exports.BaseEncoder = void 0;
    const constant_1 = require("../constant");
    const utility_1 = require("../utility");
    class BaseEncoder {
    }
    exports.BaseEncoder = BaseEncoder;
    class HTTPRequestEncoder extends BaseEncoder {
        constructor(endpoint, prefix) {
            super();
            this.endpoint = endpoint;
            this.body = {};
            this.query = {};
            this.method = constant_1.HTTPMethod.POST;
            this.prefix = '';
            this.baseHeaders = {};
            this.serviceHeaders = {};
            this.serverlessHeaders = {};
            if (prefix) {
                this.prefix = prefix;
            }
        }
        encodeAsHTTPRequestObject(additionalObject) {
            return {
                url: '',
                data: {},
                method: constant_1.HTTPMethod.POST,
                headers: {},
            };
        }
        sign(secret) { }
        get url() {
            return [
                this.endpoint + this.prefix,
            ]
                .filter(p => !!p)
                .join('?');
        }
        get headers() {
            const normalizedHeaders = Object
                .keys(this.serverlessHeaders)
                .reduce((accu, prop) => {
                const key = `${constant_1.SERVERLESS_HEADER_PREFIX}${utility_1.camelToLisp(prop)}`;
                accu[key] = this.serverlessHeaders[prop];
                return accu;
            }, {});
            return Object.assign(Object.assign({}, this.baseHeaders), normalizedHeaders);
        }
        setBodyField(fields) {
            this.body = Object.assign({}, this.body, Object.assign({}, fields));
            return this;
        }
        setUserId(userId) {
            this.setBodyField({
                userId,
            });
            return this;
        }
        setBaseHeaders(headers = {}) {
            this.baseHeaders = Object.assign(Object.assign({}, this.baseHeaders), Object.keys(headers).reduce((accu, key) => {
                if (headers[key]) {
                    accu[key] = headers[key].toString();
                }
                return accu;
            }, {}));
            return this;
        }
        setServerlessHeaders(headers = {}) {
            this.serverlessHeaders = Object.assign(Object.assign({}, this.serverlessHeaders), Object.keys(headers).reduce((accu, key) => {
                if (headers[key]) {
                    accu[key] = headers[key].toString();
                }
                return accu;
            }, {}));
            return this;
        }
        encode(..._) {
            if (this.body.params) {
                this.body.params = JSON.stringify(this.body.params);
            }
            return {
                url: this.url,
                data: this.body,
                method: this.method,
                headers: this.headers,
            };
        }
    }
    exports.HTTPRequestEncoder = HTTPRequestEncoder;
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVxdWVzdC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb2RlYy9yZXF1ZXN0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztJQUNBLDBDQUEyRTtJQUMzRSx3Q0FBeUM7SUFJekMsTUFBc0IsV0FBVztLQU9oQztJQVBELGtDQU9DO0lBU0QsTUFBYSxrQkFBbUIsU0FBUSxXQUFXO1FBVWpELFlBQXNCLFFBQWdCLEVBQUUsTUFBZTtZQUNyRCxLQUFLLEVBQUUsQ0FBQztZQURZLGFBQVEsR0FBUixRQUFRLENBQVE7WUFUL0IsU0FBSSxHQUF1QixFQUFFLENBQUM7WUFDOUIsVUFBSyxHQUEwQixFQUFFLENBQUM7WUFDbEMsV0FBTSxHQUFlLHFCQUFVLENBQUMsSUFBSSxDQUFDO1lBQ2xDLFdBQU0sR0FBVyxFQUFFLENBQUM7WUFDcEIsZ0JBQVcsR0FBMEIsRUFBRSxDQUFDO1lBQ3hDLG1CQUFjLEdBQTBCLEVBQUUsQ0FBQztZQUMzQyxzQkFBaUIsR0FBMEIsRUFBRSxDQUFDO1lBTXRELElBQUksTUFBTSxFQUFFO2dCQUNWLElBQUksQ0FBQyxNQUFNLEdBQUcsTUFBTSxDQUFDO2FBQ3RCO1FBQ0gsQ0FBQztRQU1NLHlCQUF5QixDQUFDLGdCQUFvQztZQUNuRSxPQUFPO2dCQUNMLEdBQUcsRUFBRSxFQUFFO2dCQUNQLElBQUksRUFBRSxFQUFFO2dCQUNSLE1BQU0sRUFBRSxxQkFBVSxDQUFDLElBQUk7Z0JBQ3ZCLE9BQU8sRUFBRSxFQUFFO2FBQ1osQ0FBQztRQUNKLENBQUM7UUFNTSxJQUFJLENBQUMsTUFBYyxJQUFTLENBQUM7UUFFcEMsSUFBVyxHQUFHO1lBQ1osT0FBTztnQkFDTCxJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQyxNQUFNO2FBQzVCO2lCQUNFLE1BQU0sQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7aUJBQ2hCLElBQUksQ0FBQyxHQUFHLENBQUMs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