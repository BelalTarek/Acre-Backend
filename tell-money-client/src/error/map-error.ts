/* eslint-disable @typescript-eslint/no-unsafe-return */
import { buildError, } from './build-error';
import { isAxiosError, } from './is-axios-error';
import { mapAxiosError, } from './map-axios-error';

import type { TellMoneyErrorInterface, } from './tell-money-error-interface';


export const mapError = (error: unknown): TellMoneyErrorInterface => isAxiosError(error) ? mapAxiosError(error) : buildError();
