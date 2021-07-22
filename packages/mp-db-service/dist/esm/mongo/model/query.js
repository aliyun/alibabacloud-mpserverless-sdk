import { __awaiter } from "tslib";
import { assert, bizError } from '@alicloud/mpserverless-core';
import { JSONEncoder, JSONDecoder } from '../codec';
import { Collection } from './collection';
import { AggregateCommand, CountCommand, DistinctCommand, FindDocumentsCommand, FindDocumentCommand, InsertDocumentCommand, InsertDocumentsCommand, FindAndUpdateDocumentCommand, UpdateDocumentCommand, UpdateDocumentsCommand, FindAndReplaceDocumentCommand, ReplaceDocumentCommand, FindAndDeleteDocumentCommand, DeleteDocumentCommand, DeleteDocumentsCommand, StartTransactionCommand, CommitTransactionCommand, AbortTransactionCommand } from './command';
import { Result } from './result';
import { MongoValidator } from '../validator';
import { PERMISSION } from '../constant';
var MongoAction;
(function (MongoAction) {
    MongoAction["AGGREGATE"] = "aggregate";
    MongoAction["COUNT"] = "count";
    MongoAction["DISTINCT"] = "distinct";
    MongoAction["FIND_ONE"] = "findone";
    MongoAction["FIND"] = "find";
    MongoAction["INSERT_ONE"] = "insertOne";
    MongoAction["INSERT_MANY"] = "insertMany";
    MongoAction["FIND_ONE_AND_UPDATE"] = "findOneAndUpdate";
    MongoAction["UPDATE_ONE"] = "updateOne";
    MongoAction["UPDATE_MANY"] = "updateMany";
    MongoAction["FIND_ONE_AND_REPLACE"] = "findOneAndReplace";
    MongoAction["REPLACE_ONE"] = "replaceOne";
    MongoAction["FIND_ONE_AND_DELETE"] = "findOneAndDelete";
    MongoAction["DELETE_ONE"] = "deleteOne";
    MongoAction["DELETE_MANY"] = "deleteMany";
})(MongoAction || (MongoAction = {}));
;
export class Query {
    constructor() {
        this.encoder = new JSONEncoder();
        this.decoder = new JSONDecoder();
    }
    transaction() {
        return __awaiter(this, void 0, void 0, function* () {
            this.comm = new StartTransactionCommand({});
            const res = yield this.execute();
            if (res) {
                this.transId = res.transactionId;
            }
            return this.transId;
        });
    }
    commit() {
        return __awaiter(this, void 0, void 0, function* () {
            this.comm = new CommitTransactionCommand({});
            return this.execute();
        });
    }
    rollback() {
        return __awaiter(this, void 0, void 0, function* () {
            this.comm = new AbortTransactionCommand({});
            return this.execute();
        });
    }
    collection(name) {
        this.coll = new Collection(name);
        return this;
    }
    aggregate(pipeline, options) {
        this.validateTransactionAction(MongoAction.AGGREGATE);
        this.comm = new AggregateCommand({ pipeline, options });
        return this.execute();
    }
    count(query, options) {
        this.validateTransactionAction(MongoAction.COUNT);
        this.comm = new CountCommand({ query, options });
        return this.execute();
    }
    distinct(key, query, options) {
        this.validateTransactionAction(MongoAction.DISTINCT);
        this.comm = new DistinctCommand({ key, query, options });
        return this.execute();
    }
    findOne(query, options) {
        this.comm = new FindDocumentCommand({ query, options });
        return this.execute();
    }
    find(query, options) {
        this.validateTransactionAction(MongoAction.FIND);
        this.comm = new FindDocumentsCommand({ query, options });
        return this.execute();
    }
    insertOne(doc, options) {
        this.comm = new InsertDocumentCommand({ doc, options });
        return this.execute();
    }
    insertMany(docs, options) {
        this.validateTransactionAction(MongoAction.INSERT_MANY);
        this.comm = new InsertDocumentsCommand({ docs, options });
        return this.execute();
    }
    findOneAndUpdate(filter, update, options) {
        this.comm = new FindAndUpdateDocumentCommand({ filter, update, options });
        return this.execute();
    }
    updateOne(filter, update, options) {
        this.comm = new UpdateDocumentCommand({ filter, update, options });
        return this.execute();
    }
    updateMany(filter, update, options) {
        this.validateTransactionAction(MongoAction.UPDATE_MANY);
        this.comm = new UpdateDocumentsCommand({ filter, update, options });
        return this.execute();
    }
    findOneAndReplace(filter, replacement, options) {
        this.comm = new FindAndReplaceDocumentCommand({ filter, replacement, options });
        return this.execute();
    }
    replaceOne(filter, doc, options) {
        this.comm = new ReplaceDocumentCommand({ filter, doc, options });
        return this.execute();
    }
    findOneAndDelete(filter, options) {
        this.comm = new FindAndDeleteDocumentCommand({ filter, options });
        return this.execute();
    }
    deleteOne(filter, options) {
        this.comm = new DeleteDocumentCommand({ filter, options });
        return this.execute();
    }
    deleteMany(filter, options) {
        this.validateTransactionAction(MongoAction.DELETE_MANY);
        this.comm = new DeleteDocumentsCommand({ filter, options });
        return this.execute();
    }
    validate() {
        const v = new MongoValidator();
        try {
            v.validate(this.comm.schema, this.encoder.encode(this.comm.argMap));
        }
        catch (err) {
            throw err;
        }
    }
    execute(..._) {
        return __awaiter(this, void 0, void 0, function* () {
            assert(this.comm, '[DBService]缺少 command 参数');
            this.validate();
            switch (this.comm.permission) {
                case PERMISSION.AGGREGATE:
                case PERMISSION.WRITE:
                case PERMISSION.READ:
                    assert(this.collection, '[DBService]缺少 collection 参数');
                    break;
                default:
            }
            const query = Object.assign({}, this.coll && this.coll.inspect(), this.transId && { transactionId: this.transId }, this.comm.inspect());
            return this.encoder.encode(query);
        });
    }
    validateTransactionAction(action) {
        if (this.transId) {
            throw new bizError.TransactionError('transaction not support action [' + action + ']');
        }
    }
}
export class QueryService extends Query {
    execute() {
        const _super = Object.create(null, {
            execute: { get: () => super.execute }
        });
        return __awaiter(this, void 0, void 0, function* () {
            const params = yield _super.execute.call(this);
            const request = this.getEncoder()
                .setBodyField({
                method: 'serverless.db.default.execute',
                params,
            });
            const response = yield this.getTransport().request(request);
            return (new Result(response.body)).inspect();
        });
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicXVlcnkuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvbW9uZ28vbW9kZWwvcXVlcnkudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBbUUsTUFBTSxFQUFFLFFBQVEsRUFBRSxNQUFNLDZCQUE2QixDQUFDO0FBQ2hJLE9BQU8sRUFBRSxXQUFXLEVBQUUsV0FBVyxFQUFFLE1BQU0sVUFBVSxDQUFDO0FBQ3BELE9BQU8sRUFBRSxVQUFVLEVBQXdCLE1BQU0sY0FBYyxDQUFDO0FBQ2hFLE9BQU8sRUFFTCxnQkFBZ0IsRUFDaEIsWUFBWSxFQUNaLGVBQWUsRUFDZixvQkFBb0IsRUFDcEIsbUJBQW1CLEVBQ25CLHFCQUFxQixFQUNyQixzQkFBc0IsRUFDdEIsNEJBQTRCLEVBQzVCLHFCQUFxQixFQUNyQixzQkFBc0IsRUFDdEIsNkJBQTZCLEVBQzdCLHNCQUFzQixFQUN0Qiw0QkFBNEIsRUFDNUIscUJBQXFCLEVBQ3JCLHNCQUFzQixFQUN0Qix1QkFBdUIsRUFDdkIsd0JBQXdCLEVBQ3hCLHVCQUF1QixFQUV4QixNQUFNLFdBQVcsQ0FBQztBQUNuQixPQUFPLEVBQW9CLE1BQU0sRUFBRSxNQUFNLFVBQVUsQ0FBQztBQUNwRCxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sY0FBYyxDQUFDO0FBQzlDLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxhQUFhLENBQUM7QUFLekMsSUFBSyxXQWdCSjtBQWhCRCxXQUFLLFdBQVc7SUFDZCxzQ0FBdUIsQ0FBQTtJQUN2Qiw4QkFBZSxDQUFBO0lBQ2Ysb0NBQXFCLENBQUE7SUFDckIsbUNBQW9CLENBQUE7SUFDcEIsNEJBQWEsQ0FBQTtJQUNiLHVDQUF3QixDQUFBO0lBQ3hCLHlDQUEwQixDQUFBO0lBQzFCLHVEQUF3QyxDQUFBO0lBQ3hDLHVDQUF3QixDQUFBO0lBQ3hCLHlDQUEwQixDQUFBO0lBQzFCLHlEQUEwQyxDQUFBO0lBQzFDLHlDQUEwQixDQUFBO0lBQzFC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