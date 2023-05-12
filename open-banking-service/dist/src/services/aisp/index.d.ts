import { FiatTransactions } from '../../entities/FiatTransactions';
import { GetBalanceResponse, GetAccountResponse, GetAccountsResponse, GetTransactionResponse, GetTransactionsRequest, EnrichedTransaction, EnrichedFields } from '../../interfaces';
declare class AispService {
    private readonly fiatAccountsRepository;
    private readonly fiatTransactionsRepository;
    private readonly fiatDepositsRepository;
    private readonly fiatWithdrawalRequestsRepository;
    private readonly fiatPaymentRequestsRepository;
    constructor();
    findDeposit: (refId: string) => Promise<EnrichedFields>;
    findPayment: (refId: string) => Promise<EnrichedFields>;
    findWithdrawal: (refId: string) => Promise<EnrichedFields>;
    findTransfer: () => Promise<EnrichedFields>;
    enrichTransaction: (trx: FiatTransactions) => Promise<EnrichedTransaction>;
    getUserAccounts: (userId: string) => Promise<GetAccountsResponse>;
    getAccountById: (accountId: string) => Promise<GetAccountResponse>;
    getAccountBalance: (id: string) => Promise<GetBalanceResponse>;
    getUserTransactions: ({ Info: info, Data: data }: GetTransactionsRequest) => Promise<GetTransactionResponse>;
}
export default AispService;
//# sourceMappingURL=index.d.ts.map