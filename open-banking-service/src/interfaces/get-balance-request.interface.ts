import type { InfoObject, } from './info-object-request.interface';


export interface GetBalanceRequest {
  Info: InfoObject;
  Data: {
    AccountId: string;
  };
}
