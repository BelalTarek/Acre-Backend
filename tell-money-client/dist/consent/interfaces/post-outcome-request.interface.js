"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.mapPostOutcomeRequest = exports.OutcomeStatus = void 0;
var OutcomeStatus;
(function (OutcomeStatus) {
    OutcomeStatus["Pass"] = "Pass";
    OutcomeStatus["Fail"] = "Fail";
})(OutcomeStatus = exports.OutcomeStatus || (exports.OutcomeStatus = {}));
const mapPostOutcomeRequest = (req) => ({
    ConsentId: req.consentId,
    Outcome: req.outcome,
    UserId: req.userId,
    Accounts: req.accounts ? req.accounts : undefined,
});
exports.mapPostOutcomeRequest = mapPostOutcomeRequest;
//# sourceMappingURL=post-outcome-request.interface.js.map