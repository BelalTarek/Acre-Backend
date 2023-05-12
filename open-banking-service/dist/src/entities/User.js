"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.User = void 0;
/* eslint-disable max-lines */
const typeorm_1 = require("typeorm");
const Address_1 = require("./Address");
const ClearJunctionWithdrawalRequests_1 = require("./ClearJunctionWithdrawalRequests");
const FiatAccounts_1 = require("./FiatAccounts");
const FiatDeposits_1 = require("./FiatDeposits");
const FiatTransactions_1 = require("./FiatTransactions");
const FiatWithdrawalRequests_1 = require("./FiatWithdrawalRequests");
const PersonalDetails_1 = require("./PersonalDetails");
const WithdrawalMethods_1 = require("./WithdrawalMethods");
let User = class User {
};
__decorate([
    (0, typeorm_1.Column)('uuid', { primary: true, name: 'id', }),
    __metadata("design:type", String)
], User.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)('character varying', { name: 'auth0_id', unique: true, length: 255, }),
    __metadata("design:type", String)
], User.prototype, "auth0Id", void 0);
__decorate([
    (0, typeorm_1.Column)('character varying', { name: 'email', unique: true, length: 255, }),
    __metadata("design:type", String)
], User.prototype, "email", void 0);
__decorate([
    (0, typeorm_1.Column)('character varying', { name: 'picture', nullable: true, length: 255, }),
    __metadata("design:type", Object)
], User.prototype, "picture", void 0);
__decorate([
    (0, typeorm_1.Column)('timestamp with time zone', { name: 'created_at', }),
    __metadata("design:type", Date)
], User.prototype, "createdAt", void 0);
__decorate([
    (0, typeorm_1.Column)('timestamp with time zone', { name: 'updated_at', nullable: true, }),
    __metadata("design:type", Object)
], User.prototype, "updatedAt", void 0);
__decorate([
    (0, typeorm_1.Column)('enum', {
        name: 'verification_level',
        nullable: true,
        enum: ['IDV1', 'IDV2', 'IDV3',],
        default: () => "'IDV1'",
    }),
    __metadata("design:type", Object)
], User.prototype, "verificationLevel", void 0);
__decorate([
    (0, typeorm_1.Column)('json', { name: 'accepted_terms', nullable: true, }),
    __metadata("design:type", Object)
], User.prototype, "acceptedTerms", void 0);
__decorate([
    (0, typeorm_1.Column)('enum', {
        name: 'onboarding_step',
        nullable: true,
        enum: [
            'completed',
            'initial',
            'kyc_checking',
            'kyc_completed',
            'kyc_document_upload',
            'kyc_failed',
            'kyc_ready_for_verification',
            'kyc_selfie_upload',
            'kyc_verification',
            'legal_terms',
            'personal_details',
        ],
        default: () => "'initial'",
    }),
    __metadata("design:type", Object)
], User.prototype, "onboardingStep", void 0);
__decorate([
    (0, typeorm_1.Column)('enum', {
        name: 'local_currency',
        nullable: false,
        enum: ['EUR', 'GBP', 'USD',],
        default: () => "'EUR'",
    }),
    __metadata("design:type", String)
], User.prototype, "localCurrency", void 0);
__decorate([
    (0, typeorm_1.Column)('timestamp with time zone', { name: 'deleted_at', nullable: true, }),
    __metadata("design:type", Object)
], User.prototype, "deletedAt", void 0);
__decorate([
    (0, typeorm_1.Column)('text', { name: 'refresh_token', nullable: true, unique: true, }),
    __metadata("design:type", Object)
], User.prototype, "refreshToken", void 0);
__decorate([
    (0, typeorm_1.Column)('character varying', {
        name: 'password',
        nullable: true,
        length: 255,
    }),
    __metadata("design:type", Object)
], User.prototype, "password", void 0);
__decorate([
    (0, typeorm_1.Column)('character varying', {
        name: 'mfa_secret',
        nullable: true,
        length: 255,
    }),
    __metadata("design:type", Object)
], User.prototype, "mfaSecret", void 0);
__decorate([
    (0, typeorm_1.Column)('json', { name: 'subscription', nullable: true, }),
    __metadata("design:type", Object)
], User.prototype, "subscription", void 0);
__decorate([
    (0, typeorm_1.Column)('text', { name: 'mobile_refresh_token', nullable: true, }),
    __metadata("design:type", Object)
], User.prototype, "mobileRefreshToken", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => Address_1.Address, (addresses) => addresses.user),
    __metadata("design:type", Array)
], User.prototype, "addresses", void 0);
__decorate([
    (0, typeorm_1.OneToOne)(() => PersonalDetails_1.PersonalDetails, (personalDetails) => personalDetails.user),
    __metadata("design:type", PersonalDetails_1.PersonalDetails)
], User.prototype, "personalDetails", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => FiatAccounts_1.FiatAccounts, (fiatAccounts) => fiatAccounts.user),
    __metadata("design:type", Array)
], User.prototype, "fiatAccounts", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => FiatDeposits_1.FiatDeposits, (fiatDeposits) => fiatDeposits.user),
    __metadata("design:type", Array)
], User.prototype, "fiatDeposits", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => FiatWithdrawalRequests_1.FiatWithdrawalRequests, (fiatWithdrawalRequests) => fiatWithdrawalRequests.user),
    __metadata("design:type", Array)
], User.prototype, "fiatWithdrawalRequests", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => WithdrawalMethods_1.WithdrawalMethods, (withdrawalMethods) => withdrawalMethods.user),
    __metadata("design:type", Array)
], User.prototype, "withdrawalMethods", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => ClearJunctionWithdrawalRequests_1.ClearJunctionWithdrawalRequests, (clearJunctionWithdrawalRequests) => clearJunctionWithdrawalRequests.user),
    __metadata("design:type", Array)
], User.prototype, "clearJunctionWithdrawalRequests", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => FiatTransactions_1.FiatTransactions, (fiatTransactions) => fiatTransactions.user),
    __metadata("design:type", Array)
], User.prototype, "fiatTransactions", void 0);
User = __decorate([
    (0, typeorm_1.Index)('users_auth0_id_key', ['auth0Id',], { unique: true, }),
    (0, typeorm_1.Index)('idx_created_at', ['createdAt',], {}),
    (0, typeorm_1.Index)('users_deleted_at', ['deletedAt',], {}),
    (0, typeorm_1.Index)('users_unique_email', ['email',], { unique: true, }),
    (0, typeorm_1.Index)('users_pkey', ['id',], { unique: true, }),
    (0, typeorm_1.Index)('refresh_token_unique', ['refreshToken',], { unique: true, }),
    (0, typeorm_1.Entity)('users', { schema: 'public', })
], User);
exports.User = User;
//# sourceMappingURL=User.js.map