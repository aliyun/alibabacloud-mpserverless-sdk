(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "tslib", "@alicloud/mpserverless-core", "./mongo"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.DbService = void 0;
    const tslib_1 = require("tslib");
    const mpserverless_core_1 = require("@alicloud/mpserverless-core");
    const mongo_1 = require("./mongo");
    class DbService extends mpserverless_core_1.BaseService {
        collection(name) {
            const q = (new mongo_1.QueryService()).collection(name);
            q.getEncoder = () => this.getEncoder();
            q.getTransport = () => this.transport;
            return q;
        }
        startTransaction() {
            return tslib_1.__awaiter(this, void 0, void 0, function* () {
                const transaction = new mongo_1.Transaction(this.transport, this.getEncoder());
                yield transaction.init();
                return transaction;
            });
        }
    }
    exports.DbService = DbService;
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztJQUFBLG1FQUVxQztJQUVyQyxtQ0FHaUI7SUFFakIsTUFBYSxTQUFVLFNBQVEsK0JBQVc7UUFNakMsVUFBVSxDQUFDLElBQVk7WUFDNUIsTUFBTSxDQUFDLEdBQUcsQ0FBQyxJQUFJLG9CQUFZLEVBQUUsQ0FBQyxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsQ0FBQztZQUNoRCxDQUFDLENBQUMsVUFBVSxHQUFHLEdBQUcsRUFBRSxDQUFDLElBQUksQ0FBQyxVQUFVLEVBQUUsQ0FBQztZQUN2QyxDQUFDLENBQUMsWUFBWSxHQUFHLEdBQUcsRUFBRSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUM7WUFDdEMsT0FBTyxDQUFDLENBQUM7UUFDWCxDQUFDO1FBS1ksZ0JBQWdCOztnQkFDM0IsTUFBTSxXQUFXLEdBQUcsSUFBSSxtQkFBVyxDQUFDLElBQUksQ0FBQyxTQUFTLEVBQUUsSUFBSSxDQUFDLFVBQVUsRUFBRSxDQUFDLENBQUM7Z0JBQ3ZFLE1BQU0sV0FBVyxDQUFDLElBQUksRUFBRSxDQUFDO2dCQUN6QixPQUFPLFdBQVcsQ0FBQztZQUNyQixDQUFDO1NBQUE7S0FDRjtJQXJCRCw4QkFxQkMifQ==