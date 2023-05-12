"use strict";
/* eslint-disable import/no-unresolved */
/* eslint-disable @typescript-eslint/no-unsafe-argument */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
Object.defineProperty(exports, "__esModule", { value: true });
exports.getHttpHeaders = void 0;
const getHttpHeaders = (username, password) => {
    const header = {
        apiKey: username,
        apiSecret: password,
    };
    return `Basic ${Buffer.from(`${header.apiKey}:${header.apiSecret}`).toString('base64')}`;
};
exports.getHttpHeaders = getHttpHeaders;
// export const validateHeaders = (token: string, publicKey: string): boolean => Boolean(jwt.verify(token, publicKey, {algorithms: ['RS256',],}));
//# sourceMappingURL=authentication.js.map