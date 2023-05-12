import { FiatAccounts } from '../../entities/FiatAccounts';
import { GetBalanceResponse } from '../../interfaces';
declare class AccountsService {
    private readonly userRepository;
    private readonly fiatAccountsRepository;
    constructor();
    getUserAccounts: (userId: string) => Promise<FiatAccounts[]>;
    getAccountById: (accountId: string) => Promise<FiatAccounts | null>;
    getAccountBalance: (accountId: string) => Promise<GetBalanceResponse>;
}
export default AccountsService;
//# sourceMappingURL=accounts.service.d.ts.map