"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const app_data_source_1 = require("../../config/app-data-source");
const FiatAccounts_1 = require("../../entities/FiatAccounts");
const FiatTransactions_1 = require("../../entities/FiatTransactions");
const FiatDeposits_1 = require("../../entities/FiatDeposits");
const FiatWithdrawalRequests_1 = require("../../entities/FiatWithdrawalRequests");
const FiatPaymentRequests_1 = require("../../entities/FiatPaymentRequests");
const modulr_client_1 = __importDefault(require("../../config/modulr-client"));
const interfaces_1 = require("../../interfaces");
const rxjs_1 = require("rxjs");
const lodash_1 = require("lodash");
class AispService {
    constructor() {
        this.findDeposit = (refId) => __awaiter(this, void 0, void 0, function* () {
            const refTrx = yield this.fiatDepositsRepository.findOne({
                where: { id: refId, },
            });
            return {
                creditorIdentification: (0, lodash_1.get)(refTrx, 'apiReponse.Payer.Identifier.SortCode', '000000') +
                    (0, lodash_1.get)(refTrx, 'apiReponse.Payer.Identifier.AccountNumber', '12345678'),
                creditorName: (0, lodash_1.get)(refTrx, 'apiReponse.Payer.Name', 'Unknown'),
            };
        });
        this.findPayment = (refId) => __awaiter(this, void 0, void 0, function* () {
            const refTrx = yield this.fiatPaymentRequestsRepository.findOne({
                where: { id: refId, },
            });
            return {
                creditorIdentification: (0, lodash_1.get)(refTrx, 'payee.BeneficiaryIdentification', '00000012345678'),
                creditorName: (0, lodash_1.get)(refTrx, 'payee.BeneficiaryName', 'Unknown'),
            };
        });
        this.findWithdrawal = (refId) => __awaiter(this, void 0, void 0, function* () {
            const refTrx = yield this.fiatWithdrawalRequestsRepository.createQueryBuilder('withdrawal')
                .where('withdrawal.id = :refId', { refId, })
                .innerJoinAndSelect("withdrawal.withdrawalMethod", "withdrawalMethods")
                .getOne();
            console.log(refTrx);
            return {
                creditorIdentification: (0, lodash_1.get)(refTrx, 'withdrawalMethod.details.sort_code', 'Unknown') +
                    (0, lodash_1.get)(refTrx, 'withdrawalMethod.details.account_number', '12345678'),
                creditorName: (0, lodash_1.get)(refTrx, 'withdrawalMethod.details.nickname', 'Unknown'),
            };
        });
        this.findTransfer = () => __awaiter(this, void 0, void 0, function* () {
            const client = yield modulr_client_1.default.init();
            const getAccountByIdResponse = yield (0, rxjs_1.firstValueFrom)(client.accountsService.getAccountById(process.env['MODULR_GBP_ESCROW_ACCOUNT'] || 'A1213Q86'));
            return {
                creditorIdentification: (0, lodash_1.get)(getAccountByIdResponse, 'identifiers[0].sortCode', '000000') +
                    (0, lodash_1.get)(getAccountByIdResponse, 'identifiers[0].accountNumber', '12345678'),
                creditorName: (0, lodash_1.get)(getAccountByIdResponse, 'customerName', 'Unknown'),
            };
        });
        this.enrichTransaction = (trx) => __awaiter(this, void 0, void 0, function* () {
            const refType = (0, lodash_1.get)(trx, 'referenceType', 'unknown');
            let resp;
            switch (refType) {
                case 'fiat_deposits':
                    resp = yield this.findDeposit(trx.referenceId);
                    break;
                case 'fiat_withdrawal_requests':
                    resp = yield this.findWithdrawal(trx.referenceId);
                    break;
                case 'fiat_payment_requests':
                    resp = yield this.findPayment(trx.referenceId);
                    break;
                default:
                    resp = yield this.findTransfer();
                    break;
            }
            return Object.assign(Object.assign({}, trx), resp);
        });
        this.getUserAccounts = (userId) => __awaiter(this, void 0, void 0, function* () {
            const accounts = yield this.fiatAccountsRepository.find({
                where: { user: { auth0Id: userId, }, },
            });
            const resp = new interfaces_1.GetAccountsResponse(accounts.map(account => new interfaces_1.GetAccountResponse(account)));
            return resp;
        });
        this.getAccountById = (accountId) => __awaiter(this, void 0, void 0, function* () {
            return new interfaces_1.GetAccountResponse(yield this.fiatAccountsRepository.findOneOrFail({
                where: { id: accountId, },
            }));
        });
        this.getAccountBalance = (id) => __awaiter(this, void 0, void 0, function* () {
            const account = yield this.fiatAccountsRepository.findOneOrFail({
                where: { id, },
            });
            const accountId = (account === null || account === void 0 ? void 0 : account.accountId) || '';
            const client = yield modulr_client_1.default.init();
            const getAccountByIdResponse = yield (0, rxjs_1.firstValueFrom)(client.accountsService.getAccountById(accountId));
            const getBalanceResponse = new interfaces_1.GetBalanceResponse(getAccountByIdResponse);
            return getBalanceResponse;
        });
        this.getUserTransactions = ({ Info: info, Data: data }) => __awaiter(this, void 0, void 0, function* () {
            const { UserId: userId } = info;
            const { FromBookingDateTime: from, ToBookingDateTime: to } = data;
            const query = this.fiatTransactionsRepository.createQueryBuilder('trx')
                .where('trx.userId = :userId', { userId, });
            if (from)
                query.andWhere('trx.createdAt >= :from', { from, });
            if (to)
                query.andWhere('trx.createdAt <= :to', { to, });
            const transactions = yield query.getMany();
            const enriched = yield Promise.all(transactions.map((trx) => __awaiter(this, void 0, void 0, function* () {
                const transaction = yield this.enrichTransaction(trx);
                return transaction;
            })));
            const resp = new interfaces_1.GetTransactionResponse(enriched);
            return resp;
        });
        this.fiatAccountsRepository = app_data_source_1.appDataSource.getRepository(FiatAccounts_1.FiatAccounts);
        this.fiatTransactionsRepository = app_data_source_1.appDataSource.getRepository(FiatTransactions_1.FiatTransactions);
        this.fiatDepositsRepository = app_data_source_1.appDataSource.getRepository(FiatDeposits_1.FiatDeposits);
        this.fiatWithdrawalRequestsRepository = app_data_source_1.appDataSource.getRepository(FiatWithdrawalRequests_1.FiatWithdrawalRequests);
        this.fiatPaymentRequestsRepository = app_data_source_1.appDataSource.getRepository(FiatPaymentRequests_1.FiatPaymentRequests);
    }
    ;
}
exports.default = AispService;
//# sourceMappingURL=index.js.map