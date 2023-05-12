/* eslint-disable @typescript-eslint/strict-boolean-expressions */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/* eslint-disable @typescript-eslint/no-explicit-any */
export interface PostOutcomeRequest {
  consentId: string;
  outcome: OutcomeStatus;
  userId?: string;
  accounts?: string[];
}

export enum OutcomeStatus {
  Pass = 'Pass',
  Fail = 'Fail'
}
  
export const mapPostOutcomeTellMoneyRequest = (req: PostOutcomeRequest): PostOutcomeRequest => ({
  consentId: req.consentId,
  outcome: OutcomeStatus[req.outcome],
  userId: req.userId ?? undefined,
  accounts: req.accounts ?? undefined,
});
