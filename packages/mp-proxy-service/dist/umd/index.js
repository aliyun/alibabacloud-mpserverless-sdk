(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "tslib", "@alicloud/mpserverless-core"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.ProxyService = void 0;
    const tslib_1 = require("tslib");
    const mpserverless_core_1 = require("@alicloud/mpserverless-core");
    class ProxyService extends mpserverless_core_1.BaseService {
        forward(method, params) {
            return tslib_1.__awaiter(this, void 0, void 0, function* () {
                const request = this.getEncoder();
                request.setBodyField({
                    method,
                    params,
                });
                const response = yield this.transport.request(request);
                return response.body;
            });
        }
    }
    exports.ProxyService = ProxyService;
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztJQUFBLG1FQUdxQztJQUVyQyxNQUFhLFlBQWEsU0FBUSwrQkFBVztRQU05QixPQUFPLENBQUMsTUFBYyxFQUFFLE1BQTBCOztnQkFDN0QsTUFBTSxPQUFPLEdBQUcsSUFBSSxDQUFDLFVBQVUsRUFBRSxDQUFDO2dCQUNsQyxPQUFPLENBQUMsWUFBWSxDQUFDO29CQUNuQixNQUFNO29CQUNOLE1BQU07aUJBQ1AsQ0FBQyxDQUFDO2dCQUVILE1BQU0sUUFBUSxHQUFHLE1BQU0sSUFBSSxDQUFDLFNBQVMsQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLENBQUM7Z0JBQ3ZELE9BQU8sUUFBUSxDQUFDLElBQUksQ0FBQztZQUN2QixDQUFDO1NBQUE7S0FDRjtJQWhCRCxvQ0FnQkMifQ==