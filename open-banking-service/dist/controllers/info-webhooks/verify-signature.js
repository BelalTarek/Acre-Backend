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
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateHeaders = void 0;
/* eslint-disable no-extra-boolean-cast */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-argument */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/* eslint-disable @typescript-eslint/no-explicit-any */
const jwt = __importStar(require("jsonwebtoken"));
const plutus_middlewares_1 = require("plutus-middlewares");
const publicKey = (_a = process.env.TELL_MONEY_PUBLIC_KEY) !== null && _a !== void 0 ? _a : '';
const validateHeaders = (req, res, next) => {
    var _a;
    const signature = (_a = req.headers.get('x-jws-signature')) !== null && _a !== void 0 ? _a : '';
    if (Boolean(jwt.verify(signature, publicKey, { algorithms: ['RS256',], })))
        return next((0, plutus_middlewares_1.unauthorized)('No credentials were provided'));
    return next();
};
exports.validateHeaders = validateHeaders;
//# sourceMappingURL=verify-signature.js.map