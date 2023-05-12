/* eslint-disable no-console */

import {tellMoneyClient,} from '../../clients';

import type { Request, Response, } from 'express';
import { NextFunction } from 'express';



const validation = (req: Request, res: Response, next: () => void): void => {
  console.log('validation');

  return next();
};

const getUserConsents = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
  try {

    const getUserConsentsResponse = await tellMoneyClient.getUserConsents(req.params.userId);
    res.status(200).send(getUserConsentsResponse);
  } catch (error) {
    next(error);
  }

};
export default [validation, getUserConsents,];
