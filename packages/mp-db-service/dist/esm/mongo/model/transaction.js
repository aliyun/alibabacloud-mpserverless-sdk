import { __awaiter } from "tslib";
import { bizError, } from '@alicloud/mpserverless-core';
import { QueryService } from './query';
export var TransactionStatus;
(function (TransactionStatus) {
    TransactionStatus["INIT"] = "init";
    TransactionStatus["COMMIT"] = "commit";
    TransactionStatus["ROLLBACK"] = "rollback";
})(TransactionStatus || (TransactionStatus = {}));
export class Transaction {
    constructor(httpTransport, httpRequestEncoder) {
        this.status = TransactionStatus.INIT;
        this.httpTransport = httpTransport;
        this.httpRequestEncoder = httpRequestEncoder;
        this.queryService = new QueryService();
        this.queryService.getEncoder = () => this.httpRequestEncoder;
        this.queryService.getTransport = () => this.httpTransport;
    }
    init() {
        return __awaiter(this, void 0, void 0, function* () {
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
        return __awaiter(this, void 0, void 0, function* () {
            this.checkStatus();
            this.status = TransactionStatus.COMMIT;
            return this.queryService.commit();
        });
    }
    rollback() {
        return __awaiter(this, void 0, void 0, function* () {
            this.checkStatus();
            this.status = TransactionStatus.ROLLBACK;
            return this.queryService.rollback();
        });
    }
    checkStatus() {
        if (this.status === TransactionStatus.COMMIT ||
            this.status === TransactionStatus.ROLLBACK) {
            throw new bizError.TransactionError('transaction already ' + this.status);
        }
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHJhbnNhY3Rpb24uanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvbW9uZ28vbW9kZWwvdHJhbnNhY3Rpb24udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFHTCxRQUFRLEdBQ1QsTUFBTSw2QkFBNkIsQ0FBQztBQUVyQyxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sU0FBUyxDQUFDO0FBVXZDLE1BQU0sQ0FBTixJQUFZLGlCQUlYO0FBSkQsV0FBWSxpQkFBaUI7SUFDM0Isa0NBQWEsQ0FBQTtJQUNiLHNDQUFpQixDQUFBO0lBQ2pCLDBDQUFxQixDQUFBO0FBQ3ZCLENBQUMsRUFKVyxpQkFBaUIsS0FBakIsaUJBQWlCLFFBSTVCO0FBRUQsTUFBTSxPQUFPLFdBQVc7SUFPdEIsWUFBWSxhQUE0QixFQUFFLGtCQUFzQztRQUM5RSxJQUFJLENBQUMsTUFBTSxHQUFHLGlCQUFpQixDQUFDLElBQUksQ0FBQztRQUNyQyxJQUFJLENBQUMsYUFBYSxHQUFHLGFBQWEsQ0FBQztRQUNuQyxJQUFJLENBQUMsa0JBQWtCLEdBQUcsa0JBQWtCLENBQUM7UUFDN0MsSUFBSSxDQUFDLFlBQVksR0FBRyxJQUFJLFlBQVksRUFBRSxDQUFDO1FBQ3ZDLElBQUksQ0FBQyxZQUFZLENBQUMsVUFBVSxHQUFHLEdBQUcsRUFBRSxDQUFDLElBQUksQ0FBQyxrQkFBa0IsQ0FBQztRQUM3RCxJQUFJLENBQUMsWUFBWSxDQUFDLFlBQVksR0FBRyxHQUFHLEVBQUUsQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDO0lBQzVELENBQUM7SUFFWSxJQUFJOztZQUNmLElBQUksQ0FBQyxFQUFFLEdBQUcsTUFBTSxJQUFJLENBQUMsWUFBWSxDQUFDLFdBQVcsRUFBRSxDQUFDO1FBQ2xELENBQUM7S0FBQTtJQUVNLFVBQVUsQ0FBQyxJQUFZO1FBQzVCLElBQUksSUFBSSxDQUFDLFlBQVksRUFBRTtZQUNyQixJQUFJLENBQUMsWUFBWSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsQ0FBQztTQUNwQztRQUNELE9BQU8sSUFBSSxDQUFDLFlBQVksQ0FBQztJQUMzQixDQUFDO0lBS1ksTUFBTTs7WUFDakIsSUFBSSxDQUFDLFdBQVcsRUFBRSxDQUFDO1lBQ25CLElBQUksQ0FBQyxNQUFNLEdBQUcsaUJBQWlCLENBQUMsTUFBTSxDQUFDO1lBQ3ZDLE9BQU8sSUFBSSxDQUFDLFlBQVksQ0FBQyxNQUFNLEVBQUUsQ0FBQztRQUNwQyxDQUFDO0tBQUE7SUFLWSxRQUFROztZQUNuQixJQUFJLENBQUMsV0FBVyxFQUFFLENBQUM7WUFDbkIsSUFBSSxDQUFDLE1BQU0sR0FBRyxpQkFBaUIsQ0FBQyxRQUFRLENBQUM7WUFDekMsT0FBTyxJQUFJLENBQUMsWUFBWSxDQUFDLFFBQVEsRUFBRSxDQUFDO1FBQ3RDLENBQUM7S0FBQTtJQU1PLFdBQVc7UUFDakIsSUFBSSxJQUFJLENBQUMsTUFBTSxLQUFLLGlCQUFpQixDQUFDLE1BQU07WUFDeEMsSUFBSSxDQUFDLE1BQU0sS0FBSyxpQkFBaUIsQ0FBQyxRQUFRLEVBQUU7WUFDMUMsTUFBTSxJQUFJLFFBQVEsQ0FBQyxnQkFBZ0IsQ0FBQyxzQkFBc0IsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7U0FDL0U7SUFDSCxDQUFDO0NBQ0YifQ==