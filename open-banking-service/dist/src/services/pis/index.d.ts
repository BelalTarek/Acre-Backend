import { GetPaymentResponse, GetFundsConfirmationResponse, PostPaymentResponse, PostPaymentRequest } from '../../interfaces';
declare class PisService {
    private readonly fiatPaymentsRepository;
    private readonly fiatAccountsRepository;
    private readonly fiatTransactionsRepository;
    private readonly userRepository;
    constructor();
    getPayment: (id: string) => Promise<GetPaymentResponse>;
    getFundsConfirmation: (id: string, amount: string) => Promise<GetFundsConfirmationResponse>;
    postPayment: ({ Data: data, Info: info }: PostPaymentRequest) => Promise<PostPaymentResponse>;
}
export default PisService;
//# sourceMappingURL=index.d.ts.map