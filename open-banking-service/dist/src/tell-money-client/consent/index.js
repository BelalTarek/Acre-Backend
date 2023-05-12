"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteConsent = exports.getUserConsents = exports.postOutcome = exports.getConsent = void 0;
__exportStar(require("./interfaces"), exports);
var consent_1 = require("./consent");
Object.defineProperty(exports, "getConsent", { enumerable: true, get: function () { return consent_1.getConsent; } });
Object.defineProperty(exports, "postOutcome", { enumerable: true, get: function () { return consent_1.postOutcome; } });
Object.defineProperty(exports, "getUserConsents", { enumerable: true, get: function () { return consent_1.getUserConsents; } });
Object.defineProperty(exports, "deleteConsent", { enumerable: true, get: function () { return consent_1.deleteConsent; } });
//# sourceMappingURL=index.js.map