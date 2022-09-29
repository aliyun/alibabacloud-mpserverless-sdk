(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "tslib", "../constant", "../codec"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.HTTPTransport = void 0;
    const tslib_1 = require("tslib");
    const constant_1 = require("../constant");
    const codec_1 = require("../codec");
    class HTTPTransport {
        constructor(endpoint) {
            this.endpoint = endpoint;
            this.protocol = constant_1.TransportProtocol.HTTP;
        }
        getEncoder(prefix) {
            return new codec_1.HTTPRequestEncoder(this.endpoint, prefix);
        }
        setAppId(appId) {
            this.appId = appId;
        }
        setAppSecret(privateKey) {
            this.appSecret = privateKey;
            return this;
        }
        setUA(ua) {
            this.ua = ua;
            return this;
        }
        setLogger(logger) {
            this.logger = logger;
        }
        setTimeout(timeout = '5s') {
            if (typeof timeout === 'string') {
                if (timeout.indexOf('ms') >= 0) {
                    this.timeout = parseInt(timeout, 10);
                    return;
                }
                if (timeout.indexOf('s') >= 0) {
                    this.timeout = parseInt(timeout, 10) * 1000;
                    return;
                }
            }
            else if (typeof timeout === 'number') {
                this.timeout = timeout;
                return;
            }
            this.timeout = 5000;
        }
        get timeoutOption() {
            return this.timeout;
        }
        get spaceIdOption() {
            return this.spaceId;
        }
        setSpaceId(spaceId) {
            this.spaceId = spaceId;
        }
        request(encoder) {
            return tslib_1.__awaiter(this, void 0, void 0, function* () {
                return new codec_1.HTTPResponseDecoder().decode();
            });
        }
    }
    exports.HTTPTransport = HTTPTransport;
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvdHJhbnNwb3J0L2luZGV4LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7SUFBQSwwQ0FBd0Q7SUFFeEQsb0NBQXVGO0lBRXZGLE1BQWEsYUFBYTtRQVV4QixZQUFtQixRQUFnQjtZQUFoQixhQUFRLEdBQVIsUUFBUSxDQUFRO1lBUjVCLGFBQVEsR0FBc0IsNEJBQWlCLENBQUMsSUFBSSxDQUFDO1FBUXRCLENBQUM7UUFNaEMsVUFBVSxDQUFDLE1BQWU7WUFFL0IsT0FBTyxJQUFJLDBCQUFrQixDQUFDLElBQUksQ0FBQyxRQUFRLEVBQUUsTUFBTSxDQUFDLENBQUM7UUFDdkQsQ0FBQztRQU9NLFFBQVEsQ0FBQyxLQUFhO1lBQzNCLElBQUksQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFDO1FBQ3JCLENBQUM7UUFPTSxZQUFZLENBQUMsVUFBa0I7WUFDcEMsSUFBSSxDQUFDLFNBQVMsR0FBRyxVQUFVLENBQUM7WUFDNUIsT0FBTyxJQUFJLENBQUM7UUFDZCxDQUFDO1FBT00sS0FBSyxDQUFDLEVBQVU7WUFDckIsSUFBSSxDQUFDLEVBQUUsR0FBRyxFQUFFLENBQUM7WUFDYixPQUFPLElBQUksQ0FBQztRQUNkLENBQUM7UUFPTSxTQUFTLENBQUMsTUFBYztZQUM3QixJQUFJLENBQUMsTUFBTSxHQUFHLE1BQU0sQ0FBQztRQUN2QixDQUFDO1FBT00sVUFBVSxDQUFDLFVBQTJCLElBQUk7WUFDL0MsSUFBSSxPQUFPLE9BQU8sS0FBSyxRQUFRLEVBQUU7Z0JBQy9CLElBQUksT0FBTyxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEVBQUU7b0JBQzlCLElBQUksQ0FBQyxPQUFPLEdBQUcsUUFBUSxDQUFDLE9BQU8sRUFBRSxFQUFFLENBQUMsQ0FBQztvQkFDckMsT0FBTztpQkFDUjtnQkFDRCxJQUFJLE9BQU8sQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxFQUFFO29CQUM3QixJQUFJLENBQUMsT0FBTyxHQUFHLFFBQVEsQ0FBQyxPQUFPLEVBQUUsRUFBRSxDQUFDLEdBQUcsSUFBSSxDQUFDO29CQUM1QyxPQUFPO2lCQUNSO2FBQ0Y7aUJBQU0sSUFBSSxPQUFPLE9BQU8sS0FBSyxRQUFRLEVBQUU7Z0JBQ3RDLElBQUksQ0FBQyxPQUFPLEdBQUcsT0FBTyxDQUFDO2dCQUN2QixPQUFPO2FBQ1I7WUFHRCxJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQztRQUN0QixDQUFDO1FBS0QsSUFBVyxhQUFhO1lBQ3RCLE9BQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQztRQUN0QixDQUFDO1FBT0QsSUFBVyxhQUFhO1lBQ3RCLE9BQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQztRQUN0QixDQUFDO1FBT00sVUFBVSxDQUFDLE9BQWU7WUFDL0IsSUFBSSxDQUFDLE9BQU8sR0FBRyxPQUFPLENBQUM7UUFDekIsQ0FBQztRQU9ZLE9BQU8sQ0FBQyxPQUEyQjs7Z0JBQzlDLE9BQU8sSUFBSSwyQkFBbUIsRUFBRSxDQUFDLE1BQU0sRUFBRSxDQUFDO1lBQzVDLENBQUM7U0FBQTtLQUNGO0lBcEhELHNDQW9IQyJ9