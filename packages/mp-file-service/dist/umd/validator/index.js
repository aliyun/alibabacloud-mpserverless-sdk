(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "tslib", "@alicloud/mpserverless-core", "./schema"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.FileValidator = void 0;
    const tslib_1 = require("tslib");
    const mpserverless_core_1 = require("@alicloud/mpserverless-core");
    Object.defineProperty(exports, "FileValidator", { enumerable: true, get: function () { return mpserverless_core_1.Validator; } });
    tslib_1.__exportStar(require("./schema"), exports);
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvdmFsaWRhdG9yL2luZGV4LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7SUFBQSxtRUFBeUU7SUFFaEUsOEZBRmEsNkJBQWEsT0FFYjtJQUV0QixtREFBeUIifQ==