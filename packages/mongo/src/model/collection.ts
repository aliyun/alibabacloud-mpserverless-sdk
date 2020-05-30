import { Validator } from '@alicloud/mpserverless-core';
import { Database } from './database';

export interface CollectionJSONObject {
  collection: string;
}

export class Collection {
  protected name: string;
  protected database: Database;

  constructor(name: string) {
    const v = new Validator();
    v.validate('collectionName', name);

    this.name = name;
  }

  /**
   * setup relationship with Database
   * @param  {Database} database
   * @returns void
   */
  public setDatabase(database: Database): void {
    this.database = database;
  }

  /**
   * get JSON for transport
   * @returns CollectionJSONObject
   */
  public inspect(): CollectionJSONObject {
    return { collection: this.name };
  }
}
