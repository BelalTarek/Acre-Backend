/* eslint-disable @typescript-eslint/strict-boolean-expressions */
export interface PostOutcomeRawRequest {
  ConsentId: string;
  Outcome: string;
  UserId?: string;
  Accounts?: string[];
}
  
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
export const mapPostOutcomeRequest = (req: PostOutcomeRequest): PostOutcomeRawRequest => ({
  ConsentId: req.consentId,
  Outcome: req.outcome,
  UserId: req.userId,
  Accounts: req.accounts ? req.accounts : undefined,
});

export interface PostOutcomeResponse {
  location: string;
}

export interface PostOutcomeRawResponse {
  Location: string;
}

export const mapPostOutcomeResponse = (res: PostOutcomeRawResponse): PostOutcomeResponse => ({
  location: res.Location,
});
