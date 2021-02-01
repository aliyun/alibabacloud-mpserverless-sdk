"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mpserverless_core_1 = require("@alicloud/mpserverless-core");
const errorDefinition = {
    UploadFileError: {
        code: 'UploadFileError',
        message: '上传文件失败',
    },
};
const bizError = mpserverless_core_1.MPServerlessErrorClass(errorDefinition);
exports.bizError = bizError;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXJyb3IuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvZXJyb3IudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxtRUFBcUU7QUFFckUsTUFBTSxlQUFlLEdBQUc7SUFDdEIsZUFBZSxFQUFFO1FBQ2YsSUFBSSxFQUFFLGlCQUFpQjtRQUN2QixPQUFPLEVBQUUsUUFBUTtLQUNsQjtDQUNGLENBQUM7QUFFRixNQUFNLFFBQVEsR0FBRywwQ0FBc0IsQ0FBQyxlQUFlLENBQUMsQ0FBQztBQUVoRCw0QkFBUSJ9