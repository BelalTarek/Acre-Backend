"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const verify_signature_1 = __importDefault(require("../../validation/verify-signature"));
const webhook_request_orchestrator_1 = __importDefault(require("./webhook-request-orchestrator"));
const router = (0, express_1.Router)();
router.post('/log', verify_signature_1.default, webhook_request_orchestrator_1.default);
exports.default = router;
//# sourceMappingURL=index.js.map