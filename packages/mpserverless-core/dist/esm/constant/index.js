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
    exports.PREFIX = exports.SERVERLESS_HEADER_PREFIX = exports.TransportProtocol = exports.HTTPMethod = void 0;
    var HTTPMethod;
    (function (HTTPMethod) {
        HTTPMethod["GET"] = "GET";
        HTTPMethod["DEL"] = "DELETE";
        HTTPMethod["POST"] = "POST";
    })(HTTPMethod = exports.HTTPMethod || (exports.HTTPMethod = {}));
    var TransportProtocol;
    (function (TransportProtocol) {
        TransportProtocol["HTTP"] = "HTTP";
    })(TransportProtocol = exports.TransportProtocol || (exports.TransportProtocol = {}));
    exports.SERVERLESS_HEADER_PREFIX = 'x-serverless-';
    var PREFIX;
    (function (PREFIX) {
        PREFIX["CLIENT"] = "/client";
        PREFIX["SERVER"] = "/server";
        PREFIX["ANTCLOUD"] = "/antcloud";
        PREFIX["ANTOPENANTCLOUD"] = "/antopen/antcloud";
    })(PREFIX = exports.PREFIX || (exports.PREFIX = {}));
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvY29uc3RhbnQvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0lBQUEsSUFBWSxVQUlYO0lBSkQsV0FBWSxVQUFVO1FBQ3BCLHlCQUFXLENBQUE7UUFDWCw0QkFBYyxDQUFBO1FBQ2QsMkJBQWEsQ0FBQTtJQUNmLENBQUMsRUFKVyxVQUFVLEdBQVYsa0JBQVUsS0FBVixrQkFBVSxRQUlyQjtJQUVELElBQVksaUJBRVg7SUFGRCxXQUFZLGlCQUFpQjtRQUMzQixrQ0FBYSxDQUFBO0lBQ2YsQ0FBQyxFQUZXLGlCQUFpQixHQUFqQix5QkFBaUIsS0FBakIseUJBQWlCLFFBRTVCO0lBRVksUUFBQSx3QkFBd0IsR0FBRyxlQUFlLENBQUM7SUFFeEQsSUFBWSxNQUtYO0lBTEQsV0FBWSxNQUFNO1FBQ2hCLDRCQUFrQixDQUFBO1FBQ2xCLDRCQUFrQixDQUFBO1FBQ2xCLGdDQUFzQixDQUFBO1FBQ3RCLCtDQUFxQyxDQUFBO0lBQ3ZDLENBQUMsRUFMVyxNQUFNLEdBQU4sY0FBTSxLQUFOLGNBQU0sUUFLakIifQ==