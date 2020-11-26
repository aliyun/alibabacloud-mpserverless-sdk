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
    exports.getInfoSchema = exports.authorizeSchema = void 0;
    exports.authorizeSchema = {
        options: {
            type: 'object',
            rule: {
                authType: {
                    type: 'enum',
                    required: false,
                    values: ['anonymous', ''],
                },
                authProvider: {
                    type: 'enum',
                    required: false,
                    values: ['alipay_openapi', 'wechat_openapi', 'dingtalk_openapi'],
                },
            },
        },
    };
    exports.getInfoSchema = {
        options: {
            type: 'object',
            required: false,
            rule: {
                authProvider: {
                    type: 'enum',
                    required: false,
                    values: ['alipay_openapi', 'wechat_openapi', 'dingtalk_openapi'],
                },
            },
        },
    };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2NoZW1hLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL3ZhbGlkYXRvci9zY2hlbWEudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0lBQWEsUUFBQSxlQUFlLEdBQUc7UUFDN0IsT0FBTyxFQUFFO1lBQ1AsSUFBSSxFQUFFLFFBQVE7WUFDZCxJQUFJLEVBQUU7Z0JBQ0osUUFBUSxFQUFFO29CQUNSLElBQUksRUFBRSxNQUFNO29CQUNaLFFBQVEsRUFBRSxLQUFLO29CQUNmLE1BQU0sRUFBRSxDQUFFLFdBQVcsRUFBRSxFQUFFLENBQUU7aUJBQzVCO2dCQUNELFlBQVksRUFBRTtvQkFDWixJQUFJLEVBQUUsTUFBTTtvQkFDWixRQUFRLEVBQUUsS0FBSztvQkFDZixNQUFNLEVBQUUsQ0FBRSxnQkFBZ0IsRUFBRSxnQkFBZ0IsRUFBRSxrQkFBa0IsQ0FBRTtpQkFDbkU7YUFDRjtTQUNGO0tBQ0YsQ0FBQztJQUVXLFFBQUEsYUFBYSxHQUFHO1FBQzNCLE9BQU8sRUFBRTtZQUNQLElBQUksRUFBRSxRQUFRO1lBQ2QsUUFBUSxFQUFFLEtBQUs7WUFDZixJQUFJLEVBQUU7Z0JBQ0osWUFBWSxFQUFFO29CQUNaLElBQUksRUFBRSxNQUFNO29CQUNaLFFBQVEsRUFBRSxLQUFLO29CQUNmLE1BQU0sRUFBRSxDQUFFLGdCQUFnQixFQUFFLGdCQUFnQixFQUFFLGtCQUFrQixDQUFFO2lCQUNuRTthQUNGO1NBQ0Y7S0FDRixDQUFDIn0=