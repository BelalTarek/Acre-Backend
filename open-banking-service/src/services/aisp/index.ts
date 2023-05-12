import { appDataSource, } from '../../config/app-data-source';
import { FiatAccounts,  } from '../../entities/FiatAccounts';
import { FiatTransactions, } from '../../entities/FiatTransactions';
import { FiatDeposits, } from '../../entities/FiatDeposits';
import { FiatWithdrawalRequests, } from '../../entities/FiatWithdrawalRequests';
import { FiatPaymentRequests, } from '../../entities/FiatPaymentRequests';

import modulrClient from '../../config/modulr-client';
import type { Repository, } from 'typeorm';
import { GetBalanceResponse, GetAccountResponse, GetAccountsResponse, GetTransactionResponse, GetTransactionsRequest, EnrichedTransaction, EnrichedFields } from '../../interfaces';

import { firstValueFrom, } from 'rxjs';
import { get } from 'lodash'

class AispService {
  private readonly fiatAccountsRepository: Repository<FiatAccounts>;
  private readonly fiatTransactionsRepository: Repository<FiatTransactions>;
  private readonly fiatDepositsRepository: Repository<FiatDeposits>;
  private readonly fiatWithdrawalRequestsRepository: Repository<FiatWithdrawalRequests>;
  private readonly fiatPaymentRequestsRepository: Repository<FiatPaymentRequests>;

  constructor() {
    this.fiatAccountsRepository = appDataSource.getRepository(FiatAccounts);
    this.fiatTransactionsRepository = appDataSource.getRepository(FiatTransactions);
    this.fiatDepositsRepository = appDataSource.getRepository(FiatDeposits);
    this.fiatWithdrawalRequestsRepository = appDataSource.getRepository(FiatWithdrawalRequests);
    this.fiatPaymentRequestsRepository = appDataSource.getRepository(FiatPaymentRequests);
  };

  findDeposit = async (refId: string): Promise<EnrichedFields> =>{ 

      const refTrx = await this.fiatDepositsRepository.findOne({
        where: { id: refId, },
      });

      return {
        creditorIdentification: 
          get(refTrx, 'apiReponse.Payer.Identifier.SortCode', '000000') +
          get(refTrx, 'apiReponse.Payer.Identifier.AccountNumber', '12345678'),

        creditorName: get(refTrx, 'apiReponse.Payer.Name', 'Unknown'),
      }

  }

  findPayment = async (refId: string): Promise<EnrichedFields> =>{ 

    const refTrx = await this.fiatPaymentRequestsRepository.findOne({
      where: { id: refId, },
    });

    return {
      creditorIdentification: get(refTrx, 'payee.BeneficiaryIdentification', '00000012345678'),
      creditorName: get(refTrx, 'payee.BeneficiaryName', 'Unknown'),
    }

  }

  findWithdrawal = async (refId: string): Promise<EnrichedFields> =>{ 

    const refTrx = await this.fiatWithdrawalRequestsRepository.createQueryBuilder('withdrawal')
      .where('withdrawal.id = :refId', {refId,})
      .innerJoinAndSelect("withdrawal.withdrawalMethod", "withdrawalMethods")
      .getOne()

    console.log(refTrx)
    return {
      creditorIdentification: 
        get(refTrx, 'withdrawalMethod.details.sort_code', 'Unknown')+
        get(refTrx, 'withdrawalMethod.details.account_number', '12345678'),
      creditorName: get(refTrx, 'withdrawalMethod.details.nickname', 'Unknown'),
    }

  }

  findTransfer = async (): Promise<EnrichedFields> =>{ 

    const client = await modulrClient.init();
    const getAccountByIdResponse = await firstValueFrom(client.accountsService.getAccountById(process.env['MODULR_GBP_ESCROW_ACCOUNT'] || 'A1213Q86'));

    return {
      creditorIdentification: 
        get(getAccountByIdResponse, 'identifiers[0].sortCode', '000000') +
        get(getAccountByIdResponse, 'identifiers[0].accountNumber', '12345678'),
      creditorName: get(getAccountByIdResponse, 'customerName', 'Unknown'),
    }

  }

  enrichTransaction  = async (trx: FiatTransactions): Promise<EnrichedTransaction> =>{ 
    const refType = get(trx, 'referenceType', 'unknown')
    
    let resp: EnrichedFields;

    switch (refType) {
      case 'fiat_deposits':
        resp = await this.findDeposit(trx.referenceId)
        break;
      case 'fiat_withdrawal_requests':
        resp = await this.findWithdrawal(trx.referenceId)
        break;
      case 'fiat_payment_requests':
        resp = await this.findPayment(trx.referenceId)
        break;
     default:
        resp = await this.findTransfer()
        break;
    }

    return { ...trx, ...resp } 
    
  }
  
  getUserAccounts = async (userId: string): Promise<GetAccountsResponse> =>{
    const accounts = await this.fiatAccountsRepository.find({
      where: { user: { auth0Id: userId, }, },
    });

    const resp =  new GetAccountsResponse(accounts.map(account => new GetAccountResponse(account)))
    return resp
  }
  
    
  getAccountById = async (accountId: string): Promise<GetAccountResponse> =>
    new GetAccountResponse(await this.fiatAccountsRepository.findOneOrFail({
      where: { id: accountId, },
    }));


  getAccountBalance = async (id: string): Promise<GetBalanceResponse> => {
      const account = await this.fiatAccountsRepository.findOneOrFail({
        where: { id, },
      })
      const accountId = account?.accountId || ''

      const client = await modulrClient.init();
      const getAccountByIdResponse = await firstValueFrom(client.accountsService.getAccountById(accountId));
      const getBalanceResponse = new GetBalanceResponse(getAccountByIdResponse)
      return getBalanceResponse
  }

  getUserTransactions = async ({ Info: info, Data: data }: GetTransactionsRequest): Promise<GetTransactionResponse> =>{
    const { UserId: userId } = info;
    const { FromBookingDateTime: from, ToBookingDateTime: to } = data;

    const query = this.fiatTransactionsRepository.createQueryBuilder('trx')
      .where('trx.userId = :userId', {userId,})

    if (from)
      query.andWhere('trx.createdAt >= :from', {from ,})

    if (to)
      query.andWhere('trx.createdAt <= :to', {to ,})
    
    const transactions = await query.getMany()

    const enriched = await Promise.all(
      transactions.map(async trx => {
        const transaction = await this.enrichTransaction(trx);
        return transaction;
      })
    )

    const resp = new GetTransactionResponse(enriched)
    return resp
  }
}
export default AispService;
