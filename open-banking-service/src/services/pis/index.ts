import { appDataSource, } from '../../config/app-data-source';
import { FiatPaymentRequests, } from '../../entities/FiatPaymentRequests';
import { FiatAccounts } from '../../entities/FiatAccounts';
import { FiatTransactions } from '../../entities/FiatTransactions';
import { User } from '../../entities/User';
import * as uuid from 'uuid';

import type { Repository, } from 'typeorm';
import { GetPaymentResponse, GetFundsConfirmationResponse, PostPaymentResponse, PostPaymentRequest } from '../../interfaces';


import modulrClient from '../../config/modulr-client';
import { firstValueFrom, } from 'rxjs';

class PisService {
  private readonly fiatPaymentsRepository: Repository<FiatPaymentRequests>;
  private readonly fiatAccountsRepository: Repository<FiatAccounts>;
  private readonly fiatTransactionsRepository: Repository<FiatTransactions>;
  private readonly userRepository: Repository<User>;

  constructor() {
    this.fiatPaymentsRepository = appDataSource.getRepository(FiatPaymentRequests);
    this.fiatAccountsRepository = appDataSource.getRepository(FiatAccounts);
    this.fiatTransactionsRepository = appDataSource.getRepository(FiatTransactions);
    this.userRepository = appDataSource.getRepository(User);
  };

  
  getPayment = async (id: string): Promise<GetPaymentResponse> =>
    new GetPaymentResponse(await this.fiatPaymentsRepository.findOneOrFail({
      where: { id, },
    }));
  
  getFundsConfirmation = async (id: string, amount: string): Promise<GetFundsConfirmationResponse> => {
    const account = await this.fiatAccountsRepository.findOneOrFail({
      where: { id, },
    })
    const accountId = account?.accountId || ''

    const client = await modulrClient.init();
    const getAccountByIdResponse = await firstValueFrom(client.accountsService.getAccountById(accountId));
    const confirmation = new GetFundsConfirmationResponse(amount, getAccountByIdResponse)
    return confirmation
  }

  postPayment = async ({Data: data, Info:info}: PostPaymentRequest): Promise<PostPaymentResponse> => {
    const fiatAccount = await this.fiatAccountsRepository.findOneOrFail({
      where: { id: data.AccountId, },
    })

    const user = await this.userRepository.findOneOrFail({
      where: { auth0Id: info.UserId, },
    })

    const fiatPaymentRequest: FiatPaymentRequests = {
      amount: data.Amount,
      currency: data.Currency,
      status: 'PENDING',
      type: data.PaymentType.toLocaleUpperCase() as 'DOMESTIC' | 'INTERNATIONAL',
      payee: {
        BeneficiaryName: data.BeneficiaryName,
        BeneficiaryIdentification: data.BeneficiaryIdentification,
      },
      id: uuid.v4(),
      apiRequest: null,
      createdAt: new Date(),
      updatedAt: new Date(),
      fiatAccount,
    }

    const { id } = await this.fiatPaymentsRepository.save(fiatPaymentRequest);

    const fiatTransactionRequest: FiatTransactions = {
      id: uuid.v4(),
      userId: info.UserId,
      fiatAmount: -Number(data.Amount),
      fiatCurrency: data.Currency,
      status: 'PENDING',
      type: 'PAYMENT_REQUEST_CREATED',
      referenceType: 'fiat_payment_request',
      referenceId: id,
      createdAt: new Date(),
      updatedAt: new Date(),
      user,
    }

    await this.fiatTransactionsRepository.save(fiatTransactionRequest);
    return new PostPaymentResponse(id);
  }
}
export default PisService;
