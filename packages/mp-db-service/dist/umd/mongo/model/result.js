(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "../codec"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.Result = void 0;
    const codec_1 = require("../codec");
    class Result {
        constructor(data) {
            this.encoder = new codec_1.JSONEncoder();
            this.decoder = new codec_1.JSONDecoder();
            this.raw = this.decoder.decode(data);
        }
        inspect() {
            return this.raw;
        }
    }
    exports.Result = Result;
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVzdWx0LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vc3JjL21vbmdvL21vZGVsL3Jlc3VsdC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7SUFBQSxvQ0FBb0Q7SUFRcEQsTUFBYSxNQUFNO1FBS2pCLFlBQVksSUFBc0I7WUFIeEIsWUFBTyxHQUFnQixJQUFJLG1CQUFXLEVBQUUsQ0FBQztZQUN6QyxZQUFPLEdBQWdCLElBQUksbUJBQVcsRUFBRSxDQUFDO1lBR2pELElBQUksQ0FBQyxHQUFHLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDdkMsQ0FBQztRQU1NLE9BQU87WUFDWixPQUFPLElBQUksQ0FBQyxHQUFHLENBQUM7UUFDbEIsQ0FBQztLQUNGO0lBaEJELHdCQWdCQyJ9