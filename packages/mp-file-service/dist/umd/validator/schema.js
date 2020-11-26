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
    exports.deleteFileSchema = exports.uploadFileSchema = void 0;
    exports.uploadFileSchema = {
        options: {
            type: 'object',
            rule: {
                fileSize: {
                    type: 'int',
                    required: false,
                    min: 0,
                },
                extension: {
                    type: 'enum',
                    required: false,
                    values: ['.jpg', '.jpeg', '.png', '.gif', '.image', 'jpg', 'jpeg', 'png', 'gif', 'image'],
                },
                filePath: {
                    type: 'string',
                },
                env: {
                    type: 'enum',
                    required: false,
                    values: ['public'],
                },
                timeout: {
                    type: 'int',
                    required: false,
                    min: 0,
                },
                headers: {
                    type: 'object',
                    required: false,
                    rules: {
                        cacheControl: {
                            type: 'string',
                            required: false,
                        },
                        contentDisposition: {
                            type: 'string',
                            required: false,
                        },
                        contentEncoding: {
                            type: 'string',
                            required: false,
                        },
                        expires: {
                            type: 'string',
                            required: false,
                        },
                    },
                },
                meta: {
                    type: 'object',
                    required: false,
                },
            },
        },
    };
    exports.deleteFileSchema = {
        url: 'url',
    };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2NoZW1hLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL3ZhbGlkYXRvci9zY2hlbWEudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0lBQWEsUUFBQSxnQkFBZ0IsR0FBRztRQUM5QixPQUFPLEVBQUU7WUFDUCxJQUFJLEVBQUUsUUFBUTtZQUNkLElBQUksRUFBRTtnQkFDSixRQUFRLEVBQUU7b0JBQ1IsSUFBSSxFQUFFLEtBQUs7b0JBQ1gsUUFBUSxFQUFFLEtBQUs7b0JBQ2YsR0FBRyxFQUFFLENBQUM7aUJBQ1A7Z0JBQ0QsU0FBUyxFQUFFO29CQUNULElBQUksRUFBRSxNQUFNO29CQUNaLFFBQVEsRUFBRSxLQUFLO29CQUNmLE1BQU0sRUFBRSxDQUFFLE1BQU0sRUFBRSxPQUFPLEVBQUUsTUFBTSxFQUFFLE1BQU0sRUFBRSxRQUFRLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLE9BQU8sQ0FBRTtpQkFDNUY7Z0JBQ0QsUUFBUSxFQUFFO29CQUNSLElBQUksRUFBRSxRQUFRO2lCQUNmO2dCQUNELEdBQUcsRUFBRTtvQkFDSCxJQUFJLEVBQUUsTUFBTTtvQkFDWixRQUFRLEVBQUUsS0FBSztvQkFDZixNQUFNLEVBQUUsQ0FBRSxRQUFRLENBQUU7aUJBQ3JCO2dCQUNELE9BQU8sRUFBRTtvQkFDUCxJQUFJLEVBQUUsS0FBSztvQkFDWCxRQUFRLEVBQUUsS0FBSztvQkFDZixHQUFHLEVBQUUsQ0FBQztpQkFDUDtnQkFDRCxPQUFPLEVBQUU7b0JBQ1AsSUFBSSxFQUFFLFFBQVE7b0JBQ2QsUUFBUSxFQUFFLEtBQUs7b0JBQ2YsS0FBSyxFQUFFO3dCQUNMLFlBQVksRUFBRTs0QkFDWixJQUFJLEVBQUUsUUFBUTs0QkFDZCxRQUFRLEVBQUUsS0FBSzt5QkFDaEI7d0JBQ0Qsa0JBQWtCLEVBQUU7NEJBQ2xCLElBQUksRUFBRSxRQUFROzRCQUNkLFFBQVEsRUFBRSxLQUFLO3lCQUNoQjt3QkFDRCxlQUFlLEVBQUU7NEJBQ2YsSUFBSSxFQUFFLFFBQVE7NEJBQ2QsUUFBUSxFQUFFLEtBQUs7eUJBQ2hCO3dCQUNELE9BQU8sRUFBRTs0QkFDUCxJQUFJLEVBQUUsUUFBUTs0QkFDZCxRQUFRLEVBQUUsS0FBSzt5QkFDaEI7cUJBQ0Y7aUJBQ0Y7Z0JBQ0QsSUFBSSxFQUFFO29CQUNKLElBQUksRUFBRSxRQUFRO29CQUNkLFFBQVEsRUFBRSxLQUFLO2lCQUNoQjthQUNGO1NBQ0Y7S0FDRixDQUFDO0lBRVcsUUFBQSxnQkFBZ0IsR0FBRztRQUM5QixHQUFHLEVBQUUsS0FBSztLQUNYLENBQUMifQ==