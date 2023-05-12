/* eslint-disable @typescript-eslint/no-unsafe-call */
import cors from 'cors';
import express from 'express';
import { autoConfig, } from 'plutus-middlewares';

import './env';

import controllers from './controllers';


const app = express();
const corsFunc = cors();

autoConfig(app, [corsFunc, controllers,]);

export default app;
