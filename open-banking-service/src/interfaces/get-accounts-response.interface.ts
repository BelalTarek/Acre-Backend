import { GetAccountResponse } from './';

export class GetAccountsResponse {
  constructor(data: GetAccountResponse[]) {
    this.Accounts = data; 
  }
  Accounts: GetAccountResponse[];
}
  