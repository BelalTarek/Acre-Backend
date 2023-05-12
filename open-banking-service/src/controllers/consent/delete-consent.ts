/* eslint-disable no-console */

import {tellMoneyClient,} from '../../clients';

import type { NextFunction, Request, Response, } from 'express';



const validation = (req: Request, res: Response, next: () => void): void => {
  console.log('validation');

  return next();
};

const deleteConsent = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
  try {
    const { consentId } = req.body
    const deleteConsentResponse = await tellMoneyClient.deleteConsent(consentId);
    res.status(200).send(deleteConsentResponse);
  } catch (error) {
    next(error);
  }

};
export default [validation, deleteConsent,];
