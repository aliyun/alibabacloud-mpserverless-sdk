(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "../codec", "../constant"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.AbortTransactionCommand = exports.CommitTransactionCommand = exports.StartTransactionCommand = exports.DeleteDocumentsCommand = exports.DeleteDocumentCommand = exports.FindAndDeleteDocumentCommand = exports.ReplaceDocumentCommand = exports.FindAndReplaceDocumentCommand = exports.UpdateDocumentsCommand = exports.UpdateDocumentCommand = exports.FindAndUpdateDocumentCommand = exports.InsertDocumentsCommand = exports.InsertDocumentCommand = exports.FindDocumentsCommand = exports.FindDocumentCommand = exports.DistinctCommand = exports.CountCommand = exports.AggregateCommand = exports.BaseCommand = void 0;
    const codec_1 = require("../codec");
    const constant_1 = require("../constant");
    class BaseCommand {
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
                case constant_1.PERMISSION.CREATE:
                case constant_1.PERMISSION.UPDATE:
                case constant_1.PERMISSION.DELETE:
                    return constant_1.PERMISSION.WRITE;
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
                    if (codec_1.isObject(d[k])) {
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
    exports.BaseCommand = BaseCommand;
    class AggregateCommand extends BaseCommand {
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
            this._permission = constant_1.PERMISSION.AGGREGATE;
        }
    }
    exports.AggregateCommand = AggregateCommand;
    class CountCommand extends BaseCommand {
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
            this._permission = constant_1.PERMISSION.READ;
        }
    }
    exports.CountCommand = CountCommand;
    class DistinctCommand extends BaseCommand {
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
            this._permission = constant_1.PERMISSION.READ;
        }
    }
    exports.DistinctCommand = DistinctCommand;
    class FindDocumentCommand extends BaseCommand {
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
            this._permission = constant_1.PERMISSION.READ;
        }
    }
    exports.FindDocumentCommand = FindDocumentCommand;
    class FindDocumentsCommand extends BaseCommand {
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
            this._permission = constant_1.PERMISSION.READ;
        }
    }
    exports.FindDocumentsCommand = FindDocumentsCommand;
    class InsertDocumentCommand extends BaseCommand {
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
            this._permission = constant_1.PERMISSION.CREATE;
        }
    }
    exports.InsertDocumentCommand = InsertDocumentCommand;
    class InsertDocumentsCommand extends BaseCommand {
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
            this._permission = constant_1.PERMISSION.CREATE;
        }
    }
    exports.InsertDocumentsCommand = InsertDocumentsCommand;
    class FindAndUpdateDocumentCommand extends BaseCommand {
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
            this._permission = constant_1.PERMISSION.UPDATE;
        }
    }
    exports.FindAndUpdateDocumentCommand = FindAndUpdateDocumentCommand;
    class UpdateDocumentCommand extends BaseCommand {
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
            this._permission = constant_1.PERMISSION.UPDATE;
        }
    }
    exports.UpdateDocumentCommand = UpdateDocumentCommand;
    class UpdateDocumentsCommand extends BaseCommand {
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
            this._permission = constant_1.PERMISSION.UPDATE;
        }
    }
    exports.UpdateDocumentsCommand = UpdateDocumentsCommand;
    class FindAndReplaceDocumentCommand extends BaseCommand {
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
            this._permission = constant_1.PERMISSION.UPDATE;
        }
    }
    exports.FindAndReplaceDocumentCommand = FindAndReplaceDocumentCommand;
    class ReplaceDocumentCommand extends BaseCommand {
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
            this._permission = constant_1.PERMISSION.UPDATE;
        }
    }
    exports.ReplaceDocumentCommand = ReplaceDocumentCommand;
    class FindAndDeleteDocumentCommand extends BaseCommand {
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
            this._permission = constant_1.PERMISSION.DELETE;
        }
    }
    exports.FindAndDeleteDocumentCommand = FindAndDeleteDocumentCommand;
    class DeleteDocumentCommand extends BaseCommand {
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
            this._permission = constant_1.PERMISSION.DELETE;
        }
    }
    exports.DeleteDocumentCommand = DeleteDocumentCommand;
    class DeleteDocumentsCommand extends BaseCommand {
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
            this._permission = constant_1.PERMISSION.DELETE;
        }
    }
    exports.DeleteDocumentsCommand = DeleteDocumentsCommand;
    class StartTransactionCommand extends BaseCommand {
        constructor() {
            super(...arguments);
            this.name = 'startTransaction';
        }
    }
    exports.StartTransactionCommand = StartTransactionCommand;
    class CommitTransactionCommand extends BaseCommand {
        constructor() {
            super(...arguments);
            this.name = 'commitTransaction';
        }
    }
    exports.CommitTransactionCommand = CommitTransactionCommand;
    class AbortTransactionCommand extends BaseCommand {
        constructor() {
            super(...arguments);
            this.name = 'abortTransaction';
        }
    }
    exports.AbortTransactionCommand = AbortTransactionCommand;
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29tbWFuZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9tb25nby9tb2RlbC9jb21tYW5kLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztJQUdBLG9DQUFvQztJQUNwQywwQ0FBeUM7SUFPekMsTUFBYSxXQUFXO1FBTXRCLFlBQVksTUFBMEI7WUFKNUIsWUFBTyxHQUF1QixFQUFFLENBQUM7WUFDakMsWUFBTyxHQUF1QixFQUFFLENBQUM7WUFJekMsSUFBSSxDQUFDLE9BQU8sR0FBRyxNQUFNLENBQUM7WUFDdEIsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsT0FBTyxFQUFFO2dCQUN6QixJQUFJLENBQUMsT0FBTyxDQUFDLE9BQU8sR0FBRyxFQUFFLENBQUM7YUFDM0I7UUFDSCxDQUFDO1FBTUQsSUFBVyxVQUFVO1lBQ25CLFFBQVEsSUFBSSxDQUFDLFdBQVcsRUFBRTtnQkFDeEIsS0FBSyxxQkFBVSxDQUFDLE1BQU0sQ0FBQztnQkFDdkIsS0FBSyxxQkFBVSxDQUFDLE1BQU0sQ0FBQztnQkFDdkIsS0FBSyxxQkFBVSxDQUFDLE1BQU07b0JBQ3BCLE9BQU8scUJBQVUsQ0FBQyxLQUFLLENBQUM7Z0JBQzFCO29CQUNFLE9BQU8sSUFBSSxDQUFDLFdBQVcsQ0FBQzthQUMzQjtRQUNILENBQUM7UUFFRCxJQUFXLE1BQU07WUFDZixPQUFPLElBQUksQ0FBQyxPQUFPLENBQUM7UUFDdEIsQ0FBQztRQUVELElBQVcsTUFBTTtZQUNmLE9BQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQztRQUN0QixDQUFDO1FBT00sY0FBYyxDQUFDLE9BQTJCO1lBQy9DLElBQUksQ0FBQyxNQUFNLENBQUMsT0FBTyxHQUFHLE1BQU0sQ0FBQyxNQUFNLENBQUMsRUFBRSxFQUFFLElBQUksQ0FBQyxNQUFNLENBQUMsT0FBTyxFQUFFLE9BQU8sQ0FBQyxDQUFDO1FBQ3hFLENBQUM7UUFNTSxPQUFPO1lBQ1osTUFBTSxJQUFJLEdBQUcsS0FBSyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBRTVELFNBQVMsS0FBSyxDQUFDLENBQVM7Z0JBQ3RCLEtBQUssTUFBTSxDQUFDLElBQUksTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsRUFBRTtvQkFDOUIsSUFBSSxnQkFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFO3dCQUNsQixJQUFJLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsTUFBTSxLQUFLLENBQUMsRUFBRTs0QkFDbEMsSUFBSSxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLElBQUksRUFBRTtnQ0FDakMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7NkJBQ2I7eUJBQ0Y7NkJBQU07NEJBQ0wsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO3lCQUNiO3FCQUNGO29CQUVELElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLFNBQVMsRUFBRTt3QkFDdEIsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7cUJBQ2I7aUJBQ0Y7Z0JBRUQsT0FBTyxDQUFDLENBQUM7WUFDWCxDQUFDO1lBRUQsdUNBQ0ssSUFBSSxLQUNQLE9BQU8sRUFBRSxJQUFJLENBQUMsSUFBSSxJQUNsQjtRQUNKLENBQUM7S0FDRjtJQTdFRCxrQ0E2RUM7SUFLRCxNQUFhLGdCQUFpQixTQUFRLFdBQVc7UUFBakQ7O1lBQ1MsU0FBSSxHQUFHLFdBQVcsQ0FBQztZQUNoQixZQUFPLEdBQUc7Z0JBQ2xCLFFBQVEsRUFBRSxPQUFPO2dCQUNqQixPQUFPLEVBQUU7b0JBQ1AsSUFBSSxFQUFFLFFBQVE7b0JBQ2QsUUFBUSxFQUFFLEtBQUs7b0JBQ2YsSUFBSSxFQUFFO3dCQUNKLE9BQU8sRUFBRTs0QkFDUCxJQUFJLEVBQUUsU0FBUzs0QkFDZixRQUFRLEVBQUUsS0FBSzt5QkFDaEI7d0JBQ0QsWUFBWSxFQUFFOzRCQUNaLElBQUksRUFBRSxTQUFTOzRCQUNmLFFBQVEsRUFBRSxLQUFLO3lCQUNoQjt3QkFDRCxTQUFTLEVBQUU7NEJBQ1QsSUFBSSxFQUFFLEtBQUs7NEJBQ1gsUUFBUSxFQUFFLEtBQUs7NEJBQ2YsR0FBRyxFQUFFLENBQUM7eUJBQ1A7d0JBQ0Qsd0JBQXdCLEVBQUU7NEJBQ3hCLElBQUksRUFBRSxTQUFTOzRCQUNmLFFBQVEsRUFBRSxLQUFLO3lCQUNoQjt3QkFDRCxHQUFHLEVBQUU7NEJBQ0gsSUFBSSxFQUFFLFNBQVM7NEJBQ2YsUUFBUSxFQUFFLEtBQUs7eUJBQ2hCO3dCQUNELFlBQVksRUFBRTs0QkFDWixJQUFJLEVBQUUsU0FBUzs0QkFDZixRQUFRLEVBQUUsS0FBSzt5QkFDaEI7d0JBQ0QsYUFBYSxFQUFFOzRCQUNiLElBQUksRUFBRSxTQUFTOzRCQUNmLFFBQVEsRUFBRSxLQUFLO3lCQUNoQjt3QkFDRCxjQUFjLEVBQUU7NEJBQ2QsSUFBSSxFQUFFLFNBQVM7NEJBQ2YsUUFBUSxFQUFFLEtBQUs7eUJBQ2hCO3dCQUNELFNBQVMsRUFBRTs0QkFDVCxJQUFJLEVBQUUsUUFBUTs0QkFDZCxRQUFRLEVBQUUsS0FBSzt5QkFDaEI7cUJBQ0Y7aUJBQ0Y7YUFDRixDQUFDO1lBQ1EsZ0JBQVcsR0FBRyxxQkFBVSxDQUFDLFNBQVMsQ0FBQztRQUMvQyxDQUFDO0tBQUE7SUFqREQsNENBaURDO0lBS0QsTUFBYSxZQUFhLFNBQVEsV0FBVztRQUE3Qzs7WUFDUyxTQUFJLEdBQUcsT0FBTyxDQUFDO1lBQ1osWUFBTyxHQUFHO2dCQUNsQixLQUFLLEVBQUUsUUFBUTtnQkFDZixPQUFPLEVBQUU7b0JBQ1AsSUFBSSxFQUFFLFFBQVE7b0JBQ2QsUUFBUSxFQUFFLEtBQUs7b0JBQ2YsSUFBSSxFQUFFO3dCQUNKLEtBQUssRUFBRTs0QkFDTCxJQUFJLEVBQUUsS0FBSzs0QkFDWCxRQUFRLEVBQUUsS0FBSzs0QkFDZixHQUFHLEVBQUUsQ0FBQzt5QkFDUDt3QkFDRCxJQUFJLEVBQUU7NEJBQ0osSUFBSSxFQUFFLEtBQUs7NEJBQ1gsUUFBUSxFQUFFLEtBQUs7NEJBQ2YsR0FBRyxFQUFFLENBQUM7eUJBQ1A7d0JBQ0QsU0FBUyxFQUFFOzRCQUNULElBQUksRUFBRSxLQUFLOzRCQUNYLFFBQVEsRUFBRSxLQUFLOzRCQUNmLEdBQUcsRUFBRSxDQUFDO3lCQUNQO3FCQUNGO2lCQUNGO2FBQ0YsQ0FBQztZQUNRLGdCQUFXLEdBQUcscUJBQVUsQ0FBQyxJQUFJLENBQUM7UUFDMUMsQ0FBQztLQUFBO0lBM0JELG9DQTJCQztJQUVELE1BQWEsZUFBZ0IsU0FBUSxXQUFXO1FBQWhEOztZQUNTLFNBQUksR0FBRyxVQUFVLENBQUM7WUFDZixZQUFPLEdBQUc7Z0JBR2xCLEdBQUcsRUFBRSxRQUFRO2dCQUNiLEtBQUssRUFBRSxRQUFRO2dCQUNmLE9BQU8sRUFBRTtvQkFDUCxJQUFJLEVBQUUsUUFBUTtvQkFDZCxRQUFRLEVBQUUsS0FBSztpQkFDaEI7YUFDRixDQUFDO1lBQ1EsZ0JBQVcsR0FBRyxxQkFBVSxDQUFDLElBQUksQ0FBQztRQUMxQyxDQUFDO0tBQUE7SUFiRCwwQ0FhQztJQUVELE1BQWEsbUJBQW9CLFNBQVEsV0FBVztRQUFwRDs7WUFDUyxTQUFJLEdBQUcsU0FBUyxDQUFDO1lBQ2QsWUFBTyxHQUFHO2dCQUNsQixLQUFLLEVBQUU7b0JBQ0wsSUFBSSxFQUFFLFFBQVE7b0JBQ2QsUUFBUSxFQUFFLEtBQUs7aUJBQ2hCO2dCQUNELE9BQU8sRUFBRTtvQkFDUCxJQUFJLEVBQUUsUUFBUTtvQkFDZCxRQUFRLEVBQUUsS0FBSztvQkFDZixJQUFJLEVBQUU7d0JBQ0osS0FBSyxFQUFFOzRCQUNMLElBQUksRUFBRSxLQUFLOzRCQUNYLFFBQVEsRUFBRSxLQUFLOzRCQUNmLEdBQUcsRUFBRSxDQUFDO3lCQUNQO3dCQUNELElBQUksRUFBRTs0QkFDSixJQUFJLEVBQUUsS0FBSzs0QkFDWCxRQUFRLEVBQUUsS0FBSzs0QkFDZixHQUFHLEVBQUUsQ0FBQzt5QkFDUDt3QkFDRCxTQUFTLEVBQUU7NEJBQ1QsSUFBSSxFQUFFLEtBQUs7NEJBQ1gsUUFBUSxFQUFFLEtBQUs7NEJBQ2YsR0FBRyxFQUFFLENBQUM7eUJBQ1A7d0JBQ0QsSUFBSSxFQUFFOzRCQUNKLElBQUksRUFBRSxNQUFNOzRCQUNaLFFBQVEsRUFBRSxLQUFLO3lCQUNoQjt3QkFDRCxVQUFVLEVBQUU7NEJBQ1YsSUFBSSxFQUFFLFlBQVk7NEJBQ2xCLFFBQVEsRUFBRSxLQUFLO3lCQUNoQjt3QkFDRCxJQUFJLEVBQUU7NEJBQ0osSUFBSSxFQUFFLFFBQVE7NEJBQ2QsUUFBUSxFQUFFLEtBQUs7eUJBQ2hCO3FCQUNGO2lCQUNGO2FBQ0YsQ0FBQztZQUNRLGdCQUFXLEdBQUcscUJBQVUsQ0FBQyxJQUFJLENBQUM7UUFDMUMsQ0FBQztLQUFBO0lBMUNELGtEQTBDQztJQUVELE1BQWEsb0JBQXFCLFNBQVEsV0FBVztRQUFyRDs7WUFDUyxTQUFJLEdBQUcsTUFBTSxDQUFDO1lBQ1gsWUFBTyxHQUFHO2dCQUNsQixLQUFLLEVBQUU7b0JBQ0wsSUFBSSxFQUFFLFFBQVE7b0JBQ2QsUUFBUSxFQUFFLEtBQUs7aUJBQ2hCO2dCQUNELE9BQU8sRUFBRTtvQkFDUCxJQUFJLEVBQUUsUUFBUTtvQkFDZCxRQUFRLEVBQUUsS0FBSztvQkFDZixJQUFJLEVBQUU7d0JBQ0osS0FBSyxFQUFFOzRCQUNMLElBQUksRUFBRSxLQUFLOzRCQUNYLFFBQVEsRUFBRSxLQUFLOzRCQUNmLEdBQUcsRUFBRSxDQUFDO3lCQUNQO3dCQUNELElBQUksRUFBRTs0QkFDSixJQUFJLEVBQUUsS0FBSzs0QkFDWCxRQUFRLEVBQUUsS0FBSzs0QkFDZixHQUFHLEVBQUUsQ0FBQzt5QkFDUDt3QkFDRCxTQUFTLEVBQUU7NEJBQ1QsSUFBSSxFQUFFLEtBQUs7NEJBQ1gsUUFBUSxFQUFFLEtBQUs7NEJBQ2YsR0FBRyxFQUFFLENBQUM7eUJBQ1A7d0JBQ0QsSUFBSSxFQUFFOzRCQUNKLElBQUksRUFBRSxNQUFNOzRCQUNaLFFBQVEsRUFBRSxLQUFLO3lCQUNoQjt3QkFDRCxVQUFVLEVBQUU7NEJBQ1YsSUFBSSxFQUFFLFlBQVk7NEJBQ2xCLFFBQVEsRUFBRSxLQUFLO3lCQUNoQjt3QkFDRCxJQUFJLEVBQUU7NEJBQ0osSUFBSSxFQUFFLFFBQVE7NEJBQ2QsUUFBUSxFQUFFLEtBQUs7eUJBQ2hCO3FCQUNGO2lCQUNGO2FBQ0YsQ0FBQztZQUNRLGdCQUFXLEdBQUcscUJBQVUsQ0FBQyxJQUFJLENBQUM7UUFDMUMsQ0FBQztLQUFBO0lBMUNELG9EQTBDQztJQUtELE1BQWEscUJBQXNCLFNBQVEsV0FBVztRQUF0RDs7WUFDUyxTQUFJLEdBQUcsV0FBVyxDQUFDO1lBQ2hCLFlBQU8sR0FBRztnQkFDbEIsR0FBRyxFQUFFLE9BQU87Z0JBQ1osT0FBTyxFQUFFO29CQUNQLElBQUksRUFBRSxRQUFRO29CQUNkLFFBQVEsRUFBRSxLQUFLO2lCQUNoQjthQUNGLENBQUM7WUFDUSxnQkFBVyxHQUFHLHFCQUFVLENBQUMsTUFBTSxDQUFDO1FBQzVDLENBQUM7S0FBQTtJQVZELHNEQVVDO0lBRUQsTUFBYSxzQkFBdUIsU0FBUSxXQUFXO1FBQXZEOztZQUNTLFNBQUksR0FBRyxZQUFZLENBQUM7WUFDakIsWUFBTyxHQUFHO2dCQUNsQixJQUFJLEVBQUUsUUFBUTtnQkFDZCxPQUFPLEVBQUU7b0JBQ1AsSUFBSSxFQUFFLFFBQVE7b0JBQ2QsUUFBUSxFQUFFLEtBQUs7aUJBQ2hCO2FBQ0YsQ0FBQztZQUNRLGdCQUFXLEdBQUcscUJBQVUsQ0FBQyxNQUFNLENBQUM7UUFDNUMsQ0FBQztLQUFBO0lBVkQsd0RBVUM7SUFLRCxNQUFhLDRCQUE2QixTQUFRLFdBQVc7UUFBN0Q7O1lBQ1MsU0FBSSxHQUFHLGtCQUFrQixDQUFDO1lBQ3ZCLFlBQU8sR0FBRztnQkFDbEIsTUFBTSxFQUFFLFFBQVE7Z0JBQ2hCLE1BQU0sRUFBRSxRQUFRO2dCQUNoQixPQUFPLEVBQUU7b0JBQ1AsSUFBSSxFQUFFLFFBQVE7b0JBQ2QsUUFBUSxFQUFFLEtBQUs7b0JBQ2YsSUFBSSxFQUFFO3dCQUNKLFNBQVMsRUFBRTs0QkFDVCxJQUFJLEVBQUUsS0FBSzs0QkFDWCxHQUFHLEVBQUUsQ0FBQzs0QkFDTixRQUFRLEVBQUUsS0FBSzt5QkFDaEI7d0JBQ0QsSUFBSSxFQUFFOzRCQUNKLElBQUksRUFBRSxNQUFNOzRCQUNaLFFBQVEsRUFBRSxLQUFLO3lCQUNoQjt3QkFDRCxNQUFNLEVBQUU7NEJBQ04sSUFBSSxFQUFFLFNBQVM7NEJBQ2YsUUFBUSxFQUFFLEtBQUs7eUJBQ2hCO3dCQUNELFVBQVUsRUFBRTs0QkFDVixJQUFJLEVBQUUsWUFBWTs0QkFDbEIsUUFBUSxFQUFFLEtBQUs7eUJBQ2hCO3FCQUNGO2lCQUNGO2FBQ0YsQ0FBQztZQUNRLGdCQUFXLEdBQUcscUJBQVUsQ0FBQyxNQUFNLENBQUM7UUFDNUMsQ0FBQztLQUFBO0lBOUJELG9FQThCQztJQUVELE1BQWEscUJBQXNCLFNBQVEsV0FBVztRQUF0RDs7WUFDUyxTQUFJLEdBQUcsV0FBVyxDQUFDO1lBQ2hCLFlBQU8sR0FBRztnQkFDbEIsTUFBTSxFQUFFLFFBQVE7Z0JBQ2hCLE1BQU0sRUFBRSxTQUFTO2dCQUNqQixPQUFPLEVBQUU7b0JBQ1AsSUFBSSxFQUFFLFFBQVE7b0JBQ2QsUUFBUSxFQUFFLEtBQUs7b0JBQ2YsSUFBSSxFQUFFO3dCQUNKLE1BQU0sRUFBRTs0QkFDTixJQUFJLEVBQUUsU0FBUzs0QkFDZixRQUFRLEVBQUUsS0FBSzt5QkFDaEI7cUJBQ0Y7aUJBQ0Y7YUFDRixDQUFDO1lBQ1EsZ0JBQVcsR0FBRyxxQkFBVSxDQUFDLE1BQU0sQ0FBQztRQUM1QyxDQUFDO0tBQUE7SUFqQkQsc0RBaUJDO0lBRUQsTUFBYSxzQkFBdUIsU0FBUSxXQUFXO1FBQXZEOztZQUNTLFNBQUksR0FBRyxZQUFZLENBQUM7WUFDakIsWUFBTyxHQUFHO2dCQUNsQixNQUFNLEVBQUUsUUFBUTtnQkFDaEIsTUFBTSxFQUFFLFNBQVM7Z0JBQ2pCLE9BQU8sRUFBRTtvQkFDUCxJQUFJLEVBQUUsUUFBUTtvQkFDZCxRQUFRLEVBQUUsS0FBSztvQkFDZixJQUFJLEVBQUU7d0JBQ0osTUFBTSxFQUFFOzRCQUNOLElBQUksRUFBRSxTQUFTOzRCQUNmLFFBQVEsRUFBRSxLQUFLO3lCQUNoQjtxQkFDRjtpQkFDRjthQUNGLENBQUM7WUFDUSxnQkFBVyxHQUFHLHFCQUFVLENBQUMsTUFBTSxDQUFDO1FBQzVDLENBQUM7S0FBQTtJQWpCRCx3REFpQkM7SUFFRCxNQUFhLDZCQUE4QixTQUFRLFdBQVc7UUFBOUQ7O1lBQ1MsU0FBSSxHQUFHLG1CQUFtQixDQUFDO1lBQ3hCLFlBQU8sR0FBRztnQkFDbEIsTUFBTSxFQUFFLFFBQVE7Z0JBQ2hCLFdBQVcsRUFBRSxRQUFRO2dCQUNyQixPQUFPLEVBQUU7b0JBQ1AsSUFBSSxFQUFFLFFBQVE7b0JBQ2QsUUFBUSxFQUFFLEtBQUs7b0JBQ2YsSUFBSSxFQUFFO3dCQUNKLFNBQVMsRUFBRTs0QkFDVCxJQUFJLEVBQUUsS0FBSzs0QkFDWCxHQUFHLEVBQUUsQ0FBQzs0QkFDTixRQUFRLEVBQUUsS0FBSzt5QkFDaEI7d0JBQ0QsSUFBSSxFQUFFOzRCQUNKLElBQUksRUFBRSxNQUFNOzRCQUNaLFFBQVEsRUFBRSxLQUFLO3lCQUNoQjt3QkFDRCxNQUFNLEVBQUU7NEJBQ04sSUFBSSxFQUFFLFNBQVM7NEJBQ2YsUUFBUSxFQUFFLEtBQUs7eUJBQ2hCO3dCQUNELFVBQVUsRUFBRTs0QkFDVixJQUFJLEVBQUUsWUFBWTs0QkFDbEIsUUFBUSxFQUFFLEtBQUs7eUJBQ2hCO3FCQUNGO2lCQUNGO2FBQ0YsQ0FBQztZQUNRLGdCQUFXLEdBQUcscUJBQVUsQ0FBQyxNQUFNLENBQUM7UUFDNUMsQ0FBQztLQUFBO0lBOUJELHNFQThCQztJQUVELE1BQWEsc0JBQXVCLFNBQVEsV0FBVztRQUF2RDs7WUFDUyxTQUFJLEdBQUcsWUFBWSxDQUFDO1lBQ2pCLFlBQU8sR0FBRztnQkFDbEIsTUFBTSxFQUFFLFFBQVE7Z0JBR2hCLEdBQUcsRUFBRSxRQUFRO2dCQUNiLE9BQU8sRUFBRTtvQkFDUCxJQUFJLEVBQUUsUUFBUTtvQkFDZCxRQUFRLEVBQUUsS0FBSztvQkFDZixJQUFJLEVBQUU7d0JBQ0osTUFBTSxFQUFFOzRCQUNOLElBQUksRUFBRSxTQUFTOzRCQUNmLFFBQVEsRUFBRSxLQUFLO3lCQUNoQjtxQkFDRjtpQkFDRjthQUNGLENBQUM7WUFDUSxnQkFBVyxHQUFHLHFCQUFVLENBQUMsTUFBTSxDQUFDO1FBQzVDLENBQUM7S0FBQTtJQW5CRCx3REFtQkM7SUFLRCxNQUFhLDRCQUE2QixTQUFRLFdBQVc7UUFBN0Q7O1lBQ1MsU0FBSSxHQUFHLGtCQUFrQixDQUFDO1lBQ3ZCLFlBQU8sR0FBRztnQkFDbEIsTUFBTSxFQUFFLFFBQVE7Z0JBQ2hCLE9BQU8sRUFBRTtvQkFDUCxJQUFJLEVBQUUsUUFBUTtvQkFDZCxRQUFRLEVBQUUsS0FBSztvQkFDZixJQUFJLEVBQUU7d0JBQ0osU0FBUyxFQUFFOzRCQUNULElBQUksRUFBRSxLQUFLOzRCQUNYLEdBQUcsRUFBRSxDQUFDOzRCQUNOLFFBQVEsRUFBRSxLQUFLO3lCQUNoQjt3QkFDRCxJQUFJLEVBQUU7NEJBQ0osSUFBSSxFQUFFLE1BQU07NEJBQ1osUUFBUSxFQUFFLEtBQUs7eUJBQ2hCO3dCQUNELFVBQVUsRUFBRTs0QkFDVixJQUFJLEVBQUUsUUFBUTs0QkFDZCxRQUFRLEVBQUUsS0FBSzt5QkFDaEI7cUJBQ0Y7aUJBQ0Y7YUFDRixDQUFDO1lBQ1EsZ0JBQVcsR0FBRyxxQkFBVSxDQUFDLE1BQU0sQ0FBQztRQUM1QyxDQUFDO0tBQUE7SUF6QkQsb0VBeUJDO0lBRUQsTUFBYSxxQkFBc0IsU0FBUSxXQUFXO1FBQXREOztZQUNTLFNBQUksR0FBRyxXQUFXLENBQUM7WUFDaEIsWUFBTyxHQUFHO2dCQUNsQixNQUFNLEVBQUU7b0JBQ04sSUFBSSxFQUFFLFFBQVE7aUJBQ2Y7Z0JBQ0QsT0FBTyxFQUFFO29CQUNQLElBQUksRUFBRSxRQUFRO29CQUNkLFFBQVEsRUFBRSxLQUFLO2lCQUNoQjthQUNGLENBQUM7WUFDUSxnQkFBVyxHQUFHLHFCQUFVLENBQUMsTUFBTSxDQUFDO1FBQzVDLENBQUM7S0FBQTtJQVpELHNEQVlDO0lBRUQsTUFBYSxzQkFBdUIsU0FBUSxXQUFXO1FBQXZEOztZQUNTLFNBQUksR0FBRyxZQUFZLENBQUM7WUFDakIsWUFBTyxHQUFHO2dCQUNsQixNQUFNLEVBQUU7b0JBQ04sSUFBSSxFQUFFLFFBQVE7aUJBQ2Y7Z0JBQ0QsT0FBTyxFQUFFO29CQUNQLElBQUksRUFBRSxRQUFRO29CQUNkLFFBQVEsRUFBRSxLQUFLO2lCQUNoQjthQUNGLENBQUM7WUFDUSxnQkFBVyxHQUFHLHFCQUFVLENBQUMsTUFBTSxDQUFDO1FBQzVDLENBQUM7S0FBQTtJQVpELHdEQVlDO0lBRUQsTUFBYSx1QkFBd0IsU0FBUSxXQUFXO1FBQXhEOztZQUNTLFNBQUksR0FBRyxrQkFBa0IsQ0FBQztRQUNuQyxDQUFDO0tBQUE7SUFGRCwwREFFQztJQUVELE1BQWEsd0JBQXlCLFNBQVEsV0FBVztRQUF6RDs7WUFDUyxTQUFJLEdBQUcsbUJBQW1CLENBQUM7UUFDcEMsQ0FBQztLQUFBO0lBRkQsNERBRUM7SUFFRCxNQUFhLHVCQUF3QixTQUFRLFdBQVc7UUFBeEQ7O1lBQ1MsU0FBSSxHQUFHLGtCQUFrQixDQUFDO1FBQ25DLENBQUM7S0FBQTtJQUZELDBEQUVDIn0=