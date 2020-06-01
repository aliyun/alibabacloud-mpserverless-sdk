import { __awaiter, __extends, __generator } from "tslib";
import { BaseService, } from '@ant-basement/core';
var NetworkService = (function (_super) {
    __extends(NetworkService, _super);
    function NetworkService() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    NetworkService.prototype.forward = function (method, params) {
        return __awaiter(this, void 0, void 0, function () {
            var request, response;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        request = this.getEncoder();
                        request.setBodyField({
                            method: method,
                            params: params,
                        });
                        return [4, this.transport.request(request)];
                    case 1:
                        response = _a.sent();
                        return [2, response.body];
                }
            });
        });
    };
    return NetworkService;
}(BaseService));
export { NetworkService };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmV0d29yay5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9uZXR3b3JrLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQ0wsV0FBVyxHQUVaLE1BQU0sb0JBQW9CLENBQUM7QUFFNUI7SUFBb0Msa0NBQVc7SUFBL0M7O0lBZ0JBLENBQUM7SUFWYyxnQ0FBTyxHQUFwQixVQUFxQixNQUFjLEVBQUUsTUFBMEI7Ozs7Ozt3QkFDdkQsT0FBTyxHQUFHLElBQUksQ0FBQyxVQUFVLEVBQUUsQ0FBQzt3QkFDbEMsT0FBTyxDQUFDLFlBQVksQ0FBQzs0QkFDbkIsTUFBTSxRQUFBOzRCQUNOLE1BQU0sUUFBQTt5QkFDUCxDQUFDLENBQUM7d0JBRWMsV0FBTSxJQUFJLENBQUMsU0FBUyxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsRUFBQTs7d0JBQWhELFFBQVEsR0FBRyxTQUFxQzt3QkFDdEQsV0FBTyxRQUFRLENBQUMsSUFBSSxFQUFDOzs7O0tBQ3RCO0lBQ0gscUJBQUM7QUFBRCxDQUFDLEFBaEJELENBQW9DLFdBQVcsR0FnQjlDIn0=