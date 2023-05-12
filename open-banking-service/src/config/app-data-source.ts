/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-call */
import { DataSource, } from 'typeorm';

import { configuration, } from './db-configuration';


export const appDataSource = new DataSource(configuration().db);
