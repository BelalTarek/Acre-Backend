import { FiatTransactions } from '../entities/FiatTransactions';
export interface EnrichedFields {
    creditorIdentification: string;
    creditorName: string;
}
export interface EnrichedTransaction extends FiatTransactions, EnrichedFields {
}
declare class Transaction {
    constructor(data: EnrichedTransaction);
    getSubCode(data: FiatTransactions): string;
    TransactionId: string;
    BookingDateTime: Date;
    Amount: string;
    Currency: string;
    Status: string | null;
    CreditDebit: string;
    Code: string;
    SubCode: string;
    CreditorIdentification: string;
    CreditorName: string;
    CreditorSchemeName: string;
}
export declare class GetTransactionResponse {
    constructor(transactions: EnrichedTransaction[]);
    Transactions: Transaction[];
}
export {};
//# sourceMappingURL=get-transactions-response.interface.d.ts.map