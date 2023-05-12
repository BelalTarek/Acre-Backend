"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TellMoneyClientFactory = void 0;
const _1 = require(".");
const TellMoneyClientFactory = (config) => ({
    postOutcome: (request) => __awaiter(void 0, void 0, void 0, function* () { return yield (0, _1.postOutcome)(config.host, config.apiKey, config.apiSecret, request); }),
    getConsent: (consentId) => __awaiter(void 0, void 0, void 0, function* () { return yield (0, _1.getConsent)(config.host, config.apiKey, config.apiSecret, consentId); }),
    getUserConsents: (userId) => __awaiter(void 0, void 0, void 0, function* () { return yield (0, _1.getUserConsents)(config.host, config.apiKey, config.apiSecret, userId); }),
    deleteConsent: (consentId) => __awaiter(void 0, void 0, void 0, function* () { return yield (0, _1.deleteConsent)(config.host, config.apiKey, config.apiSecret, consentId); }),
});
exports.TellMoneyClientFactory = TellMoneyClientFactory;
//# sourceMappingURL=client.js.map