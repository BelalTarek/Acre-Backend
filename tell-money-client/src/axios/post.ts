/* eslint-disable no-console */
/* eslint-disable @typescript-eslint/no-unsafe-return */
import axios from 'axios';

// import { mapAndThrow, } from '../error';

import { mapAxiosResponse, } from './map-axios-response';

import type { AxiosRequestConfig, } from 'axios';
import { mapAndThrow } from '..';


export const post = async <Req, Res>(
  url: string,
  req: Req,
  Authorization?: string,
  contentType = 'application/json',
  config: AxiosRequestConfig<Req> = {}
): Promise<Res> => await axios.post(url, req, {
  ...config,
  headers: {
    ...(Authorization === undefined ? {} : { Authorization, }),
    'Content-Type': contentType,
  },
}).then(mapAxiosResponse)
  .catch(mapAndThrow);
