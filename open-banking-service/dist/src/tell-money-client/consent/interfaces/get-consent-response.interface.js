"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.mapGetUserConsentsResponse = exports.mapGetConsentResponse = void 0;
const mapGetConsentResponse = (res) => ({
    consentId: res.ConsentId,
    environment: res.Environment,
    gatewayId: res.GatewayId,
    gatewayDomain: res.GatewayDomain,
    tppName: res.TppName,
    tppWebsite: res.TppWebsite,
    appName: res.AppName,
    appDescription: res.AppDescription,
    appWebsite: res.AppWebsite,
    consentStatus: res.ConsentStatus,
    scope: res.Scope,
    paymentType: res.PaymentType,
    paymentInformation: res.PaymentInformation,
    permissions: res.Permissions,
    consentRequestCreated: res.ConsentRequestCreated,
    consentRequestExpiry: res.ConsentRequestExpiry,
    consentGranted: res.ConsentGranted,
    consentExpiry: res.ConsentExpiry,
    consentRevoked: res.ConsentRevoked,
});
exports.mapGetConsentResponse = mapGetConsentResponse;
const mapGetUserConsentsResponse = (res) => (res.map(consent => ({
    consentId: consent.ConsentId,
    environment: consent.Environment,
    gatewayId: consent.GatewayId,
    gatewayDomain: consent.GatewayDomain,
    tppName: consent.TppName,
    tppWebsite: consent.TppWebsite,
    appName: consent.AppName,
    appDescription: consent.AppDescription,
    appWebsite: consent.AppWebsite,
    consentStatus: consent.ConsentStatus,
    scope: consent.Scope,
    paymentType: consent.PaymentType,
    paymentInformation: consent.PaymentInformation,
    permissions: consent.Permissions,
    consentRequestCreated: consent.ConsentRequestCreated,
    consentRequestExpiry: consent.ConsentRequestExpiry,
    consentGranted: consent.ConsentGranted,
    consentExpiry: consent.ConsentExpiry,
    consentRevoked: consent.ConsentRevoked,
})));
exports.mapGetUserConsentsResponse = mapGetUserConsentsResponse;
//# sourceMappingURL=get-consent-response.interface.js.map