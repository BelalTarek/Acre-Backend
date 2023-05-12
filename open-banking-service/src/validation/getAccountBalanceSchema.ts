import type { Schema, } from 'express-validator';


export const getAccountBalanceSchema: Schema = {
  
  AccountId: {
    isEmpty: {
      errorMessage: 'can\'t be blank',
      negated: true,
    },
  },
  
};
