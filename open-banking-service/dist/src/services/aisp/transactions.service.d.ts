import { FiatTransactions } from '../../entities/FiatTransactions';
declare class TransactionsService {
    private readonly userRepository;
    private readonly fiatTransactionsRepository;
    constructor();
    getUserTransactions: (userId: string) => Promise<FiatTransactions[]>;
}
export default TransactionsService;
//# sourceMappingURL=transactions.service.d.ts.map