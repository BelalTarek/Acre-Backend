import type { TellMoneyErrorInterface, } from './tell-money-error-interface';


export class TellMoneyError extends Error implements TellMoneyErrorInterface {
  constructor(
    public statusCode: number,
    public error: string,
    public message: string,
  ) {
    super(message);
  }
};
