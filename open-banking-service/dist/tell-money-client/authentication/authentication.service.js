"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthenticationService = void 0;
class AuthenticationService {
    constructor(config) {
        this.config = config;
        this.getHttpHeaders = () => {
            const { apiKey, apiSecret, } = this.config;
            // jwt.sign()
            // crypto.enc.Base64.stringify()
            return `Basic `;
        };
        if (this.config.apiKey === '' || this.config.apiSecret === '') {
            throw new Error('API Key and Secret are required.');
        }
    }
}
exports.AuthenticationService = AuthenticationService;
;
//# sourceMappingURL=authentication.service.js.map