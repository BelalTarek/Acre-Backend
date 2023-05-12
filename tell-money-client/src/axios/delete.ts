import axios from 'axios';

import { mapAndThrow, } from '../error';

import { mapAxiosResponse, } from './map-axios-response';

import type { AxiosRequestConfig, } from 'axios';



export const Delete =  async <Res>(
  url: string,
  Authorization?: string,
  config: AxiosRequestConfig = {}
):Promise<Res> => await axios
  .delete<Res>(url, {
  ...config,
  headers: {
    ...(Authorization === undefined ? {} : { Authorization, }),
  },
})
  .then(mapAxiosResponse)
  .catch(mapAndThrow);
