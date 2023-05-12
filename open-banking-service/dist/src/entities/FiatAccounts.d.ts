import { FiatPaymentRequests } from './FiatPaymentRequests';
import { FiatWithdrawalRequests } from './FiatWithdrawalRequests';
import { User } from './User';
export declare class FiatAccounts {
    id: string;
    customerId: string;
    legalEntity: 'GB' | 'IE' | 'NL';
    userId: string;
    accountId: string | null;
    currency: 'EUR' | 'GBP' | 'USD' | null;
    type: string | null;
    ibanAccount: string | null;
    bicSort: string | null;
    apiRequest: object | null;
    apiResponse: object | null;
    createdAt: Date;
    updatedAt: Date;
    payinId: string | null;
    payoutId: string | null;
    user: User;
    fiatWithdrawalRequests: FiatWithdrawalRequests[];
    fiatPaymentRequests: FiatPaymentRequests[];
}
//# sourceMappingURL=FiatAccounts.d.ts.map