import { rules } from './rules';
import { Validator } from '@alicloud/mpserverless-core';
export class MongoValidator extends Validator {
    constructor(options) {
        super(options);
        for (const ruleName of Object.keys(rules)) {
            const name = ruleName.match(/ruleOf([a-zA-Z]+)/)[1];
            this.p.addRule(name[0].toLowerCase() + name.slice(1), rules[ruleName]);
        }
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvbW9uZ28vdmFsaWRhdG9yL2luZGV4LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxLQUFLLEVBQUUsTUFBTSxTQUFTLENBQUM7QUFDaEMsT0FBTyxFQUFpQixTQUFTLEVBQUUsTUFBTSw2QkFBNkIsQ0FBQztBQUd2RSxNQUFNLE9BQU8sY0FBZSxTQUFRLFNBQVM7SUFDM0MsWUFBWSxPQUE0QjtRQUN0QyxLQUFLLENBQUMsT0FBTyxDQUFDLENBQUM7UUFFZixLQUFLLE1BQU0sUUFBUSxJQUFJLE1BQU0sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLEVBQUU7WUFFekMsTUFBTSxJQUFJLEdBQUcsUUFBUSxDQUFDLEtBQUssQ0FBQyxtQkFBbUIsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQ3BELElBQUksQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxXQUFXLEVBQUUsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxFQUFFLEtBQUssQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDO1NBQ3hFO0lBQ0gsQ0FBQztDQUNGIn0=