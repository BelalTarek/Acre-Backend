import type { InfoObject, } from './info-object-request.interface';


export interface GetAccountsRequest {
  Info: InfoObject;
  Data: {
    AccountId: string;
  };
}
