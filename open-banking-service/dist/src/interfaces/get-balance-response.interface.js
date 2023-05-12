"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetBalanceResponse = void 0;
class GetBalanceResponse {
    constructor(data) {
        this.Currency = data.currency;
        this.Amount = data.balance;
        this.CreditDebit = "Debit";
    }
}
exports.GetBalanceResponse = GetBalanceResponse;
//# sourceMappingURL=get-balance-response.interface.js.map