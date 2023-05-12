import type { AxiosResponse, } from 'axios';


export const mapAxiosResponse = <T>({ data, }: AxiosResponse<T>): T => data;
