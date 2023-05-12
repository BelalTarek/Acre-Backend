import * as  jwt from 'jsonwebtoken';
import { UNPROCESSABLE_ENTITY_ERROR, buildError, } from 'plutus-middlewares';


import type { NextFunction, Request, Response, } from 'express';

const validateHeaders = (req: Request, _: Response, next: NextFunction): void => {
  const signature = req.get('x-jws-signature');

  if (process.env.TELL_MONEY_PUBLIC_KEY === undefined) {
    return next(buildError(UNPROCESSABLE_ENTITY_ERROR, 'Secret required.'));
  }

  if (signature === undefined ) {
    return next(buildError(UNPROCESSABLE_ENTITY_ERROR, 'Invalid request'));
  }
  const verify = jwt.verify(signature, process.env.TELL_MONEY_PUBLIC_KEY, {algorithms: ['RS256',],})
  if (!verify) {
    return next(buildError(UNPROCESSABLE_ENTITY_ERROR, 'Invalid signature'));
  }

  return next();
};

export default validateHeaders;
