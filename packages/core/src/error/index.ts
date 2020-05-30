export interface ErrorJSONObject {
  name: string;
  code: string;
  type: string;
  message: string;
}

export class BuiltInError {
  public stack: string;
  public readonly name: string;

  constructor(public message: string) {
    Error.call(this, message);

    if ((Error as any).captureStackTrace) {
      (Error as any).captureStackTrace(this);
    }
  }
}

export class BasementClientError extends BuiltInError {
  constructor(
    public name: string,
    public code: string,
    public type: string,
    public message: string,
  ) {
    super(message);
  }

  /**
   * create BasementClientError from raw object
   * @param  {ErrorJSONObject} raw
   * @returns BasementClientError
   */
  public static from(raw: ErrorJSONObject): BasementClientError {
    return new BasementClientError(
      raw.name,
      raw.code,
      raw.type,
      raw.message,
    );
  }
}
