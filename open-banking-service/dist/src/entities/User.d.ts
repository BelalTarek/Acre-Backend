import { Address } from './Address';
import { ClearJunctionWithdrawalRequests } from './ClearJunctionWithdrawalRequests';
import { FiatAccounts } from './FiatAccounts';
import { FiatDeposits } from './FiatDeposits';
import { FiatTransactions } from './FiatTransactions';
import { FiatWithdrawalRequests } from './FiatWithdrawalRequests';
import { PersonalDetails } from './PersonalDetails';
import { WithdrawalMethods } from './WithdrawalMethods';
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
    fiatDeposits: FiatDeposits[];
    fiatWithdrawalRequests: FiatWithdrawalRequests[];
    withdrawalMethods: WithdrawalMethods[];
    clearJunctionWithdrawalRequests: ClearJunctionWithdrawalRequests[];
    fiatTransactions: FiatTransactions[];
}
//# sourceMappingURL=User.d.ts.map