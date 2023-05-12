import type { GetConsentResponse, PostOutcomeRequest, PostOutcomeResponse, } from '.';


export interface TellMoneyClientInterface {
  postOutcome: (req: PostOutcomeRequest) => Promise<PostOutcomeResponse | undefined>;
  getConsent: (consentId: string) => Promise<GetConsentResponse | undefined>;
  getUserConsents: (userId: string) => Promise<GetConsentResponse[] | undefined>;
  deleteConsent: (consentId: string) => Promise<string | undefined>;
}
