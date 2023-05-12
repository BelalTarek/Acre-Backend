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
const aisp_1 = __importDefault(require("../../services/aisp"));
const pis_1 = __importDefault(require("../../services/pis"));
const webhooksOrchestrator = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const aisp = new aisp_1.default();
        const pis = new pis_1.default();
        const requestInfo = req.body.Info;
        const requestData = req.body.Data;
        let webhookResponse;
        switch (requestInfo.Operation) {
            case 'GET /account':
                webhookResponse = yield aisp.getAccountById(requestData.AccountId);
                break;
            case 'GET /accounts':
                webhookResponse = yield aisp.getUserAccounts(requestInfo.UserId);
                break;
            case 'GET /transactions':
                webhookResponse = yield aisp.getUserTransactions(req.body);
                break;
            case 'GET /balance':
                webhookResponse = yield aisp.getAccountBalance(requestData.AccountId);
                break;
            case 'GET /payment-funds-confirmation':
                webhookResponse = yield pis.getFundsConfirmation(requestData.AccountId, requestData.Amount);
                break;
            case 'GET /payment':
                webhookResponse = yield pis.getPayment(requestData.PaymentReference);
                break;
            case 'POST /payment':
                webhookResponse = yield pis.postPayment(req.body);
                break;
            default:
                webhookResponse = 'No such operation exists!';
                break;
        }
        res.status(200).send(webhookResponse);
    }
    catch (error) {
        res.status(500).json({ error });
    }
});
exports.default = [webhooksOrchestrator,];
//# sourceMappingURL=webhook-request-orchestrator.js.map