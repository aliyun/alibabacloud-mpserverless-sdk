(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "../error"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.emptyLogger = exports.camelToLisp = exports.assert = void 0;
    const error_1 = require("../error");
    function assert(expr, message) {
        if (!expr) {
            throw new error_1.bizError.ValidationError(message);
        }
    }
    exports.assert = assert;
    function camelToLisp(key) {
        return key.replace(/[A-Z]/g, match => {
            return `-${match.toLowerCase()}`;
        });
    }
    exports.camelToLisp = camelToLisp;
    exports.emptyLogger = {
        log() { return; },
        info() { return; },
        warn() { return; },
        error() { return; },
        debug() { return; },
    };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvdXRpbGl0eS9pbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7SUFBQSxvQ0FBb0M7SUFPcEMsU0FBZ0IsTUFBTSxDQUFDLElBQUksRUFBRSxPQUFPO1FBQ2xDLElBQUksQ0FBQyxJQUFJLEVBQUU7WUFDVCxNQUFNLElBQUksZ0JBQVEsQ0FBQyxlQUFlLENBQUMsT0FBTyxDQUFDLENBQUM7U0FDN0M7SUFDSCxDQUFDO0lBSkQsd0JBSUM7SUFPRCxTQUFnQixXQUFXLENBQUMsR0FBRztRQUM3QixPQUFPLEdBQUcsQ0FBQyxPQUFPLENBQUMsUUFBUSxFQUFFLEtBQUssQ0FBQyxFQUFFO1lBQ25DLE9BQU8sSUFBSSxLQUFLLENBQUMsV0FBVyxFQUFFLEVBQUUsQ0FBQztRQUNuQyxDQUFDLENBQUMsQ0FBQztJQUNMLENBQUM7SUFKRCxrQ0FJQztJQUVZLFFBQUEsV0FBVyxHQUFHO1FBQ3pCLEdBQUcsS0FBVyxPQUFPLENBQUMsQ0FBQztRQUN2QixJQUFJLEtBQVcsT0FBTyxDQUFDLENBQUM7UUFDeEIsSUFBSSxLQUFXLE9BQU8sQ0FBQyxDQUFDO1FBQ3hCLEtBQUssS0FBVyxPQUFPLENBQUMsQ0FBQztRQUN6QixLQUFLLEtBQVcsT0FBTyxDQUFDLENBQUM7S0FDMUIsQ0FBQyJ9