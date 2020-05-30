import { GenericObject } from '../global';
import { HTTPMethod, SERVERLESS_HEADER_PREFIX, PREFIX } from '../constant';
import { camelToLisp } from '../utility';

export interface EncodedObject extends GenericObject<any> {}

export abstract class BaseEncoder {
  /**
   * encode function must return an EncodedObject
   * @param  {any[]} ..._
   * @returns EncodedObject
   */
  public abstract encode(..._: any[]): EncodedObject;
}

export interface HTTPRequestObject extends EncodedObject {
  url: string;
  body: GenericObject<any>;
  method: HTTPMethod;
  headers: GenericObject<string>;
}

export class HTTPRequestEncoder extends BaseEncoder {
  public body: GenericObject<any> = {};
  public query: GenericObject<string> = {};
  public method: HTTPMethod = HTTPMethod.POST;
  protected prefix: string = '';
  protected baseHeaders: GenericObject<string> = {};
  protected serviceHeaders: GenericObject<string> = {};
  protected serverlessHeaders: GenericObject<string> = {};
  protected baseUrl: string;

  constructor(protected endpoint: string, prefix?: PREFIX) {
    super();

    if (prefix) {
      this.prefix = prefix;
    }
  }

  public get url(): string {
    return [
      this.endpoint + this.prefix,
    ]
      .filter(p => !!p)
      .join('?');
  }

  public get headers(): GenericObject<string> {
    // convert header property from camel case to prefix with lisp case
    // e.g. spaceId -> x-basement-space-id
    const normalizedHeaders = Object
      .keys(this.serverlessHeaders)
      .reduce((accu, prop) => {
        const key = `${SERVERLESS_HEADER_PREFIX}${camelToLisp(prop)}`;
        accu[key] = this.serverlessHeaders[prop];
        return accu;
      }, {});

    return {
      ...this.baseHeaders,
      ...normalizedHeaders,
    };
  }

  /**
   * add body field
   * @param  {GenericObject<any>} body
   * @returns HTTPRequestEncoder
   */
  public setBodyField(fields: GenericObject<any>): HTTPRequestEncoder {
    this.body = Object.assign({}, this.body, {
      ...fields,
    });
    return this;
  }

  /**
   * set userId
   * @param  {string} userId
   * @returns HTTPRequestEncoder
   */
  public setUserId(userId: string): HTTPRequestEncoder {
    this.setBodyField({
      userId,
    });
    return this;
  }

  /**
   * extend base header, ones without x-basement prefix
   * @param  {GenericObject<string|number>={}} headers
   * @returns HTTPRequestEncoder
   */
  public setBaseHeaders(headers: GenericObject<string|number> = {}): HTTPRequestEncoder {
    this.baseHeaders = {
      ...this.baseHeaders,
      ...Object.keys(headers).reduce((accu, key) => {
        if (headers[key]) {
          accu[key] = headers[key].toString();
        }
        return accu;
      }, {}),
    };

    return this;
  }

  /**
   * extend service header, ones with x-serverless prefix
   * @param  {GenericObject<string|number>={}} headers
   * @returns HTTPRequestEncoder
   */
  public setServerlessHeaders(headers: GenericObject<string|number> = {}): HTTPRequestEncoder {
    this.serverlessHeaders = {
      ...this.serverlessHeaders,
      ...Object.keys(headers).reduce((accu, key) => {
        if (headers[key]) {
          accu[key] = headers[key].toString();
        }
        return accu;
      }, {}),
    };

    return this;
  }

  /**
   * encode as HTTPRequestObject
   * @param  {any[]} _
   * @returns HTTPRequestObject
   */
  public encode(..._: any[]): HTTPRequestObject {
    if (this.body.params) {
      this.body.params = JSON.stringify(this.body.params);
    }
    return {
      url: this.url,
      body: this.body,
      method: this.method,
      headers: this.headers,
    };
  }
}
