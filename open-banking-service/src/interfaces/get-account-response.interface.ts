import { FiatAccounts, } from '../entities/FiatAccounts';

export class GetAccountResponse {
  constructor(data: FiatAccounts) {
    this.AccountId = data.id;
    this.Currency = data.currency || '';
    this.AccountType = "Personal";
    this.AccountSubType = "CurrentAccount";
    this.Nickname = "General Account";
    this.Identification = data.currency === 'GBP' ? `${data.bicSort}${data.ibanAccount}` : data.ibanAccount ?? '';
    this.SchemeName = data.currency === 'GBP' ? 'SortCodeAccountNumber' : 'CustomCode';
  }
  AccountId: string;
  Currency: string;
  AccountType: string;
  AccountSubType: string;
  Nickname: string;
  Identification: string;
  SchemeName: string;
  
}
  