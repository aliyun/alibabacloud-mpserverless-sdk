import { __awaiter } from "tslib";
import { assert } from '@alicloud/mpserverless-core';
import { JSONEncoder, JSONDecoder } from '../codec';
import { Collection } from './collection';
import { AggregateCommand, CountCommand, DistinctCommand, FindDocumentsCommand, FindDocumentCommand, InsertDocumentCommand, InsertDocumentsCommand, FindAndUpdateDocumentCommand, UpdateDocumentCommand, UpdateDocumentsCommand, FindAndReplaceDocumentCommand, ReplaceDocumentCommand, FindAndDeleteDocumentCommand, DeleteDocumentCommand, DeleteDocumentsCommand, StartTransactionCommand, CommitTransactionCommand, AbortTransactionCommand } from './command';
import { Result } from './result';
import { MongoValidator } from '../validator';
import { PERMISSION } from '../constant';
import { bizError } from '../error';
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicXVlcnkuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvbW9uZ28vbW9kZWwvcXVlcnkudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBcUUsTUFBTSxFQUFFLE1BQU0sNkJBQTZCLENBQUM7QUFDeEgsT0FBTyxFQUFFLFdBQVcsRUFBRSxXQUFXLEVBQUUsTUFBTSxVQUFVLENBQUM7QUFDcEQsT0FBTyxFQUFFLFVBQVUsRUFBd0IsTUFBTSxjQUFjLENBQUM7QUFDaEUsT0FBTyxFQUVMLGdCQUFnQixFQUNoQixZQUFZLEVBQ1osZUFBZSxFQUNmLG9CQUFvQixFQUNwQixtQkFBbUIsRUFDbkIscUJBQXFCLEVBQ3JCLHNCQUFzQixFQUN0Qiw0QkFBNEIsRUFDNUIscUJBQXFCLEVBQ3JCLHNCQUFzQixFQUN0Qiw2QkFBNkIsRUFDN0Isc0JBQXNCLEVBQ3RCLDRCQUE0QixFQUM1QixxQkFBcUIsRUFDckIsc0JBQXNCLEVBQ3RCLHVCQUF1QixFQUN2Qix3QkFBd0IsRUFDeEIsdUJBQXVCLEVBRXhCLE1BQU0sV0FBVyxDQUFDO0FBQ25CLE9BQU8sRUFBb0IsTUFBTSxFQUFFLE1BQU0sVUFBVSxDQUFDO0FBQ3BELE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSxjQUFjLENBQUM7QUFDOUMsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGFBQWEsQ0FBQztBQUN6QyxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sVUFBVSxDQUFDO0FBSXBDLElBQUssV0FnQko7QUFoQkQsV0FBSyxXQUFXO0lBQ2Qsc0NBQXVCLENBQUE7SUFDdkIsOEJBQWUsQ0FBQTtJQUNmLG9DQUFxQixDQUFBO0lBQ3JCLG1DQUFvQixDQUFBO0lBQ3BCLDRCQUFhLENBQUE7SUFDYix1Q0FBd0IsQ0FBQTtJQUN4Qix5Q0FBMEIsQ0FBQTtJQUMxQix1REFBd0MsQ0FBQTtJQUN4Qyx1Q0FBd0IsQ0FBQTtJQUN4Qix5Q0FBMEIsQ0FBQTtJQUMxQix5REFB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