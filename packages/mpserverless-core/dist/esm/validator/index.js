(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "tslib", "parameter", "../error"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.Validator = void 0;
    const tslib_1 = require("tslib");
    const parameter_1 = tslib_1.__importDefault(require("parameter"));
    const error_1 = require("../error");
    class Validator {
        constructor(options) {
            this.p = new parameter_1.default(options);
        }
        validate(rules, obj) {
            if (typeof obj !== 'object' && typeof rules === 'string') {
                obj = { field: obj };
                rules = { field: rules };
            }
            const message = this.p.validate(rules, obj);
            if (!message) {
                return null;
            }
            const result = message.map(mistake => {
                if (mistake.field) {
                    let target = JSON.parse(JSON.stringify(obj));
                    const fields = mistake.field.match(/[^\.\[\]]+/g);
                    while (fields.length) {
                        const field = fields.shift();
                        if (!target.hasOwnProperty(field)) {
                            break;
                        }
                        target = target[field];
                    }
                    mistake.value = target;
                }
                return mistake;
            });
            function getMessage(result) {
                if (Array.isArray(result)) {
                    return result.map(getMessage).join('; ');
                }
                return `${result.field} ${result.message}`;
            }
            throw new error_1.bizError.ValidationError(getMessage(result));
        }
    }
    exports.Validator = Validator;
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvdmFsaWRhdG9yL2luZGV4LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7SUFBQSxrRUFBa0M7SUFFbEMsb0NBQW9DO0lBRXBDLE1BQWEsU0FBUztRQUVwQixZQUFZLE9BQTRCO1lBQ3RDLElBQUksQ0FBQyxDQUFDLEdBQUcsSUFBSSxtQkFBUyxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBQ2xDLENBQUM7UUFRTSxRQUFRLENBQUMsS0FBVSxFQUFFLEdBQVE7WUFFbEMsSUFBSSxPQUFPLEdBQUcsS0FBSyxRQUFRLElBQUksT0FBTyxLQUFLLEtBQUssUUFBUSxFQUFFO2dCQUN4RCxHQUFHLEdBQUcsRUFBRSxLQUFLLEVBQUUsR0FBRyxFQUFFLENBQUM7Z0JBQ3JCLEtBQUssR0FBRyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsQ0FBQzthQUMxQjtZQUVELE1BQU0sT0FBTyxHQUFHLElBQUksQ0FBQyxDQUFDLENBQUMsUUFBUSxDQUFDLEtBQUssRUFBRSxHQUFHLENBQUMsQ0FBQztZQUM1QyxJQUFJLENBQUMsT0FBTyxFQUFFO2dCQUNaLE9BQU8sSUFBSSxDQUFDO2FBQ2I7WUFHRCxNQUFNLE1BQU0sR0FBRyxPQUFPLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQyxFQUFFO2dCQUNuQyxJQUFJLE9BQU8sQ0FBQyxLQUFLLEVBQUU7b0JBQ2pCLElBQUksTUFBTSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO29CQUM3QyxNQUFNLE1BQU0sR0FBRyxPQUFPLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxhQUFhLENBQUMsQ0FBQztvQkFFbEQsT0FBTyxNQUFNLENBQUMsTUFBTSxFQUFFO3dCQUNwQixNQUFNLEtBQUssR0FBRyxNQUFNLENBQUMsS0FBSyxFQUFFLENBQUM7d0JBQzdCLElBQUksQ0FBQyxNQUFNLENBQUMsY0FBYyxDQUFDLEtBQUssQ0FBQyxFQUFFOzRCQUNqQyxNQUFNO3lCQUNQO3dCQUVELE1BQU0sR0FBRyxNQUFNLENBQUMsS0FBSyxDQUFDLENBQUM7cUJBQ3hCO29CQUVELE9BQU8sQ0FBQyxLQUFLLEdBQUcsTUFBTSxDQUFDO2lCQUN4QjtnQkFFRCxPQUFPLE9BQU8sQ0FBQztZQUNqQixDQUFDLENBQUMsQ0FBQztZQUVILFNBQVMsVUFBVSxDQUFDLE1BQU07Z0JBQ3hCLElBQUksS0FBSyxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsRUFBRTtvQkFDekIsT0FBTyxNQUFNLENBQUMsR0FBRyxDQUFDLFVBQVUsQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztpQkFDMUM7Z0JBRUQsT0FBTyxHQUFHLE1BQU0sQ0FBQyxLQUFLLElBQUksTUFBTSxDQUFDLE9BQU8sRUFBRSxDQUFDO1lBQzdDLENBQUM7WUFFRCxNQUFNLElBQUksZ0JBQVEsQ0FBQyxlQUFlLENBQUMsVUFBVSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUM7UUFDekQsQ0FBQztLQUNGO0lBdkRELDhCQXVEQyJ9