import { User } from './User';
export declare class FiatBalance {
    id: string;
    userId: string | null;
    currency: 'EUR' | 'GBP' | 'USD';
    amount: string;
    createdAt: Date;
    updatedAt: Date | null;
    user: User;
}
//# sourceMappingURL=FiatBalance.d.ts.map