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
exports.FiatPaymentRequests = void 0;
const typeorm_1 = require("typeorm");
const FiatAccounts_1 = require("./FiatAccounts");
let FiatPaymentRequests = class FiatPaymentRequests {
};
__decorate([
    (0, typeorm_1.Column)('uuid', {
        primary: true,
        name: 'id',
        default: () => 'uuid_generate_v4()',
    }),
    __metadata("design:type", String)
], FiatPaymentRequests.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)('numeric', { name: 'amount', precision: 19, scale: 2, }),
    __metadata("design:type", String)
], FiatPaymentRequests.prototype, "amount", void 0);
__decorate([
    (0, typeorm_1.Column)('enum', { name: 'currency', enum: ['EUR', 'GBP', 'USD',], }),
    __metadata("design:type", String)
], FiatPaymentRequests.prototype, "currency", void 0);
__decorate([
    (0, typeorm_1.Column)('enum', {
        name: 'status',
        enum: ['COMPLETED', 'PENDING', 'REJECTED', 'TRANSFERRED',],
    }),
    __metadata("design:type", String)
], FiatPaymentRequests.prototype, "status", void 0);
__decorate([
    (0, typeorm_1.Column)('enum', { name: 'type', enum: ['DOMESTIC', 'INTERNATIONAL',], }),
    __metadata("design:type", String)
], FiatPaymentRequests.prototype, "type", void 0);
__decorate([
    (0, typeorm_1.Column)('json', { name: 'payee', nullable: true, }),
    __metadata("design:type", Object)
], FiatPaymentRequests.prototype, "payee", void 0);
__decorate([
    (0, typeorm_1.Column)('json', { name: 'api_request', nullable: true, }),
    __metadata("design:type", Object)
], FiatPaymentRequests.prototype, "apiRequest", void 0);
__decorate([
    (0, typeorm_1.Column)('timestamp with time zone', {
        name: 'created_at',
        nullable: true,
        default: () => 'now()',
    }),
    __metadata("design:type", Object)
], FiatPaymentRequests.prototype, "createdAt", void 0);
__decorate([
    (0, typeorm_1.Column)('timestamp with time zone', {
        name: 'updated_at',
        nullable: true,
        default: () => 'now()',
    }),
    __metadata("design:type", Object)
], FiatPaymentRequests.prototype, "updatedAt", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => FiatAccounts_1.FiatAccounts, (fiatAccounts) => fiatAccounts.fiatPaymentRequests),
    (0, typeorm_1.JoinColumn)([{ name: 'fiat_account_id', referencedColumnName: 'id', },]),
    __metadata("design:type", FiatAccounts_1.FiatAccounts)
], FiatPaymentRequests.prototype, "fiatAccount", void 0);
FiatPaymentRequests = __decorate([
    (0, typeorm_1.Index)('fiat_payment_requests_pkey', ['id',], { unique: true, }),
    (0, typeorm_1.Entity)('fiat_payment_requests', { schema: 'public', })
], FiatPaymentRequests);
exports.FiatPaymentRequests = FiatPaymentRequests;
//# sourceMappingURL=FiatPaymentRequests.js.map