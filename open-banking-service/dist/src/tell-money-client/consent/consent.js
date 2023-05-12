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
exports.deleteConsent = exports.getUserConsents = exports.getConsent = exports.postOutcome = void 0;
const authentication_1 = require("../authentication");
const axios_1 = require("../axios");
const get_consent_response_interface_1 = require("./interfaces/get-consent-response.interface");
const post_outcome_request_interface_1 = require("./interfaces/post-outcome-request.interface");
const postOutcome = (host, apiKey, apiSecret, req) => __awaiter(void 0, void 0, void 0, function* () { return yield (0, axios_1.post)(`${host}/consent`, (0, post_outcome_request_interface_1.mapPostOutcomeRequest)(req), (0, authentication_1.getHttpHeaders)(apiKey, apiSecret)); });
exports.postOutcome = postOutcome;
const getConsent = (host, apiKey, apiSecret, ConsentId) => __awaiter(void 0, void 0, void 0, function* () { return yield (0, axios_1.get)(`${host}/consent/${ConsentId}`, (0, authentication_1.getHttpHeaders)(apiKey, apiSecret)).then((res) => (0, get_consent_response_interface_1.mapGetConsentResponse)(res)); });
exports.getConsent = getConsent;
const getUserConsents = (host, apiKey, apiSecret, UserId) => __awaiter(void 0, void 0, void 0, function* () { return yield (0, axios_1.get)(`${host}/users/${UserId}/consents`, (0, authentication_1.getHttpHeaders)(apiKey, apiSecret)).then((res) => (0, get_consent_response_interface_1.mapGetUserConsentsResponse)(res)); });
exports.getUserConsents = getUserConsents;
const deleteConsent = (host, apiKey, apiSecret, ConsentId) => __awaiter(void 0, void 0, void 0, function* () { return yield (0, axios_1.Delete)(`${host}/consent/${ConsentId}`, (0, authentication_1.getHttpHeaders)(apiKey, apiSecret)); });
exports.deleteConsent = deleteConsent;
//# sourceMappingURL=consent.js.map