import { TransportProtocol, PREFIX } from '../constant';
import { Logger } from '../global';
import {
  HTTPRequestEncoder,
  HTTPResponseObject,
  HTTPResponseDecoder,
} from '../codec';

export class HTTPTransport {
  public authType: string;
  public protocol: TransportProtocol = TransportProtocol.HTTP;
  protected appId: string;
  protected appSecret: string;
  protected logger: Logger;
  protected spaceId: string;
  protected timeout: number;
  protected ua: string;

  constructor(
    public endpoint: string,
    protected library: any,
  ) {}

  /**
   * encoder for request
   * @returns HTTPRequestEncoder
   */
  public getEncoder(prefix?: PREFIX): HTTPRequestEncoder {
    // 同一个 transport 实例，可能会有多种不同类型的路径请求，在实例化 encoder 的时候，把 prefix 覆盖掉
    return new HTTPRequestEncoder(this.endpoint, prefix);
  }

  /**
   * set appId for signature
   * @param  {string} appId
   * @returns void
   */
  public setAppId(appId: string): void {
    this.appId = appId;
  }

  /**
   * set appSecret for signature
   * @param  {string} appSecret
   * @returns HTTPTransport
   */
  public setAppSecret(appSecret: string): HTTPTransport {
    this.appSecret = appSecret;
    return this;
  }

  /**
   * set sdk ua
   * @param  {string} ua
   * @returns HTTPTransport
   */
  public setUA(ua: string): HTTPTransport {
    this.ua = ua;
    return this;
  }

  /**
   * set logger, used when toggling debug mode
   * @param  {Logger} logger
   * @returns void
   */
  public setLogger(logger: Logger): void {
    this.logger = logger;
  }

  /**
   * set request timeout, will normalize
   * @param  {number|string='5s'} timeout
   * @returns void
   */
  public setTimeout(timeout: number|string = '5s'): void {
    if (typeof timeout === 'string') {
      if (timeout.indexOf('ms') >= 0) {
        this.timeout = parseInt(timeout, 10);
        return;
      }
      if (timeout.indexOf('s') >= 0) {
        this.timeout = parseInt(timeout, 10) * 1000;
        return;
      }
    } else if (typeof timeout === 'number') {
      this.timeout = timeout;
      return;
    }

    // default to 5 seconds
    this.timeout = 5000;
  }

  /**
   * set space Id
   * @param  {string} spaceId
   * @returns void
   */
  public setSpaceId(spaceId: string): void {
    this.spaceId = spaceId;
  }

  /**
   * actual request mechanism
   * @param  {HTTPRequestEncoder} encoder
   * @returns Promise
   */
  public async request(
    encoder: HTTPRequestEncoder,
  ): Promise<HTTPResponseObject> {
    return (new HTTPResponseDecoder()).decode();
  }
}
