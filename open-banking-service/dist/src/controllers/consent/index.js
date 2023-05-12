"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const delete_consent_1 = __importDefault(require("./delete-consent"));
const get_consent_1 = __importDefault(require("./get-consent"));
const get_user_consents_1 = __importDefault(require("./get-user-consents"));
const post_outcome_1 = __importDefault(require("./post-outcome"));
const router = (0, express_1.Router)();
router.get('/get-consent/:consentId', get_consent_1.default);
router.get('/get-user-consents/:userId', get_user_consents_1.default);
router.post('/delete-consent', delete_consent_1.default);
router.post('/post-outcome', post_outcome_1.default);
exports.default = router;
//# sourceMappingURL=index.js.map