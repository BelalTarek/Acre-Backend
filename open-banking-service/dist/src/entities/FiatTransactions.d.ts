import { User } from './User';
export declare class FiatTransactions {
    id: string;
    userId: string | null;
    type: 'BUY_ORDER_FEE' | 'CARD_PURCHASE' | 'DEPOSIT_FEE' | 'DEPOSIT_FUNDS_RECEIVED' | 'IEO_PLEDGE' | 'LOAD_PLUTUS_CARD_FROM_CJ_WALLET' | 'ORDER_CANCELLED' | 'ORDER_CREATED' | 'ORDER_EXPIRED' | 'ORDER_FULFILLED' | 'PAYMENT_REQUEST_CREATED' | 'PAYMENT_REQUEST_REJECTED' | 'PLUTON_WITHDRAW' | 'PLUTUS_WALLET_WITHDRAW_FEE' | 'SELL_ORDER_FEE' | 'SELL_ORDER_LOAD' | 'SUBSCRIPTION_CHARGE' | 'TRANSACTION_CANCELLED' | 'UNLOAD_PLUTUS_CARD_TO_CJ_WALLET' | 'WITHDRAWAL_FEE' | 'WITHDRAWAL_REQUEST_CREATED' | 'WITHDRAWAL_REQUEST_REJECTED' | null;
    fiatAmount: number;
    fiatCurrency: 'EUR' | 'GBP' | 'USD';
    referenceType: string;
    referenceId: string;
    createdAt: Date;
    updatedAt: Date | null;
    status: 'FAILED' | 'PENDING' | 'SETTLED' | null;
    user: User;
}
//# sourceMappingURL=FiatTransactions.d.ts.map