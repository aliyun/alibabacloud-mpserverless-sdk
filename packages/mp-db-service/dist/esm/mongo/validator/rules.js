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
export { rules };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicnVsZXMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvbW9uZ28vdmFsaWRhdG9yL3J1bGVzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBLElBQUssYUFRSjtBQVJELFdBQUssYUFBYTtJQUNoQix1REFBc0MsQ0FBQTtJQUN0QyxvREFBbUMsQ0FBQTtJQUNuQyx1RUFBc0QsQ0FBQTtJQUN0RCxpRkFBZ0UsQ0FBQTtJQUNoRSxxRUFBb0QsQ0FBQTtJQUNwRCxtREFBa0MsQ0FBQTtJQUNsQywyQ0FBMEIsQ0FBQTtBQUM1QixDQUFDLEVBUkksYUFBYSxLQUFiLGFBQWEsUUFRakI7QUFRRCxTQUFTLFdBQVcsQ0FBQyxDQUFDLEVBQUUsS0FBSyxFQUFFLEdBQUk7SUFDakMsU0FBUyxhQUFhLENBQUMsSUFBWTtRQUNqQyxJQUFJLFFBQVEsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEVBQUU7WUFDdkIsT0FBTyxhQUFhLENBQUMsT0FBTyxDQUFDO1NBQzlCO0lBQ0gsQ0FBQztJQVFELElBQUksQ0FBQyxDQUFDLEtBQUssWUFBWSxNQUFNLENBQUMsRUFBRTtRQUM5QixPQUFPLGFBQWEsQ0FBQyxZQUFZLENBQUM7S0FDbkM7SUFFRCxJQUFJLEtBQUssQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLEVBQUU7UUFDeEIsT0FBTyxhQUFhLENBQUMsWUFBWSxDQUFDO0tBQ25DO0lBTUQsS0FBSyxNQUFNLEdBQUcsSUFBSSxNQUFNLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxFQUFFO1FBQ3BDLE1BQU0sbUJBQW1CLEdBQUcsYUFBYSxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBRy9DLElBQUksT0FBTyxtQkFBbUIsS0FBSyxRQUFRLEVBQUU7WUFDM0MsT0FBTyxtQkFBbUIsQ0FBQztTQUM1QjtRQU1ELElBQUksS0FBSyxDQUFDLEdBQUcsQ0FBQyxZQUFZLE1BQU0sSUFBSSxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFD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