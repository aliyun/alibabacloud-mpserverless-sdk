import { __awaiter } from "tslib";
import { MPFileService } from '@alicloud/mp-file-service';
import { assert } from '@alicloud/mpserverless-core';
export class HighFileSevice extends MPFileService {
    constructor(transport, options) {
        super(transport, options);
        assert(options.getFileUploadInfo, '[MPFileService]初始化时缺少 getFileUploadInfo 参数');
        this.getFileUploadInfo = options.getFileUploadInfo;
    }
    uploadFile(options) {
        const _super = Object.create(null, {
            uploadFile: { get: () => super.uploadFile }
        });
        return __awaiter(this, void 0, void 0, function* () {
            assert(options, 'options required');
            assert(options.filePath && typeof options.filePath === 'string', '[MPFileService]调用 uploadFile 缺少 filePath 参数');
            const fileInfoRes = yield this.getFileUploadInfo({
                filePath: options.filePath,
            });
            const { fileSize, fileExtension } = fileInfoRes.body;
            if (!options.fileSize && fileSize) {
                options.fileSize = fileSize;
            }
            if (!options.extension && fileExtension) {
                options.extension = fileExtension;
            }
            if (typeof options.fileSize === 'string') {
                options.fileSize = parseInt(options.fileSize);
            }
            return yield _super.uploadFile.call(this, options);
        });
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmlsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9maWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsYUFBYSxFQUFxQixNQUFNLDJCQUEyQixDQUFDO0FBQzdFLE9BQU8sRUFBaUIsTUFBTSxFQUFFLE1BQU0sNkJBQTZCLENBQUM7QUFFcEUsTUFBTSxPQUFPLGNBQWUsU0FBUSxhQUFhO0lBRy9DLFlBQVksU0FBd0IsRUFBRSxPQUFZO1FBQ2hELEtBQUssQ0FBQyxTQUFTLEVBQUUsT0FBTyxDQUFDLENBQUM7UUFFMUIsTUFBTSxDQUFDLE9BQU8sQ0FBQyxpQkFBaUIsRUFBRSw0Q0FBNEMsQ0FBQyxDQUFDO1FBRWhGLElBQUksQ0FBQyxpQkFBaUIsR0FBRyxPQUFPLENBQUMsaUJBQWlCLENBQUM7SUFDckQsQ0FBQztJQU1ZLFVBQVUsQ0FBRSxPQUEwQjs7Ozs7WUFDakQsTUFBTSxDQUFDLE9BQU8sRUFBRSxrQkFBa0IsQ0FBQyxDQUFDO1lBQ3BDLE1BQU0sQ0FBQyxPQUFPLENBQUMsUUFBUSxJQUFJLE9BQU8sT0FBTyxDQUFDLFFBQVEsS0FBSyxRQUFRLEVBQUUsNkNBQTZDLENBQUMsQ0FBQztZQUNoSCxNQUFNLFdBQVcsR0FBRyxNQUFNLElBQUksQ0FBQyxpQkFBaUIsQ0FBQztnQkFDL0MsUUFBUSxFQUFFLE9BQU8sQ0FBQyxRQUFRO2FBQzNCLENBQUMsQ0FBQztZQUNILE1BQU0sRUFBRSxRQUFRLEVBQUUsYUFBYSxFQUFFLEdBQUcsV0FBVyxDQUFDLElBQUksQ0FBQztZQUVyRCxJQUFJLENBQUMsT0FBTyxDQUFDLFFBQVEsSUFBSSxRQUFRLEVBQUU7Z0JBQ2pDLE9BQU8sQ0FBQyxRQUFRLEdBQUcsUUFBUSxDQUFDO2FBQzdCO1lBQ0QsSUFBSSxDQUFDLE9BQU8sQ0FBQyxTQUFTLElBQUksYUFBYSxFQUFFO2dCQUN2QyxPQUFPLENBQUMsU0FBUyxHQUFHLGFBQWEsQ0FBQzthQUNuQztZQUVELElBQUksT0FBTyxPQUFPLENBQUMsUUFBUSxLQUFLLFFBQVEsRUFBRTtnQkFDeEMsT0FBTyxDQUFDLFFBQVEsR0FBRyxRQUFRLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxDQUFDO2FBQy9DO1lBRUQsT0FBTyxNQUFNLE9BQU0sVUFBVSxZQUFDLE9BQU8sQ0FBQyxDQUFDO1FBQ3pDLENBQUM7S0FBQTtDQUNGIn0=