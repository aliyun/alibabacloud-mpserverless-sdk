(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "tslib", "./query", "../error"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.Transaction = exports.TransactionStatus = void 0;
    const tslib_1 = require("tslib");
    const query_1 = require("./query");
    const error_1 = require("../error");
    var TransactionStatus;
    (function (TransactionStatus) {
        TransactionStatus["INIT"] = "init";
        TransactionStatus["COMMIT"] = "commit";
        TransactionStatus["ROLLBACK"] = "rollback";
    })(TransactionStatus = exports.TransactionStatus || (exports.TransactionStatus = {}));
    class Transaction {
        constructor(httpTransport, httpRequestEncoder) {
            this.status = TransactionStatus.INIT;
            this.httpTransport = httpTransport;
            this.httpRequestEncoder = httpRequestEncoder;
            this.queryService = new query_1.QueryService();
            this.queryService.getEncoder = () => this.httpRequestEncoder;
            this.queryService.getTransport = () => this.httpTransport;
        }
        init() {
            return tslib_1.__awaiter(this, void 0, void 0, function* () {
                this.id = yield this.queryService.transaction();
            });
        }
        collection(name) {
            if (this.queryService) {
                this.queryService.collection(name);
            }
            return this.queryService;
        }
        commit() {
            return tslib_1.__awaiter(this, void 0, void 0, function* () {
                this.checkStatus();
                this.status = TransactionStatus.COMMIT;
                return this.queryService.commit();
            });
        }
        rollback() {
            return tslib_1.__awaiter(this, void 0, void 0, function* () {
                this.checkStatus();
                this.status = TransactionStatus.ROLLBACK;
                return this.queryService.rollback();
            });
        }
        checkStatus() {
            if (this.status === TransactionStatus.COMMIT ||
                this.status === TransactionStatus.ROLLBACK) {
                throw new error_1.bizError.TransactionError('transaction already ' + this.status);
            }
        }
    }
    exports.Transaction = Transaction;
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHJhbnNhY3Rpb24uanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvbW9uZ28vbW9kZWwvdHJhbnNhY3Rpb24udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztJQUtBLG1DQUF1QztJQUN2QyxvQ0FBb0M7SUFTcEMsSUFBWSxpQkFJWDtJQUpELFdBQVksaUJBQWlCO1FBQzNCLGtDQUFhLENBQUE7UUFDYixzQ0FBaUIsQ0FBQTtRQUNqQiwwQ0FBcUIsQ0FBQTtJQUN2QixDQUFDLEVBSlcsaUJBQWlCLEdBQWpCLHlCQUFpQixLQUFqQix5QkFBaUIsUUFJNUI7SUFFRCxNQUFhLFdBQVc7UUFPdEIsWUFBWSxhQUE0QixFQUFFLGtCQUFzQztZQUM5RSxJQUFJLENBQUMsTUFBTSxHQUFHLGlCQUFpQixDQUFDLElBQUksQ0FBQztZQUNyQyxJQUFJLENBQUMsYUFBYSxHQUFHLGFBQWEsQ0FBQztZQUNuQyxJQUFJLENBQUMsa0JBQWtCLEdBQUcsa0JBQWtCLENBQUM7WUFDN0MsSUFBSSxDQUFDLFlBQVksR0FBRyxJQUFJLG9CQUFZLEVBQUUsQ0FBQztZQUN2QyxJQUFJLENBQUMsWUFBWSxDQUFDLFVBQVUsR0FBRyxHQUFHLEVBQUUsQ0FBQyxJQUFJLENBQUMsa0JBQWtCLENBQUM7WUFDN0QsSUFBSSxDQUFDLFlBQVksQ0FBQyxZQUFZLEdBQUcsR0FBRyxFQUFFLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQztRQUM1RCxDQUFDO1FBRVksSUFBSTs7Z0JBQ2YsSUFBSSxDQUFDLEVBQUUsR0FBRyxNQUFNLElBQUksQ0FBQyxZQUFZLENBQUMsV0FBVyxFQUFFLENBQUM7WUFDbEQsQ0FBQztTQUFBO1FBRU0sVUFBVSxDQUFDLElBQVk7WUFDNUIsSUFBSSxJQUFJLENBQUMsWUFBWSxFQUFFO2dCQUNyQixJQUFJLENBQUMsWUFBWSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsQ0FBQzthQUNwQztZQUNELE9BQU8sSUFBSSxDQUFDLFlBQVksQ0FBQztRQUMzQixDQUFDO1FBS1ksTUFBTTs7Z0JBQ2pCLElBQUksQ0FBQyxXQUFXLEVBQUUsQ0FBQztnQkFDbkIsSUFBSSxDQUFDLE1BQU0sR0FBRyxpQkFBaUIsQ0FBQyxNQUFNLENBQUM7Z0JBQ3ZDLE9BQU8sSUFBSSxDQUFDLFlBQVksQ0FBQyxNQUFNLEVBQUUsQ0FBQztZQUNwQyxDQUFDO1NBQUE7UUFLWSxRQUFROztnQkFDbkIsSUFBSSxDQUFDLFdBQVcsRUFBRSxDQUFDO2dCQUNuQixJQUFJLENBQUMsTUFBTSxHQUFHLGlCQUFpQixDQUFDLFFBQVEsQ0FBQztnQkFDekMsT0FBTyxJQUFJLENBQUMsWUFBWSxDQUFDLFFBQVEsRUFBRSxDQUFDO1lBQ3RDLENBQUM7U0FBQTtRQU1PLFdBQVc7WUFDakIsSUFBSSxJQUFJLENBQUMsTUFBTSxLQUFLLGlCQUFpQixDQUFDLE1BQU07Z0JBQ3hDLElBQUksQ0FBQyxNQUFNLEtBQUssaUJBQWlCLENBQUMsUUFBUSxFQUFFO2dCQUMxQyxNQUFNLElBQUksZ0JBQVEsQ0FBQyxnQkFBZ0IsQ0FBQyxzQkFBc0IsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7YUFDL0U7UUFDSCxDQUFDO0tBQ0Y7SUF2REQsa0NBdURDIn0=