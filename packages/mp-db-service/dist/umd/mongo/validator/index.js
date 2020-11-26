(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "./rules", "@alicloud/mpserverless-core"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.MongoValidator = void 0;
    const rules_1 = require("./rules");
    const mpserverless_core_1 = require("@alicloud/mpserverless-core");
    class MongoValidator extends mpserverless_core_1.Validator {
        constructor(options) {
            super(options);
            for (const ruleName of Object.keys(rules_1.rules)) {
                const name = ruleName.match(/ruleOf([a-zA-Z]+)/)[1];
                this.p.addRule(name[0].toLowerCase() + name.slice(1), rules_1.rules[ruleName]);
            }
        }
    }
    exports.MongoValidator = MongoValidator;
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvbW9uZ28vdmFsaWRhdG9yL2luZGV4LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztJQUFBLG1DQUFnQztJQUNoQyxtRUFBdUU7SUFHdkUsTUFBYSxjQUFlLFNBQVEsNkJBQVM7UUFDM0MsWUFBWSxPQUE0QjtZQUN0QyxLQUFLLENBQUMsT0FBTyxDQUFDLENBQUM7WUFFZixLQUFLLE1BQU0sUUFBUSxJQUFJLE1BQU0sQ0FBQyxJQUFJLENBQUMsYUFBSyxDQUFDLEVBQUU7Z0JBRXpDLE1BQU0sSUFBSSxHQUFHLFFBQVEsQ0FBQyxLQUFLLENBQUMsbUJBQW1CLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztnQkFDcEQsSUFBSSxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLFdBQVcsRUFBRSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLEVBQUUsYUFBSyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUM7YUFDeEU7UUFDSCxDQUFDO0tBQ0Y7SUFWRCx3Q0FVQyJ9