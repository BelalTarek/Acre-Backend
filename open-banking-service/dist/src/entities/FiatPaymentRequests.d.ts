import { FiatAccounts } from './FiatAccounts';
export declare class FiatPaymentRequests {
    id: string;
    amount: string;
    currency: 'EUR' | 'GBP' | 'USD';
    status: 'COMPLETED' | 'PENDING' | 'REJECTED' | 'TRANSFERRED';
    type: 'DOMESTIC' | 'INTERNATIONAL';
    payee: object | null;
    apiRequest: object | null;
    createdAt: Date | null;
    updatedAt: Date | null;
    fiatAccount: FiatAccounts;
}
//# sourceMappingURL=FiatPaymentRequests.d.ts.map