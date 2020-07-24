"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const mpserverless_core_1 = require("@alicloud/mpserverless-core");
const crypto_1 = tslib_1.__importDefault(require("crypto"));
const error_1 = require("./error");
class NodeCoreHTTPRequestEncoder extends mpserverless_core_1.HTTPRequestEncoder {
    constructor(endpoint, spaceId, prefix) {
        super(endpoint);
        this.spaceId = spaceId;
        this.prefix = mpserverless_core_1.PREFIX.SERVER;
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
class NodeCoreHTTPResponseDecoder extends mpserverless_core_1.HTTPResponseDecoder {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29kZWMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9zcmMvY29kZWMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQUEsbUVBT3FDO0FBQ3JDLDREQUF3QztBQUN4QyxtQ0FBd0M7QUFZeEMsTUFBYSwwQkFBMkIsU0FBUSxzQ0FBa0I7SUFTaEUsWUFBWSxRQUFnQixFQUFZLE9BQWUsRUFBRSxNQUFlO1FBQ3RFLEtBQUssQ0FBQyxRQUFRLENBQUMsQ0FBQztRQURzQixZQUFPLEdBQVAsT0FBTyxDQUFRO1FBUjdDLFdBQU0sR0FBRywwQkFBTSxDQUFDLE1BQU0sQ0FBQztRQUN2QixtQkFBYyxHQUEwQixFQUFFLENBQUM7UUFVbkQsSUFBSSxDQUFDLFlBQVksQ0FBQztZQUNoQixPQUFPO1NBQ1IsQ0FBQyxDQUFDO1FBRUgsSUFBSSxNQUFNLEVBQUU7WUFDVixJQUFJLENBQUMsTUFBTSxHQUFHLE1BQU0sQ0FBQztTQUN0QjtJQUNILENBQUM7SUFPTSxJQUFJLENBQUMsWUFBb0I7UUFFOUIsTUFBTSxFQUFFLE9BQU8sRUFBRSxNQUFNLEVBQUUsTUFBTSxFQUFFLE1BQU0sRUFBRSxLQUFLLEVBQUUsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDO1FBQzdELE1BQU0sU0FBUyxHQUFHLElBQUksQ0FBQyxHQUFHLEVBQUUsQ0FBQztRQUM3QixJQUFJLENBQUMsWUFBWSxDQUFDO1lBQ2hCLFNBQVM7U0FDVixDQUFDLENBQUM7UUFDSCxNQUFNLFVBQVUsR0FBRztZQUNqQixPQUFPO1lBQ1AsU0FBUztZQUNULE1BQU07WUFDTixNQUFNLEVBQUUsSUFBSSxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUM7WUFDOUIsTUFBTTtZQUNOLEtBQUs7U0FDTixDQUFDO1FBQ0YsSUFBSSxVQUFVLEdBQUcsRUFBRSxDQUFDO1FBQ3BCLE1BQU0sQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUMsSUFBSSxFQUFFLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxFQUFF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