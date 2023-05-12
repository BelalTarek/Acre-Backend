import { User } from './User';
export declare class FiatDeposits {
    id: string;
    userId: string;
    amount: string | null;
    currency: string;
    feeAmount: string | null;
    feeExchangeRate: string | null;
    feeCurrency: string | null;
    status: string;
    provider: string;
    providerDepositId: string | null;
    providerTransactionTime: Date | null;
    apiReponse: object | null;
    createdAt: Date;
    updatedAt: Date;
    depositAmount: number;
    user: User;
}
//# sourceMappingURL=FiatDeposits.d.ts.map