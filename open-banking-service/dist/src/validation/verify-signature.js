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
Object.defineProperty(exports, "__esModule", { value: true });
const jwt = __importStar(require("jsonwebtoken"));
const plutus_middlewares_1 = require("plutus-middlewares");
const validateHeaders = (req, _, next) => {
    const signature = req.get('x-jws-signature');
    if (process.env.TELL_MONEY_PUBLIC_KEY === undefined) {
        return next((0, plutus_middlewares_1.buildError)(plutus_middlewares_1.UNPROCESSABLE_ENTITY_ERROR, 'Secret required.'));
    }
    if (signature === undefined) {
        return next((0, plutus_middlewares_1.buildError)(plutus_middlewares_1.UNPROCESSABLE_ENTITY_ERROR, 'Invalid request'));
    }
    console.log('process.env.TELL_MONEY_PUBLIC_KEY =>>>>>> ', process.env.TELL_MONEY_PUBLIC_KEY);
    const verify = jwt.verify(signature, process.env.TELL_MONEY_PUBLIC_KEY, { algorithms: ['RS256',], });
    if (!verify) {
        return next((0, plutus_middlewares_1.buildError)(plutus_middlewares_1.UNPROCESSABLE_ENTITY_ERROR, 'Invalid signature'));
    }
    return next();
};
exports.default = validateHeaders;
//# sourceMappingURL=verify-signature.js.map