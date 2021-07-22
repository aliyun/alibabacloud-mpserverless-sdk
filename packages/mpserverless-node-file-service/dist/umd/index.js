"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FunctionFileService = exports.OSSUploadHeaderList = exports.OSSUploadResponseFormat = void 0;
const tslib_1 = require("tslib");
const mpserverless_core_1 = require("@alicloud/mpserverless-core");
const fs_1 = tslib_1.__importDefault(require("fs"));
const formstream_1 = tslib_1.__importDefault(require("formstream"));
const error_1 = require("./error");
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
var OSSEnv;
(function (OSSEnv) {
    OSSEnv["PUBLIC"] = "public";
    OSSEnv["PRIVATE"] = "private";
})(OSSEnv || (OSSEnv = {}));
class FunctionFileService extends mpserverless_core_1.BaseService {
    constructor(transport, request) {
        super(transport);
        this.request = request;
    }
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
        const fileName = options.fileName != null ? options.fileName : options.filePath.split(/\\|\//).pop();
        const uploadRes = await this.getOSSUploadOptionsFromPath(fileName);
        const uploadOptions = OSSUploadResponseFormat(uploadRes);
        return {
            ...uploadOptions,
        };
    }
    async getFileSize(filePath) {
        try {
            const info = await fs_1.default.statSync(filePath);
            return info.size;
        }
        catch (e) {
            throw new error_1.bizError.UploadFileError('读取文件失败');
        }
    }
    async reportOSSUpload(id, contentType) {
        const request = this.getEncoder();
        const params = {
            id,
        };
        if (contentType) {
            params.contentType = contentType;
        }
        request.setBodyField({
            method: 'serverless.file.resource.report',
            params,
        });
        await this.transport.request(request);
    }
    async uploadFile(options) {
        let fileSize;
        let fileName = options.fileName;
        if (options.filePath) {
            mpserverless_core_1.assert(typeof options.filePath === 'string', 'Invalid options.filePath');
            if (fileName == null) {
                fileName = options.filePath.split(/\\|\//).pop();
            }
            else {
                mpserverless_core_1.assert(typeof fileName === 'string' && fileName, 'Invalid options.fileName');
            }
            fileSize = await this.getFileSize(options.filePath);
        }
        else {
            mpserverless_core_1.assert(options.fileBuffer, 'filePath和fileBuffer不能都为空');
            mpserverless_core_1.assert(Buffer.isBuffer(options.fileBuffer), 'Invalid options.fileBuffer');
            mpserverless_core_1.assert(typeof fileName === 'string' && fileName, 'Invalid options.fileName');
            fileSize = options.fileBuffer.length;
        }
        const uploadRes = await this.getOSSUploadOptionsFromPath(fileName, fileSize);
        const uploadOptions = OSSUploadResponseFormat(uploadRes);
        const uploadUrl = uploadOptions.host;
        const form = new formstream_1.default();
        form.field('X-OSS-server-side-encrpytion', 'AES256');
        form.field('success_action_status', 200);
        Object.keys(options.meta || {}).forEach(key => {
            form.field(`x-oss-meta-${key}`, options.meta[key]);
        });
        if (options.headers) {
            exports.OSSUploadHeaderList.forEach(key => {
                const fieldName = key
                    .replace(/\-[A-Z]/g, match => match[1])
                    .replace(/^[A-Z]/, match => match.toLowerCase());
                if (options.headers.hasOwnProperty(fieldName)) {
                    form.field(key, options.headers[fieldName]);
                }
            });
        }
        if (uploadOptions.securityToken) {
            form.field('x-oss-security-token', uploadOptions.securityToken);
        }
        Object.keys(uploadOptions).forEach(key => {
            if (key === 'host' || key === 'securityToken')
                return;
            form.field(key, uploadOptions[key]);
        });
        if (options.filePath) {
            form.file('file', options.filePath, fileName, fileSize);
        }
        else {
            form.buffer('file', options.fileBuffer, fileName);
        }
        await this.upload(uploadUrl, form);
        await this.reportOSSUpload(uploadOptions.id);
        return {
            fileUrl: `https://${uploadOptions.cdnDomain}/${uploadOptions.key}`,
            filePath: uploadOptions.key,
        };
    }
    async getOSSUploadOptionsFromPath(fileName, fileSize) {
        const options = { env: OSSEnv.PUBLIC };
        options.filename = fileName;
        options.size = fileSize;
        const request = this.getEncoder();
        request.setBodyField({
            method: 'serverless.file.resource.generateProximalSign',
            params: options,
        });
        const response = await this.transport.request(request);
        return response.body.result;
    }
    async upload(host, form) {
        await this.request(host, {
            method: 'POST',
            stream: form,
            headers: form.headers(),
        });
    }
}
exports.FunctionFileService = FunctionFileService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLG1FQUtxQztBQUNyQyxvREFBb0I7QUFDcEIsb0VBQW9DO0FBQ3BDLG1DQUFtQztBQWlDbkMsU0FBZ0IsdUJBQXVCLENBQUMsSUFBMkI7SUFDakUsT0FBTztRQUNMLEVBQUUsRUFBRSxJQUFJLENBQUMsRUFBRTtRQUNYLEdBQUcsRUFBRSxJQUFJLENBQUMsT0FBTztRQUNqQixJQUFJLEVBQUUsSUFBSSxDQUFDLElBQUk7UUFDZixNQUFNLEVBQUUsSUFBSSxDQUFDLE1BQU07UUFDbkIsU0FBUyxFQUFFLElBQUksQ0FBQyxTQUFTO1FBQ3pCLGNBQWMsRUFBRSxJQUFJLENBQUMsV0FBVztRQUNoQyxhQUFhLEVBQUUsSUFBSSxDQUFDLGFBQWE7UUFDakMsU0FBUyxFQUFFLElBQUksQ0FBQyxTQUFTO0tBQzFCLENBQUM7QUFDSixDQUFDO0FBWEQsMERBV0M7QUFFWSxRQUFBLG1CQUFtQixHQUFHO0lBQ2pDLFNBQVM7SUFDVCxlQUFlO0lBQ2YsY0FBYztJQUNkLGtCQUFrQjtJQUNsQixxQkFBcUI7Q0FDdEIsQ0FBQztBQUVGLElBQUssTUFHSjtBQUhELFdBQUssTUFBTTtJQUNULDJCQUFpQixDQUFBO0lBQ2pCLDZCQUFtQixDQUFBO0FBQ3JCLENBQUMsRUFISSxNQUFNLEtBQU4sTUFBTSxRQUdWO0FBZ0JELE1BQWEsbUJBQW9CLFNBQVEsK0JBQVc7SUFJbEQsWUFBWSxTQUF3QixFQUFFLE9BQVk7UUFDaEQsS0FBSyxDQUFDLFNBQVMsQ0FBQyxDQUFDO1FBQ2pCLElBQUksQ0FBQyxPQUFPLEdBQUcsT0FBTyxDQUFDO0lBQ3pCLENBQUM7SUFNTSxLQUFLLENBQUMsVUFBVSxDQUFDLEdBQVc7UUFDakMsTUFBTSxPQUFPLEdBQUcsSUFBSSxDQUFDLFVBQVUsRUFBRSxDQUFDO1FBQ2xDLE9BQU8sQ0FBQyxZQUFZLENBQUM7WUFDbkIsTUFBTSxFQUFFLGlDQUFpQztZQUN6QyxNQUFNLEVBQUU7Z0JBQ04sRUFBRSxFQUFFLEdBQUc7YUFDUjtTQUNGLENBQUMsQ0FBQztRQUVILE1BQU0sUUFBUSxHQUFHLE1BQU0sSUFBSSxDQUFDLFNBQVMsQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLENBQUM7UUFDdkQsT0FBTyxRQUFRLENBQUMsSUFBSSxDQUFDO0lBQ3ZCLENBQUM7SUFPTSxLQUFLLENBQUMsb0JBQW9CLENBQUMsT0FBMEI7UUFFMUQsMEJBQU0sQ0FBQyxPQUFPLENBQUMsUUFBUSxJQUFJLE9BQU8sT0FBTyxDQUFDLFFBQVEsS0FBSyxRQUFRLEVBQUUsMEJBQTBCLENBQUMsQ0FBQztRQUM3RixNQUFNLFFBQVEsR0FBRyxPQUFPLENBQUMsUUFBUSxJQUFJLElBQUksQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLENBQUMsR0FBRyxFQUFFLENBQUM7UUFFckcsTUFBTSxTQUFTLEdBQUcsTUFBTSxJQUFJLENBQUMsMkJBQTJCLENBQUMsUUFBUSxDQUFDLENBQUM7UUFDbkUsTUFBTSxhQUFhLEdBQUcsdUJBQXVCLENBQUMsU0FBUyxDQUFDLENBQUM7UUFFekQsT0FBTztZQUNMLEdBQUcsYUFBYTtTQUNqQixDQUFDO0lBQ0osQ0FBQztJQU9NLEtBQUssQ0FBQyxXQUFXLENBQUMsUUFBZ0I7UUFDdkMsSUFBSTtZQUNGLE1BQU0sSUFBSSxHQUFHLE1BQU0sWUFBRSxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsQ0FBQztZQUN6QyxPQUFPLElBQUksQ0FBQyxJQUFJLENBQUM7U0FDbEI7UUFBQyxPQUFPLENBQUMsRUFBRTtZQUNWLE1BQU0sSUFBSSxnQkFBUSxDQUFDLGVBQWUsQ0FBQyxRQUFRLENBQUMsQ0FBQztTQUM5QztJQUNILENBQUM7SUFRTSxLQUFLLENBQUMsZUFBZSxDQUFDLEVBQVUsRUFBRSxXQUFvQjtRQUMzRCxNQUFNLE9BQU8sR0FBRyxJQUFJLENBQUMsVUFBVSxFQUFFLENBQUM7UUFDbEMsTUFBTSxNQUFNLEdBQTBCO1lBQ3BDLEVBQUU7U0FDSCxDQUFDO1FBQ0YsSUFBSSxXQUFXLEVBQUU7WUFDZixNQUFNLENBQUMsV0FBVyxHQUFHLFdBQVcsQ0FBQztTQUNsQztRQUNELE9BQU8sQ0FBQyxZQUFZLENBQUM7WUFDbkIsTUFBTSxFQUFFLGlDQUFpQztZQUN6QyxNQUFNO1NBQ1AsQ0FBQyxDQUFDO1FBQ0gsTUFBTSxJQUFJLENBQUMsU0FBUyxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsQ0FBQztJQUN4QyxDQUFDO0lBT00sS0FBSyxDQUFDLFVBQVUsQ0FBQyxPQUEwQjtRQUVoRCxJQUFJLFFBQVEsQ0FBQztRQUNiLElBQUksUUFBUSxHQUFHLE9BQU8sQ0FBQyxRQUFRLENBQUM7UUFDaEMsSUFBSSxPQUFPLENBQUMsUUFBUSxFQUFFO1lBQ3BCLDBCQUFNLENBQUMsT0FBTyxPQUFPLENBQUMsUUFBUSxLQUFLLFFBQVEsRUFBRSwwQkFBMEIsQ0FBQyxDQUFDO1lBQ3pFLElBQUksUUFBUSxJQUFJLElBQUksRUFBRTtnQkFDcEIsUUFBUSxHQUFHLE9BQU8sQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxDQUFDLEdBQUcsRUFBRSxDQUFDO2FBQ2xEO2lCQUFNO2dCQUNMLDBCQUFNLENBQUMsT0FBTyxRQUFRLEtBQUssUUFBUSxJQUFJLFFBQVEsRUFBRSwwQkFBMEIsQ0FBQyxDQUFDO2FBQzlFO1lBQ0QsUUFBUSxHQUFHLE1BQU0sSUFBSSxDQUFDLFdBQVcsQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDLENBQUM7U0FDckQ7YUFBTTtZQUNMLDBCQUFNLENBQUMsT0FBTyxDQUFDLFVBQVUsRUFBRSwwQkFBMEIsQ0FBQyxDQUFDO1lBQ3ZELDBCQUFNLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUMsVUFBVSxDQUFDLEVBQUUsNEJBQTRCLENBQUMsQ0FBQztZQUMxRSwwQkFBTSxDQUFDLE9BQU8sUUFBUSxLQUFLLFFBQVEsSUFBSSxRQUFRLEVBQUUsMEJBQTBCLENBQUMsQ0FBQztZQUM3RSxRQUFRLEdBQUcsT0FBTyxDQUFDLFVBQVUsQ0FBQyxNQUFNLENBQUM7U0FDdEM7UUFHRCxNQUFNLFNBQVMsR0FBRyxNQUFNLElBQUksQ0FBQywyQkFBMkIsQ0FBQyxRQUFRLEVBQUUsUUFBUSxDQUFDLENBQUM7UUFDN0UsTUFBTSxhQUFhLEdBQUcsdUJBQXVCLENBQUMsU0FBUyxDQUFDLENBQUM7UUFDekQsTUFBTSxTQUFTLEdBQUcsYUFBYSxDQUFDLElBQUksQ0FBQztRQUdyQyxNQUFNLElBQUksR0FBRyxJQUFJLG9CQUFVLEVBQUUsQ0FBQztRQUU5QixJQUFJLENBQUMsS0FBSyxDQUFDLDhCQUE4QixFQUFFLFFBQVEsQ0FBQyxDQUFDO1FBQ3JELElBQUksQ0FBQyxLQUFLLENBQUMsdUJBQXVCLEVBQUUsR0FBRyxDQUFDLENBQUM7UUFFekMsTUFBTSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxJQUFJLEVBQUUsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsRUFBRTtZQUM1QyxJQUFJLENBQUMsS0FBSyxDQUFDLGNBQWMsR0FBRyxFQUFFLEVBQUUsT0FBTyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO1FBQ3JELENBQUMsQ0FBQyxDQUFDO1FBR0gsSUFBSSxPQUFPLENBQUMsT0FBTyxFQUFFO1lBQ25CLDJCQUFtQixDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsRUFBRTtnQkFDaEMsTUFBTSxTQUFTLEdBQUcsR0FBRztxQkFDbEIsT0FBTyxDQUFDLFVBQVUsRUFBRSxLQUFLLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQztxQkFDdEMsT0FBTyxDQUFDLFFBQVEsRUFBRSxLQUFLLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQyxXQUFXLEVBQUUsQ0FBQyxDQUFDO2dCQUVuRCxJQUFJLE9BQU8sQ0FBQyxPQUFPLENBQUMsY0FBYyxDQUFDLFNBQVMsQ0FBQyxFQUFFO29CQUM3QyxJQUFJLENBQUMsS0FBSyxDQUFDLEdBQUcsRUFBRSxPQUFPLENBQUMsT0FBTyxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUM7aUJBQzdDO1lBQ0gsQ0FBQyxDQUFDLENBQUM7U0FDSjtRQUdELElBQUksYUFBYSxDQUFDLGFBQWEsRUFBRTtZQUMvQixJQUFJLENBQUMsS0FBSyxDQUFDLHNCQUFzQixFQUFFLGFBQWEsQ0FBQyxhQUFhLENBQUMsQ0FBQztTQUNqRTtRQUNELE1BQU0sQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxFQUFFO1lBQ3ZDLElBQUksR0FBRyxLQUFLLE1BQU0sSUFBSSxHQUFHLEtBQUssZUFBZTtnQkFBRSxPQUFPO1lBQ3RELElBQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxFQUFFLGFBQWEsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO1FBQ3RDLENBQUMsQ0FBQyxDQUFDO1FBRUgsSUFBSSxPQUFPLENBQUMsUUFBUSxFQUFFO1lBQ3BCLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFLE9BQU8sQ0FBQyxRQUFRLEVBQUUsUUFBUSxFQUFFLFFBQVEsQ0FBQyxDQUFDO1NBQ3pEO2FBQU07WUFDTCxJQUFJLENBQUMsTUFBTSxDQUFDLE1BQU0sRUFBRSxPQUFPLENBQUMsVUFBVSxFQUFFLFFBQVEsQ0FBQyxDQUFDO1NBQ25EO1FBR0QsTUFBTSxJQUFJLENBQUMsTUFBTSxDQUFDLFNBQVMsRUFBRSxJQUFJLENBQUMsQ0FBQztRQUVuQyxNQUFNLElBQUksQ0FBQyxlQUFlLENBQUMsYUFBYSxDQUFDLEVBQUUsQ0FBQyxDQUFDO1FBRTdDLE9BQU87WUFDTCxPQUFPLEVBQUUsV0FBVyxhQUFhLENBQUMsU0FBUyxJQUFJLGFBQWEsQ0FBQyxHQUFHLEVBQUU7WUFDbEUsUUFBUSxFQUFFLGFBQWEsQ0FBQyxHQUFHO1NBQzVCLENBQUM7SUFDSixDQUFDO0lBUU8sS0FBSyxDQUFDLDJCQUEyQixDQUN2QyxRQUFnQixFQUNoQixRQUFpQjtRQUVqQixNQUFNLE9BQU8sR0FBUSxFQUFFLEdBQUcsRUFBRSxNQUFNLENBQUMsTUFBTSxFQUFFLENBQUM7UUFDNUMsT0FBTyxDQUFDLFFBQVEsR0FBRyxRQUFRLENBQUM7UUFDNUIsT0FBTyxDQUFDLElBQUksR0FBRyxRQUFRLENBQUM7UUFDeEIsTUFBTSxPQUFPLEdBQUcsSUFBSSxDQUFDLFVBQVUsRUFBRSxDQUFDO1FBQ2xDLE9BQU8sQ0FBQyxZQUFZLENBQUM7WUFDbkIsTUFBTSxFQUFFLCtDQUErQztZQUN2RCxNQUFNLEVBQUUsT0FBTztTQUNoQixDQUFDLENBQUM7UUFDSCxNQUFNLFFBQVEsR0FBRyxNQUFNLElBQUksQ0FBQyxTQUFTLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBQ3ZELE9BQU8sUUFBUSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUM7SUFDOUIsQ0FBQztJQVFPLEtBQUssQ0FBQyxNQUFNLENBQ2xCLElBQVksRUFDWixJQUF3QjtRQUV4QixNQUFNLElBQUksQ0FBQyxPQUFPLENBQ2hCLElBQUksRUFDSjtZQUNFLE1BQU0sRUFBRSxNQUFNO1lBQ2QsTUFBTSxFQUFFLElBQUk7WUFDWixPQUFPLEVBQUUsSUFBSSxDQUFDLE9BQU8sRUFBRTtTQUN4QixDQUNGLENBQUM7SUFDSixDQUFDO0NBQ0Y7QUF0TUQsa0RBc01DIn0=