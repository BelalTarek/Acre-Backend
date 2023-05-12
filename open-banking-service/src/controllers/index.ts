/* eslint-disable @typescript-eslint/no-unsafe-argument */

import { Router, } from 'express';
import { auth } from 'plutus-middlewares';

import webhook from './webhook';
import consent from './consent';

const router = Router();

const jwtValidator = auth([process.env.AUTH0_PLUTUS_PLATFORM_CLIENT_ID, process.env.AUTH0_MOBILE_CLIENT_ID])

router.use('/consent', jwtValidator, consent);
router.use('/webhook', webhook);

export default router;
