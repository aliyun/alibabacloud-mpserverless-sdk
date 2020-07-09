"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mpserverless_core_1 = require("@alicloud/mpserverless-core");
function OSSUploadResponseFormat(data) {
    return {
        id: data.id,
        key: data.ossPath,
        host: data.host,
        policy: data.policy,
        Signature: data.signature,
        OSSAccessKeyId: data.accessKeyId,
        securityToken: data.securityToken,
        cdnDomain: data.cdnDomain,
    };
}
exports.OSSUploadResponseFormat = OSSUploadResponseFormat;
exports.OSSUploadHeaderList = [
    'Expires',
    'Cache-Control',
    'Content-Type',
    'Content-Encoding',
    'Content-Disposition',
];
exports.WHITELIST_EXTENSIONS = [
    'jpg',
    'jpeg',
    'png',
    'gif',
    'webp',
    'svg',
    'image',
];
var OSSEnv;
(function (OSSEnv) {
    OSSEnv["PUBLIC"] = "public";
    OSSEnv["PRIVATE"] = "private";
})(OSSEnv || (OSSEnv = {}));
class FunctionFileService extends mpserverless_core_1.BaseService {
    async deleteFile(url) {
        const request = this.getEncoder();
        request.setBodyField({
            method: 'serverless.file.resource.delete',
            params: {
                id: url,
            },
        });
        const response = await this.transport.request(request);
        return response.body;
    }
    async getUploadFileOptions(options) {
        mpserverless_core_1.assert(options.filePath && typeof options.filePath === 'string', 'Invalid options.filePath');
        const fileName = options.filePath.split(/\\|\//).pop();
        const extension = fileName.split('.').pop();
        mpserverless_core_1.assert(exports.WHITELIST_EXTENSIONS.includes(extension.toLowerCase()), `目前不支持 ${extension} 类型文件`);
        const uploadRes = await this.getOSSUploadOptionsFromPath(fileName, options.path);
        const uploadOptions = OSSUploadResponseFormat(uploadRes);
        return {
            ...uploadOptions,
        };
    }
    async getOSSUploadOptionsFromPath(relativePath, targetPath, fileSize) {
        const options = { env: OSSEnv.PUBLIC };
        options.filename = relativePath.split('/').pop();
        options.size = fileSize;
        if (targetPath)
            options.targetPath = targetPath;
        const request = this.getEncoder();
        request.setBodyField({
            method: 'serverless.file.resource.generateProximalSign',
            params: options,
        });
        const response = await this.transport.request(request);
        return response.body.result;
    }
}
exports.FunctionFileService = FunctionFileService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxtRUFJcUM7QUFpQ3JDLFNBQWdCLHVCQUF1QixDQUFDLElBQTJCO0lBQ2pFLE9BQU87UUFDTCxFQUFFLEVBQUUsSUFBSSxDQUFDLEVBQUU7UUFDWCxHQUFHLEVBQUUsSUFBSSxDQUFDLE9BQU87UUFDakIsSUFBSSxFQUFFLElBQUksQ0FBQyxJQUFJO1FBQ2YsTUFBTSxFQUFFLElBQUksQ0FBQyxNQUFNO1FBQ25CLFNBQVMsRUFBRSxJQUFJLENBQUMsU0FBUztRQUN6QixjQUFjLEVBQUUsSUFBSSxDQUFDLFdBQVc7UUFDaEMsYUFBYSxFQUFFLElBQUksQ0FBQyxhQUFhO1FBQ2pDLFNBQVMsRUFBRSxJQUFJLENBQUMsU0FBUztLQUMxQixDQUFDO0FBQ0osQ0FBQztBQVhELDBEQVdDO0FBRVksUUFBQSxtQkFBbUIsR0FBRztJQUNqQyxTQUFTO0lBQ1QsZUFBZTtJQUNmLGNBQWM7SUFDZCxrQkFBa0I7SUFDbEIscUJBQXFCO0NBQ3RCLENBQUM7QUFFVyxRQUFBLG9CQUFvQixHQUFHO0lBRWxDLEtBQUs7SUFDTCxNQUFNO0lBQ04sS0FBSztJQUNMLEtBQUs7SUFDTCxNQUFNO0lBQ04sS0FBSztJQUNMLE9BQU87Q0FDUixDQUFDO0FBRUYsSUFBSyxNQUdKO0FBSEQsV0FBSyxNQUFNO0lBQ1QsMkJBQWlCLENBQUE7SUFDakIsNkJBQW1CLENBQUE7QUFDckIsQ0FBQyxFQUhJLE1BQU0sS0FBTixNQUFNLFFBR1Y7QUFxQkQsTUFBYSxtQkFBb0IsU0FBUSwrQkFBVztJQU8zQyxLQUFLLENBQUMsVUFBVSxDQUFDLEdBQVc7UUFDakMsTUFBTSxPQUFPLEdBQUcsSUFBSSxDQUFDLFVBQVUsRUFBRSxDQUFDO1FBQ2xDLE9BQU8sQ0FBQyxZQUFZLENBQUM7WUFDbkIsTUFBTSxFQUFFLGlDQUFpQztZQUN6QyxNQUFNLEVBQUU7Z0JBQ04sRUFBRSxFQUFFLEdBQUc7YUFDUjtTQUNGLENBQUMsQ0FBQztRQUVILE1BQU0sUUFBUSxHQUFHLE1BQU0sSUFBSSxDQUFDLFNBQVMsQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLENBQUM7UUFDdkQsT0FBTyxRQUFRLENBQUMsSUFBSSxDQUFDO0lBQ3ZCLENBQUM7SUFPTSxLQUFLLENBQUMsb0JBQW9CLENBQUMsT0FBMEI7UUFFMUQsMEJBQU0sQ0FBQyxPQUFPLENBQUMsUUFBUSxJQUFJLE9BQU8sT0FBTyxDQUFDLFFBQVEsS0FBSyxRQUFRLEVBQUUsMEJBQTBCLENBQUMsQ0FBQztRQUU3RixNQUFNLFFBQVEsR0FBRyxPQUFPLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsQ0FBQyxHQUFHLEVBQUUsQ0FBQztRQUN2RCxNQUFNLFNBQVMsR0FBRyxRQUFRLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsRUFBRSxDQUFDO1FBQzVDLDBCQUFNLENBQUMsNEJBQW9CLENBQUMsUUFBUSxDQUFDLFNBQVMsQ0FBQyxXQUFXLEVBQUUsQ0FBQyxFQUFFLFNBQVMsU0FBUyxPQUFPLENBQUMsQ0FBQztRQUcxRixNQUFNLFNBQVMsR0FBRyxNQUFNLElBQUksQ0FBQywyQkFBMkIsQ0FBQyxRQUFRLEVBQUUsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ2pGLE1BQU0sYUFBYSxHQUFHLHVCQUF1QixDQUFDLFNBQVMsQ0FBQyxDQUFDO1FBRXpELE9BQU87WUFDTCxHQUFHLGFBQWE7U0FDakIsQ0FBQztJQUNKLENBQUM7SUFTTyxLQUFLLENBQUMsMkJBQTJCLENBQ3ZDLFlBQW9CLEVBQ3BCLFVBQWtCLEVBQ2xCLFFBQWlCO1FBRWpCLE1BQU0sT0FBTyxHQUFRLEVBQUUsR0FBRyxFQUFFLE1BQU0sQ0FBQyxNQUFNLEVBQUUsQ0FBQztRQUM1QyxPQUFPLENBQUMsUUFBUSxHQUFHLFlBQVksQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBRyxFQUFFLENBQUM7UUFDakQsT0FBTyxDQUFDLElBQUksR0FBRyxRQUFRLENBQUM7UUFDeEIsSUFBSSxVQUFVO1lBQUUsT0FBTyxDQUFDLFVBQVUsR0FBRyxVQUFVLENBQUM7UUFFaEQsTUFBTSxPQUFPLEdBQUcsSUFBSSxDQUFDLFVBQVUsRUFBRSxDQUFDO1FBQ2xDLE9BQU8sQ0FBQyxZQUFZLENBQUM7WUFDbkIsTUFBTSxFQUFFLCtDQUErQztZQUN2RCxNQUFNLEVBQUUsT0FBTztTQUNoQixDQUFDLENBQUM7UUFDSCxNQUFNLFFBQVEsR0FBRyxNQUFNLElBQUksQ0FBQyxTQUFTLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBQ3ZELE9BQU8sUUFBUSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUM7SUFDOUIsQ0FBQztDQUNGO0FBbkVELGtEQW1FQyJ9