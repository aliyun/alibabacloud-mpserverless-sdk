// max query size
export const LIMIT = 100;

// rate limit
export const QUERY_TIMEOUT = 100;

// default query options
export const DEFAULT_PARAMS = {
  limit: LIMIT,
  maxTimeMS: QUERY_TIMEOUT,
};

export enum PERMISSION {
  // document level
  READ = '.read',
  WRITE = '.write',
  CREATE = 'document.create',
  UPDATE = 'document.update',
  DELETE = 'document.delete',
  AGGREGATE = '.aggregate',
  // collection level
  INDEX = '.index',
  COLLECTION = 'collection.manage',
  // database level
  DATABASE = 'database.manage',
  // system level
  SYSTEM = 'system.manage',
}

// JSON string prefix for identifying data type
export const PREFIXES = {
  ObjectId: '\\u0007',
  Decimal128: '\\u0013',
};

// length of ObjectId
export const OID_LENGTH = 24;

// common RegExp flag subset i, m, u
// x, l, s in BSON is not available
// g in JavaScript is not available
export const REGEXP_FLAGS = [ 'i', 'm', 'u', 'g' ];
