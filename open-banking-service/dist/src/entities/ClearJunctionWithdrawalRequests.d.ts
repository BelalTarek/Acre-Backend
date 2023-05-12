import { User } from './User';
import { WithdrawalMethods } from './WithdrawalMethods';
export declare class ClearJunctionWithdrawalRequests {
    id: string;
    amount: string;
    currency: string;
    status: 'COMPLETED' | 'PENDING' | 'REJECTED' | 'TRANSFERED';
    apiResponse: object | null;
    createdAt: Date;
    updatedAt: Date;
    clearJunctionWalletId: string | null;
    fee: string;
    withdrawalMethod: WithdrawalMethods;
    user: User;
}
//# sourceMappingURL=ClearJunctionWithdrawalRequests.d.ts.map