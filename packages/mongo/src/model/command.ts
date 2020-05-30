import {
  GenericObject, PERMISSION,
} from '@alicloud/mpserverless-core';
import { isObject } from '../codec';

export interface CommandJSONObject extends GenericObject<any> {
  options?: GenericObject<any>;
  command?: string;
}

export class BaseCommand {
  public readonly name: string;
  protected _schema: GenericObject<any> = {};
  protected _argMap: GenericObject<any> = {};
  protected _permission: PERMISSION;

  constructor(argMap: GenericObject<any>) {
    this._argMap = argMap;
    if (!this._argMap.options) {
      this._argMap.options = {};
    }
  }

  /**
   * merge write permission
   * @returns PERMISSION
   */
  public get permission(): PERMISSION {
    switch (this._permission) {
      case PERMISSION.CREATE:
      case PERMISSION.UPDATE:
      case PERMISSION.DELETE:
        return PERMISSION.WRITE;
      default:
        return this._permission;
    }
  }

  public get argMap(): GenericObject<any> {
    return this._argMap;
  }

  public get schema(): GenericObject<any> {
    return this._schema;
  }

  /**
   * augment option fields, used for chaining options
   * @param  {GenericObject<any>} options
   * @returns void
   */
  public augmentOptions(options: GenericObject<any>): void {
    this.argMap.options = Object.assign({}, this.argMap.options, options);
  }

  /**
   * get JSON for transport
   * @returns CommandJSONObject
   */
  public inspect(): CommandJSONObject {
    const args = clean(JSON.parse(JSON.stringify(this.argMap)));

    function clean(d: object): object {
      for (const k of Object.keys(d)) {
        if (isObject(d[k])) {
          if (Object.keys(d[k]).length === 0) {
            // fix query不能为{}的问题
            if (k !== 'query' || JSON.stringify(d[k] !== '{}')) {
              delete d[k];
            }
          } else {
            clean(d[k]);
          }
        }

        if (d[k] === undefined) {
          delete d[k];
        }
      }

      return d;
    }

    return {
      ...args,
      command: this.name,
    };
  }
}

// 集合相关操作
// PERMISSION.COLLECTION

export class ListCollectionsCommand extends BaseCommand {
  public name = 'collections';
  protected _permission = PERMISSION.COLLECTION;
}

export class CreateCollectionCommand extends BaseCommand {
  public name = 'create';
  protected _schema = {
    name: 'collectionName',
    options: {
      type: 'object',
      required: false,
    },
  };
  protected _permission = PERMISSION.COLLECTION;
}

export class RenameCollectionCommand extends BaseCommand {
  public name = 'rename';
  protected _schema = {
    newName: 'collectionName',
    options: {
      type: 'object',
      required: false,
    },
  };
  protected _permission = PERMISSION.COLLECTION;
}

export class DeleteCollectionCommand extends BaseCommand {
  public name = 'drop';
  protected _permission = PERMISSION.COLLECTION;
}

// 索引相关操作
// PERMISSION.COLLECTION

export class ListIndicesCommand extends BaseCommand {
  public name = 'listIndexes';
  protected _schema = {
    options: {
      type: 'object',
      required: false,
    },
  };
  protected _permission = PERMISSION.INDEX;
}

// export class HasIndexCommand extends BaseCommand {
//   public name = 'indexExists';
//   protected _schema = {
//     indexes: 'field',
//     options: {
//       type: 'object',
//       required: false,
//     },
//   };
//   protected _permission = PERMISSION.INDEX;
// }

export class CreateIndexCommand extends BaseCommand {
  public name = 'createIndex';
  protected _schema = {
    field: 'field',
    options: {
      type: 'object',
      required: false,
    },
  };
  protected _permission = PERMISSION.INDEX;
}

export class CreateIndicesCommand extends BaseCommand {
  public name = 'createIndexes';
  protected _schema = {
    fields: 'fields',
    options: {
      type: 'object',
      required: false,
    },
  };
  protected _permission = PERMISSION.INDEX;
}

export class DropIndexCommand extends BaseCommand {
  public name = 'dropIndex';
  protected _schema = {
    indexName: 'field',
    options: {
      type: 'object',
      required: false,
    },
  };
  protected _permission = PERMISSION.INDEX;
}

export class DropIndicesCommand extends BaseCommand {
  public name = 'dropIndexes';
  protected _schema = {
    options: {
      type: 'object',
      required: false,
    },
  };
  protected _permission = PERMISSION.INDEX;
}

// 聚合相关操作
// PERMISSION.AGGREGATE

export class AggregateCommand extends BaseCommand {
  public name = 'aggregate';
  protected _schema = {
    pipeline: 'array',
    options: {
      type: 'object',
      required: false,
    },
  };
  protected _permission = PERMISSION.AGGREGATE;
}

// 文档读取操作
// PERMISSION.READ

export class CountCommand extends BaseCommand {
  public name = 'count';
  protected _schema = {
    query: 'object',
    options: {
      type: 'object',
      required: false,
    },
  };
  protected _permission = PERMISSION.READ;
}

export class DistinctCommand extends BaseCommand {
  public name = 'distinct';
  protected _schema = {
    // in driver doc, this is key
    // in official doc, this is field
    key: 'string',
    query: 'object',
    options: {
      type: 'object',
      required: false,
    },
  };
  protected _permission = PERMISSION.READ;
}

export class FindDocumentCommand extends BaseCommand {
  public name = 'findOne';
  protected _schema = {
    query: 'object',
    options: {
      type: 'object',
      required: false,
    },
  };
  protected _permission = PERMISSION.READ;
}

export class FindDocumentsCommand extends BaseCommand {
  public name = 'find';
  protected _schema = {
    query: {
      type: 'object',
      required: false,
    },
    options: {
      type: 'object',
      required: false,
    },
  };
  protected _permission = PERMISSION.READ;
}

// 文档创建操作
// PERMISSION.CREATE

export class InsertDocumentCommand extends BaseCommand {
  public name = 'insertOne';
  protected _schema = {
    doc: 'field',
    options: {
      type: 'object',
      required: false,
    },
  };
  protected _permission = PERMISSION.CREATE;
}

export class InsertDocumentsCommand extends BaseCommand {
  public name = 'insertMany';
  protected _schema = {
    docs: 'fields',
    options: {
      type: 'object',
      required: false,
    },
  };
  protected _permission = PERMISSION.CREATE;
}

// 文档更新操作
// PERMISSION.UPDATE

export class FindAndUpdateDocumentCommand extends BaseCommand {
  public name = 'findOneAndUpdate';
  protected _schema = {
    filter: 'object',
    update: 'object',
    options: {
      type: 'object',
      required: false,
    },
  };
  protected _permission = PERMISSION.UPDATE;
}

export class UpdateDocumentCommand extends BaseCommand {
  public name = 'updateOne';
  protected _schema = {
    filter: 'object',
    update: 'object',
    options: {
      type: 'object',
      required: false,
    },
  };
  protected _permission = PERMISSION.UPDATE;
}

export class UpdateDocumentsCommand extends BaseCommand {
  public name = 'updateMany';
  protected _schema = {
    filter: 'object',
    update: 'object',
    options: {
      type: 'object',
      required: false,
    },
  };
  protected _permission = PERMISSION.UPDATE;
}

export class FindAndReplaceDocumentCommand extends BaseCommand {
  public name = 'findOneAndReplace';
  protected _schema = {
    filter: 'object',
    replacement: 'object',
    options: {
      type: 'object',
      required: false,
    },
  };
  protected _permission = PERMISSION.UPDATE;
}

export class ReplaceDocumentCommand extends BaseCommand {
  public name = 'replaceOne';
  protected _schema = {
    filter: 'object',
    // in driver, this is doc
    // in official doc, this is replacement
    doc: 'object',
    options: {
      type: 'object',
      required: false,
    },
  };
  protected _permission = PERMISSION.UPDATE;
}

// 文档删除操作
// PERMISSION.DELETE

export class FindAndDeleteDocumentCommand extends BaseCommand {
  public name = 'findOneAndDelete';
  protected _schema = {
    filter: 'object',
    options: {
      type: 'object',
      required: false,
    },
  };
  protected _permission = PERMISSION.DELETE;
}

export class DeleteDocumentCommand extends BaseCommand {
  public name = 'deleteOne';
  protected _schema = {
    filter: 'object',
    options: {
      type: 'object',
      required: false,
    },
  };
  protected _permission = PERMISSION.DELETE;
}

export class DeleteDocumentsCommand extends BaseCommand {
  public name = 'deleteMany';
  protected _schema = {
    filter: {
      type: 'object',
      required: false,
    },
    options: {
      type: 'object',
      required: false,
    },
  };
  protected _permission = PERMISSION.DELETE;
}
