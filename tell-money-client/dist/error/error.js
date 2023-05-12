"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TellMoneyError = void 0;
class TellMoneyError extends Error {
    constructor(statusCode, error, message) {
        super(message);
        this.statusCode = statusCode;
        this.error = error;
        this.message = message;
    }
}
exports.TellMoneyError = TellMoneyError;
;
//# sourceMappingURL=error.js.map