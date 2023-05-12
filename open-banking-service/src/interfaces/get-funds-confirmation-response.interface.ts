
import { ModulrAccountResponse, } from "./modulr-account-response.interface";

export class GetFundsConfirmationResponse {
  constructor(amount: string, data: ModulrAccountResponse) {
    this.FundsAvailable = Number(amount) <= Number(data.balance);
  }

  FundsAvailable: Boolean;
}
