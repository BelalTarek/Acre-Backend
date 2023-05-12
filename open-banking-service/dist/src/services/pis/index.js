"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
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
const FiatPaymentRequests_1 = require("../../entities/FiatPaymentRequests");
const FiatAccounts_1 = require("../../entities/FiatAccounts");
const FiatTransactions_1 = require("../../entities/FiatTransactions");
const User_1 = require("../../entities/User");
const uuid = __importStar(require("uuid"));
const interfaces_1 = require("../../interfaces");
const modulr_client_1 = __importDefault(require("../../config/modulr-client"));
const rxjs_1 = require("rxjs");
class PisService {
    constructor() {
        this.getPayment = (id) => __awaiter(this, void 0, void 0, function* () {
            return new interfaces_1.GetPaymentResponse(yield this.fiatPaymentsRepository.findOneOrFail({
                where: { id, },
            }));
        });
        this.getFundsConfirmation = (id, amount) => __awaiter(this, void 0, void 0, function* () {
            const account = yield this.fiatAccountsRepository.findOneOrFail({
                where: { id, },
            });
            const accountId = (account === null || account === void 0 ? void 0 : account.accountId) || '';
            const client = yield modulr_client_1.default.init();
            const getAccountByIdResponse = yield (0, rxjs_1.firstValueFrom)(client.accountsService.getAccountById(accountId));
            const confirmation = new interfaces_1.GetFundsConfirmationResponse(amount, getAccountByIdResponse);
            return confirmation;
        });
        this.postPayment = ({ Data: data, Info: info }) => __awaiter(this, void 0, void 0, function* () {
            const fiatAccount = yield this.fiatAccountsRepository.findOneOrFail({
                where: { id: data.AccountId, },
            });
            const user = yield this.userRepository.findOneOrFail({
                where: { auth0Id: info.UserId, },
            });
            const fiatPaymentRequest = {
                amount: data.Amount,
                currency: data.Currency,
                status: 'PENDING',
                type: data.PaymentType.toLocaleUpperCase(),
                payee: {
                    BeneficiaryName: data.BeneficiaryName,
                    BeneficiaryIdentification: data.BeneficiaryIdentification,
                },
                id: uuid.v4(),
                apiRequest: null,
                createdAt: new Date(),
                updatedAt: new Date(),
                fiatAccount,
            };
            const { id } = yield this.fiatPaymentsRepository.save(fiatPaymentRequest);
            const fiatTransactionRequest = {
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
            };
            yield this.fiatTransactionsRepository.save(fiatTransactionRequest);
            return new interfaces_1.PostPaymentResponse(id);
        });
        this.fiatPaymentsRepository = app_data_source_1.appDataSource.getRepository(FiatPaymentRequests_1.FiatPaymentRequests);
        this.fiatAccountsRepository = app_data_source_1.appDataSource.getRepository(FiatAccounts_1.FiatAccounts);
        this.fiatTransactionsRepository = app_data_source_1.appDataSource.getRepository(FiatTransactions_1.FiatTransactions);
        this.userRepository = app_data_source_1.appDataSource.getRepository(User_1.User);
    }
    ;
}
exports.default = PisService;
//# sourceMappingURL=index.js.map