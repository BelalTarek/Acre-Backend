import type { InfoObject, } from './info-object-request.interface';


export interface GetTransactionsRequest {
  Info: InfoObject;
  Data: {
    AccountId: string;
    FromBookingDateTime?: Date;
    ToBookingDateTime?: Date;
  };
}
