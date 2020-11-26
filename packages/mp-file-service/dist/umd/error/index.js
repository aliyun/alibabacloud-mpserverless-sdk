(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "@alicloud/mpserverless-core"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.bizError = void 0;
    const mpserverless_core_1 = require("@alicloud/mpserverless-core");
    const errorDefinition = {
        InterfaceError: {
            code: 'InterfaceError',
            message: '接口响应失败',
        },
    };
    const bizError = mpserverless_core_1.MPServerlessErrorClass(errorDefinition);
    exports.bizError = bizError;
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvZXJyb3IvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0lBQUEsbUVBQXFFO0lBRXJFLE1BQU0sZUFBZSxHQUFHO1FBQ3RCLGNBQWMsRUFBRTtZQUNkLElBQUksRUFBRSxnQkFBZ0I7WUFDdEIsT0FBTyxFQUFFLFFBQVE7U0FDbEI7S0FLRixDQUFDO0lBRUYsTUFBTSxRQUFRLEdBQUcsMENBQXNCLENBQUMsZUFBZSxDQUFDLENBQUM7SUFFaEQsNEJBQVEifQ==