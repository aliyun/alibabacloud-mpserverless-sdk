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
    exports.JSONDecoder = exports.JSONEncoder = exports.isString = exports.isObject = exports.isArray = exports._isByProto = void 0;
    const mpserverless_core_1 = require("@alicloud/mpserverless-core");
    const REGEXP_FLAGS = ['i', 'm', 'u', 'g'];
    function _isByProto(val, type) {
        return Object.prototype.toString.call(val) === `[object ${type}]`;
    }
    exports._isByProto = _isByProto;
    function isArray(val) {
        return Array.isArray(val);
    }
    exports.isArray = isArray;
    function isObject(val) {
        return val !== null && typeof val === 'object' && !isArray(val);
    }
    exports.isObject = isObject;
    function isString(val) {
        return typeof val === 'string' || _isByProto(val, 'String');
    }
    exports.isString = isString;
    class JSONEncoder extends mpserverless_core_1.BaseEncoder {
        encode(data) {
            if (data instanceof RegExp) {
                return this.toRegexp(data);
            }
            if (data instanceof Date) {
                return this.toDate(data);
            }
            if (isArray(data)) {
                return data.map(d => this.encode(d));
            }
            if (isObject(data)) {
                return Object.keys(data).reduce((accu, k) => {
                    accu[k] = this.encode(data[k]);
                    return accu;
                }, {});
            }
            return data;
        }
        toDate(val) {
            return val.toISOString();
        }
        toRegexp(val) {
            return `/${val.source.replace(/\\\//g, '/')}/${val.flags}`;
        }
    }
    exports.JSONEncoder = JSONEncoder;
    class JSONDecoder extends mpserverless_core_1.BaseDecoder {
        decode(data) {
            if (this.isDate(data)) {
                return this.toDate(data);
            }
            if (isArray(data)) {
                return data.map(d => this.decode(d));
            }
            if (isObject(data)) {
                return Object.keys(data).reduce((accu, k) => {
                    accu[k] = this.decode(data[k]);
                    return accu;
                }, {});
            }
            return data;
        }
        isDate(val) {
            return isString(val) && /^\d{4}\-\d{2}\-\d{2}T\d{2}:\d{2}:\d{2}\.\d{3}Z$/.test(val) && !isNaN(Date.parse(val));
        }
        isRegexp(val) {
            if (isString(val)) {
                let areFlagsValid = true;
                const parts = val.split('/');
                const last = parts[parts.length - 1];
                if (last) {
                    areFlagsValid = last.split('').reduce((expr, p) => {
                        return expr === true && REGEXP_FLAGS.indexOf(p) > -1;
                    }, true);
                }
                return parts.length >= 2 && areFlagsValid;
            }
            return false;
        }
        toDate(val) {
            return new Date(val);
        }
        toRegexp(val) {
            const firstIndex = val.indexOf('/');
            const lastIndex = val.lastIndexOf('/');
            return new RegExp(val.slice(firstIndex + 1, lastIndex), val.slice(lastIndex + 1));
        }
    }
    exports.JSONDecoder = JSONDecoder;
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvbW9uZ28vY29kZWMvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0lBQUEsbUVBQXFHO0lBTXJHLE1BQU0sWUFBWSxHQUFHLENBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxDQUFFLENBQUM7SUFRNUMsU0FBZ0IsVUFBVSxDQUFDLEdBQUcsRUFBRSxJQUFJO1FBQ2xDLE9BQU8sTUFBTSxDQUFDLFNBQVMsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxLQUFLLFdBQVcsSUFBSSxHQUFHLENBQUM7SUFDcEUsQ0FBQztJQUZELGdDQUVDO0lBT0QsU0FBZ0IsT0FBTyxDQUFDLEdBQUc7UUFDekIsT0FBTyxLQUFLLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDO0lBQzVCLENBQUM7SUFGRCwwQkFFQztJQU9ELFNBQWdCLFFBQVEsQ0FBQyxHQUFHO1FBQzFCLE9BQU8sR0FBRyxLQUFLLElBQUksSUFBSSxPQUFPLEdBQUcsS0FBSyxRQUFRLElBQUksQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLENBQUM7SUFDbEUsQ0FBQztJQUZELDRCQUVDO0lBT0QsU0FBZ0IsUUFBUSxDQUFDLEdBQUc7UUFDMUIsT0FBTyxPQUFPLEdBQUcsS0FBSyxRQUFRLElBQUksVUFBVSxDQUFDLEdBQUcsRUFBRSxRQUFRLENBQUMsQ0FBQztJQUM5RCxDQUFDO0lBRkQsNEJBRUM7SUFFRCxNQUFhLFdBQVksU0FBUSwrQkFBVztRQU1uQyxNQUFNLENBQUMsSUFBUztZQUNyQixJQUFJLElBQUksWUFBWSxNQUFNLEVBQUU7Z0JBQzFCLE9BQU8sSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQXlCLENBQUM7YUFDcEQ7WUFDRCxJQUFJLElBQUksWUFBWSxJQUFJLEVBQUU7Z0JBQ3hCLE9BQU8sSUFBSSxDQUFDLE1BQU0sQ0FB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