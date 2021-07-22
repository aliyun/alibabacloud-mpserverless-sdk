(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "tslib", "@alicloud/mpserverless-core", "../codec", "./collection", "./command", "./result", "../validator", "../constant"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.QueryService = exports.Query = void 0;
    const tslib_1 = require("tslib");
    const mpserverless_core_1 = require("@alicloud/mpserverless-core");
    const codec_1 = require("../codec");
    const collection_1 = require("./collection");
    const command_1 = require("./command");
    const result_1 = require("./result");
    const validator_1 = require("../validator");
    const constant_1 = require("../constant");
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
    class Query {
        constructor() {
            this.encoder = new codec_1.JSONEncoder();
            this.decoder = new codec_1.JSONDecoder();
        }
        transaction() {
            return tslib_1.__awaiter(this, void 0, void 0, function* () {
                this.comm = new command_1.StartTransactionCommand({});
                const res = yield this.execute();
                if (res) {
                    this.transId = res.transactionId;
                }
                return this.transId;
            });
        }
        commit() {
            return tslib_1.__awaiter(this, void 0, void 0, function* () {
                this.comm = new command_1.CommitTransactionCommand({});
                return this.execute();
            });
        }
        rollback() {
            return tslib_1.__awaiter(this, void 0, void 0, function* () {
                this.comm = new command_1.AbortTransactionCommand({});
                return this.execute();
            });
        }
        collection(name) {
            this.coll = new collection_1.Collection(name);
            return this;
        }
        aggregate(pipeline, options) {
            this.validateTransactionAction(MongoAction.AGGREGATE);
            this.comm = new command_1.AggregateCommand({ pipeline, options });
            return this.execute();
        }
        count(query, options) {
            this.validateTransactionAction(MongoAction.COUNT);
            this.comm = new command_1.CountCommand({ query, options });
            return this.execute();
        }
        distinct(key, query, options) {
            this.validateTransactionAction(MongoAction.DISTINCT);
            this.comm = new command_1.DistinctCommand({ key, query, options });
            return this.execute();
        }
        findOne(query, options) {
            this.comm = new command_1.FindDocumentCommand({ query, options });
            return this.execute();
        }
        find(query, options) {
            this.validateTransactionAction(MongoAction.FIND);
            this.comm = new command_1.FindDocumentsCommand({ query, options });
            return this.execute();
        }
        insertOne(doc, options) {
            this.comm = new command_1.InsertDocumentCommand({ doc, options });
            return this.execute();
        }
        insertMany(docs, options) {
            this.validateTransactionAction(MongoAction.INSERT_MANY);
            this.comm = new command_1.InsertDocumentsCommand({ docs, options });
            return this.execute();
        }
        findOneAndUpdate(filter, update, options) {
            this.comm = new command_1.FindAndUpdateDocumentCommand({ filter, update, options });
            return this.execute();
        }
        updateOne(filter, update, options) {
            this.comm = new command_1.UpdateDocumentCommand({ filter, update, options });
            return this.execute();
        }
        updateMany(filter, update, options) {
            this.validateTransactionAction(MongoAction.UPDATE_MANY);
            this.comm = new command_1.UpdateDocumentsCommand({ filter, update, options });
            return this.execute();
        }
        findOneAndReplace(filter, replacement, options) {
            this.comm = new command_1.FindAndReplaceDocumentCommand({ filter, replacement, options });
            return this.execute();
        }
        replaceOne(filter, doc, options) {
            this.comm = new command_1.ReplaceDocumentCommand({ filter, doc, options });
            return this.execute();
        }
        findOneAndDelete(filter, options) {
            this.comm = new command_1.FindAndDeleteDocumentCommand({ filter, options });
            return this.execute();
        }
        deleteOne(filter, options) {
            this.comm = new command_1.DeleteDocumentCommand({ filter, options });
            return this.execute();
        }
        deleteMany(filter, options) {
            this.validateTransactionAction(MongoAction.DELETE_MANY);
            this.comm = new command_1.DeleteDocumentsCommand({ filter, options });
            return this.execute();
        }
        validate() {
            const v = new validator_1.MongoValidator();
            try {
                v.validate(this.comm.schema, this.encoder.encode(this.comm.argMap));
            }
            catch (err) {
                throw err;
            }
        }
        execute(..._) {
            return tslib_1.__awaiter(this, void 0, void 0, function* () {
                mpserverless_core_1.assert(this.comm, '[DBService]缺少 command 参数');
                this.validate();
                switch (this.comm.permission) {
                    case constant_1.PERMISSION.AGGREGATE:
                    case constant_1.PERMISSION.WRITE:
                    case constant_1.PERMISSION.READ:
                        mpserverless_core_1.assert(this.collection, '[DBService]缺少 collection 参数');
                        break;
                    default:
                }
                const query = Object.assign({}, this.coll && this.coll.inspect(), this.transId && { transactionId: this.transId }, this.comm.inspect());
                return this.encoder.encode(query);
            });
        }
        validateTransactionAction(action) {
            if (this.transId) {
                throw new mpserverless_core_1.bizError.TransactionError('transaction not support action [' + action + ']');
            }
        }
    }
    exports.Query = Query;
    class QueryService extends Query {
        execute() {
            const _super = Object.create(null, {
                execute: { get: () => super.execute }
            });
            return tslib_1.__awaiter(this, void 0, void 0, function* () {
                const params = yield _super.execute.call(this);
                const request = this.getEncoder()
                    .setBodyField({
                    method: 'serverless.db.default.execute',
                    params,
                });
                const response = yield this.getTransport().request(request);
                return (new result_1.Result(response.body)).inspect();
            });
        }
    }
    exports.QueryService = QueryService;
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicXVlcnkuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvbW9uZ28vbW9kZWwvcXVlcnkudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztJQUFBLG1FQUFnSTtJQUNoSSxvQ0FBb0Q7SUFDcEQsNkNBQWdFO0lBQ2hFLHVDQXFCbUI7SUFDbkIscUNBQW9EO0lBQ3BELDRDQUE4QztJQUM5QywwQ0FBeUM7SUFLekMsSUFBSyxXQWdCSjtJQWhCRCxXQUFLLFdBQVc7UUFDZCxzQ0FBdUIsQ0FBQTtRQUN2Qiw4QkFBZSxDQUFBO1FBQ2Ysb0NBQXFCLENBQUE7UUFDckIsbUNBQW9CLENBQUE7UUFDcEIsNEJBQWEsQ0FBQTtRQUNiLHVDQUF3QixDQUFBO1FBQ3hCLHlDQUEwQixDQUFBO1FBQzFCLHVEQUF3QyxDQUFBO1FBQ3hDLHVDQUF3QixDQUFBO1FBQ3hCLHlDQUEwQixDQUFBO1FBQzFCLHlEQUEwQyxDQUFBO1FBQzFDLHlDQUEwQixDQUFBO1FBQzFCLHVEQUF3QyxDQUFBO1FBQ3hDLHVDQUF3QixDQUFBO1FBQ3hCLHlDQUEwQixDQUFBO0lBQzVCLENBQUMsRUFoQkksV0FBVyxLQUFYLFdBQVcsUUFnQmY7SUFBQSxDQUFDO0lBR0YsTUFBYSxLQUFLO1FBQWxCO1lBS1ksWUFBTyxHQUFnQixJQUFJLG1CQUFXLEVBQUUsQ0FBQztZQUN6QyxZQUFPLEdBQWdCLElBQUksbUJBQVcsRUFBRSxDQUFDO1FBMFFyRCxDQUFDO1FBclFjLFdBQVc7O2dCQUN0QixJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksaUNBQXVCLENBQUMsRUFBRSxDQUFDLENBQUM7Z0JBQzVDLE1BQU0sR0FBRyxHQUFHLE1BQU0sSUFBSSxDQUFDLE9BQU8sRUFBRSxDQUFDO2dCQUNqQyxJQUFJLEdBQUcsRUFBRTtvQkFDUCxJQUFJLENBQUMsT0FBTyxHQUFHLEdBQUcsQ0FBQyxhQUFhLENBQUM7aUJBQ2xDO2dCQUNELE9BQU8sSUFBSSxDQUFDLE9B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