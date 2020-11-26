import { HTTPRequestEncoder, HTTPResponseDecoder, PREFIX, } from '@alicloud/mpserverless-core';
import crypto from 'crypto-js/core';
import HmacMD5 from 'crypto-js/hmac-md5';
import { bizError } from './error';
export class MPHTTPRequestEncoder extends HTTPRequestEncoder {
    constructor(endpoint, spaceId) {
        super(endpoint);
        this.spaceId = spaceId;
        this.prefix = PREFIX.CLIENT;
        this.serviceHeaders = {};
        this.setBodyField({
            spaceId,
        });
    }
    sign(clientSecret) {
        const { spaceId, method, params, token, userId } = this.body;
        const timestamp = Date.now();
        this.setBodyField({
            timestamp,
        });
        let signString = '';
        const signObject = {
            spaceId,
            timestamp,
            method,
            params: JSON.stringify(params),
            token,
            userId,
        };
        Object.keys(signObject).sort().forEach(key => {
            if (signObject[key]) {
                signString = `${signString}&${key}=${signObject[key]}`;
            }
        });
        signString = signString.slice(1);
        try {
            const sign = HmacMD5(signString, clientSecret).toString(crypto.enc.Hex);
            this.setServerlessHeaders({ sign });
        }
        catch (err) {
            throw err;
        }
    }
    encodeAsHTTPRequestObject(additionalObject) {
        if (this.body.params) {
            this.body.params = JSON.stringify(this.body.params);
        }
        return Object.assign({ url: this.url, data: this.body, method: this.method, headers: this.headers, dataType: 'json' }, additionalObject);
    }
    clone() {
        const encoder = new MPHTTPRequestEncoder(this.endpoint, this.spaceId);
        encoder.setBodyField(this.body);
        encoder.setBaseHeaders(this.baseHeaders);
        encoder.setServerlessHeaders(this.serverlessHeaders);
        return encoder;
    }
}
export class MPHTTPResponseDecoder extends HTTPResponseDecoder {
    constructor() {
        super(...arguments);
        this.ERROR_CODES = [11, 12, 13, 14, 19, 20];
    }
    setStatusAndBody(status, body) {
        super.setStatusAndBody(status, body);
        if (this.ERROR_CODES.indexOf(status) >= 0) {
            this._error = new bizError.InterfaceRequestError(`错误码 ${status.toString()}, 请参考对应开放平台文档排查问题`);
        }
    }
    decode(res) {
        this.setHeaders(res.headers || {});
        let body = res.data || res.body;
        if (typeof body === 'string') {
            body = JSON.parse(body);
        }
        if (body && 'data' in body) {
            if (body.data == null) {
                body.result = null;
            }
            else if (Number(body.data.affectedDocs) === body.data.affectedDocs) {
                body = Object.assign({}, body, Object.assign({}, body.data));
            }
            else if (Object.prototype.toString.call(body.data) === '[object Object]') {
                body.result = Object.assign({}, body.data);
            }
            else if (Object.prototype.toString.call(body.data) === '[object Array]') {
                [...body.result] = body.data;
            }
            else {
                body.result = body.data;
            }
            delete body.data;
        }
        if (/^request:fail+/.test(res.errMsg)) {
            this.setErrorMessage(res.errMsg);
            return super.decode();
        }
        const responseErrorCode = parseInt(res.error, 10);
        if (responseErrorCode) {
            this.setStatusAndBody(responseErrorCode, body);
            return super.decode();
        }
        const responseErrorMessage = res.err;
        if (responseErrorMessage) {
            this.setErrorMessage(responseErrorMessage);
            return super.decode();
        }
        if (res instanceof Error) {
            this.setErrorObject(res);
            return super.decode();
        }
        if (body && typeof body.error === 'object') {
            this.setErrorObject(body.error);
            return super.decode();
        }
        const responseStatusCode = parseInt(res.status || res.statusCode, 10);
        if (responseStatusCode) {
            this.setStatusAndBody(responseStatusCode, body);
            return super.decode();
        }
        this.setStatusAndBody(200, res);
        return super.decode();
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29kZWMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvY29kZWMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUVMLGtCQUFrQixFQUVsQixtQkFBbUIsRUFFbkIsTUFBTSxHQUNQLE1BQU0sNkJBQTZCLENBQUM7QUFDckMsT0FBTyxNQUFNLE1BQU0sZ0JBQWdCLENBQUM7QUFDcEMsT0FBTyxPQUFPLE1BQU0sb0JBQW9CLENBQUM7QUFDekMsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLFNBQVMsQ0FBQztBQVduQyxNQUFNLE9BQU8sb0JBQXFCLFNBQVEsa0JBQWtCO0lBUzFELFlBQVksUUFBZ0IsRUFBWSxPQUFlO1FBQ3JELEtBQUssQ0FBQyxRQUFRLENBQUMsQ0FBQztRQURzQixZQUFPLEdBQVAsT0FBTyxDQUFRO1FBUjdDLFdBQU0sR0FBRyxNQUFNLENBQUMsTUFBTSxDQUFDO1FBQ3ZCLG1CQUFjLEdBQTBCLEVBQUUsQ0FBQztRQVVuRCxJQUFJLENBQUMsWUFBWSxDQUFDO1lBQ2hCLE9BQU87U0FDUixDQUFDLENBQUM7SUFDTCxDQUFDO0lBTU0sSUFBSSxDQUFDLFlBQW9CO1FBQzlCLE1BQU0sRUFBRSxPQUFPLEVBQUUsTUFBTSxFQUFFLE1BQU0sRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFFLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQztRQUM3RCxNQUFNLFNBQVMsR0FBRyxJQUFJLENBQUMsR0FBRyxFQUFFLENBQUM7UUFDN0IsSUFBSSxDQUFDLFlBQVksQ0FBQztZQUNoQixTQUFTO1NBQ1YsQ0FBQyxDQUFDO1FBQ0gsSUFBSSxVQUFVLEdBQUcsRUFBRSxDQUFDO1FBQ3BCLE1BQU0sVUFBVSxHQUFHO1lBQ2pCLE9BQU87WUFDUCxTQUFTO1lBQ1QsTUFBTTtZQUNOLE1BQU0sRUFBRSxJQUFJLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQztZQUM5QixLQUFLO1lBQ0wsTUFBTTtTQUNQLENBQUM7UUFDRixNQUFN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