(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.BaseService = void 0;
    class BaseService {
        constructor(transport) {
            this.transport = transport;
        }
        getEncoder(prefix) {
            return this.transport.getEncoder(prefix);
        }
    }
    exports.BaseService = BaseService;
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvc2VydmljZS9pbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7SUFJQSxNQUFhLFdBQVc7UUFDdEIsWUFDWSxTQUF3QjtZQUF4QixjQUFTLEdBQVQsU0FBUyxDQUFlO1FBQ2pDLENBQUM7UUFFTSxVQUFVLENBQUMsTUFBZTtZQUNsQyxPQUFPLElBQUksQ0FBQyxTQUFTLENBQUMsVUFBVSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQzNDLENBQUM7S0FDRjtJQVJELGtDQVFDIn0=