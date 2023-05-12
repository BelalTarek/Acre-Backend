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
export declare const mapPostOutcomeTellMoneyRequest: (req: any) => PostOutcomeRequest;
//# sourceMappingURL=post-outcome-request.interface.d.ts.map