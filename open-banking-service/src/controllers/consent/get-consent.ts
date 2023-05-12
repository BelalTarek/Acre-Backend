/* eslint-disable no-console */

import {tellMoneyClient,} from '../../clients';

import type { NextFunction, Request, Response, } from 'express';



const validation = (req: Request, res: Response, next: () => void): void => {
  console.log('validation');

  return next();
};

const getConsent = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
  try {
    const getConsentResponse = await tellMoneyClient.getConsent(req.params.consentId);
    res.status(200).send(getConsentResponse);
  } catch (error) {
    next(error);
  }

};
export default [validation, getConsent,];
