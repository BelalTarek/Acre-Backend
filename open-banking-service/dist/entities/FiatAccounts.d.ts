import { User } from './User';
export declare class FiatAccounts {
    id: string;
    customerId: string;
    legalEntity: 'GB' | 'IE';
    userId: string | null;
    accountId: string | null;
    currency: 'EUR' | 'GBP' | 'USD' | null;
    type: string | null;
    ibanAccount: string | null;
    bicSort: string | null;
    apiRequest: object | null;
    apiResponse: object | null;
    createdAt: Date;
    updatedAt: Date;
    user: User;
}
//# sourceMappingURL=FiatAccounts.d.ts.map