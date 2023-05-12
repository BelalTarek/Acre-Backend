import type { InfoObject } from './info-object-request.interface';
export interface GetFundsConfirmationRequest {
    Info: InfoObject;
    Data: {
        AccountId: string;
        DebtorAccount: string;
        Amount: string;
        Currency: string;
    };
}
//# sourceMappingURL=get-funds-confirmation-request.interface.d.ts.map