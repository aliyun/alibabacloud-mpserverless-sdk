import { assert, emptyLogger } from './utility';
import { HTTPTransport } from './transport';
import { Logger, BasementOptions } from './global';

export class Basement {
  protected options: BasementOptions;
  protected _debug: boolean;
  protected _logger: Logger;
  protected transport: HTTPTransport;

  constructor(options: BasementOptions) {
    assert(options, 'options is required');
    assert(options.spaceId, 'spaceId is required');
    assert(options.endpoint, 'endpoint is required');
    assert(options.httpClient, 'http client is required');

    this._debug = false;
    this._logger = options.logger || emptyLogger;
    this.options = options;
    this.createTransport(options);
  }

  /**
   * 配置是否为 debug 模式
   * @param  {boolean} flag
   * @returns void
   */
  public setDebugFlag(flag: boolean): void {
    this._debug = flag;
    this.transport.setLogger(this.logger);
  }

  /**
   * 返回当前 debug 模式
   * @returns boolean
   */
  public get debug(): boolean {
    return this._debug;
  }

  /**
   * 返回当前 logger
   * @returns Logger
   */
  public get logger(): Logger {
    return this._debug ? this._logger : emptyLogger;
  }

  protected createTransport(options: BasementOptions): void {
    const Klass = options.httpTransport;
    this.transport = new Klass(options.endpoint, options.httpClient);
    this.transport.setAppId(options.appId);
    this.transport.setLogger(this.logger);
    this.transport.setSpaceId(options.spaceId);
    this.transport.setTimeout(options.timeout);
  }
}
