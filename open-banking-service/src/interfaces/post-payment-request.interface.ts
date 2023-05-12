import type { InfoObject, } from './info-object-request.interface';

enum Currency {
  EUR = 'EUR',
  GBP = 'GBP',
  USD = 'USD',
}

export interface PostPaymentRequest {
  Info: InfoObject;
  Data: {
    AccountId: string,
    DebtorIdentification: string,
    Amount: string,
    Currency: Currency,
    BeneficiaryName: string,
    BeneficiaryIdentification: string,
    PaymentType: string,
  };
}
