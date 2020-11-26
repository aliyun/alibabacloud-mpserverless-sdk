export const uploadFileSchema = {
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
export const deleteFileSchema = {
    url: 'url',
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2NoZW1hLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL3ZhbGlkYXRvci9zY2hlbWEudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsTUFBTSxDQUFDLE1BQU0sZ0JBQWdCLEdBQUc7SUFDOUIsT0FBTyxFQUFFO1FBQ1AsSUFBSSxFQUFFLFFBQVE7UUFDZCxJQUFJLEVBQUU7WUFDSixRQUFRLEVBQUU7Z0JBQ1IsSUFBSSxFQUFFLEtBQUs7Z0JBQ1gsUUFBUSxFQUFFLEtBQUs7Z0JBQ2YsR0FBRyxFQUFFLENBQUM7YUFDUDtZQUNELFNBQVMsRUFBRTtnQkFDVCxJQUFJLEVBQUUsTUFBTTtnQkFDWixRQUFRLEVBQUUsS0FBSztnQkFDZixNQUFNLEVBQUUsQ0FBRSxNQUFNLEVBQUUsT0FBTyxFQUFFLE1BQU0sRUFBRSxNQUFNLEVBQUUsUUFBUSxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxPQUFPLENBQUU7YUFDNUY7WUFDRCxRQUFRLEVBQUU7Z0JBQ1IsSUFBSSxFQUFFLFFBQVE7YUFDZjtZQUNELEdBQUcsRUFBRTtnQkFDSCxJQUFJLEVBQUUsTUFBTTtnQkFDWixRQUFRLEVBQUUsS0FBSztnQkFDZixNQUFNLEVBQUUsQ0FBRSxRQUFRLENBQUU7YUFDckI7WUFDRCxPQUFPLEVBQUU7Z0JBQ1AsSUFBSSxFQUFFLEtBQUs7Z0JBQ1gsUUFBUSxFQUFFLEtBQUs7Z0JBQ2YsR0FBRyxFQUFFLENBQUM7YUFDUDtZQUNELE9BQU8sRUFBRTtnQkFDUCxJQUFJLEVBQUUsUUFBUTtnQkFDZCxRQUFRLEVBQUUsS0FBSztnQkFDZixLQUFLLEVBQUU7b0JBQ0wsWUFBWSxFQUFFO3dCQUNaLElBQUksRUFBRSxRQUFRO3dCQUNkLFFBQVEsRUFBRSxLQUFLO3FCQUNoQjtvQkFDRCxrQkFBa0IsRUFBRTt3QkFDbEIsSUFBSSxFQUFFLFFBQVE7d0JBQ2QsUUFBUSxFQUFFLEtBQUs7cUJBQ2hCO29CQUNELGVBQWUsRUFBRTt3QkFDZixJQUFJLEVBQUUsUUFBUTt3QkFDZCxRQUFRLEVBQUUsS0FBSztxQkFDaEI7b0JBQ0QsT0FBTyxFQUFFO3dCQUNQLElBQUksRUFBRSxRQUFRO3dCQUNkLFFBQVEsRUFBRSxLQUFLO3FCQUNoQjtpQkFDRjthQUNGO1lBQ0QsSUFBSSxFQUFFO2dCQUNKLElBQUksRUFBRSxRQUFRO2dCQUNkLFFBQVEsRUFBRSxLQUFLO2FBQ2hCO1NBQ0Y7S0FDRjtDQUNGLENBQUM7QUFFRixNQUFNLENBQUMsTUFBTSxnQkFBZ0IsR0FBRztJQUM5QixHQUFHLEVBQUUsS0FBSztDQUNYLENBQUMifQ==