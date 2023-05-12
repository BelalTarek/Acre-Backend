export interface PaymentInformation {
  creditorAccount: {
    identification: string | undefined;
    name: string | undefined;
    schemeName: string | undefined;
  };
  endToEndIdentification: string | undefined;
  instructedAmount: {
    amount: string | undefined;
    currency: string | undefined;
  };
  instructionIdentification: string | undefined;
}

export interface RawPaymentInformation {
  CreditorAccount: {
    Identification: string;
    Name: string;
    SchemeName: string;
  };
  EndToEndIdentification: string;
  InstructedAmount: {
    Amount: string;
    Currency: string;
  };
  InstructionIdentification: string;
}
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
  PaymentInformation?: RawPaymentInformation;
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
  paymentInformation?: PaymentInformation;
  permissions?: string[];
  consentRequestCreated?: string;
  consentRequestExpiry?: string;
  consentGranted?: string;
  consentExpiry?: string;
  consentRevoked?: string;
}

const mapPaymentInformation = (paymentInformation: RawPaymentInformation | undefined): PaymentInformation => ({
  creditorAccount: {
    identification: paymentInformation?.CreditorAccount.Identification,
    name: paymentInformation?.CreditorAccount.Name,
    schemeName: paymentInformation?.CreditorAccount.SchemeName,
  },
  endToEndIdentification: paymentInformation?.EndToEndIdentification,
  instructedAmount: {
    amount: paymentInformation?.InstructedAmount.Amount,
    currency: paymentInformation?.InstructedAmount.Currency,
  },
  instructionIdentification: paymentInformation?.InstructionIdentification,
});

export const mapGetConsentResponse = (res: GetConsentRawResponse): GetConsentResponse => ({
  consentId: res.ConsentId,
  environment: res.Environment,
  gatewayId: res.GatewayId ,
  gatewayDomain: res.GatewayDomain ,
  tppName: res.TppName ,
  tppWebsite: res.TppWebsite ,
  appName: res.AppName ,
  appDescription: res.AppDescription ,
  appWebsite: res.AppWebsite ,
  consentStatus: res.ConsentStatus ,
  scope: res.Scope ,
  paymentType: res.PaymentType ,
  paymentInformation: mapPaymentInformation(res.PaymentInformation),
  permissions: res.Permissions ,
  consentRequestCreated: res.ConsentRequestCreated ,
  consentRequestExpiry: res.ConsentRequestExpiry ,
  consentGranted: res.ConsentGranted ,
  consentExpiry: res.ConsentExpiry ,
  consentRevoked: res.ConsentRevoked,
});

export const mapGetUserConsentsResponse = (res: GetConsentRawResponse[]): GetConsentResponse[] => (
  res.map(consent => ({
    consentId: consent.ConsentId,
    environment: consent.Environment,
    gatewayId: consent.GatewayId ,
    gatewayDomain: consent.GatewayDomain ,
    tppName: consent.TppName ,
    tppWebsite: consent.TppWebsite ,
    appName: consent.AppName ,
    appDescription: consent.AppDescription ,
    appWebsite: consent.AppWebsite ,
    consentStatus: consent.ConsentStatus ,
    scope: consent.Scope ,
    paymentType: consent.PaymentType ,
    paymentInformation: mapPaymentInformation(consent.PaymentInformation),
    permissions: consent.Permissions ,
    consentRequestCreated: consent.ConsentRequestCreated ,
    consentRequestExpiry: consent.ConsentRequestExpiry ,
    consentGranted: consent.ConsentGranted ,
    consentExpiry: consent.ConsentExpiry ,
    consentRevoked: consent.ConsentRevoked,
  }))
);
