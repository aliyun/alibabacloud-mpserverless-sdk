import { MPServerlessErrorClass } from '@alicloud/mpserverless-core';
const errorDefinition = {
    UnauthorizedError: {
        code: 'UnauthorizedError',
        message: '未授权错误',
    },
    InterfaceRequestError: {
        code: 'InterfaceRequestError',
        message: '接口请求错误',
    },
};
const bizError = MPServerlessErrorClass(errorDefinition);
export { bizError };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXJyb3IuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvZXJyb3IudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLHNCQUFzQixFQUFFLE1BQU0sNkJBQTZCLENBQUM7QUFFckUsTUFBTSxlQUFlLEdBQUc7SUFDdEIsaUJBQWlCLEVBQUU7UUFDakIsSUFBSSxFQUFFLG1CQUFtQjtRQUN6QixPQUFPLEVBQUUsT0FBTztLQUNqQjtJQUNELHFCQUFxQixFQUFFO1FBQ3JCLElBQUksRUFBRSx1QkFBdUI7UUFDN0IsT0FBTyxFQUFFLFFBQVE7S0FDbEI7Q0FDRixDQUFDO0FBRUYsTUFBTSxRQUFRLEdBQUcsc0JBQXNCLENBQUMsZUFBZSxDQUFDLENBQUM7QUFFekQsT0FBTyxFQUFFLFFBQVEsRUFBRSxDQUFDIn0=