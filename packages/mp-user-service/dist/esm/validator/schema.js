export const authorizeSchema = {
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
export const getInfoSchema = {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2NoZW1hLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL3ZhbGlkYXRvci9zY2hlbWEudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsTUFBTSxDQUFDLE1BQU0sZUFBZSxHQUFHO0lBQzdCLE9BQU8sRUFBRTtRQUNQLElBQUksRUFBRSxRQUFRO1FBQ2QsSUFBSSxFQUFFO1lBQ0osUUFBUSxFQUFFO2dCQUNSLElBQUksRUFBRSxNQUFNO2dCQUNaLFFBQVEsRUFBRSxLQUFLO2dCQUNmLE1BQU0sRUFBRSxDQUFFLFdBQVcsRUFBRSxFQUFFLENBQUU7YUFDNUI7WUFDRCxZQUFZLEVBQUU7Z0JBQ1osSUFBSSxFQUFFLE1BQU07Z0JBQ1osUUFBUSxFQUFFLEtBQUs7Z0JBQ2YsTUFBTSxFQUFFLENBQUUsZ0JBQWdCLEVBQUUsZ0JBQWdCLEVBQUUsa0JBQWtCLENBQUU7YUFDbkU7U0FDRjtLQUNGO0NBQ0YsQ0FBQztBQUVGLE1BQU0sQ0FBQyxNQUFNLGFBQWEsR0FBRztJQUMzQixPQUFPLEVBQUU7UUFDUCxJQUFJLEVBQUUsUUFBUTtRQUNkLFFBQVEsRUFBRSxLQUFLO1FBQ2YsSUFBSSxFQUFFO1lBQ0osWUFBWSxFQUFFO2dCQUNaLElBQUksRUFBRSxNQUFNO2dCQUNaLFFBQVEsRUFBRSxLQUFLO2dCQUNmLE1BQU0sRUFBRSxDQUFFLGdCQUFnQixFQUFFLGdCQUFnQixFQUFFLGtCQUFrQixDQUFFO2FBQ25FO1NBQ0Y7S0FDRjtDQUNGLENBQUMifQ==