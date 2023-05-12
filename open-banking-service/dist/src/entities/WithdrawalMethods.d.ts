import { ClearJunctionWithdrawalRequests } from './ClearJunctionWithdrawalRequests';
import { FiatWithdrawalRequests } from './FiatWithdrawalRequests';
import { User } from './User';
export declare class WithdrawalMethods {
    id: string;
    currency: string;
    type: 'BANK_TRANSFER_EU' | 'BANK_TRANSFER_UK' | 'CREDIT_CARD';
    details: object;
    createdAt: Date;
    updatedAt: Date;
    deletedAt: Date | null;
    clearJunctionWithdrawalRequests: ClearJunctionWithdrawalRequests[];
    fiatWithdrawalRequests: FiatWithdrawalRequests[];
    user: User;
}
//# sourceMappingURL=WithdrawalMethods.d.ts.map