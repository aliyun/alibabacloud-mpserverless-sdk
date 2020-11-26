import { isObject } from '../codec';
import { PERMISSION } from '../constant';
export class BaseCommand {
    constructor(argMap) {
        this._schema = {};
        this._argMap = {};
        this._argMap = argMap;
        if (!this._argMap.options) {
            this._argMap.options = {};
        }
    }
    get permission() {
        switch (this._permission) {
            case PERMISSION.CREATE:
            case PERMISSION.UPDATE:
            case PERMISSION.DELETE:
                return PERMISSION.WRITE;
            default:
                return this._permission;
        }
    }
    get argMap() {
        return this._argMap;
    }
    get schema() {
        return this._schema;
    }
    augmentOptions(options) {
        this.argMap.options = Object.assign({}, this.argMap.options, options);
    }
    inspect() {
        const args = clean(JSON.parse(JSON.stringify(this.argMap)));
        function clean(d) {
            for (const k of Object.keys(d)) {
                if (isObject(d[k])) {
                    if (Object.keys(d[k]).length === 0) {
                        if (JSON.stringify(d[k]) !== '{}') {
                            delete d[k];
                        }
                    }
                    else {
                        clean(d[k]);
                    }
                }
                if (d[k] === undefined) {
                    delete d[k];
                }
            }
            return d;
        }
        return Object.assign(Object.assign({}, args), { command: this.name });
    }
}
export class AggregateCommand extends BaseCommand {
    constructor() {
        super(...arguments);
        this.name = 'aggregate';
        this._schema = {
            pipeline: 'array',
            options: {
                type: 'object',
                required: false,
                rule: {
                    explain: {
                        type: 'boolean',
                        required: false,
                    },
                    allowDiskUse: {
                        type: 'boolean',
                        required: false,
                    },
                    maxTimeMS: {
                        type: 'int',
                        required: false,
                        min: 0,
                    },
                    bypassDocumentValidation: {
                        type: 'boolean',
                        required: false,
                    },
                    raw: {
                        type: 'boolean',
                        required: false,
                    },
                    promoteLongs: {
                        type: 'boolean',
                        required: false,
                    },
                    promoteValues: {
                        type: 'boolean',
                        required: false,
                    },
                    promoteBuffers: {
                        type: 'boolean',
                        required: false,
                    },
                    collation: {
                        type: 'object',
                        required: false,
                    },
                },
            },
        };
        this._permission = PERMISSION.AGGREGATE;
    }
}
export class CountCommand extends BaseCommand {
    constructor() {
        super(...arguments);
        this.name = 'count';
        this._schema = {
            query: 'object',
            options: {
                type: 'object',
                required: false,
                rule: {
                    limit: {
                        type: 'int',
                        required: false,
                        min: 0,
                    },
                    skip: {
                        type: 'int',
                        required: false,
                        min: 0,
                    },
                    maxTimeMS: {
                        type: 'int',
                        required: false,
                        min: 0,
                    },
                },
            },
        };
        this._permission = PERMISSION.READ;
    }
}
export class DistinctCommand extends BaseCommand {
    constructor() {
        super(...arguments);
        this.name = 'distinct';
        this._schema = {
            key: 'string',
            query: 'object',
            options: {
                type: 'object',
                required: false,
            },
        };
        this._permission = PERMISSION.READ;
    }
}
export class FindDocumentCommand extends BaseCommand {
    constructor() {
        super(...arguments);
        this.name = 'findOne';
        this._schema = {
            query: {
                type: 'object',
                required: false,
            },
            options: {
                type: 'object',
                required: false,
                rule: {
                    limit: {
                        type: 'int',
                        required: false,
                        min: 0,
                    },
                    skip: {
                        type: 'int',
                        required: false,
                        min: 0,
                    },
                    maxTimeMS: {
                        type: 'int',
                        required: false,
                        min: 0,
                    },
                    sort: {
                        type: 'sort',
                        required: false,
                    },
                    projection: {
                        type: 'projection',
                        required: false,
                    },
                    hint: {
                        type: 'object',
                        required: false,
                    },
                },
            },
        };
        this._permission = PERMISSION.READ;
    }
}
export class FindDocumentsCommand extends BaseCommand {
    constructor() {
        super(...arguments);
        this.name = 'find';
        this._schema = {
            query: {
                type: 'object',
                required: false,
            },
            options: {
                type: 'object',
                required: false,
                rule: {
                    limit: {
                        type: 'int',
                        required: false,
                        min: 0,
                    },
                    skip: {
                        type: 'int',
                        required: false,
                        min: 0,
                    },
                    maxTimeMS: {
                        type: 'int',
                        required: false,
                        min: 0,
                    },
                    sort: {
                        type: 'sort',
                        required: false,
                    },
                    projection: {
                        type: 'projection',
                        required: false,
                    },
                    hint: {
                        type: 'object',
                        required: false,
                    },
                },
            },
        };
        this._permission = PERMISSION.READ;
    }
}
export class InsertDocumentCommand extends BaseCommand {
    constructor() {
        super(...arguments);
        this.name = 'insertOne';
        this._schema = {
            doc: 'field',
            options: {
                type: 'object',
                required: false,
            },
        };
        this._permission = PERMISSION.CREATE;
    }
}
export class InsertDocumentsCommand extends BaseCommand {
    constructor() {
        super(...arguments);
        this.name = 'insertMany';
        this._schema = {
            docs: 'fields',
            options: {
                type: 'object',
                required: false,
            },
        };
        this._permission = PERMISSION.CREATE;
    }
}
export class FindAndUpdateDocumentCommand extends BaseCommand {
    constructor() {
        super(...arguments);
        this.name = 'findOneAndUpdate';
        this._schema = {
            filter: 'object',
            update: 'object',
            options: {
                type: 'object',
                required: false,
                rule: {
                    maxTimeMS: {
                        type: 'int',
                        min: 0,
                        required: false,
                    },
                    sort: {
                        type: 'sort',
                        required: false,
                    },
                    upsert: {
                        type: 'boolean',
                        required: false,
                    },
                    projection: {
                        type: 'projection',
                        required: false,
                    },
                },
            },
        };
        this._permission = PERMISSION.UPDATE;
    }
}
export class UpdateDocumentCommand extends BaseCommand {
    constructor() {
        super(...arguments);
        this.name = 'updateOne';
        this._schema = {
            filter: 'object',
            update: 'nobject',
            options: {
                type: 'object',
                required: false,
                rule: {
                    upsert: {
                        type: 'boolean',
                        required: false,
                    },
                },
            },
        };
        this._permission = PERMISSION.UPDATE;
    }
}
export class UpdateDocumentsCommand extends BaseCommand {
    constructor() {
        super(...arguments);
        this.name = 'updateMany';
        this._schema = {
            filter: 'object',
            update: 'nobject',
            options: {
                type: 'object',
                required: false,
                rule: {
                    upsert: {
                        type: 'boolean',
                        required: false,
                    },
                },
            },
        };
        this._permission = PERMISSION.UPDATE;
    }
}
export class FindAndReplaceDocumentCommand extends BaseCommand {
    constructor() {
        super(...arguments);
        this.name = 'findOneAndReplace';
        this._schema = {
            filter: 'object',
            replacement: 'object',
            options: {
                type: 'object',
                required: false,
                rule: {
                    maxTimeMS: {
                        type: 'int',
                        min: 0,
                        required: false,
                    },
                    sort: {
                        type: 'sort',
                        required: false,
                    },
                    upsert: {
                        type: 'boolean',
                        required: false,
                    },
                    projection: {
                        type: 'projection',
                        required: false,
                    },
                },
            },
        };
        this._permission = PERMISSION.UPDATE;
    }
}
export class ReplaceDocumentCommand extends BaseCommand {
    constructor() {
        super(...arguments);
        this.name = 'replaceOne';
        this._schema = {
            filter: 'object',
            doc: 'object',
            options: {
                type: 'object',
                required: false,
                rule: {
                    upsert: {
                        type: 'boolean',
                        required: false,
                    },
                },
            },
        };
        this._permission = PERMISSION.UPDATE;
    }
}
export class FindAndDeleteDocumentCommand extends BaseCommand {
    constructor() {
        super(...arguments);
        this.name = 'findOneAndDelete';
        this._schema = {
            filter: 'object',
            options: {
                type: 'object',
                required: false,
                rule: {
                    maxTimeMS: {
                        type: 'int',
                        min: 0,
                        required: false,
                    },
                    sort: {
                        type: 'sort',
                        required: false,
                    },
                    projection: {
                        type: 'object',
                        required: false,
                    },
                },
            },
        };
        this._permission = PERMISSION.DELETE;
    }
}
export class DeleteDocumentCommand extends BaseCommand {
    constructor() {
        super(...arguments);
        this.name = 'deleteOne';
        this._schema = {
            filter: {
                type: 'object',
            },
            options: {
                type: 'object',
                required: false,
            },
        };
        this._permission = PERMISSION.DELETE;
    }
}
export class DeleteDocumentsCommand extends BaseCommand {
    constructor() {
        super(...arguments);
        this.name = 'deleteMany';
        this._schema = {
            filter: {
                type: 'object',
            },
            options: {
                type: 'object',
                required: false,
            },
        };
        this._permission = PERMISSION.DELETE;
    }
}
export class StartTransactionCommand extends BaseCommand {
    constructor() {
        super(...arguments);
        this.name = 'startTransaction';
    }
}
export class CommitTransactionCommand extends BaseCommand {
    constructor() {
        super(...arguments);
        this.name = 'commitTransaction';
    }
}
export class AbortTransactionCommand extends BaseCommand {
    constructor() {
        super(...arguments);
        this.name = 'abortTransaction';
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29tbWFuZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9tb25nby9tb2RlbC9jb21tYW5kLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUdBLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxVQUFVLENBQUM7QUFDcEMsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGFBQWEsQ0FBQztBQU96QyxNQUFNLE9BQU8sV0FBVztJQU10QixZQUFZLE1BQTBCO1FBSjVCLFlBQU8sR0FBdUIsRUFBRSxDQUFDO1FBQ2pDLFlBQU8sR0FBdUIsRUFBRSxDQUFDO1FBSXpDLElBQUksQ0FBQyxPQUFPLEdBQUcsTUFBTSxDQUFDO1FBQ3RCLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLE9BQU8sRUFBRTtZQUN6QixJQUFJLENBQUMsT0FBTyxDQUFDLE9BQU8sR0FBRyxFQUFFLENBQUM7U0FDM0I7SUFDSCxDQUFDO0lBTUQsSUFBVyxVQUFVO1FBQ25CLFFBQVEsSUFBSSxDQUFDLFdBQVcsRUFBRTtZQUN4QixLQUFLLFVBQVUsQ0FBQyxNQUFNLENBQUM7WUFDdkIsS0FBSyxVQUFVLENBQUMsTUFBTSxDQUFDO1lBQ3ZCLEtBQUssVUFBVSxDQUFDLE1BQU07Z0JBQ3BCLE9BQU8sVUFBVSxDQUFDLEtBQUssQ0FBQztZQUMxQjtnQkFDRSxPQUFPLElBQUksQ0FBQyxXQUFXLENBQUM7U0FDM0I7SUFDSCxDQUFDO0lBRUQsSUFBVyxNQUFNO1FBQ2YsT0FBTyxJQUFJLENBQUMsT0FBTyxDQUFDO0lBQ3RCLENBQUM7SUFFRCxJQUFXLE1BQU07UUFDZixPQUFPLElBQUksQ0FBQyxPQUFPLENBQUM7SUFDdEIsQ0FBQztJQU9NLGNBQWMsQ0FBQyxPQUEyQjtRQUMvQyxJQUFJLENBQUMsTUFBTSxDQUFDLE9BQU8sR0FBRyxNQUFNLENBQUMsTUFBTSxDQUFDLEVBQUUsRUFBRSxJQUFJLENBQUMsTUFBTSxDQUFDLE9BQU8sRUFBRSxPQUFPLENBQUMs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