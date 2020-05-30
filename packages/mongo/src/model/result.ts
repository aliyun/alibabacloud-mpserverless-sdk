import { JSONEncoder, JSONDecoder } from '../codec';

export interface ResultJSONObject {
  affectedDocs: number;
  result: any;
}

export class Result {
  protected raw: any;
  protected encoder: JSONEncoder = new JSONEncoder();
  protected decoder: JSONDecoder = new JSONDecoder();

  constructor(data: ResultJSONObject) {
    this.raw = this.decoder.decode(data);
  }

  /**
   * ready for inspect
   * @returns ResultJSONObject
   */
  public inspect(): ResultJSONObject {
    return this.raw;
  }
}
