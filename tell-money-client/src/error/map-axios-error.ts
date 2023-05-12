import { buildError, } from './build-error';

import type { TellMoneyErrorInterface, } from './tell-money-error-interface';
import type { TellMoneyErrorRawResponse, } from './tell-money-error-raw-response';
import type { AxiosError, } from 'axios';



export const mapAxiosError = (error: AxiosError<TellMoneyErrorRawResponse>): TellMoneyErrorInterface => 
 buildError(
  error.response?.status,
  error.response?.statusText,
  error.response?.data.error
);
