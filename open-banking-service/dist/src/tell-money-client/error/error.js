"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TellMoneyError = void 0;
class TellMoneyError extends Error {
    constructor(message, statusCode, error) {
        super(message);
        this.message = message;
        this.statusCode = statusCode;
        this.error = error;
    }
}
exports.TellMoneyError = TellMoneyError;
;
//# sourceMappingURL=error.js.map