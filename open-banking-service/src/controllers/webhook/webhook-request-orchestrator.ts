import type { Request, Response, } from 'express';
import aispService from '../../services/aisp';
import pisService from '../../services/pis';


const webhooksOrchestrator = async (req: Request, res: Response): Promise<void> => {
  try {
    
    const aisp = new aispService();
    const pis = new pisService();

    const requestInfo = req.body.Info
    const requestData = req.body.Data

    let webhookResponse: any;

    switch (requestInfo.Operation) {
      case 'GET /account':
        webhookResponse = await aisp.getAccountById(requestData.AccountId);
        break;
      case 'GET /accounts':
        webhookResponse = await aisp.getUserAccounts(requestInfo.UserId);
        break;
      case 'GET /transactions':
        webhookResponse = await aisp.getUserTransactions(req.body);
        break;
      case 'GET /balance':
        webhookResponse = await aisp.getAccountBalance(requestData.AccountId);
        break;
      case 'GET /payment-funds-confirmation':
        webhookResponse = await pis.getFundsConfirmation(requestData.AccountId, requestData.Amount);
        break;
      case 'GET /payment':
        webhookResponse = await pis.getPayment(requestData.PaymentReference);
        break;
      case 'POST /payment':
        webhookResponse = await pis.postPayment(req.body);
        break;
      default:
        webhookResponse = 'No such operation exists!';
        break;
    }
    res.status(200).send(webhookResponse);
  } catch (error) {
    res.status(500).json({ error })
  }

};
export default [webhooksOrchestrator,];
