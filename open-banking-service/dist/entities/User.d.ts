import { Address } from './Address';
import { FiatAccounts } from './FiatAccounts';
import { FiatBalance } from './FiatBalance';
import { FiatTransactions } from './FiatTransactions';
import { PersonalDetails } from './PersonalDetails';
export declare class User {
    id: string;
    auth0Id: string;
    email: string;
    picture: string | null;
    createdAt: Date;
    updatedAt: Date | null;
    verificationLevel: 'IDV1' | 'IDV2' | 'IDV3' | null;
    acceptedTerms: object | null;
    onboardingStep: 'completed' | 'initial' | 'kyc_checking' | 'kyc_completed' | 'kyc_document_upload' | 'kyc_failed' | 'kyc_ready_for_verification' | 'kyc_selfie_upload' | 'kyc_verification' | 'legal_terms' | 'personal_details' | null;
    localCurrency: 'EUR' | 'GBP' | 'USD';
    deletedAt: Date | null;
    refreshToken: string | null;
    password: string | null;
    mfaSecret: string | null;
    subscription: object | null;
    mobileRefreshToken: string | null;
    addresses: Address[];
    personalDetails: PersonalDetails;
    fiatAccounts: FiatAccounts[];
    fiatBalances: FiatBalance[];
    fiatTransactions: FiatTransactions[];
}
//# sourceMappingURL=User.d.ts.map