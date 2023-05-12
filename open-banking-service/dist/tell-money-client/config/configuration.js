"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.configuration = void 0;
const configuration = () => {
    var _a, _b, _c;
    return ({
        host: (_a = process.env.TELL_MONRY_HOST) !== null && _a !== void 0 ? _a : '',
        apiKey: (_b = process.env.TELL_MONRY_API_KEY) !== null && _b !== void 0 ? _b : 'c6ae6b7e-c56d-4c08-8484-98a9ab058d22',
        apiSecret: (_c = process.env.TELL_MONRY_API_SECRET) !== null && _c !== void 0 ? _c : '',
    });
};
exports.configuration = configuration;
//# sourceMappingURL=configuration.js.map