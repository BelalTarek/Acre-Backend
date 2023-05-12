import type { GetConsentResponse } from './interfaces/get-consent-response.interface';
import type { PostOutcomeRequest } from './interfaces/post-outcome-request.interface';
export declare const postOutcome: (host: string, apiKey: string, apiSecret: string, req: PostOutcomeRequest) => Promise<string | undefined>;
export declare const getConsent: (host: string, apiKey: string, apiSecret: string, ConsentId: string) => Promise<GetConsentResponse | undefined>;
export declare const getUserConsents: (host: string, apiKey: string, apiSecret: string, UserId: string) => Promise<GetConsentResponse[] | undefined>;
export declare const deleteConsent: (host: string, apiKey: string, apiSecret: string, ConsentId: string) => Promise<string | undefined>;
//# sourceMappingURL=consent.d.ts.map