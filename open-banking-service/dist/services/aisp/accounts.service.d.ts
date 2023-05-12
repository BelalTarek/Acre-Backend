import { FiatAccounts } from '../../entities/FiatAccounts';
declare class AccountsService {
    private readonly userRepository;
    private readonly fiatAccountsRepository;
    constructor();
    getUserAccounts: (userId: string) => Promise<FiatAccounts[]>;
    getAccountById: (accountId: string) => Promise<FiatAccounts | null>;
}
export default AccountsService;
//# sourceMappingURL=accounts.service.d.ts.map