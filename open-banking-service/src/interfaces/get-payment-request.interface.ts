import type { InfoObject, } from './info-object-request.interface';


export interface GetPaymentRequest {
  Info: InfoObject;
  Data: {
    PaymentReference: string;
  };
}
