"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.validate = void 0;
// import { Logger, } from '@nestjs/common';
const joi_1 = __importDefault(require("joi"));
// const logger = new Logger('ConfigValidation');
exports.validate = joi_1.default.object({
    TELL_MONEY_HOST: joi_1.default.string().required(),
    TELL_MONEY_API_SECRET: joi_1.default.string().required(),
    TELL_MONEY_API_KEY: joi_1.default.string().required(),
});
//# sourceMappingURL=config.validation.js.map