import { FiatPaymentRequests, } from '../entities/FiatPaymentRequests';

export class GetPaymentResponse {
  constructor(data: FiatPaymentRequests) {
    this.PaymentStatus = this.getStatus(data);
  }

  getStatus(data: FiatPaymentRequests): string {
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

  PaymentStatus: string;
}
  