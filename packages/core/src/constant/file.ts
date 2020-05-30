export enum OSSEnv {
  PUBLIC = 'public',
  PRIVATE = 'private',
}
export interface OSSUploadOptions {
  id: string;
  key: string;
  host: string;
  policy: string;
  Signature: string;
  OSSAccessKeyId: string;
  securityToken: string;
}

export interface OSSUploadHeaders {
  'Expires'?: string;
  'Cache-Control'?: string;
  'Content-Type'?: string;
  'Content-Encoding'?: string;
  'Content-Disposition'?: string;
}

export const OSSUploadHeaderList = [ 'Expires', 'Cache-Control', 'Content-Type', 'Content-Encoding', 'Content-Disposition' ];

export const WHITELIST_EXTENSIONS = [
  // image
  'jpg',
  'jpeg', // image/jpeg
  'png', // image/png, image/x-png
  'gif', // image/gif
  'webp',
  'svg',
  'image', // iOS extension

  // audio
  'mp3',

  // video
  'mp4',
  'ogg',
  'webm',
];
