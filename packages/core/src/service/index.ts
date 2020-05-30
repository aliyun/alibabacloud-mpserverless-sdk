import { HTTPTransport } from '../transport';
import { HTTPRequestEncoder } from '../codec';
import { PREFIX } from '../constant';

export class BaseService {
  constructor(
    protected transport: HTTPTransport,
  ) {}

  protected getEncoder(prefix?: PREFIX): HTTPRequestEncoder {
    return this.transport.getEncoder(prefix);
  }
}
