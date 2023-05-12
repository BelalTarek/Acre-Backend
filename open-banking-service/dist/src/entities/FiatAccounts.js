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
exports.FiatAccounts = void 0;
const typeorm_1 = require("typeorm");
const FiatPaymentRequests_1 = require("./FiatPaymentRequests");
const FiatWithdrawalRequests_1 = require("./FiatWithdrawalRequests");
const User_1 = require("./User");
let FiatAccounts = class FiatAccounts {
};
__decorate([
    (0, typeorm_1.Column)('uuid', { primary: true, name: 'id', default: () => 'uuid_generate_v4()', }),
    __metadata("design:type", String)
], FiatAccounts.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)('character varying', { name: 'customer_id', length: 255, }),
    __metadata("design:type", String)
], FiatAccounts.prototype, "customerId", void 0);
__decorate([
    (0, typeorm_1.Column)('enum', { name: 'legal_entity', enum: ['GB', 'IE', 'NL',], }),
    __metadata("design:type", String)
], FiatAccounts.prototype, "legalEntity", void 0);
__decorate([
    (0, typeorm_1.Column)('character varying', { name: 'user_id', nullable: false, length: 255, }),
    __metadata("design:type", String)
], FiatAccounts.prototype, "userId", void 0);
__decorate([
    (0, typeorm_1.Column)('character varying', {
        name: 'account_id',
        nullable: true,
        length: 255,
    }),
    __metadata("design:type", Object)
], FiatAccounts.prototype, "accountId", void 0);
__decorate([
    (0, typeorm_1.Column)('enum', {
        name: 'currency',
        nullable: true,
        enum: ['EUR', 'GBP', 'USD',],
    }),
    __metadata("design:type", Object)
], FiatAccounts.prototype, "currency", void 0);
__decorate([
    (0, typeorm_1.Column)('character varying', { name: 'type', nullable: true, length: 255, }),
    __metadata("design:type", Object)
], FiatAccounts.prototype, "type", void 0);
__decorate([
    (0, typeorm_1.Column)('character varying', {
        name: 'iban_account',
        nullable: true,
        length: 255,
    }),
    __metadata("design:type", Object)
], FiatAccounts.prototype, "ibanAccount", void 0);
__decorate([
    (0, typeorm_1.Column)('character varying', {
        name: 'bic_sort',
        nullable: true,
        length: 255,
    }),
    __metadata("design:type", Object)
], FiatAccounts.prototype, "bicSort", void 0);
__decorate([
    (0, typeorm_1.Column)('json', { name: 'api_request', nullable: true, }),
    __metadata("design:type", Object)
], FiatAccounts.prototype, "apiRequest", void 0);
__decorate([
    (0, typeorm_1.Column)('json', { name: 'api_response', nullable: true, }),
    __metadata("design:type", Object)
], FiatAccounts.prototype, "apiResponse", void 0);
__decorate([
    (0, typeorm_1.Column)('timestamp with time zone', {
        name: 'created_at',
        default: () => 'now()',
    }),
    __metadata("design:type", Date)
], FiatAccounts.prototype, "createdAt", void 0);
__decorate([
    (0, typeorm_1.Column)('timestamp with time zone', {
        name: 'updated_at',
        default: () => 'now()',
    }),
    __metadata("design:type", Date)
], FiatAccounts.prototype, "updatedAt", void 0);
__decorate([
    (0, typeorm_1.Column)('character varying', {
        name: 'payin_id',
        nullable: true,
        length: 255,
    }),
    __metadata("design:type", Object)
], FiatAccounts.prototype, "payinId", void 0);
__decorate([
    (0, typeorm_1.Column)('character varying', {
        name: 'payout_id',
        nullable: true,
        length: 255,
    }),
    __metadata("design:type", Object)
], FiatAccounts.prototype, "payoutId", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => User_1.User, (users) => users.fiatAccounts),
    (0, typeorm_1.JoinColumn)([{ name: 'user_id', referencedColumnName: 'auth0Id', },]),
    __metadata("design:type", User_1.User)
], FiatAccounts.prototype, "user", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => FiatWithdrawalRequests_1.FiatWithdrawalRequests, (fiatWithdrawalRequests) => fiatWithdrawalRequests.fiatAccount),
    __metadata("design:type", Array)
], FiatAccounts.prototype, "fiatWithdrawalRequests", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => FiatPaymentRequests_1.FiatPaymentRequests, (fiatPaymentRequests) => fiatPaymentRequests.fiatAccount),
    __metadata("design:type", Array)
], FiatAccounts.prototype, "fiatPaymentRequests", void 0);
FiatAccounts = __decorate([
    (0, typeorm_1.Index)('fiat_accounts_pkey', ['id',], { unique: true, }),
    (0, typeorm_1.Entity)('fiat_accounts', { schema: 'public', })
], FiatAccounts);
exports.FiatAccounts = FiatAccounts;
//# sourceMappingURL=FiatAccounts.js.map