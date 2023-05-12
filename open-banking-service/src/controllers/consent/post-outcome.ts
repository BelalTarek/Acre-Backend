/* eslint-disable no-console */

import {tellMoneyClient,} from '../../clients';
import { mapPostOutcomeTellMoneyRequest, } from '../../interfaces';


import type { NextFunction, Request, Response, } from 'express';



const validation = (req: Request, res: Response, next: () => void): void => {
  console.log('validation');

  return next();
};

const postOutcome = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
  try {

    const postOutcomeRequest = mapPostOutcomeTellMoneyRequest(req.body);
    const postOutcomeResponse = await tellMoneyClient.postOutcome(postOutcomeRequest);
    res.status(200).send(postOutcomeResponse);
  } catch (error) {
    next(error);
  }

};
export default [validation, postOutcome,];
