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
    }(core_1.BuiltInError));
    exports.MPServerlessClientError = MPServerlessClientError;
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXJyb3IuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvZXJyb3IudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0lBQUEsMkNBQW1FO0lBRW5FO1FBQTZDLG1EQUFZO1FBQ3ZELGlDQUNTLElBQVksRUFDWixJQUFZLEVBQ1osSUFBWSxFQUNaLE9BQWU7WUFKeEIsWUFNRSxrQkFBTSxPQUFPLENBQUMsU0FDZjtZQU5RLFVBQUksR0FBSixJQUFJLENBQVE7WUFDWixVQUFJLEdBQUosSUFBSSxDQUFRO1lBQ1osVUFBSSxHQUFKLElBQUksQ0FBUTtZQUNaLGFBQU8sR0FBUCxPQUFPLENBQVE7O1FBR3hCLENBQUM7UUFPYSw0QkFBSSxHQUFsQixVQUFtQixHQUFvQjtZQUNyQyxPQUFPLElBQUksdUJBQXVCLENBQ2hDLEdBQUcsQ0FBQyxJQUFJLEVBQ1IsR0FBRyxDQUFDLElBQUksRUFDUixHQUFHLENBQUMsSUFBSSxFQUNSLEdBQUcsQ0FBQyxPQUFPLENBQ1osQ0FBQztRQUNKLENBQUM7UUFDSCw4QkFBQztJQUFELENBQUMsQUF2QkQsQ0FBNkMsbUJBQVksR0F1QnhEO0lBdkJZLDBEQUF1QiJ9