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
    exports.MPServerlessClientError = void 0;
    var tslib_1 = require("tslib");
    var mpserverless_core_1 = require("@alicloud/mpserverless-core");
    var MPServerlessClientError = (function (_super) {
        tslib_1.__extends(MPServerlessClientError, _super);
        function MPServerlessClientError(name, code, type, message) {
            var _this = _super.call(this, message) || this;
            _this.name = name;
            _this.code = code;
            _this.type = type;
            _this.message = message;
            return _this;
        }
        MPServerlessClientError.from = function (raw) {
            return new MPServerlessClientError(raw.name, raw.code, raw.type, raw.message);
        };
        return MPServerlessClientError;
    }(mpserverless_core_1.BuiltInError));
    exports.MPServerlessClientError = MPServerlessClientError;
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXJyb3IuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvZXJyb3IudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztJQUFBLGlFQUE0RTtJQUU1RTtRQUE2QyxtREFBWTtRQUN2RCxpQ0FDUyxJQUFZLEVBQ1osSUFBWSxFQUNaLElBQVksRUFDWixPQUFlO1lBSnhCLFlBTUUsa0JBQU0sT0FBTyxDQUFDLFNBQ2Y7WUFOUSxVQUFJLEdBQUosSUFBSSxDQUFRO1lBQ1osVUFBSSxHQUFKLElBQUksQ0FBUTtZQUNaLFVBQUksR0FBSixJQUFJLENBQVE7WUFDWixhQUFPLEdBQVAsT0FBTyxDQUFROztRQUd4QixDQUFDO1FBT2EsNEJBQUksR0FBbEIsVUFBbUIsR0FBb0I7WUFDckMsT0FBTyxJQUFJLHVCQUF1QixDQUNoQyxHQUFHLENBQUMsSUFBSSxFQUNSLEdBQUcsQ0FBQyxJQUFJLEVBQ1IsR0FBRyxDQUFDLElBQUksRUFDUixHQUFHLENBQUMsT0FBTyxDQUNaLENBQUM7UUFDSixDQUFDO1FBQ0gsOEJBQUM7SUFBRCxDQUFDLEFBdkJELENBQTZDLGdDQUFZLEdBdUJ4RDtJQXZCWSwwREFBdUIifQ==