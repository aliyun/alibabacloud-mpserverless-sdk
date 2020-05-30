
import {
  ErrorMessages,
  MAX_ID_NAME_LENGTH,
  MAX_DB_NAME_LENGTH,
  INVALID_DB_NAMES,
  INVALID_COLL_NAMES,
} from '../../constant';

/**
 * 验证 field 类型方法，按照 parameter 的参数返回 undefined 或者提示信息
 * @param  {} _
 * @param  {} value
 * @returns string
 */
export function ruleOfField(_, value): string {
  function validateField(name: string): string {
    if (/[\.\$]/.test(name)) {
      return ErrorMessages.ILLEGAL;
    }
  }

  if (Array.isArray(value)) {
    return undefined;
  }
  if (typeof value === 'string') {
    return validateField(value);
  }

  let result = null;
  for (const key of Object.keys(value)) {
    result = validateField(key);

    if (typeof result === 'string') {
      return result;
    }
    if (typeof value[key] === 'object') {
      return ruleOfField(_, value[key]);
    }
  }

  if (result === null) {
    return ErrorMessages.INVALID_TYPE;
  }
}

/**
 * 验证 fields 类型方法，按照 parameter 的参数返回 undefined 或者提示信息
 * @param  {any} _ rule
 * @param  {any} value 验证值
 * @return {string} string
 */
export function ruleOfFields(_, value): string {
  if (!Array.isArray(value)) {
    return ErrorMessages.NOT_ARRAY;
  }

  let err;
  let i = 0;
  while (!err && i < value.length) {
    err = ruleOfField(null, value[i]);
    i++;
  }

  return err;
}

/**
 * 验证 databaseName 类型方法，按照 parameter 的参数返回 undefined 或者提示信息
 * @param  {} _
 * @param  {} value
 * @returns string
 */
export function ruleOfDatabaseName(_, value): string {
  // database name can not be:
  // not a string
  if (typeof value !== 'string') {
    return ErrorMessages.NOT_STRING;
  }
  // an empty string (e.g. "").
  if (value.trim().length === 0) {
    return ErrorMessages.NOT_EMPTY;
  }
  // exceed max length
  if (value.length > MAX_DB_NAME_LENGTH) {
    return ErrorMessages.TOO_LONG;
  }
  // contain the invalid characters
  // /\. "$*<>:|?" on windows and /\. "$ on unix/linux
  if (/[\/\\\.\ \"\$]/.test(value)) {
    return ErrorMessages.ILLEGAL;
  }
  // system database
  if (INVALID_DB_NAMES.indexOf(value) > -1) {
    return ErrorMessages.SYSTEM;
  }
}

/**
 * 验证 collectionName 类型方法，按照 parameter 的参数返回 undefined 或者提示信息
 * @param  {} _
 * @param  {} value
 * @returns string
 */
export function ruleOfCollectionName(_, value): string {
  // collection name can not be:
  // not a string
  if (typeof value !== 'string') {
    return ErrorMessages.NOT_STRING;
  }
  // an empty string (e.g. "").
  if (value.trim().length === 0) {
    return ErrorMessages.NOT_EMPTY;
  }
  // exceed max length
  if (value.length > MAX_ID_NAME_LENGTH) {
    return ErrorMessages.TOO_LONG;
  }
  // contain the $.
  if (value.indexOf('$') > -1) {
    return ErrorMessages.ILLEGAL;
  }
  // namespace for system collection is not allowed
  const namespace = value.split('.').shift();
  if (INVALID_COLL_NAMES.indexOf(namespace) >= 0) {
    return ErrorMessages.ILLEGAL;
  }
  // should begin with an underscore or a letter character
  if (!/^[_a-z]/i.test(value)) {
    return ErrorMessages.ILLEGAL;
  }
}
