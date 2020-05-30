export enum HTTPMethod {
  GET = 'GET',
  DEL = 'DELETE',
  POST = 'POST',
}

export enum TransportProtocol {
  HTTP = 'HTTP',
}

export const HEADER_PREFIX = 'x-basement-';
export const SERVERLESS_HEADER_PREFIX = 'x-serverless-';

export enum PREFIX {
  CLIENT = '/client',
  SERVER = '/server',
  ANTCLOUD = '/antcloud',
  ANTOPENANTCLOUD = '/antopen/antcloud',
}
