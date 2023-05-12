"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.configFromEnv = void 0;
const isDefined_1 = require("../helpers/isDefined");
;
const checkEnv = (name) => {
    if (!(0, isDefined_1.isDefined)(process.env[name])) {
        throw new Error(`Env ${name} is not defined`);
    }
};
const requiredEnvs = ['TELL_MONEY_HOST', 'TELL_MONEY_API_KEY', 'TELL_MONEY_API_SECRET', 'TELL_MONEY_PUBLIC_KEY',];
const configFromEnv = () => {
    var _a, _b, _c, _d;
    requiredEnvs.forEach(checkEnv);
    return {
        host: (_a = process.env.TELL_MONEY_HOST) !== null && _a !== void 0 ? _a : 'https://aspsp.tell.systems/api',
        apiKey: (_b = process.env.TELL_MONEY_API_KEY) !== null && _b !== void 0 ? _b : 'c6ae6b7e-c56d-4c08-8484-98a9ab058d22',
        apiSecret: (_c = process.env.TELL_MONEY_API_SECRET) !== null && _c !== void 0 ? _c : '16b59897-b6d8-43ec-ab53-c872c5b3832c',
        publicKey: (_d = process.env.TELL_MONEY_PUBLIC_KEY) !== null && _d !== void 0 ? _d : '',
    };
};
exports.configFromEnv = configFromEnv;
//# sourceMappingURL=index.js.map