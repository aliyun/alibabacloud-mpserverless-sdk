import { GenericObject } from '../global';
import { BasementClientError } from '../error';

export interface DecodedObject extends GenericObject<any> {}

export abstract class BaseDecoder {
  /**
   * decode function must return DecodedObject
   * @param  {any[]} ..._
   * @returns DecodedObject
   */
  public abstract decode(..._: any[]): DecodedObject;
}

export interface HTTPResponseObject extends DecodedObject {
  body: GenericObject<any>;
  error: BasementClientError;
  status: number;
  headers: GenericObject<string>;
}

export class HTTPResponseDecoder extends BaseDecoder {
  public DEMARCATION_STATUS = 400;
  protected _body: GenericObject<any> = {};
  protected _error: BasementClientError;
  protected _status: number;
  protected _headers: GenericObject<string> = {};

  /**
   * set response header
   * @param  {GenericObject<string>} headers
   * @returns void
   */
  public setHeaders(headers: GenericObject<string>): void {
    this._headers = {
      ...this._headers,
      ...headers,
    };
  }

  /**
   * set response status and body
   * @param  {number} status
   * @param  {any} body
   */
  public setStatusAndBody(status: number, body: any): void {
    this._status = status;
    this._body = body;

    if (status >= this.DEMARCATION_STATUS) {
      this._error = BasementClientError.from(body);
    }
  }

  /**
   * set error object by inferring message
   * @param  {string} message
   */
  public setErrorMessage(message: string): void {
    this._error = new Error(message) as BasementClientError;
  }

  /**
   * set error object directly
   * @param  {Error} error
   * @returns void
   */
  public setErrorObject(error: Error): void {
    this._error = error as BasementClientError;
  }

  /**
   * decode response
   * @param  {any[]} ..._
   * @returns HTTPResponseObject
   */
  public decode(..._: any[]): HTTPResponseObject {
    return {
      body: this._body || {},
      error: this._error,
      status: this._status,
      headers: this._headers,
    };
  }
}
