import {
  // classes
  BaseService,
} from '@alicloud/mpserverless-core';

export interface GetInfoOptions {
  authProvider?: string;
}

export class AuthService extends BaseService {
  /**
   * return user info
   * @returns Promise<any>
   */
  public async getInfo(options?: GetInfoOptions): Promise<any> {
    const request = this.getEncoder();
    let params = {};
    if (options) {
      params = {
        ...options,
      };
    }
    if (this.transport.authType) {
      params = {
        authType: this.transport.authType,
      };
    }
    request.setBodyField({
      method: 'serverless.auth.user.getProfileInfo',
      params,
    });

    const response = await this.transport.request(request);
    return response.body;
  }
}
