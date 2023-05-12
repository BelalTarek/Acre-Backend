/* eslint-disable no-console */
/* eslint-disable @typescript-eslint/no-unsafe-return */
import axios from 'axios';

import { mapAndThrow, } from '../error';

import { mapAxiosResponse, } from './map-axios-response';

import type { AxiosRequestConfig, } from 'axios';


export const get = async <Res>(
  url: string,
  Authorization?: string,
  contentType = 'application/json',
  config: AxiosRequestConfig = {}
): Promise<Res> => await axios.get(url, {
  ...config,
  headers: {
    ...(Authorization === undefined ? {} : { Authorization, }),
    'Content-Type': contentType,
  },
}).then(mapAxiosResponse)
  .catch(mapAndThrow);

