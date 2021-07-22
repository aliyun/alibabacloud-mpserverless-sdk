"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NodeCoreHTTPResponseDecoder = exports.NodeCoreHTTPRequestEncoder = void 0;
const tslib_1 = require("tslib");
const mpserverless_core_inner_1 = require("@ali/mpserverless-core-inner");
const crypto_1 = tslib_1.__importDefault(require("crypto"));
const error_1 = require("./error");
class NodeCoreHTTPRequestEncoder extends mpserverless_core_inner_1.HTTPRequestEncoder {
    constructor(endpoint, spaceId, prefix) {
        super(endpoint);
        this.spaceId = spaceId;
        this.prefix = mpserverless_core_inner_1.PREFIX.SERVER;
        this.serviceHeaders = {};
        this.setBodyField({
            spaceId,
        });
        if (prefix) {
            this.prefix = prefix;
        }
    }
    sign(serverSecret) {
        const { spaceId, method, params, userId, token } = this.body;
        const timestamp = Date.now();
        this.setBodyField({
            timestamp,
        });
        const signObject = {
            spaceId,
            timestamp,
            method,
            params: JSON.stringify(params),
            userId,
            token,
        };
        let signString = '';
        Object.keys(signObject).sort().forEach(key => {
            if (signObject[key]) {
                signString = `${signString}&${key}=${signObject[key]}`;
            }
        });
        signString = signString.slice(1);
        const signer = crypto_1.default.createSign('MD5');
        signer.update(signString);
        this.setServerlessHeaders({ sign: signer.sign(serverSecret, 'hex') });
    }
    encodeAsHTTPRequestObject(additionalObject) {
        if (this.body.params) {
            this.body.params = JSON.stringify(this.body.params);
        }
        return {
            url: this.url,
            data: this.body,
            method: this.method,
            headers: this.headers,
            dataType: 'json',
            contentType: 'json',
            ...additionalObject,
        };
    }
    setToken(token) {
        this.setBodyField({
            token,
        });
        return this;
    }
}
exports.NodeCoreHTTPRequestEncoder = NodeCoreHTTPRequestEncoder;
class NodeCoreHTTPResponseDecoder extends mpserverless_core_inner_1.HTTPResponseDecoder {
    decode(res, isDBRequest) {
        this.setHeaders(res.headers);
        let body = res.data;
        if (body.error) {
            const error = new error_1.BizErrorClass();
            error.code = body.error.code;
            error.message = body.error.message;
            throw error;
        }
        if (body) {
            body.result = body.data;
            if (body.data && isDBRequest) {
                if (body.result) {
                    delete body.result;
                }
                body = Object.assign({}, body, { ...body.data });
            }
            else if (Object.prototype.toString.call(body.data) === '[object Object]') {
                body.result = Object.assign({}, body.data);
            }
            else if (Object.prototype.toString.call(body.data) === '[object Array]') {
                [...body.result] = body.data;
            }
            delete body.data;
        }
        if (body && body.header) {
            delete body.header;
        }
        this.setStatusAndBody(parseInt(res.status, 10), body);
        return super.decode();
    }
}
exports.NodeCoreHTTPResponseDecoder = NodeCoreHTTPResponseDecoder;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29kZWMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9zcmMvY29kZWMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLDBFQU9zQztBQUN0Qyw0REFBd0M7QUFDeEMsbUNBQXdDO0FBWXhDLE1BQWEsMEJBQTJCLFNBQVEsNENBQWtCO0lBU2hFLFlBQVksUUFBZ0IsRUFBWSxPQUFlLEVBQUUsTUFBZTtRQUN0RSxLQUFLLENBQUMsUUFBUSxDQUFDLENBQUM7UUFEc0IsWUFBTyxHQUFQLE9BQU8sQ0FBUTtRQVI3QyxXQUFNLEdBQUcsZ0NBQU0sQ0FBQyxNQUFNLENBQUM7UUFDdkIsbUJBQWMsR0FBMEIsRUFBRSxDQUFDO1FBVW5ELElBQUksQ0FBQyxZQUFZLENBQUM7WUFDaEIsT0FBTztTQUNSLENBQUMsQ0FBQztRQUVILElBQUksTUFBTSxFQUFFO1lBQ1YsSUFBSSxDQUFDLE1BQU0sR0FBRyxNQUFNLENBQUM7U0FDdEI7SUFDSCxDQUFDO0lBT00sSUFBSSxDQUFDLFlBQW9CO1FBRTlCLE1BQU0sRUFBRSxPQUFPLEVBQUUsTUFBTSxFQUFFLE1BQU0sRUFBRSxNQUFNLEVBQUUsS0FBSyxFQUFFLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQztRQUM3RCxNQUFNLFNBQVMsR0FBRyxJQUFJLENBQUMsR0FBRyxFQUFFLENBQUM7UUFDN0IsSUFBSSxDQUFDLFlBQVksQ0FBQztZQUNoQixTQUFTO1NBQ1YsQ0FBQyxDQUFDO1FBQ0gsTUFBTSxVQUFVLEdBQUc7WUFDakIsT0FBTztZQUNQLFNBQVM7WUFDVCxNQUFNO1lBQ04sTUFBTSxFQUFFLElBQUksQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDO1lBQzlCLE1BQU07WUFDTixLQUFLO1NBQ04sQ0FBQztRQUNGLElBQUksVUFBVSxHQUFHLEVBQUUsQ0FBQztRQUNwQixNQUFNLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDLElBQUksRUFBRSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsRUFB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