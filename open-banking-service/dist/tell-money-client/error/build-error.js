"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.buildError = void 0;
const error_1 = require("./error");
const buildError = (statusCode = 500, error = 'TellMoney Client Error', message = 'Internal Server Error') => new error_1.TellMoneyError(message, statusCode, error);
exports.buildError = buildError;
//# sourceMappingURL=build-error.js.map