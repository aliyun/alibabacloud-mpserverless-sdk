import { BaseEncoder, BaseDecoder, DecodedObject, REGEXP_FLAGS } from '@alicloud/mpserverless-core';
import { QueryJSONObject } from '../model';
import { EncodedObject } from '../../../core/dist/esm';

/**
 * check for prototype
 * @param  {Any} val any value
 * @param  {String} type type of the value
 * @return {Boolean} if val is of type
 */
export function _isByProto(val, type): boolean {
  return Object.prototype.toString.call(val) === `[object ${type}]`;
}

/**
 * check for array type
 * @param  {Any} val any value
 * @return {Boolean} if val is of type array
 */
export function isArray(val): boolean {
  return Array.isArray(val);
}

/**
 * check for object type
 * @param  {Any} val any value
 * @return {Boolean} if val is of type object
 */
export function isObject(val): val is QueryJSONObject {
  return val !== null && typeof val === 'object' && !isArray(val);
}

/**
 * check for string type
 * @param  {Any} val any value
 * @return {Boolean} if val is of type string
 */
export function isString(val): boolean {
  return typeof val === 'string' || _isByProto(val, 'String');
}

export class JSONEncoder extends BaseEncoder {
  /**
   * convert js to JSON
   * @param  {any} data
   * @returns EncodedObject
   */
  public encode(data: any): EncodedObject {
    if (data instanceof RegExp) {
      return this.toRegexp(data) as any as EncodedObject;
    }
    if (data instanceof Date) {
      return this.toDate(data) as any as EncodedObject;
    }
    if (isArray(data)) {
      return data.map(d => this.encode(d));
    }
    if (isObject(data)) {
      return Object.keys(data).reduce((accu, k) => {
        accu[k] = this.encode(data[k]);
        return accu;
      }, {});
    }

    return data;
  }

  /**
   * @param  {Date} val JavaScript date object
   * @return {String} Date string
   */
  protected toDate(val): string {
    return val.toISOString();
  }

  /**
   * @param  {RegExp} val RegExp instance
   * @return {String} /cstring/cstring
   */
  protected toRegexp(val): string {
    return `/${val.source.replace(/\\\//g, '/')}/${val.flags}`;
  }
}

export class JSONDecoder extends BaseDecoder {
  /**
   * convert JSON to js
   * @param  {any} data
   * @returns DecodedObject
   */
  public decode(data: any): DecodedObject {
    if (this.isRegexp(data)) {
      return this.toRegexp(data);
    }
    if (this.isDate(data)) {
      return this.toDate(data);
    }
    if (isArray(data)) {
      return data.map(d => this.decode(d));
    }
    if (isObject(data)) {
      return Object.keys(data).reduce((accu, k) => {
        accu[k] = this.decode(data[k]);
        return accu;
      }, {});
    }

    return data;
  }

  /**
   * check for Date instance
   * @param  {Any} val any value
   * @return {Boolean} if val is of type string
   */
  protected isDate(val): boolean {
    return isString(val) && /^\d{4}\-\d{2}\-\d{2}T\d{2}:\d{2}:\d{2}\.\d{3}Z$/.test(val) && !isNaN(Date.parse(val));
  }

  /**
   * check for RegExp expression
   * @param  {Any} val any value
   * @return {Boolean} if val is of type regular expression
   */
  protected isRegexp(val): boolean {
    if (isString(val)) {
      let areFlagsValid = true;
      const parts = val.split('/');
      const last = parts[parts.length - 1];

      if (last) {
        areFlagsValid = last.split('').reduce((expr, p) => {
          return expr === true && REGEXP_FLAGS.indexOf(p) > -1;
        }, true);
      }

      return parts.length >= 2 && areFlagsValid;
    }

    return false;
  }

  /**
   * get Date instance
   * @param  {String} val JavaScript date string
   * @return {Date} Date instance
   */
  protected toDate(val): Date {
    return new Date(val);
  }

  /**
   * get RegExp instance
   * @param  {String} val /cstring/cstring
   * @return {RegExp} RegExp instance
   */
  protected toRegexp(val): RegExp {
    const firstIndex = val.indexOf('/');
    const lastIndex = val.lastIndexOf('/');

    return new RegExp(val.slice(firstIndex + 1, lastIndex), val.slice(lastIndex + 1));
  }
}
