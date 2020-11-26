(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "tslib", "@alicloud/mpserverless-core", "../codec", "./collection", "./command", "./result", "../validator", "../constant", "../error"], factory);
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
    const error_1 = require("../error");
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
                throw new error_1.bizError.TransactionError('transaction not support action [' + action + ']');
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicXVlcnkuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvbW9uZ28vbW9kZWwvcXVlcnkudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztJQUFBLG1FQUF3SDtJQUN4SCxvQ0FBb0Q7SUFDcEQsNkNBQWdFO0lBQ2hFLHVDQXFCbUI7SUFDbkIscUNBQW9EO0lBQ3BELDRDQUE4QztJQUM5QywwQ0FBeUM7SUFDekMsb0NBQW9DO0lBSXBDLElBQUssV0FnQko7SUFoQkQsV0FBSyxXQUFXO1FBQ2Qsc0NBQXVCLENBQUE7UUFDdkIsOEJBQWUsQ0FBQTtRQUNmLG9DQUFxQixDQUFBO1FBQ3JCLG1DQUFvQixDQUFBO1FBQ3BCLDRCQUFhLENBQUE7UUFDYix1Q0FBd0IsQ0FBQTtRQUN4Qix5Q0FBMEIsQ0FBQTtRQUMxQix1REFBd0MsQ0FBQTtRQUN4Qyx1Q0FBd0IsQ0FBQTtRQUN4Qix5Q0FBMEIsQ0FBQTtRQUMxQix5REFBMEMsQ0FBQTtRQUMxQyx5Q0FBMEIsQ0FBQTtRQUMxQix1REFBd0MsQ0FBQTtRQUN4Qyx1Q0FBd0IsQ0FBQTtRQUN4Qix5Q0FBMEIsQ0FBQTtJQUM1QixDQUFDLEVBaEJJLFdBQVcsS0FBWCxXQUFXLFFBZ0JmO0lBQUEsQ0FBQztJQUdGLE1BQWEsS0FBSztRQUFsQjtZQUtZLFlBQU8sR0FBZ0IsSUFBSSxtQkFBVyxFQUFFLENBQUM7WUFDekMsWUFBTyxHQUFnQixJQUFJLG1CQUFXLEVBQUUsQ0FBQztRQTBRckQsQ0FBQztRQXJRYyxXQUFXOztnQkFDdEIsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLGlDQUF1QixDQUFDLEVBQUUsQ0FBQyxDQUFDO2dCQUM1QyxNQUFNLEdBQUcsR0FBRyxNQUFNLElBQUksQ0FBQyxPQUFPLEVBQUUsQ0FBQztnQkFDakMsSUFBSSxHQUFHLEVBQUU7b0JBQ1AsSUFBSSxDQUFDLE9BQU8sR0FBRyxHQUFHLENBQUMsYUFBYSxDQUFDO2lCQUNsQztnQkFDRCxPQUFP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