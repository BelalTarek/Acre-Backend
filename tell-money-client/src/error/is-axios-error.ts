/* eslint-disable @typescript-eslint/no-unsafe-return */

import { AxiosError, } from 'axios';

import type { TellMoneyErrorRawResponse, } from './tell-money-error-raw-response';


export const isAxiosError = (error: AxiosError<TellMoneyErrorRawResponse> | unknown): error is AxiosError<TellMoneyErrorRawResponse> => error instanceof AxiosError ? error.isAxiosError : false;

