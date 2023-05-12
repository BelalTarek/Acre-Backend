import type { GetConsentResponse, PostOutcomeRequest } from '.';
export interface TellMoneyClientInterface {
    postOutcome: (req: PostOutcomeRequest) => Promise<string | undefined>;
    getConsent: (consentId: string) => Promise<GetConsentResponse | undefined>;
    getUserConsents: (userId: string) => Promise<GetConsentResponse[] | undefined>;
    deleteConsent: (consentId: string) => Promise<string | undefined>;
}
//# sourceMappingURL=client.interface.d.ts.map