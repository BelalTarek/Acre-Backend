"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.mapPostOutcomeTellMoneyRequest = exports.OutcomeStatus = void 0;
var OutcomeStatus;
(function (OutcomeStatus) {
    OutcomeStatus["Pass"] = "Pass";
    OutcomeStatus["Fail"] = "Fail";
})(OutcomeStatus = exports.OutcomeStatus || (exports.OutcomeStatus = {}));
const mapPostOutcomeTellMoneyRequest = (req) => {
    var _a, _b;
    return ({
        consentId: req.consentId,
        outcome: req.outcome === 'pass' ? OutcomeStatus.Pass : OutcomeStatus.Fail,
        userId: (_a = req.userId) !== null && _a !== void 0 ? _a : undefined,
        accounts: (_b = req.accounts) !== null && _b !== void 0 ? _b : undefined,
    });
};
exports.mapPostOutcomeTellMoneyRequest = mapPostOutcomeTellMoneyRequest;
//# sourceMappingURL=post-outcome-request.interface.js.map