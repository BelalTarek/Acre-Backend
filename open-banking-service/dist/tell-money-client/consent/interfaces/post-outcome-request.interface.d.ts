export interface PostOutcomeRawRequest {
    ConsentId: string;
    Outcome: string;
    UserId?: string;
    Accounts?: string;
}
export interface PostOutcomeRequest {
    consentId: string;
    outcome: OutcomeStatus;
    userId?: string;
    accounts?: string[];
}
export declare enum OutcomeStatus {
    Pass = "Pass",
    Fail = "Fail"
}
export declare const mapPostOutcomeRequest: (req: PostOutcomeRequest) => PostOutcomeRawRequest;
//# sourceMappingURL=post-outcome-request.interface.d.ts.map