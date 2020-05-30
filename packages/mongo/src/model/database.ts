import { Validator } from '@alicloud/mpserverless-core';

export class Database {
  protected name: string;

  constructor(name) {
    const v = new Validator();
    v.validate('databaseName', name);

    this.name = name;
  }
}
