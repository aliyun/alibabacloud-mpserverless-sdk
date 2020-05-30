export const DEFAULT_HTTP_STATUS = 500;
export const HTTP_UNAUTHORIZED = 401;

export enum ErrorName {
  'VALIDATION_ERROR' = 'ValidationError',
  'UNSUPPORTED_ERROR' = 'UnsupportedError',
  'UNAUTHORIZED_ERROR' = 'UnauthorizedError',
  'INTERFACE_ERROR' = 'InterfaceError',
  'IDE_ERROR' = 'IDEError',
}

export enum ErrorCode {
  'COMMAND_MISSING' = 'CommandMissing',
  'VALIDATION_FAILED' = 'ValidationFailed',
  'AUTHENTICATION_FAILED' = 'AuthenticationFailed',
  'UNAUTHENTICATION' = 'Unauthentication',
  'INTERFACE_RESPONSE_FAILED' = 'InterfaceResponseError',
}

export enum ErrorType {
  'COMMON_ERROR' = 'CommonError',
  'IDE_ERROR' = 'IDEError',
}
