"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NodeCoreHTTPResponseDecoder = exports.NodeCoreHTTPRequestEncoder = void 0;
const tslib_1 = require("tslib");
const mpserverless_core_1 = require("@alicloud/mpserverless-core");
const crypto_1 = tslib_1.__importDefault(require("crypto"));
const zlib_1 = tslib_1.__importDefault(require("zlib"));
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
        Object.keys(signObject)
            .sort()
            .forEach((key) => {
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
    gzipRequest(options) {
        return new Promise((resolve, reject) => {
            if (options.method === 'POST' &&
                options.data &&
                typeof options.data === 'object' &&
                (!options.headers ||
                    (!options.headers['Content-Encoding'] &&
                        options.headers['x-mpserverless-function-id']))) {
                zlib_1.default.gzip(JSON.stringify(options.data), (err, compressedData) => {
                    if (err) {
                        reject(err);
                        return;
                    }
                    options.headers = {
                        ...(options.headers || {}),
                        'Content-Encoding': 'gzip',
                        'Accept-Encoding': 'gzip, deflate',
                    };
                    options.content = compressedData;
                    resolve(options);
                });
            }
            else {
                resolve(options);
            }
        });
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29kZWMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9zcmMvY29kZWMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLG1FQU9xQztBQUNyQyw0REFBd0M7QUFDeEMsd0RBQXdCO0FBQ3hCLG1DQUF3QztBQWF4QyxNQUFhLDBCQUEyQixTQUFRLHNDQUFrQjtJQVNoRSxZQUFZLFFBQWdCLEVBQVksT0FBZSxFQUFFLE1BQWU7UUFDdEUsS0FBSyxDQUFDLFFBQVEsQ0FBQyxDQUFDO1FBRHNCLFlBQU8sR0FBUCxPQUFPLENBQVE7UUFSN0MsV0FBTSxHQUFHLDBCQUFNLENBQUMsTUFBTSxDQUFDO1FBQ3ZCLG1CQUFjLEdBQTBCLEVBQUUsQ0FBQztRQVVuRCxJQUFJLENBQUMsWUFBWSxDQUFDO1lBQ2hCLE9BQU87U0FDUixDQUFDLENBQUM7UUFFSCxJQUFJLE1BQU0sRUFBRTtZQUNWLElBQUksQ0FBQyxNQUFNLEdBQUcsTUFBTSxDQUFDO1NBQ3RCO0lBQ0gsQ0FBQztJQU9NLElBQUksQ0FBQyxZQUFvQjtRQUU5QixNQUFNLEVBQUUsT0FBTyxFQUFFLE1BQU0sRUFBRSxNQUFNLEVBQUUsTUFBTSxFQUFFLEtBQUssRUFBRSxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUM7UUFDN0QsTUFBTSxTQUFTLEdBQUcsSUFBSSxDQUFDLEdBQUcsRUFBRSxDQUFDO1FBQzdCLElBQUksQ0FBQyxZQUFZLENBQUM7WUFDaEIsU0FBUztTQUNWLENBQUMsQ0FBQztRQUNILE1BQU0sVUFBVSxHQUFHO1lBQ2pCLE9BQU87WUFDUCxTQUFTO1lBQ1QsTUFBTTtZQUNOLE1BQU0sRUFBRSxJQUFJLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQztZQUM5QixNQUFNO1lBQ04sS0FBSztTQUNOLENBQUM7UUFDRixJQUFJLFVBQVUsR0FBRyxFQUFFLENBQUM7UUFDcEIsTUFBTSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUM7YUFDcEIsSUFBSSxFQUFFO2FBQ04sT0FBTyxDQUFD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