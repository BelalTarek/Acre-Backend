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
const accounts_service_1 = __importDefault(require("../../services/aisp/accounts.service"));
const transactions_service_1 = __importDefault(require("../../services/aisp/transactions.service"));
const webhooksOrchestrator = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const accountService = yield new accounts_service_1.default();
        const transactionService = yield new transactions_service_1.default();
        const requestInfo = req.body.Info;
        const requestData = req.body.Data;
        let webhookResponse;
        switch (requestInfo.Operation) {
            case 'GET /account':
                const getAccountResponse = yield accountService.getAccountById(requestInfo.ConsentId);
                webhookResponse = getAccountResponse;
                break;
            case 'GET /accounts':
                const getUserAccountsResponse = yield accountService.getUserAccounts(requestInfo.UserId);
                webhookResponse = getUserAccountsResponse;
                break;
            case 'GET /transactions':
                const getUserTransactionsResponse = yield transactionService.getUserTransactions(requestInfo.UserId);
                webhookResponse = getUserTransactionsResponse;
                break;
            case 'GET /balance':
                const getAccountBalanceResponse = yield accountService.getAccountBalance(requestData.AccountId);
                webhookResponse = getAccountBalanceResponse;
                break;
            default:
                webhookResponse = 'No such operation exists!';
                break;
        }
        res.status(200).send(webhookResponse);
    }
    catch (error) {
        console.log(error);
    }
});
exports.default = [webhooksOrchestrator,];
//# sourceMappingURL=webhook-request-orchestrator.js.map