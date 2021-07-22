"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.bizError = void 0;
const mpserverless_core_1 = require("@alicloud/mpserverless-core");
const errorDefinition = {
    UploadFileError: {
        code: 'UploadFileError',
        message: '上传文件失败',
    },
};
const bizError = mpserverless_core_1.MPServerlessErrorClass(errorDefinition);
exports.bizError = bizError;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXJyb3IuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvZXJyb3IudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQUEsbUVBQXFFO0FBRXJFLE1BQU0sZUFBZSxHQUFHO0lBQ3RCLGVBQWUsRUFBRTtRQUNmLElBQUksRUFBRSxpQkFBaUI7UUFDdkIsT0FBTyxFQUFFLFFBQVE7S0FDbEI7Q0FDRixDQUFDO0FBRUYsTUFBTSxRQUFRLEdBQUcsMENBQXNCLENBQUMsZUFBZSxDQUFDLENBQUM7QUFFaEQsNEJBQVEifQ==