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
    exports.bizError = exports.MPServerlessErrorClass = exports.ErrorClass = void 0;
    class ErrorClass extends Error {
        constructor(err, customMessage) {
            super();
            if (Error.captureStackTrace) {
                Error.captureStackTrace(this, this.constructor);
            }
            this.code = this.constructor.code;
            this.message = this.constructor.prefix;
            if (customMessage) {
                this.message += `: ${customMessage}`;
            }
            if (err instanceof Error) {
                this.message = `${this.message} << ${err.message}`;
            }
            else if (typeof err === 'string') {
                this.message = `${this.message}: ${err}`;
            }
        }
    }
    exports.ErrorClass = ErrorClass;
    class ErrorBuilder {
        setCode(code) {
            this.code = code;
            return this;
        }
        setMessage(message) {
            this.message = message;
            return this;
        }
        build() {
            var _a;
            const errorCode = this.code;
            const defaultMessage = this.message;
            return _a = class MPServerlessErrorClass extends ErrorClass {
                },
                _a.code = errorCode,
                _a.prefix = defaultMessage,
                _a;
        }
    }
    function MPServerlessErrorClass(errorConfig, defaultConfig = {
        code: 'MPServerlessError',
        message: 'MPServerless Error',
    }) {
        const builder = new ErrorBuilder();
        return Object.keys(errorConfig).reduce((errorMap, errorName) => {
            errorMap[errorName] = builder
                .setCode(errorConfig[errorName].code || defaultConfig.code)
                .setMessage(errorConfig[errorName].message || defaultConfig.message)
                .build();
            return errorMap;
        }, {});
    }
    exports.MPServerlessErrorClass = MPServerlessErrorClass;
    exports.bizError = MPServerlessErrorClass({
        ValidationError: {
            code: 'ValidationFailed',
            message: '参数校验错误',
        },
    });
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvZXJyb3IvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0lBU0EsTUFBYSxVQUFXLFNBQVEsS0FBSztRQU1uQyxZQUFZLEdBQW9CLEVBQUUsYUFBc0I7WUFDdEQsS0FBSyxFQUFFLENBQUM7WUFFUixJQUFJLEtBQUssQ0FBQyxpQkFBaUIsRUFBRTtnQkFDM0IsS0FBSyxDQUFDLGlCQUFpQixDQUFDLElBQUksRUFBRSxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUM7YUFDakQ7WUFFRCxJQUFJLENBQUMsSUFBSSxHQUFJLElBQUksQ0FBQyxXQUFpQyxDQUFDLElBQUksQ0FBQztZQUN6RCxJQUFJLENBQUMsT0FBTyxHQUFJLElBQUksQ0FBQyxXQUFpQyxDQUFDLE1BQU0sQ0FBQztZQUM5RCxJQUFJLGFBQWEsRUFBRTtnQkFDakIsSUFBSSxDQUFDLE9BQU8sSUFBSSxLQUFLLGFBQWEsRUFBRSxDQUFDO2FBQ3RDO1lBRUQsSUFBSSxHQUFHLFlBQVksS0FBSyxFQUFFO2dCQUN4QixJQUFJLENBQUMsT0FBTyxHQUFHLEdBQUcsSUFBSSxDQUFDLE9BQU8sT0FBTyxHQUFHLENBQUMsT0FBTyxFQUFFLENBQUM7YUFDcEQ7aUJBQU0sSUFBSSxPQUFPLEdBQUcsS0FBSyxRQUFRLEVBQUU7Z0JBQ2xDLElBQUksQ0FBQyxPQUFPLEdBQUcsR0FBRyxJQUFJLENBQUMsT0FBTyxLQUFLLEdBQUcsRUFBRSxDQUFDO2FBQzFDO1FBQ0gsQ0FBQztLQUNGO0lBekJELGdDQXlCQztJQUVELE1BQU0sWUFBWTtRQUloQixPQUFPLENBQUMsSUFBWTtZQUNsQixJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQztZQUNqQixPQUFPLElBQUksQ0FBQztRQUNkLENBQUM7UUFFRCxVQUFVLENBQUMsT0FBZTtZQUN4QixJQUFJLENBQUMsT0FBTyxHQUFHLE9BQU8sQ0FBQztZQUN2QixPQUFPLElBQUksQ0FBQztRQUNkLENBQUM7UUFFRCxLQUFLOztZQUNILE1BQU0sU0FBUyxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUM7WUFDNUIsTUFBTSxjQUFjLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQztZQUVwQyxZQUFPLE1BQU0sc0JBQXVCLFNBQVEsVUFBVTtpQkFHckQ7Z0JBRlEsT0FBSSxHQUFXLFNBQVU7Z0JBQ3pCLFNBQU0sR0FBVyxjQUFlO21CQUN2QztRQUNKLENBQUM7S0FDRjtJQUVELFNBQWdCLHNCQUFzQixDQUNwQyxXQUF3QixFQUN4QixnQkFBOEI7UUFDNUIsSUFBSSxFQUFFLG1CQUFtQjtRQUN6QixPQUFPLEVBQUUsb0JBQW9CO0tBQzlCO1FBR0QsTUFBTSxPQUFPLEdBQUcsSUFBSSxZQUFZLEVBQUUsQ0FBQztRQUVuQyxPQUFPLE1BQU0sQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsUUFBOEMsRUFBRSxTQUFpQixFQUFFLEVBQUU7WUFDM0csUUFBUSxDQUFDLFNBQVMsQ0FBQyxHQUFHLE9BQU87aUJBQzFCLE9BQU8sQ0FBQyxXQUFXLENBQUMsU0FBUyxDQUFDLENBQUMsSUFBSSxJQUFJLGFBQWEsQ0FBQyxJQUFJLENBQUM7aUJBQzFELFVBQVUsQ0FBQyxXQUFXLENBQUMsU0FBUyxDQUFDLENBQUMsT0FBTyxJQUFJLGFBQWEsQ0FBQyxPQUFPLENBQUM7aUJBQ25FLEtBQUssRUFBRSxDQUFDO1lBRVgsT0FBTyxRQUFRLENBQUM7UUFDbEIsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDO0lBQ1QsQ0FBQztJQWxCRCx3REFrQkM7SUFFWSxRQUFBLFFBQVEsR0FBRyxzQkFBc0IsQ0FBQztRQUM3QyxlQUFlLEVBQUU7WUFFZixJQUFJLEVBQUUsa0JBQWtCO1lBQ3hCLE9BQU8sRUFBRSxRQUFRO1NBQ2xCO0tBQ0YsQ0FBQyxDQUFDIn0=