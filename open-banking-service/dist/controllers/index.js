"use strict";
/* eslint-disable @typescript-eslint/no-unsafe-argument */
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const aisp_1 = __importDefault(require("./aisp"));
const consent_1 = __importDefault(require("./consent"));
// import { validateHeaders, } from './info-webhooks/verify-signature';
const router = (0, express_1.Router)();
router.use('/consent', consent_1.default);
router.use('/webhook', aisp_1.default);
exports.default = router;
//# sourceMappingURL=index.js.map