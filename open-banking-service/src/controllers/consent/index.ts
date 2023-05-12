import { Router, } from 'express';
import deleteConsent from './delete-consent';

import getConsent from './get-consent';
import getUserConsents from './get-user-consents';
import postOutcome from './post-outcome';


const router = Router();

router.get('/get-consent/:consentId', getConsent);
router.get('/get-user-consents/:userId', getUserConsents);
router.post('/delete-consent', deleteConsent);
router.post('/post-outcome', postOutcome);


export default router;
