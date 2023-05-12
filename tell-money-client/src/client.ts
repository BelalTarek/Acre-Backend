import { deleteConsent, getConsent, getUserConsents, postOutcome,} from '.';

import type { GetConsentResponse, PostOutcomeRequest, PostOutcomeResponse,} from '.';
import type { TellMoneyClientInterface, } from './client.interface';
import type { TellMoneyConfigInterface, } from './config';


export const TellMoneyClientFactory = (config: TellMoneyConfigInterface): TellMoneyClientInterface => 

  ({
    
    postOutcome: async (request: PostOutcomeRequest): Promise<PostOutcomeResponse | undefined> => await postOutcome(config.host, config.apiKey, config.apiSecret , request),
    getConsent: async (consentId: string): Promise<GetConsentResponse | undefined> => await getConsent(config.host, config.apiKey, config.apiSecret , consentId),
    getUserConsents: async (userId: string): Promise<GetConsentResponse[] | undefined> => await getUserConsents(config.host, config.apiKey, config.apiSecret , userId),
    deleteConsent: async (consentId: string): Promise<string | undefined> => await deleteConsent(config.host, config.apiKey, config.apiSecret , consentId),
     
  })
;
