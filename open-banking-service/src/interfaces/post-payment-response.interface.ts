export class PostPaymentResponse {
  constructor(id: string) {
    this.PaymentReference = id;
  }
  PaymentReference: string;
}
