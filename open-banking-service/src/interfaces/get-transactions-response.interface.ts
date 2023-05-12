import { FiatTransactions, } from '../entities/FiatTransactions';

export interface EnrichedFields {
  creditorIdentification: string,
  creditorName: string,
}

export interface EnrichedTransaction extends FiatTransactions, EnrichedFields {}

class Transaction {
  constructor(data: EnrichedTransaction) {
    this.TransactionId = data.id;
    this.BookingDateTime = data.createdAt;
    this.Amount = Math.abs(Number(data.fiatAmount)).toFixed(2);
    this.Currency = data.fiatCurrency;
    this.Status = data.status === 'SETTLED' ? 'Booked' : 'Pending';
    this.CreditDebit = Number(data.fiatAmount) > 0 ? 'Credit' : 'Debit';
    this.Code = 'Transfer';
    this.SubCode = this.getSubCode(data);
    this.CreditorSchemeName = data.fiatCurrency === 'GBP' ? 'SortCodeAccountNumber' : 'CustomCode';
    this.CreditorIdentification = data.creditorIdentification;
    this.CreditorName = data.creditorName;
  }

  getSubCode(data: FiatTransactions): string {
    if (data.type==='DEPOSIT_FUNDS_RECEIVED'){
      if (data.fiatCurrency === 'GBP')
        return 'CreditTransferDomestic'
      else
        return 'CreditTransferSEPA'
    }else{
      return 'Other'
    }
    
  }

  TransactionId: string;
  BookingDateTime: Date;
  Amount: string;
  Currency: string;
  Status: string | null; // Booked / Pending
  CreditDebit: string; // Credit / Debit
  Code: string; // Transfer
  SubCode: string; // Other / CreditTransferSEPA / CreditTransferDomestic
  CreditorIdentification: string;
  CreditorName: string;
  CreditorSchemeName: string; // SortCodeAccountNumber / CustomCode
}

export class GetTransactionResponse {
  constructor(transactions: EnrichedTransaction[]) {
    this.Transactions = transactions.map(trx => new Transaction(trx))
  }

  Transactions: Transaction[];

}
  