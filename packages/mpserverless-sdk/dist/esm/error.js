import { __extends } from "tslib";
import { BuiltInError } from '@ant-basement/core';
var MPServerlessClientError = (function (_super) {
    __extends(MPServerlessClientError, _super);
    function MPServerlessClientError(name, code, type, message) {
        var _this = _super.call(this, message) || this;
        _this.name = name;
        _this.code = code;
        _this.type = type;
        _this.message = message;
        return _this;
    }
    MPServerlessClientError.from = function (raw) {
        return new MPServerlessClientError(raw.name, raw.code, raw.type, raw.message);
    };
    return MPServerlessClientError;
}(BuiltInError));
export { MPServerlessClientError };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXJyb3IuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvZXJyb3IudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxZQUFZLEVBQW1CLE1BQU0sb0JBQW9CLENBQUM7QUFFbkU7SUFBNkMsMkNBQVk7SUFDdkQsaUNBQ1MsSUFBWSxFQUNaLElBQVksRUFDWixJQUFZLEVBQ1osT0FBZTtRQUp4QixZQU1FLGtCQUFNLE9BQU8sQ0FBQyxTQUNmO1FBTlEsVUFBSSxHQUFKLElBQUksQ0FBUTtRQUNaLFVBQUksR0FBSixJQUFJLENBQVE7UUFDWixVQUFJLEdBQUosSUFBSSxDQUFRO1FBQ1osYUFBTyxHQUFQLE9BQU8sQ0FBUTs7SUFHeEIsQ0FBQztJQU9hLDRCQUFJLEdBQWxCLFVBQW1CLEdBQW9CO1FBQ3JDLE9BQU8sSUFBSSx1QkFBdUIsQ0FDaEMsR0FBRyxDQUFDLElBQUksRUFDUixHQUFHLENBQUMsSUFBSSxFQUNSLEdBQUcsQ0FBQyxJQUFJLEVBQ1IsR0FBRyxDQUFDLE9BQU8sQ0FDWixDQUFDO0lBQ0osQ0FBQztJQUNILDhCQUFDO0FBQUQsQ0FBQyxBQXZCRCxDQUE2QyxZQUFZLEdBdUJ4RCJ9