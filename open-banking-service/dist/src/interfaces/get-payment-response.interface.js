"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetPaymentResponse = void 0;
class GetPaymentResponse {
    constructor(data) {
        this.PaymentStatus = this.getStatus(data);
    }
    getStatus(data) {
        switch (data.status) {
            case 'COMPLETED':
                return 'AcceptedSettlementCompleted';
            case 'REJECTED':
                return 'Rejected';
            case 'TRANSFERRED':
                return 'AcceptedSettlementInProcess';
            default:
                return 'Pending';
        }
    }
}
exports.GetPaymentResponse = GetPaymentResponse;
//# sourceMappingURL=get-payment-response.interface.js.map