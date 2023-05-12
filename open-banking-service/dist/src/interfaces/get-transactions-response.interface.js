"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetTransactionResponse = void 0;
class Transaction {
    constructor(data) {
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
    getSubCode(data) {
        if (data.type === 'DEPOSIT_FUNDS_RECEIVED') {
            if (data.fiatCurrency === 'GBP')
                return 'CreditTransferDomestic';
            else
                return 'CreditTransferSEPA';
        }
        else {
            return 'Other';
        }
    }
}
class GetTransactionResponse {
    constructor(transactions) {
        this.Transactions = transactions.map(trx => new Transaction(trx));
    }
}
exports.GetTransactionResponse = GetTransactionResponse;
//# sourceMappingURL=get-transactions-response.interface.js.map