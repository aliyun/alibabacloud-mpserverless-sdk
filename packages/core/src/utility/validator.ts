import Parameter from 'parameter';
import { rules } from './rules';
import { BasementClientError } from '../error';
import { GenericObject } from '../global';
import { ErrorName, ErrorType, ErrorCode } from '../constant';

export class Validator {
  protected p: Parameter;
  constructor(options?: GenericObject<any>) {
    this.p = new Parameter(options);

    for (const ruleName of Object.keys(rules)) {
      // 名字都是内部变量，不进行严格验证
      const name = ruleName.match(/ruleOf([a-zA-Z]+)/)[1];
      this.p.addRule(name[0].toLowerCase() + name.slice(1), rules[ruleName]);
    }
  }

  /**
   * 校验
   * @param  {any} rules
   * @param  {any} obj
   * @returns string
   */
  public validate(rules: any, obj: any): string {
    // allow user to test single value, e.g. validate('string', 'hello');
    if (typeof obj !== 'object' && typeof rules === 'string') {
      obj = { field: obj };
      rules = { field: rules };
    }

    const message = this.p.validate(rules, obj);
    if (!message) {
      return null;
    }

    // parameter always return array
    const result = message.map(mistake => {
      if (mistake.field) {
        let target = JSON.parse(JSON.stringify(obj));
        const fields = mistake.field.match(/[^\.\[\]]+/g);

        while (fields.length) {
          const field = fields.shift();
          if (!target.hasOwnProperty(field)) {
            break;
          }

          target = target[field];
        }

        mistake.value = target;
      }

      return mistake;
    });

    function getMessage(result): string {
      if (Array.isArray(result)) {
        return result.map(getMessage).join('; ');
      }

      return `${result.field} ${result.message}`;
    }

    throw new BasementClientError(
      ErrorName.VALIDATION_ERROR,
      ErrorCode.VALIDATION_FAILED,
      ErrorType.COMMON_ERROR,
      getMessage(result),
    );
  }
}
