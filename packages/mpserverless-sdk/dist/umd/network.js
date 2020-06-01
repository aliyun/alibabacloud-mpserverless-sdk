(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "tslib", "@ant-basement/core"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var tslib_1 = require("tslib");
    var core_1 = require("@ant-basement/core");
    var NetworkService = (function (_super) {
        tslib_1.__extends(NetworkService, _super);
        function NetworkService() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        NetworkService.prototype.forward = function (method, params) {
            return tslib_1.__awaiter(this, void 0, void 0, function () {
                var request, response;
                return tslib_1.__generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            request = this.getEncoder();
                            request.setBodyField({
                                method: method,
                                params: params,
                            });
                            return [4, this.transport.request(request)];
                        case 1:
                            response = _a.sent();
                            return [2, response.body];
                    }
                });
            });
        };
        return NetworkService;
    }(core_1.BaseService));
    exports.NetworkService = NetworkService;
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmV0d29yay5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9uZXR3b3JrLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztJQUFBLDJDQUc0QjtJQUU1QjtRQUFvQywwQ0FBVztRQUEvQzs7UUFnQkEsQ0FBQztRQVZjLGdDQUFPLEdBQXBCLFVBQXFCLE1BQWMsRUFBRSxNQUEwQjs7Ozs7OzRCQUN2RCxPQUFPLEdBQUcsSUFBSSxDQUFDLFVBQVUsRUFBRSxDQUFDOzRCQUNsQyxPQUFPLENBQUMsWUFBWSxDQUFDO2dDQUNuQixNQUFNLFFBQUE7Z0NBQ04sTUFBTSxRQUFBOzZCQUNQLENBQUMsQ0FBQzs0QkFFYyxXQUFNLElBQUksQ0FBQyxTQUFTLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxFQUFBOzs0QkFBaEQsUUFBUSxHQUFHLFNBQXFDOzRCQUN0RCxXQUFPLFFBQVEsQ0FBQyxJQUFJLEVBQUM7Ozs7U0FDdEI7UUFDSCxxQkFBQztJQUFELENBQUMsQUFoQkQsQ0FBb0Msa0JBQVcsR0FnQjlDO0lBaEJZLHdDQUFjIn0=