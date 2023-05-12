"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetFundsConfirmationResponse = void 0;
class GetFundsConfirmationResponse {
    constructor(amount, data) {
        this.FundsAvailable = Number(amount) <= Number(data.balance);
    }
}
exports.GetFundsConfirmationResponse = GetFundsConfirmationResponse;
//# sourceMappingURL=get-funds-confirmation-response.interface.js.map