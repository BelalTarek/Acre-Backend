export interface GetConsentRawResponse {
    ConsentId?: string;
    Environment?: string;
    GatewayId?: string;
    GatewayDomain?: string;
    TppName?: string;
    TppWebsite?: string;
    AppName?: string;
    AppDescription?: string;
    AppWebsite?: string;
    ConsentStatus?: string;
    Scope?: string;
    PaymentType?: string;
    PaymentInformation?: string;
    Permissions?: string[];
    ConsentRequestCreated?: string;
    ConsentRequestExpiry?: string;
    ConsentGranted?: string;
    ConsentExpiry?: string;
    ConsentRevoked?: string;
}
export interface GetConsentResponse {
    consentId?: string;
    environment?: string;
    gatewayId?: string;
    gatewayDomain?: string;
    tppName?: string;
    tppWebsite?: string;
    appName?: string;
    appDescription?: string;
    appWebsite?: string;
    consentStatus?: string;
    scope?: string;
    paymentType?: string;
    paymentInformation?: string;
    permissions?: string[];
    consentRequestCreated?: string;
    consentRequestExpiry?: string;
    consentGranted?: string;
    consentExpiry?: string;
    consentRevoked?: string;
}
export declare const mapGetConsentResponse: (res: GetConsentRawResponse) => GetConsentResponse;
export declare const mapGetUserConsentsResponse: (res: GetConsentRawResponse[]) => GetConsentResponse[];
//# sourceMappingURL=get-consent-response.interface.d.ts.map