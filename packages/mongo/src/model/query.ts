import 'reflect-metadata';
import { GenericObject, EncodedObject, assert, PERMISSION, BasementClientError, ErrorName, ErrorType, ErrorCode, Validator } from '@alicloud/mpserverless-core';
import { JSONEncoder, JSONDecoder } from '../codec';
import { Collection, CollectionJSONObject } from './collection';
import { BaseCommand, CreateIndexCommand, ListIndicesCommand, CreateIndicesCommand, DropIndexCommand, DropIndicesCommand, AggregateCommand, CountCommand, DistinctCommand, FindDocumentsCommand, FindDocumentCommand, InsertDocumentCommand, InsertDocumentsCommand, FindAndUpdateDocumentCommand, UpdateDocumentCommand, UpdateDocumentsCommand, FindAndReplaceDocumentCommand, ReplaceDocumentCommand, FindAndDeleteDocumentCommand, DeleteDocumentCommand, DeleteDocumentsCommand, CommandJSONObject, CreateCollectionCommand, RenameCollectionCommand, DeleteCollectionCommand, ListCollectionsCommand } from './command';
import { ResultJSONObject } from './result';

const Reflect = global['Reflect'];

export interface QueryJSONObject extends CollectionJSONObject, CommandJSONObject, EncodedObject {}

// Minimal subset of Query available to all
export class Query {
  protected coll: Collection;
  protected comm: BaseCommand;
  protected encoder: JSONEncoder = new JSONEncoder();
  protected decoder: JSONDecoder = new JSONDecoder();

  /**
   * set collection name
   * @param  {string} name
   * @returns Query
   */
  public collection(name: string): this {
    this.coll = new Collection(name);
    return this;
  }

  /**
   * aggregation pipeline
   * @param  {Array<GenericObject<any>>} pipeline
   * @param  {GenericObject<any>} options?
   * @returns Query
   */
  @Reflect.metadata('commandClass', AggregateCommand)
  public aggregate(pipeline: Array<GenericObject<any>>, options?: GenericObject<any>): Promise<QueryJSONObject | ResultJSONObject> {
    this.comm = new AggregateCommand({ pipeline, options });
    return this.execute();
  }

  /**
   * count documents, soon deprecated
   * @param  {GenericObject<any>} query
   * @param  {GenericObject<any>} options?
   * @returns Query
   */
  @Reflect.metadata('commandClass', CountCommand)
  public count(query: GenericObject<any>, options?: GenericObject<any>): Promise<QueryJSONObject | ResultJSONObject> {
    this.comm = new CountCommand({ query, options });
    return this.execute();
  }

  /**
   * unique items
   * @param  {string} key
   * @param  {GenericObject<any>} query
   * @param  {GenericObject<any>} options?
   * @returns Query
   */
  @Reflect.metadata('commandClass', DistinctCommand)
  public distinct(key: string, query: GenericObject<any>, options?: GenericObject<any>): Promise<QueryJSONObject | ResultJSONObject> {
    this.comm = new DistinctCommand({ key, query, options });
    return this.execute();
  }

  /**
   * find one document
   * @param  {GenericObject<any>} query
   * @param  {GenericObject<any>} options?
   * @returns Query
   */
  @Reflect.metadata('commandClass', FindDocumentCommand)
  public findOne(query: GenericObject<any>, options?: GenericObject<any>): Promise<QueryJSONObject | ResultJSONObject> {
    this.comm = new FindDocumentCommand({ query, options });
    return this.execute();
  }

  /**
   * find by query, or all documents
   * @param  {GenericObject<any>} query?
   * @param  {GenericObject<any>} options?
   * @returns Query
   */
  @Reflect.metadata('commandClass', FindDocumentsCommand)
  public find(query?: GenericObject<any>, options?: GenericObject<any>): Promise<QueryJSONObject | ResultJSONObject> {
    this.comm = new FindDocumentsCommand({ query, options });
    return this.execute();
  }

  /**
   * insert one document
   * @param  {GenericObject<any>} doc
   * @param  {GenericObject<any>} options?
   * @returns Query
   */
  @Reflect.metadata('commandClass', InsertDocumentCommand)
  public insertOne(doc: GenericObject<any>, options?: GenericObject<any>): Promise<QueryJSONObject | ResultJSONObject> {
    this.comm = new InsertDocumentCommand({ doc, options });
    return this.execute();
  }

  /**
   * batch insert document
   * @param  {Array<GenericObject<any>>} docs
   * @param  {GenericObject<any>} options?
   * @returns Query
   */
  @Reflect.metadata('commandClass', InsertDocumentsCommand)
  public insertMany(docs: Array<GenericObject<any>>, options?: GenericObject<any>): Promise<QueryJSONObject | ResultJSONObject> {
    this.comm = new InsertDocumentsCommand({ docs, options });
    return this.execute();
  }

  /**
   * atomic: find and update one document
   * @param  {GenericObject<any>} filter
   * @param  {GenericObject<any>} update
   * @param  {GenericObject<any>} options?
   * @returns Query
   */
  @Reflect.metadata('commandClass', FindAndUpdateDocumentCommand)
  public findOneAndUpdate(filter: GenericObject<any>, update: GenericObject<any>, options?: GenericObject<any>): Promise<QueryJSONObject | ResultJSONObject> {
    this.comm = new FindAndUpdateDocumentCommand({ filter, update, options });
    return this.execute();
  }

  /**
   * update one document
   * @param  {GenericObject<any>} filter
   * @param  {GenericObject<any>} update
   * @param  {GenericObject<any>} options?
   * @returns Query
   */
  @Reflect.metadata('commandClass', UpdateDocumentCommand)
  public updateOne(filter: GenericObject<any>, update: GenericObject<any>, options?: GenericObject<any>): Promise<QueryJSONObject | ResultJSONObject> {
    this.comm = new UpdateDocumentCommand({ filter, update, options });
    return this.execute();
  }

  /**
   * batch update document
   * @param  {GenericObject<any>} filter
   * @param  {GenericObject<any>} update
   * @param  {GenericObject<any>} options?
   * @returns Query
   */
  @Reflect.metadata('commandClass', UpdateDocumentsCommand)
  public updateMany(filter: GenericObject<any>, update: GenericObject<any>, options?: GenericObject<any>): Promise<QueryJSONObject | ResultJSONObject> {
    this.comm = new UpdateDocumentsCommand({ filter, update, options });
    return this.execute();
  }

  /**
   * atomic: find and replace one document
   * @param  {GenericObject<any>} filter
   * @param  {GenericObject<any>} doc
   * @param  {GenericObject<any>} options?
   * @returns Query
   */
  @Reflect.metadata('commandClass', FindAndReplaceDocumentCommand)
  public findOneAndReplace(filter: GenericObject<any>, replacement: GenericObject<any>, options?: GenericObject<any>): Promise<QueryJSONObject | ResultJSONObject> {
    this.comm = new FindAndReplaceDocumentCommand({ filter, replacement, options });
    return this.execute();
  }

  /**
   * replace one document
   * @param  {GenericObject<any>} filter
   * @param  {GenericObject<any>} doc
   * @param  {GenericObject<any>} options?
   * @returns Query
   */
  @Reflect.metadata('commandClass', ReplaceDocumentCommand)
  public replaceOne(filter: GenericObject<any>, doc: GenericObject<any>, options?: GenericObject<any>): Promise<QueryJSONObject | ResultJSONObject> {
    this.comm = new ReplaceDocumentCommand({ filter, doc, options });
    return this.execute();
  }

  /**
   * atomic: find and delete one document
   * @param  {GenericObject<any>} filter
   * @param  {GenericObject<any>} options?
   * @returns Query
   */
  @Reflect.metadata('commandClass', FindAndDeleteDocumentCommand)
  public findOneAndDelete(filter: GenericObject<any>, options?: GenericObject<any>): Promise<QueryJSONObject | ResultJSONObject> {
    this.comm = new FindAndDeleteDocumentCommand({ filter, options });
    return this.execute();
  }

  /**
   * delete one document
   * @param  {GenericObject<any>} filter
   * @param  {GenericObject<any>} options?
   * @returns Query
   */
  @Reflect.metadata('commandClass', DeleteDocumentCommand)
  public deleteOne(filter: GenericObject<any>, options?: GenericObject<any>): Promise<QueryJSONObject | ResultJSONObject> {
    this.comm = new DeleteDocumentCommand({ filter, options });
    return this.execute();
  }

  /**
   * batch delete document, drop is much more efficient than batch delete
   * @param  {GenericObject<any>} filter?
   * @param  {GenericObject<any>} options?
   * @returns Query
   */
  @Reflect.metadata('commandClass', DeleteDocumentsCommand)
  public deleteMany(filter?: GenericObject<any>, options?: GenericObject<any>): Promise<QueryJSONObject | ResultJSONObject> {
    this.comm = new DeleteDocumentsCommand({ filter, options });
    return this.execute();
  }

  /**
   * validate schema
   * @returns void
   */
  public validate(): void {
    const v = new Validator();
    v.validate(this.comm.schema, this.encoder.encode(this.comm.argMap));
  }

  /**
   * instantiate an operation and execute
   * @returns Promise
   */
  public async execute(..._: any[]): Promise<QueryJSONObject | ResultJSONObject> {
    // ensure arguments are valid according to schema definition
    assert(this.comm, 'command is missing');
    this.validate();

    // following command require collection to operate on
    switch (this.comm.permission) {
      case PERMISSION.AGGREGATE:
      case PERMISSION.INDEX:
      case PERMISSION.WRITE:
      case PERMISSION.READ:
        assert(this.collection, 'collection is missing');
        break;
      default:
    }

    const query = Object.assign(
      {},
      this.coll && this.coll.inspect(),
      this.comm.inspect(),
    );

    return this.encoder.encode(query) as QueryJSONObject;
  }

  /**
   * JSON to js object
   * @param  {GenericObject<any>} raw
   * @returns Query
   */
  public static fromRawResponse(raw: GenericObject<any>): Query {
    assert(raw && raw.command, 'malformed request');

    let q = new Query();
    const proto = Object.getPrototypeOf(q);
    const props = Object.getOwnPropertyNames(proto);
    const methods = props.filter(method => Reflect.hasMetadata('commandClass', q, method));

    if (raw.collection) {
      q = q.collection(raw.collection);
    }

    if (methods.indexOf(raw.command) >= 0) {
      const Klass = Reflect.getMetadata('commandClass', q, raw.command);
      assert(BaseCommand.isPrototypeOf(Klass), 'invalid command');

      delete raw.collection;
      delete raw.command;
      q.comm = new Klass(q.decoder.decode(raw));
      q.validate();

      return q;
    }

    throw new BasementClientError(
      ErrorName.VALIDATION_ERROR,
      ErrorCode.COMMAND_MISSING,
      ErrorType.COMMON_ERROR,
      'command is missing',
    );
  }
}

export class FullQuery extends Query {
  /**
   * list collection
   * @returns Query
   */
  @Reflect.metadata('commandClass', ListCollectionsCommand)
  public collections(): Promise<QueryJSONObject | ResultJSONObject> {
    this.comm = new ListCollectionsCommand({});
    return this.execute();
  }

  /**
   * create collection
   * @param  {string} name
   * @param  {GenericObject<any>} options?
   * @returns Query
   */
  @Reflect.metadata('commandClass', CreateCollectionCommand)
  public createCollection(name: string, options?: GenericObject<any>): Promise<QueryJSONObject | ResultJSONObject> {
    this.comm = new CreateCollectionCommand({ name, options });
    return this.execute();
  }

  /**
   * rename collection
   * @param  {string} newName
   * @param  {GenericObject<any>} options?
   * @returns Query
   */
  @Reflect.metadata('commandClass', RenameCollectionCommand)
  public rename(newName: string, options?: GenericObject<any>): Promise<QueryJSONObject | ResultJSONObject> {
    assert(this.coll, 'collection must exist');
    this.comm = new RenameCollectionCommand({ newName, options });
    return this.execute();
  }

  /**
   * delete collection
   * @returns Query
   */
  @Reflect.metadata('commandClass', DeleteCollectionCommand)
  public drop(options?: GenericObject<any>): Promise<QueryJSONObject | ResultJSONObject> {
    assert(this.coll, 'collection must exist');
    this.comm = new DeleteCollectionCommand({ options });
    return this.execute();
  }

  /**
   * get collection indices
   * @param  {GenericObject<any>} options?
   * @returns Query
   */
  @Reflect.metadata('commandClass', ListIndicesCommand)
  public listIndexes(options?: GenericObject<any>): Promise<QueryJSONObject | ResultJSONObject> {
    this.comm = new ListIndicesCommand({ options });
    return this.execute();
  }

  /**
   * create one index
   * @param  {string} field
   * @param  {GenericObject<any>} options?
   * @returns Query
   */
  @Reflect.metadata('commandClass', CreateIndexCommand)
  public createIndex(field: string | GenericObject<number>, options?: GenericObject<any>): Promise<QueryJSONObject | ResultJSONObject> {
    this.comm = new CreateIndexCommand({ field, options });
    return this.execute();
  }

  /**
   * batch create indices
   * @param  {string[]} fields
   * @param  {GenericObject<any>} options?
   * @returns Query
   */
  @Reflect.metadata('commandClass', CreateIndicesCommand)
  public createIndexes(fields: Array<GenericObject<any> | string>, options?: GenericObject<any>): Promise<QueryJSONObject | ResultJSONObject> {
    this.comm = new CreateIndicesCommand({ fields, options });
    return this.execute();
  }

  /**
   * drop one index
   * @param  {string} indexName
   * @param  {GenericObject<any>} options?
   * @returns Query
   */
  @Reflect.metadata('commandClass', DropIndexCommand)
  public dropIndex(indexName: string | GenericObject<number>, options?: GenericObject<any>): Promise<QueryJSONObject | ResultJSONObject> {
    this.comm = new DropIndexCommand({ indexName, options });
    return this.execute();
  }

  /**
   * drop all indices
   * @param  {GenericObject<any>} options?
   * @returns Query
   */
  @Reflect.metadata('commandClass', DropIndicesCommand)
  public dropIndexes(options?: GenericObject<any>): Promise<QueryJSONObject | ResultJSONObject> {
    this.comm = new DropIndicesCommand({ options });
    return this.execute();
  }
}
