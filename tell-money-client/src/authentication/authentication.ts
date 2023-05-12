/* eslint-disable import/no-unresolved */
/* eslint-disable @typescript-eslint/no-unsafe-argument */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */

// import * as  jwt from 'jsonwebtoken';

import type { RequestHeader, } from '.';


export const getHttpHeaders = (username: string, password: string): string => {
  const header: RequestHeader = {
    apiKey: username,
    apiSecret: password,
  };

  return `Basic ${Buffer.from(`${header.apiKey}:${header.apiSecret}`).toString('base64')}`;
};

// export const validateHeaders = (token: string, publicKey: string): boolean => Boolean(jwt.verify(token, publicKey, {algorithms: ['RS256',],}));
