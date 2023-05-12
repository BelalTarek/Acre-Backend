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
const User_1 = require("../../entities/User");
const modulr_client_1 = __importDefault(require("../../config/modulr-client"));
const rxjs_1 = require("rxjs");
class AccountsService {
    constructor() {
        this.getUserAccounts = (userId) => __awaiter(this, void 0, void 0, function* () {
            return yield this.fiatAccountsRepository.find({
                where: { user: { auth0Id: userId, }, },
            });
        });
        this.getAccountById = (accountId) => __awaiter(this, void 0, void 0, function* () {
            return yield this.fiatAccountsRepository.findOne({
                where: { accountId, },
            });
        });
        this.getAccountBalance = (accountId) => __awaiter(this, void 0, void 0, function* () {
            const client = yield modulr_client_1.default.init();
            const getAccountByIdResponse = yield (0, rxjs_1.firstValueFrom)(client.accountsService.getAccountById(accountId));
            const getBalanceResponse = { Amount: getAccountByIdResponse.balance, Currency: getAccountByIdResponse.currency };
            return getBalanceResponse;
        });
        this.userRepository = app_data_source_1.appDataSource.getRepository(User_1.User);
        this.fiatAccountsRepository = app_data_source_1.appDataSource.getRepository(FiatAccounts_1.FiatAccounts);
    }
    ;
}
exports.default = AccountsService;
//# sourceMappingURL=accounts.service.js.map