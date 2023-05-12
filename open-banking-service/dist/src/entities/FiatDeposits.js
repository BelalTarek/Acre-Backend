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
exports.FiatDeposits = void 0;
const typeorm_1 = require("typeorm");
const User_1 = require("./User");
let FiatDeposits = class FiatDeposits {
};
__decorate([
    (0, typeorm_1.Column)('uuid', { primary: true, name: 'id', default: () => 'uuid_generate_v4()', }),
    __metadata("design:type", String)
], FiatDeposits.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)('character varying', { name: 'user_id', nullable: false, length: 255, }),
    __metadata("design:type", String)
], FiatDeposits.prototype, "userId", void 0);
__decorate([
    (0, typeorm_1.Column)('numeric', {
        name: 'amount',
        nullable: true,
        precision: 19,
        scale: 2,
    }),
    __metadata("design:type", Object)
], FiatDeposits.prototype, "amount", void 0);
__decorate([
    (0, typeorm_1.Column)('text', { name: 'currency', }),
    __metadata("design:type", String)
], FiatDeposits.prototype, "currency", void 0);
__decorate([
    (0, typeorm_1.Column)('numeric', {
        name: 'fee_amount',
        nullable: true,
        precision: 19,
        scale: 2,
    }),
    __metadata("design:type", Object)
], FiatDeposits.prototype, "feeAmount", void 0);
__decorate([
    (0, typeorm_1.Column)('numeric', {
        name: 'fee_exchange_rate',
        nullable: true,
        precision: 19,
        scale: 4,
    }),
    __metadata("design:type", Object)
], FiatDeposits.prototype, "feeExchangeRate", void 0);
__decorate([
    (0, typeorm_1.Column)('text', { name: 'fee_currency', nullable: true, }),
    __metadata("design:type", Object)
], FiatDeposits.prototype, "feeCurrency", void 0);
__decorate([
    (0, typeorm_1.Column)('character varying', {
        name: 'status',
        length: 16,
        default: () => "'REQUESTED'",
    }),
    __metadata("design:type", String)
], FiatDeposits.prototype, "status", void 0);
__decorate([
    (0, typeorm_1.Column)('character varying', {
        name: 'provider',
        unique: true,
        length: 16,
        default: () => "'sofort'",
    }),
    __metadata("design:type", String)
], FiatDeposits.prototype, "provider", void 0);
__decorate([
    (0, typeorm_1.Column)('character varying', {
        name: 'provider_deposit_id',
        nullable: true,
        unique: true,
        length: 100,
    }),
    __metadata("design:type", Object)
], FiatDeposits.prototype, "providerDepositId", void 0);
__decorate([
    (0, typeorm_1.Column)('timestamp with time zone', {
        name: 'provider_transaction_time',
        nullable: true,
    }),
    __metadata("design:type", Object)
], FiatDeposits.prototype, "providerTransactionTime", void 0);
__decorate([
    (0, typeorm_1.Column)('json', { name: 'api_reponse', nullable: true, }),
    __metadata("design:type", Object)
], FiatDeposits.prototype, "apiReponse", void 0);
__decorate([
    (0, typeorm_1.Column)('timestamp with time zone', { name: 'created_at', default: () => 'now()', }),
    __metadata("design:type", Date)
], FiatDeposits.prototype, "createdAt", void 0);
__decorate([
    (0, typeorm_1.Column)('timestamp with time zone', { name: 'updated_at', default: () => 'now()', }),
    __metadata("design:type", Date)
], FiatDeposits.prototype, "updatedAt", void 0);
__decorate([
    (0, typeorm_1.Column)('numeric', {
        name: 'deposit_amount',
        precision: 19,
        scale: 2,
        default: () => 0,
    }),
    __metadata("design:type", Number)
], FiatDeposits.prototype, "depositAmount", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => User_1.User, (users) => users.fiatDeposits),
    (0, typeorm_1.JoinColumn)([{ name: 'user_id', referencedColumnName: 'auth0Id', },]),
    __metadata("design:type", User_1.User)
], FiatDeposits.prototype, "user", void 0);
FiatDeposits = __decorate([
    (0, typeorm_1.Index)('fiat_deposits_pkey', ['id',], { unique: true, }),
    (0, typeorm_1.Index)('provider_provider_deposit_id_unique', ['provider', 'providerDepositId',], { unique: true, }),
    (0, typeorm_1.Entity)('fiat_deposits', { schema: 'public', })
], FiatDeposits);
exports.FiatDeposits = FiatDeposits;
//# sourceMappingURL=FiatDeposits.js.map