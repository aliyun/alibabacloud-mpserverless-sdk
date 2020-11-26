(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "tslib", "@alicloud/mpserverless-core", "./validator"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.FunctionService = void 0;
    const tslib_1 = require("tslib");
    const mpserverless_core_1 = require("@alicloud/mpserverless-core");
    const validator_1 = require("./validator");
    class FunctionService extends mpserverless_core_1.BaseService {
        invoke(functionTarget, functionArgs = {}) {
            return tslib_1.__awaiter(this, void 0, void 0, function* () {
                this.validate(validator_1.invokeSchema, { functionTarget });
                if ((typeof functionArgs === 'number' && isNaN(functionArgs)) || typeof functionArgs === 'undefined' || functionArgs === null) {
                    throw new mpserverless_core_1.bizError.ValidationError();
                }
                const encoder = this.getEncoder();
                encoder.setBodyField({
                    method: 'serverless.function.runtime.invoke',
                    params: {
                        functionTarget,
                        functionArgs,
                    },
                });
                const response = yield this.transport.request(encoder);
                return Object.assign(Object.assign({}, response.body), { requestId: response.headers['request-id'] });
            });
        }
        validate(schema, values) {
            const v = new validator_1.FunctionValidator();
            try {
                v.validate(schema, values);
            }
            catch (err) {
                throw err;
            }
        }
    }
    exports.FunctionService = FunctionService;
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztJQUFBLG1FQUdxQztJQUNyQywyQ0FBOEQ7SUFFOUQsTUFBYSxlQUFnQixTQUFRLCtCQUFXO1FBTWpDLE1BQU0sQ0FBQyxjQUFzQixFQUFFLGVBQW9CLEVBQUU7O2dCQUNoRSxJQUFJLENBQUMsUUFBUSxDQUFDLHdCQUFZLEVBQUUsRUFBRSxjQUFjLEVBQUUsQ0FBQyxDQUFDO2dCQUNoRCxJQUFJLENBQUMsT0FBTyxZQUFZLEtBQUssUUFBUSxJQUFJLEtBQUssQ0FBQyxZQUFZLENBQUMsQ0FBQyxJQUFJLE9BQU8sWUFBWSxLQUFLLFdBQVcsSUFBSSxZQUFZLEtBQUssSUFBSSxFQUFFO29CQUM3SCxNQUFNLElBQUksNEJBQVEsQ0FBQyxlQUFlLEVBQUUsQ0FBQztpQkFDdEM7Z0JBQ0QsTUFBTSxPQUFPLEdBQUcsSUFBSSxDQUFDLFVBQVUsRUFBRSxDQUFDO2dCQUNsQyxPQUFPLENBQUMsWUFBWSxDQUFDO29CQUNuQixNQUFNLEVBQUUsb0NBQW9DO29CQUM1QyxNQUFNLEVBQUU7d0JBQ04sY0FBYzt3QkFDZCxZQUFZO3FCQUNiO2lCQUNGLENBQUMsQ0FBQztnQkFFSCxNQUFNLFFBQVEsR0FBRyxNQUFNLElBQUksQ0FBQyxTQUFTLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxDQUFDO2dCQUN2RCx1Q0FBWSxRQUFRLENBQUMsSUFBSSxLQUFFLFNBQVMsRUFBRSxRQUFRLENBQUMsT0FBTyxDQUFDLFlBQVksQ0FBQyxJQUFHO1lBQ3pFLENBQUM7U0FBQTtRQUVPLFFBQVEsQ0FBQyxNQUFjLEVBQUUsTUFBVztZQUMxQyxNQUFNLENBQUMsR0FBRyxJQUFJLDZCQUFpQixFQUFFLENBQUM7WUFFbEMsSUFBSTtnQkFDRixDQUFDLENBQUMsUUFBUSxDQUFDLE1BQU0sRUFBRSxNQUFNLENBQUMsQ0FBQzthQUM1QjtZQUFDLE9BQU8sR0FBRyxFQUFFO2dCQUNaLE1BQU0sR0FBRyxDQUFDO2FBQ1g7UUFDSCxDQUFDO0tBQ0Y7SUFqQ0QsMENBaUNDIn0=