/* eslint-disable @typescript-eslint/no-base-to-string */
/* eslint-disable @typescript-eslint/restrict-template-expressions */
/* eslint-disable promise/always-return */
/* eslint-disable no-process-exit */
/* eslint-disable no-console */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */

import {createServer,} from 'http';

import displayRoutes from 'express-routemap';
import {logger,} from 'plutus-middlewares';

import app from './app';
import {appDataSource,} from './config/app-data-source';

import type {AddressInfo,} from 'net';

import './env';


appDataSource.initialize()
  .then(() => {
    logger.info(`Database connecting`);
  }).catch((err) => {
    logger.error(err);
    process.exit(1);
  });

const server = createServer(app);

server.listen(process.env.PORT, () => {
  const {address, port,} = server.address() as AddressInfo;

  logger.info(`Started app listening at http://${address}:${port}`);
  displayRoutes(app);

  if (process.env.NODE_ENV === 'development') {
    // Only in dev environment
    displayRoutes(app, 'routes.log');
  }
});
