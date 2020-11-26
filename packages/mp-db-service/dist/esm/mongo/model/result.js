import { JSONEncoder, JSONDecoder } from '../codec';
export class Result {
    constructor(data) {
        this.encoder = new JSONEncoder();
        this.decoder = new JSONDecoder();
        this.raw = this.decoder.decode(data);
    }
    inspect() {
        return this.raw;
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVzdWx0LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vc3JjL21vbmdvL21vZGVsL3Jlc3VsdC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsV0FBVyxFQUFFLFdBQVcsRUFBRSxNQUFNLFVBQVUsQ0FBQztBQVFwRCxNQUFNLE9BQU8sTUFBTTtJQUtqQixZQUFZLElBQXNCO1FBSHhCLFlBQU8sR0FBZ0IsSUFBSSxXQUFXLEVBQUUsQ0FBQztRQUN6QyxZQUFPLEdBQWdCLElBQUksV0FBVyxFQUFFLENBQUM7UUFHakQsSUFBSSxDQUFDLEdBQUcsR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUN2QyxDQUFDO0lBTU0sT0FBTztRQUNaLE9BQU8sSUFBSSxDQUFDLEdBQUcsQ0FBQztJQUNsQixDQUFDO0NBQ0YifQ==