"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetAccountResponse = void 0;
class GetAccountResponse {
    constructor(data) {
        var _a;
        this.AccountId = data.id;
        this.Currency = data.currency || '';
        this.AccountType = "Personal";
        this.AccountSubType = "CurrentAccount";
        this.Nickname = "General Account";
        this.Identification = data.currency === 'GBP' ? `${data.bicSort}${data.ibanAccount}` : (_a = data.ibanAccount) !== null && _a !== void 0 ? _a : '';
        this.SchemeName = data.currency === 'GBP' ? 'SortCodeAccountNumber' : 'CustomCode';
    }
}
exports.GetAccountResponse = GetAccountResponse;
//# sourceMappingURL=get-account-response.interface.js.map