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
        setSpaceId(spaceId) {
            this.spaceId = spaceId;
        }
        request(encoder) {
            return tslib_1.__awaiter(this, void 0, void 0, function* () {
                return (new codec_1.HTTPResponseDecoder()).decode();
            });
        }
    }
    exports.HTTPTransport = HTTPTransport;
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvdHJhbnNwb3J0L2luZGV4LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7SUFBQSwwQ0FBd0Q7SUFFeEQsb0NBSWtCO0lBRWxCLE1BQWEsYUFBYTtRQVV4QixZQUNTLFFBQWdCO1lBQWhCLGFBQVEsR0FBUixRQUFRLENBQVE7WUFUbEIsYUFBUSxHQUFzQiw0QkFBaUIsQ0FBQyxJQUFJLENBQUM7UUFVekQsQ0FBQztRQU1HLFVBQVUsQ0FBQyxNQUFlO1lBRS9CLE9BQU8sSUFBSSwwQkFBa0IsQ0FBQyxJQUFJLENBQUMsUUFBUSxFQUFFLE1BQU0sQ0FBQyxDQUFDO1FBQ3ZELENBQUM7UUFPTSxRQUFRLENBQUMsS0FBYTtZQUMzQixJQUFJLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQztRQUNyQixDQUFDO1FBT00sWUFBWSxDQUFDLFVBQWtCO1lBQ3BDLElBQUksQ0FBQyxTQUFTLEdBQUcsVUFBVSxDQUFDO1lBQzVCLE9BQU8sSUFBSSxDQUFDO1FBQ2QsQ0FBQztRQU9NLEtBQUssQ0FBQyxFQUFVO1lBQ3JCLElBQUksQ0FBQyxFQUFFLEdBQUcsRUFBRSxDQUFDO1lBQ2IsT0FBTyxJQUFJLENBQUM7UUFDZCxDQUFDO1FBT00sU0FBUyxDQUFDLE1BQWM7WUFDN0IsSUFBSSxDQUFDLE1BQU0sR0FBRyxNQUFNLENBQUM7UUFDdkIsQ0FBQztRQU9NLFVBQVUsQ0FBQyxVQUF5QixJQUFJO1lBQzdDLElBQUksT0FBTyxPQUFPLEtBQUssUUFBUSxFQUFFO2dCQUMvQixJQUFJLE9BQU8sQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxFQUFFO29CQUM5QixJQUFJLENBQUMsT0FBTyxHQUFHLFFBQVEsQ0FBQyxPQUFPLEVBQUUsRUFBRSxDQUFDLENBQUM7b0JBQ3JDLE9BQU87aUJBQ1I7Z0JBQ0QsSUFBSSxPQUFPLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsRUFBRTtvQkFDN0IsSUFBSSxDQUFDLE9BQU8sR0FBRyxRQUFRLENBQUMsT0FBTyxFQUFFLEVBQUUsQ0FBQyxHQUFHLElBQUksQ0FBQztvQkFDNUMsT0FBTztpQkFDUjthQUNGO2lCQUFNLElBQUksT0FBTyxPQUFPLEtBQUssUUFBUSxFQUFFO2dCQUN0QyxJQUFJLENBQUMsT0FBTyxHQUFHLE9BQU8sQ0FBQztnQkFDdkIsT0FBTzthQUNSO1lBR0QsSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUM7UUFDdEIsQ0FBQztRQUtELElBQVcsYUFBYTtZQUN0QixPQUFPLElBQUksQ0FBQyxPQUFPLENBQUM7UUFDdEIsQ0FBQztRQU9NLFVBQVUsQ0FBQyxPQUFlO1lBQy9CLElBQUksQ0FBQyxPQUFPLEdBQUcsT0FBTyxDQUFDO1FBQ3pCLENBQUM7UUFPWSxPQUFPLENBQ2xCLE9BQTJCOztnQkFFM0IsT0FBTyxDQUFDLElBQUksMkJBQW1CLEVBQUUsQ0FBQyxDQUFDLE1BQU0sRUFBRSxDQUFDO1lBQzlDLENBQUM7U0FBQTtLQUNGO0lBL0dELHNDQStHQyJ9