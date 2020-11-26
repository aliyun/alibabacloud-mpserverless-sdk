(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.PERMISSION = void 0;
    var PERMISSION;
    (function (PERMISSION) {
        PERMISSION["READ"] = ".read";
        PERMISSION["WRITE"] = ".write";
        PERMISSION["CREATE"] = "document.create";
        PERMISSION["UPDATE"] = "document.update";
        PERMISSION["DELETE"] = "document.delete";
        PERMISSION["AGGREGATE"] = ".aggregate";
    })(PERMISSION = exports.PERMISSION || (exports.PERMISSION = {}));
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvbW9uZ28vY29uc3RhbnQvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0lBQUEsSUFBWSxVQVFYO0lBUkQsV0FBWSxVQUFVO1FBRXBCLDRCQUFjLENBQUE7UUFDZCw4QkFBZ0IsQ0FBQTtRQUNoQix3Q0FBMEIsQ0FBQTtRQUMxQix3Q0FBMEIsQ0FBQTtRQUMxQix3Q0FBMEIsQ0FBQTtRQUMxQixzQ0FBd0IsQ0FBQTtJQUMxQixDQUFDLEVBUlcsVUFBVSxHQUFWLGtCQUFVLEtBQVYsa0JBQVUsUUFRckIifQ==