import { __awaiter } from "tslib";
import { QueryService } from './query';
import { bizError } from '../error';
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHJhbnNhY3Rpb24uanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvbW9uZ28vbW9kZWwvdHJhbnNhY3Rpb24udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUtBLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxTQUFTLENBQUM7QUFDdkMsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLFVBQVUsQ0FBQztBQVNwQyxNQUFNLENBQU4sSUFBWSxpQkFJWDtBQUpELFdBQVksaUJBQWlCO0lBQzNCLGtDQUFhLENBQUE7SUFDYixzQ0FBaUIsQ0FBQTtJQUNqQiwwQ0FBcUIsQ0FBQTtBQUN2QixDQUFDLEVBSlcsaUJBQWlCLEtBQWpCLGlCQUFpQixRQUk1QjtBQUVELE1BQU0sT0FBTyxXQUFXO0lBT3RCLFlBQVksYUFBNEIsRUFBRSxrQkFBc0M7UUFDOUUsSUFBSSxDQUFDLE1BQU0sR0FBRyxpQkFBaUIsQ0FBQyxJQUFJLENBQUM7UUFDckMsSUFBSSxDQUFDLGFBQWEsR0FBRyxhQUFhLENBQUM7UUFDbkMsSUFBSSxDQUFDLGtCQUFrQixHQUFHLGtCQUFrQixDQUFDO1FBQzdDLElBQUksQ0FBQyxZQUFZLEdBQUcsSUFBSSxZQUFZLEVBQUUsQ0FBQztRQUN2QyxJQUFJLENBQUMsWUFBWSxDQUFDLFVBQVUsR0FBRyxHQUFHLEVBQUUsQ0FBQyxJQUFJLENBQUMsa0JBQWtCLENBQUM7UUFDN0QsSUFBSSxDQUFDLFlBQVksQ0FBQyxZQUFZLEdBQUcsR0FBRyxFQUFFLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQztJQUM1RCxDQUFDO0lBRVksSUFBSTs7WUFDZixJQUFJLENBQUMsRUFBRSxHQUFHLE1BQU0sSUFBSSxDQUFDLFlBQVksQ0FBQyxXQUFXLEVBQUUsQ0FBQztRQUNsRCxDQUFDO0tBQUE7SUFFTSxVQUFVLENBQUMsSUFBWTtRQUM1QixJQUFJLElBQUksQ0FBQyxZQUFZLEVBQUU7WUFDckIsSUFBSSxDQUFDLFlBQVksQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLENBQUM7U0FDcEM7UUFDRCxPQUFPLElBQUksQ0FBQyxZQUFZLENBQUM7SUFDM0IsQ0FBQztJQUtZLE1BQU07O1lBQ2pCLElBQUksQ0FBQyxXQUFXLEVBQUUsQ0FBQztZQUNuQixJQUFJLENBQUMsTUFBTSxHQUFHLGlCQUFpQixDQUFDLE1BQU0sQ0FBQztZQUN2QyxPQUFPLElBQUksQ0FBQyxZQUFZLENBQUMsTUFBTSxFQUFFLENBQUM7UUFDcEMsQ0FBQztLQUFBO0lBS1ksUUFBUTs7WUFDbkIsSUFBSSxDQUFDLFdBQVcsRUFBRSxDQUFDO1lBQ25CLElBQUksQ0FBQyxNQUFNLEdBQUcsaUJBQWlCLENBQUMsUUFBUSxDQUFDO1lBQ3pDLE9BQU8sSUFBSSxDQUFDLFlBQVksQ0FBQyxRQUFRLEVBQUUsQ0FBQztRQUN0QyxDQUFDO0tBQUE7SUFNTyxXQUFXO1FBQ2pCLElBQUksSUFBSSxDQUFDLE1BQU0sS0FBSyxpQkFBaUIsQ0FBQyxNQUFNO1lBQ3hDLElBQUksQ0FBQyxNQUFNLEtBQUssaUJBQWlCLENBQUMsUUFBUSxFQUFFO1lBQzFDLE1BQU0sSUFBSSxRQUFRLENBQUMsZ0JBQWdCLENBQUMsc0JBQXNCLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1NBQy9FO0lBQ0gsQ0FBQztDQUNGIn0=