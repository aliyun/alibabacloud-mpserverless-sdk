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
    const mpserverless_core_1 = require("@alicloud/mpserverless-core");
    const errorDefinition = {
        UnauthorizedError: {
            code: 'UnauthorizedError',
            message: '未授权错误',
        },
    };
    const bizError = mpserverless_core_1.MPServerlessErrorClass(errorDefinition);
    exports.bizError = bizError;
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXJyb3IuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvZXJyb3IudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7SUFBQSxtRUFBcUU7SUFFckUsTUFBTSxlQUFlLEdBQUc7UUFDdEIsaUJBQWlCLEVBQUU7WUFDakIsSUFBSSxFQUFFLG1CQUFtQjtZQUN6QixPQUFPLEVBQUUsT0FBTztTQUNqQjtLQUNGLENBQUM7SUFFRixNQUFNLFFBQVEsR0FBRywwQ0FBc0IsQ0FBQyxlQUFlLENBQUMsQ0FBQztJQUVoRCw0QkFBUSJ9