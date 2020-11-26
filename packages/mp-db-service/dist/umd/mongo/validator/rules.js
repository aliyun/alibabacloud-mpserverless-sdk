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
    exports.rules = void 0;
    var ErrorMessages;
    (function (ErrorMessages) {
        ErrorMessages["INVALID_TYPE"] = "field type is invalid";
        ErrorMessages["NOT_ARRAY"] = "field is not an array";
        ErrorMessages["ILLEGAL"] = "field should not contain illegal character";
        ErrorMessages["ILLEGAL_VALUE"] = "field should not contain undefined for a value";
        ErrorMessages["EMPTY_OBJECT"] = "field should not be an empty object";
        ErrorMessages["NOT_OBJECT"] = "should be an object";
        ErrorMessages["EMPTY"] = "should not empty";
    })(ErrorMessages || (ErrorMessages = {}));
    function ruleOfField(_, value, raw) {
        function validateField(name) {
            if (/[\.\$]/.test(name)) {
                return ErrorMessages.ILLEGAL;
            }
        }
        if (!(value instanceof Object)) {
            return ErrorMessages.INVALID_TYPE;
        }
        if (Array.isArray(value)) {
            return ErrorMessages.INVALID_TYPE;
        }
        for (const key of Object.keys(value)) {
            const fieldValidateResult = validateField(key);
            if (typeof fieldValidateResult === 'string') {
                return fieldValidateResult;
            }
            if (value[key] instanceof Object && !Array.isArray(value[key])) {
                const validateRes = ruleOfField(_, value[key]);
                if (validateRes) {
                    return validateRes;
                }
            }
        }
    }
    function ruleOfFields(_, value) {
        if (!Array.isArray(value)) {
            return ErrorMessages.NOT_ARRAY;
        }
        if (value.length === 0) {
            return ErrorMessages.EMPTY;
        }
        let err;
        let i = 0;
        while (!err && i < value.length) {
            err = ruleOfField(null, value[i], { doc: value[i] });
            i++;
        }
        return err;
    }
    function ruleOfSort(_, value) {
        const legalValues = [1, -1];
        function validateSort(name) {
            if (/[\$]/.test(name)) {
                return ErrorMessages.ILLEGAL;
            }
        }
        if (!(value instanceof Object)) {
            return ErrorMessages.INVALID_TYPE;
        }
        if (JSON.stringify(value) === '{}') {
            return undefined;
        }
        if (Array.isArray(value)) {
            return ErrorMessages.INVALID_TYPE;
        }
        let result = null;
        for (const key of Object.keys(value)) {
            result = validateSort(key);
            if (typeof result === 'string') {
                return result;
            }
            if (!legalValues.includes(value[key])) {
                return ErrorMessages.INVALID_TYPE;
            }
        }
        if (result === null) {
            return ErrorMessages.INVALID_TYPE;
        }
    }
    function ruleOfProjection(_, value) {
        const legalValues = [1, 0];
        function validateSort(name) {
            if (/[\$]/.test(name)) {
                return ErrorMessages.ILLEGAL;
            }
        }
        if (!(value instanceof Object)) {
            return ErrorMessages.INVALID_TYPE;
        }
        if (JSON.stringify(value) === '{}') {
            return undefined;
        }
        if (Array.isArray(value)) {
            return ErrorMessages.INVALID_TYPE;
        }
        let result = null;
        for (const key of Object.keys(value)) {
            result = validateSort(key);
            if (typeof result === 'string') {
                return result;
            }
            if (!legalValues.includes(value[key])) {
                return ErrorMessages.INVALID_TYPE;
            }
        }
        if (result === null) {
            return ErrorMessages.INVALID_TYPE;
        }
    }
    function ruleOfNobject(_, value) {
        if (typeof value !== 'object') {
            return ErrorMessages.NOT_OBJECT;
        }
        if (Object.keys(value).length === 0) {
            return ErrorMessages.EMPTY_OBJECT;
        }
    }
    const rules = {
        ruleOfField,
        ruleOfFields,
        ruleOfSort,
        ruleOfProjection,
        ruleOfNobject
    };
    exports.rules = rules;
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicnVsZXMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvbW9uZ28vdmFsaWRhdG9yL3J1bGVzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztJQUNBLElBQUssYUFRSjtJQVJELFdBQUssYUFBYTtRQUNoQix1REFBc0MsQ0FBQTtRQUN0QyxvREFBbUMsQ0FBQTtRQUNuQyx1RUFBc0QsQ0FBQTtRQUN0RCxpRkFBZ0UsQ0FBQTtRQUNoRSxxRUFBb0QsQ0FBQTtRQUNwRCxtREFBa0MsQ0FBQTtRQUNsQywyQ0FBMEIsQ0FBQTtJQUM1QixDQUFDLEVBUkksYUFBYSxLQUFiLGFBQWEsUUFRakI7SUFRRCxTQUFTLFdBQVcsQ0FBQyxDQUFDLEVBQUUsS0FBSyxFQUFFLEdBQUk7UUFDakMsU0FBUyxhQUFhLENBQUMsSUFBWTtZQUNqQyxJQUFJLFFBQVEsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEVBQUU7Z0JBQ3ZCLE9BQU8sYUFBYSxDQUFDLE9BQU8sQ0FBQzthQUM5QjtRQUNILENBQUM7UUFRRCxJQUFJLENBQUMsQ0FBQyxLQUFLLFlBQVksTUFBTSxDQUFDLEVBQUU7WUFDOUIsT0FBTyxhQUFhLENBQUMsWUFBWSxDQUFDO1NBQ25DO1FBRUQsSUFBSSxLQUFLLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxFQUFFO1lBQ3hCLE9BQU8sYUFBYSxDQUFDLFlBQVksQ0FBQztTQUNuQztRQU1ELEtBQUssTUFBTSxHQUFHLElBQUksTUFBTSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsRUFBRTtZQUNwQyxNQUFNLG1CQUFtQixHQUFHLGFBQWEsQ0FBQyxHQUFHLENBQUMsQ0FBQztZQUcvQyxJQUFJLE9BQU8sbUJBQW1CLEtBQUssUUFBUSxFQUFFO2dCQUMzQyxPQUFPLG1CQUFtQixDQUFDO2FBQzVCO1lBTUQsSUFBSSxLQUFLLENBQUMsR0FBRyxDQUFDLFlBQVksTUFBTSxJQUFJLENBQUMsS0FBSyxDQUFDLE9BQU8s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