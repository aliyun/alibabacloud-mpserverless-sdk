import { MPServerlessCore, assert, } from '@alicloud/mpserverless-core';
import { ProxyService } from '@alicloud/mp-proxy-service';
import { DbService } from '@alicloud/mp-db-service';
import { UserService } from '@alicloud/mp-user-service';
import { FunctionService } from '@alicloud/mp-function-service';
import { MPHTTPTransport } from './transport';
import { HighFileSevice } from './file';
export class MPServerlessMiniAppCore extends MPServerlessCore {
    constructor(appGlobal, options) {
        super(Object.assign(Object.assign({}, options), { httpTransport: MPHTTPTransport, options: appGlobal.logger }));
        assert(options.clientSecret, 'clientSecret is required');
        assert(options.appId, 'appId is required');
        this.user = new UserService(this.transport, {
            getAuthCode: this.transport.wrapApi(appGlobal.getAuthCode),
            request: this.transport.wrapApi(appGlobal.request),
            appId: options.appId,
            appSecret: options.clientSecret,
            isvAppId: options.isvAppId,
            ua: this.ua,
        });
        this.transport.setUserService(this.user);
        this.transport.setRequest(this.transport.wrapApi(appGlobal.request));
        this.db = new DbService(this.transport);
        this.file = new HighFileSevice(this.transport, {
            uploadFile: this.transport.wrapApi(appGlobal.uploadFile),
            getFileUploadInfo: this.transport.wrapApi(appGlobal.getFileUploadInfo),
        });
        this.function = new FunctionService(this.transport);
        this.network = new ProxyService(this.transport);
    }
    get version() {
        return VERSION;
    }
    get ua() {
        return PKGUA;
    }
    createTransport(options) {
        super.createTransport(options);
        this.transport.setAppSecret(options.clientSecret).setUA(this.ua);
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibXBzZXJ2ZXJsZXNzLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL21wc2VydmVybGVzcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQ0wsZ0JBQWdCLEVBRWhCLE1BQU0sR0FDUCxNQUFNLDZCQUE2QixDQUFDO0FBQ3JDLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSw0QkFBNEIsQ0FBQztBQUMxRCxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0seUJBQXlCLENBQUM7QUFDcEQsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLDJCQUEyQixDQUFDO0FBQ3hELE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSwrQkFBK0IsQ0FBQztBQUNoRSxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sYUFBYSxDQUFDO0FBQzlDLE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSxRQUFRLENBQUM7QUFFeEMsTUFBTSxPQUFPLHVCQUF3QixTQUFRLGdCQUFnQjtJQU8zRCxZQUFZLFNBQWMsRUFBRSxPQUFvQjtRQUM5QyxLQUFLLGlDQUFNLE9BQU8sS0FBRSxhQUFhLEVBQUUsZUFBZSxFQUFFLE9BQU8sRUFBRSxTQUFTLENBQUMsTUFBTSxJQUFHLENBQUM7UUFFakYsTUFBTSxDQUFDLE9BQU8sQ0FBQyxZQUFZLEVBQUUsMEJBQTBCLENBQUMsQ0FBQztRQUN6RCxNQUFNLENBQUMsT0FBTyxDQUFDLEtBQUssRUFBRSxtQkFBbUIsQ0FBQyxDQUFDO1FBQzNDLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxXQUFXLENBQUMsSUFBSSxDQUFDLFNBQVMsRUFBRTtZQUMxQyxXQUFXLEVBQUcsSUFBSSxDQUFDLFNBQTZCLENBQUMsT0FBTyxDQUFDLFNBQVMsQ0FBQyxXQUFXLENBQUM7WUFDL0UsT0FBTyxFQUFHLElBQUksQ0FBQyxTQUE2QixDQUFDLE9BQU8sQ0FBQyxTQUFTLENBQUMsT0FBTyxDQUFDO1lBQ3ZFLEtBQUssRUFBRSxPQUFPLENBQUMsS0FBSztZQUNwQixTQUFTLEVBQUUsT0FBTyxDQUFDLFlBQVk7WUFDL0IsUUFBUSxFQUFFLE9BQU8sQ0FBQyxRQUFRO1lBQzFCLEVBQUUsRUFBRSxJQUFJLENBQUMsRUFBRTtTQUNaLENBQUMsQ0FBQztRQUNGLElBQUksQ0FBQyxTQUE2QixDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDN0QsSUFBSSxDQUFDLFNBQTZCLENBQUMsVUFBVSxDQUFFLElBQUksQ0FBQyxTQUE2QixDQUFDLE9BQU8sQ0FBQyxTQUFTLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQztRQUMvRyxJQUFJLENBQUMsRUFBRSxHQUFHLElBQUksU0FBUyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQztRQUN4QyxJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksY0FBYyxDQUFDLElBQUksQ0FBQyxTQUFTLEVBQUU7WUFDN0MsVUFBVSxFQUFHLElBQUksQ0FBQyxTQUE2QixDQUFDLE9BQU8sQ0FBQyxTQUFTLENBQUMsVUFBVSxDQUFDO1lBQzdFLGlCQUFpQixFQUFHLElBQUksQ0FBQyxTQUE2QixDQUFDLE9BQU8sQ0FBQyxTQUFTLENBQUMsaUJBQWlCLENBQUM7U0FDNUYsQ0FBQyxDQUFDO1FBQ0gsSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLGVBQWUsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUM7UUFDcEQsSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLFlBQVksQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUM7SUFDbEQsQ0FBQztJQU1ELElBQVcsT0FBTztRQUNoQixPQUFPLE9BQU8sQ0FBQztJQUNqQixDQUFDO0lBS0QsSUFBYyxFQUFFO1FBQ2QsT0FBTyxLQUFLLENBQUM7SUFDZixDQUFDO0lBTVMsZUFBZSxDQUFDLE9BQW9CO1FBQzVDLEtBQUssQ0FBQyxlQUFlLENBQUMsT0FBTyxDQUFDLENBQUM7UUFDL0IsSUFBSSxDQUFDLFNBQVMsQ0FBQyxZQUFZLENBQUMsT0FBTyxDQUFDLFlBQVksQ0FBQyxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUM7SUFDbkUsQ0FBQztDQUNGIn0=