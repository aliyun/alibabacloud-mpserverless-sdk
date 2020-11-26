import { BaseEncoder, BaseDecoder } from '@alicloud/mpserverless-core';
const REGEXP_FLAGS = ['i', 'm', 'u', 'g'];
export function _isByProto(val, type) {
    return Object.prototype.toString.call(val) === `[object ${type}]`;
}
export function isArray(val) {
    return Array.isArray(val);
}
export function isObject(val) {
    return val !== null && typeof val === 'object' && !isArray(val);
}
export function isString(val) {
    return typeof val === 'string' || _isByProto(val, 'String');
}
export class JSONEncoder extends BaseEncoder {
    encode(data) {
        if (data instanceof RegExp) {
            return this.toRegexp(data);
        }
        if (data instanceof Date) {
            return this.toDate(data);
        }
        if (isArray(data)) {
            return data.map(d => this.encode(d));
        }
        if (isObject(data)) {
            return Object.keys(data).reduce((accu, k) => {
                accu[k] = this.encode(data[k]);
                return accu;
            }, {});
        }
        return data;
    }
    toDate(val) {
        return val.toISOString();
    }
    toRegexp(val) {
        return `/${val.source.replace(/\\\//g, '/')}/${val.flags}`;
    }
}
export class JSONDecoder extends BaseDecoder {
    decode(data) {
        if (this.isDate(data)) {
            return this.toDate(data);
        }
        if (isArray(data)) {
            return data.map(d => this.decode(d));
        }
        if (isObject(data)) {
            return Object.keys(data).reduce((accu, k) => {
                accu[k] = this.decode(data[k]);
                return accu;
            }, {});
        }
        return data;
    }
    isDate(val) {
        return isString(val) && /^\d{4}\-\d{2}\-\d{2}T\d{2}:\d{2}:\d{2}\.\d{3}Z$/.test(val) && !isNaN(Date.parse(val));
    }
    isRegexp(val) {
        if (isString(val)) {
            let areFlagsValid = true;
            const parts = val.split('/');
            const last = parts[parts.length - 1];
            if (last) {
                areFlagsValid = last.split('').reduce((expr, p) => {
                    return expr === true && REGEXP_FLAGS.indexOf(p) > -1;
                }, true);
            }
            return parts.length >= 2 && areFlagsValid;
        }
        return false;
    }
    toDate(val) {
        return new Date(val);
    }
    toRegexp(val) {
        const firstIndex = val.indexOf('/');
        const lastIndex = val.lastIndexOf('/');
        return new RegExp(val.slice(firstIndex + 1, lastIndex), val.slice(lastIndex + 1));
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvbW9uZ28vY29kZWMvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFdBQVcsRUFBRSxXQUFXLEVBQWdDLE1BQU0sNkJBQTZCLENBQUM7QUFNckcsTUFBTSxZQUFZLEdBQUcsQ0FBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLENBQUUsQ0FBQztBQVE1QyxNQUFNLFVBQVUsVUFBVSxDQUFDLEdBQUcsRUFBRSxJQUFJO0lBQ2xDLE9BQU8sTUFBTSxDQUFDLFNBQVMsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxLQUFLLFdBQVcsSUFBSSxHQUFHLENBQUM7QUFDcEUsQ0FBQztBQU9ELE1BQU0sVUFBVSxPQUFPLENBQUMsR0FBRztJQUN6QixPQUFPLEtBQUssQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLENBQUM7QUFDNUIsQ0FBQztBQU9ELE1BQU0sVUFBVSxRQUFRLENBQUMsR0FBRztJQUMxQixPQUFPLEdBQUcsS0FBSyxJQUFJLElBQUksT0FBTyxHQUFHLEtBQUssUUFBUSxJQUFJLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDO0FBQ2xFLENBQUM7QUFPRCxNQUFNLFVBQVUsUUFBUSxDQUFDLEdBQUc7SUFDMUIsT0FBTyxPQUFPLEdBQUcsS0FBSyxRQUFRLElBQUksVUFBVSxDQUFDLEdBQUcsRUFBRSxRQUFRLENBQUMsQ0FBQztBQUM5RCxDQUFDO0FBRUQsTUFBTSxPQUFPLFdBQVksU0FBUSxXQUFXO0lBTW5DLE1BQU0sQ0FBQyxJQUFTO1FBQ3JCLElBQUksSUFBSSxZQUFZLE1BQU0sRUFBRTtZQUMxQixPQUFPLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUF5QixDQUFDO1NBQ3BEO1FBQ0QsSUFBSSxJQUFJLFlBQVksSUFBSSxFQUFFO1lBQ3hCLE9BQU8sSUFBSSxDQUFDLE1BQU0s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QUksQ0FBQyxDQUFDO2FBQ1Y7WUFFRCxPQUFPLEtBQUssQ0FBQyxNQUFNLElBQUksQ0FBQyxJQUFJLGFBQWEsQ0FBQztTQUMzQztRQUVELE9BQU8sS0FBSyxDQUFDO0lBQ2YsQ0FBQztJQU9TLE1BQU0sQ0FBQyxHQUFHO1FBQ2xCLE9BQU8sSUFBSSxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7SUFDdkIsQ0FBQztJQU9TLFFBQVEsQ0FBQyxHQUFHO1FBQ3BCLE1BQU0sVUFBVSxHQUFHLEdBQUcsQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDcEMsTUFBTSxTQUFTLEdBQUcsR0FBRyxDQUFDLFdBQVcsQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUV2QyxPQUFPLElBQUksTUFBTSxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsVUFBVSxHQUFHLENBQUMsRUFBRSxTQUFTLENBQUMsRUFBRSxHQUFHLENBQUMsS0FBSyxDQUFDLFNBQVMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQ3BGLENBQUM7Q0FDRiJ9