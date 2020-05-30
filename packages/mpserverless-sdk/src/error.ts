import { BuiltInError, ErrorJSONObject } from '@alicloud/mpserverless-core';

export class MPServerlessClientError extends BuiltInError {
  constructor(
    public name: string,
    public code: string,
    public type: string,
    public message: string,
  ) {
    super(message);
  }

  /**
   * create MPServerlessClientError from raw object
   * @param  {ErrorJSONObject} raw
   * @returns MPServerlessClientError
   */
  public static from(raw: ErrorJSONObject): MPServerlessClientError {
    return new MPServerlessClientError(
      raw.name,
      raw.code,
      raw.type,
      raw.message,
    );
  }
}
