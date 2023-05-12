"use strict";
/* eslint-disable @typescript-eslint/no-unsafe-argument */
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const plutus_middlewares_1 = require("plutus-middlewares");
const webhook_1 = __importDefault(require("./webhook"));
const consent_1 = __importDefault(require("./consent"));
const router = (0, express_1.Router)();
const jwtValidator = (0, plutus_middlewares_1.auth)([process.env.AUTH0_PLUTUS_PLATFORM_CLIENT_ID, process.env.AUTH0_MOBILE_CLIENT_ID]);
router.use('/consent', jwtValidator, consent_1.default);
router.use('/webhook', webhook_1.default);
exports.default = router;
//# sourceMappingURL=index.js.map