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
    exports.HTTPResponseDecoder = exports.BaseDecoder = void 0;
    class BaseDecoder {
    }
    exports.BaseDecoder = BaseDecoder;
    class HTTPResponseDecoder extends BaseDecoder {
        constructor() {
            super(...arguments);
            this._body = {};
            this._headers = {};
        }
        setHeaders(headers) {
            this._headers = Object.assign(Object.assign({}, this._headers), headers);
        }
        setStatusAndBody(status, body) {
            this._status = status;
            this._body = body;
        }
        setErrorMessage(message) {
            this._error = new Error(message);
        }
        setErrorObject(error) {
            this._error = error;
        }
        decode(..._) {
            return {
                body: this._body || {},
                error: this._error,
                status: this._status,
                headers: this._headers,
            };
        }
    }
    exports.HTTPResponseDecoder = HTTPResponseDecoder;
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVzcG9uc2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvY29kZWMvcmVzcG9uc2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0lBSUEsTUFBc0IsV0FBVztLQU9oQztJQVBELGtDQU9DO0lBU0QsTUFBYSxtQkFBb0IsU0FBUSxXQUFXO1FBQXBEOztZQUNZLFVBQUssR0FBdUIsRUFBRSxDQUFDO1lBRy9CLGFBQVEsR0FBMEIsRUFBRSxDQUFDO1FBc0RqRCxDQUFDO1FBL0NRLFVBQVUsQ0FBQyxPQUE4QjtZQUM5QyxJQUFJLENBQUMsUUFBUSxtQ0FDUixJQUFJLENBQUMsUUFBUSxHQUNiLE9BQU8sQ0FDWCxDQUFDO1FBQ0osQ0FBQztRQU9NLGdCQUFnQixDQUFDLE1BQWMsRUFBRSxJQUFTO1lBQy9DLElBQUksQ0FBQyxPQUFPLEdBQUcsTUFBTSxDQUFDO1lBQ3RCLElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDO1FBQ3BCLENBQUM7UUFNTSxlQUFlLENBQUMsT0FBZTtZQUNwQyxJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksS0FBSyxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBQ25DLENBQUM7UUFPTSxjQUFjLENBQUMsS0FBWTtZQUNoQyxJQUFJLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQztRQUN0QixDQUFDO1FBT00sTUFBTSxDQUFDLEdBQUcsQ0FBUTtZQUN2QixPQUFPO2dCQUNMLElBQUksRUFBRSxJQUFJLENBQUMsS0FBSyxJQUFJLEVBQUU7Z0JBQ3RCLEtBQUssRUFBRSxJQUFJLENBQUMsTUFBTTtnQkFDbEIsTUFBTSxFQUFFLElBQUksQ0FBQyxPQUFPO2dCQUNwQixPQUFPLEVBQUUsSUFBSSxDQUFDLFFBQVE7YUFDdkIsQ0FBQztRQUNKLENBQUM7S0FDRjtJQTFERCxrREEwREMifQ==