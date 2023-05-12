import { Router, } from 'express';
import  validateHeaders  from '../../validation/verify-signature';

import webhooksOrchestrator from './webhook-request-orchestrator';


const router = Router();

router.post('/', validateHeaders, webhooksOrchestrator);


export default router;
