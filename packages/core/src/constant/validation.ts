// MongoDB naming limitation
// https://docs.mongodb.com/manual/reference/limits/
export const MAX_DB_NAME_LENGTH = 64;
export const MAX_ID_NAME_LENGTH = 120;

// system collection names not available
export const INVALID_DB_NAMES = [ 'admin', 'system', 'basement' ];
export const INVALID_COLL_NAMES = [ 'basement' ];

// validation message
export const ErrorMessages = {
  INVALID_TYPE: 'field type is invalid',
  NOT_STRING: 'field is not a string',
  NOT_ARRAY: 'field is not an array',
  NOT_EMPTY: 'field should not be empty',
  TOO_LONG: 'field is too long',
  ILLEGAL: 'field should not contain illegal character',
  SYSTEM: 'field is in conflict with system names',
};
