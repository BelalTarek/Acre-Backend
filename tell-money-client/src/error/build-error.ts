import { TellMoneyError, } from './error';

import type { TellMoneyErrorInterface, } from './tell-money-error-interface';


export const buildError = (
  statusCode = 500,
  error = 'TellMoney Client Error',
  message = 'Internal Server Error'
): TellMoneyErrorInterface => new TellMoneyError(
  statusCode,
  error,
  message,
);
