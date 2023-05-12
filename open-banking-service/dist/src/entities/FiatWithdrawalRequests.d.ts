import { FiatAccounts } from './FiatAccounts';
import { User } from './User';
import { WithdrawalMethods } from './WithdrawalMethods';
export declare class FiatWithdrawalRequests {
    id: string;
    amount: string;
    currency: 'EUR' | 'GBP' | 'USD' | null;
    status: 'COMPLETED' | 'PENDING' | 'REJECTED' | 'TRANSFERRED';
    fee: string | null;
    apiResponse: object | null;
    createdAt: Date;
    updatedAt: Date;
    fiatAccount: FiatAccounts;
    withdrawalMethod: WithdrawalMethods;
    user: User;
}
//# sourceMappingURL=FiatWithdrawalRequests.d.ts.map