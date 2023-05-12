import { ModulrAccountResponse, } from "./modulr-account-response.interface";

export class GetBalanceResponse {
  constructor(data: ModulrAccountResponse) {
    this.Currency = data.currency;
    this.Amount = data.balance;
    this.CreditDebit = "Debit";
  }

  Amount: string;
  Currency: string;
  CreditDebit: string;
}
