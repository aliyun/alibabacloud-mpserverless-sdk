import { __awaiter } from "tslib";
import { BaseService, bizError, } from '@alicloud/mpserverless-core';
import { FunctionValidator, invokeSchema } from './validator';
export class FunctionService extends BaseService {
    invoke(functionTarget, functionArgs = {}) {
        return __awaiter(this, void 0, void 0, function* () {
            this.validate(invokeSchema, { functionTarget });
            if ((typeof functionArgs === 'number' && isNaN(functionArgs)) || typeof functionArgs === 'undefined' || functionArgs === null) {
                throw new bizError.ValidationError();
            }
            const encoder = this.getEncoder();
            encoder.setBodyField({
                method: 'serverless.function.runtime.invoke',
                params: {
                    functionTarget,
                    functionArgs,
                },
            });
            const response = yield this.transport.request(encoder);
            return Object.assign(Object.assign({}, response.body), { requestId: response.headers['request-id'] });
        });
    }
    validate(schema, values) {
        const v = new FunctionValidator();
        try {
            v.validate(schema, values);
        }
        catch (err) {
            throw err;
        }
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFDTCxXQUFXLEVBQ1gsUUFBUSxHQUNULE1BQU0sNkJBQTZCLENBQUM7QUFDckMsT0FBTyxFQUFFLGlCQUFpQixFQUFFLFlBQVksRUFBRSxNQUFNLGFBQWEsQ0FBQztBQUU5RCxNQUFNLE9BQU8sZUFBZ0IsU0FBUSxXQUFXO0lBTWpDLE1BQU0sQ0FBQyxjQUFzQixFQUFFLGVBQW9CLEVBQUU7O1lBQ2hFLElBQUksQ0FBQyxRQUFRLENBQUMsWUFBWSxFQUFFLEVBQUUsY0FBYyxFQUFFLENBQUMsQ0FBQztZQUNoRCxJQUFJLENBQUMsT0FBTyxZQUFZLEtBQUssUUFBUSxJQUFJLEtBQUssQ0FBQyxZQUFZLENBQUMsQ0FBQyxJQUFJLE9BQU8sWUFBWSxLQUFLLFdBQVcsSUFBSSxZQUFZLEtBQUssSUFBSSxFQUFFO2dCQUM3SCxNQUFNLElBQUksUUFBUSxDQUFDLGVBQWUsRUFBRSxDQUFDO2FBQ3RDO1lBQ0QsTUFBTSxPQUFPLEdBQUcsSUFBSSxDQUFDLFVBQVUsRUFBRSxDQUFDO1lBQ2xDLE9BQU8sQ0FBQyxZQUFZLENBQUM7Z0JBQ25CLE1BQU0sRUFBRSxvQ0FBb0M7Z0JBQzVDLE1BQU0sRUFBRTtvQkFDTixjQUFjO29CQUNkLFlBQVk7aUJBQ2I7YUFDRixDQUFDLENBQUM7WUFFSCxNQUFNLFFBQVEsR0FBRyxNQUFNLElBQUksQ0FBQyxTQUFTLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxDQUFDO1lBQ3ZELHVDQUFZLFFBQVEsQ0FBQyxJQUFJLEtBQUUsU0FBUyxFQUFFLFFBQVEsQ0FBQyxPQUFPLENBQUMsWUFBWSxDQUFDLElBQUc7UUFDekUsQ0FBQztLQUFBO0lBRU8sUUFBUSxDQUFDLE1BQWMsRUFBRSxNQUFXO1FBQzFDLE1BQU0sQ0FBQyxHQUFHLElBQUksaUJBQWlCLEVBQUUsQ0FBQztRQUVsQyxJQUFJO1lBQ0YsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxNQUFNLEVBQUUsTUFBTSxDQUFDLENBQUM7U0FDNUI7UUFBQyxPQUFPLEdBQUcsRUFBRTtZQUNaLE1BQU0sR0FBRyxDQUFDO1NBQ1g7SUFDSCxDQUFDO0NBQ0YifQ==