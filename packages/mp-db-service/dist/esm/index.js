import { __awaiter } from "tslib";
import { BaseService, } from '@alicloud/mpserverless-core';
import { Transaction, QueryService } from './mongo';
export class DbService extends BaseService {
    collection(name) {
        const q = (new QueryService()).collection(name);
        q.getEncoder = () => this.getEncoder();
        q.getTransport = () => this.transport;
        return q;
    }
    startTransaction() {
        return __awaiter(this, void 0, void 0, function* () {
            const transaction = new Transaction(this.transport, this.getEncoder());
            yield transaction.init();
            return transaction;
        });
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFDTCxXQUFXLEdBQ1osTUFBTSw2QkFBNkIsQ0FBQztBQUVyQyxPQUFPLEVBQ0wsV0FBVyxFQUNYLFlBQVksRUFDYixNQUFNLFNBQVMsQ0FBQztBQUVqQixNQUFNLE9BQU8sU0FBVSxTQUFRLFdBQVc7SUFNakMsVUFBVSxDQUFDLElBQVk7UUFDNUIsTUFBTSxDQUFDLEdBQUcsQ0FBQyxJQUFJLFlBQVksRUFBRSxDQUFDLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ2hELENBQUMsQ0FBQyxVQUFVLEdBQUcsR0FBRyxFQUFFLENBQUMsSUFBSSxDQUFDLFVBQVUsRUFBRSxDQUFDO1FBQ3ZDLENBQUMsQ0FBQyxZQUFZLEdBQUcsR0FBRyxFQUFFLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQztRQUN0QyxPQUFPLENBQUMsQ0FBQztJQUNYLENBQUM7SUFLWSxnQkFBZ0I7O1lBQzNCLE1BQU0sV0FBVyxHQUFHLElBQUksV0FBVyxDQUFDLElBQUksQ0FBQyxTQUFTLEVBQUUsSUFBSSxDQUFDLFVBQVUsRUFBRSxDQUFDLENBQUM7WUFDdkUsTUFBTSxXQUFXLENBQUMsSUFBSSxFQUFFLENBQUM7WUFDekIsT0FBTyxXQUFXLENBQUM7UUFDckIsQ0FBQztLQUFBO0NBQ0YifQ==