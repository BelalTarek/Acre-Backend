"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
/* eslint-disable no-console */
const express_1 = require("express");
const log_request_1 = __importDefault(require("./webhook-request"));
const router = (0, express_1.Router)();
router.post('/log', log_request_1.default);
exports.default = router;
//# sourceMappingURL=index.js.map