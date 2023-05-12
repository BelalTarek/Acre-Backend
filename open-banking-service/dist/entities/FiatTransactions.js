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
exports.FiatTransactions = void 0;
const typeorm_1 = require("typeorm");
const User_1 = require("./User");
let FiatTransactions = class FiatTransactions {
};
__decorate([
    (0, typeorm_1.Column)('uuid', { primary: true, name: 'id', }),
    __metadata("design:type", String)
], FiatTransactions.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)('enum', {
        name: 'type',
        nullable: true,
        enum: [
            'BUY_ORDER_FEE',
            'CARD_PURCHASE',
            'DEPOSIT_FEE',
            'DEPOSIT_FUNDS_RECEIVED',
            'IEO_PLEDGE',
            'LOAD_PLUTUS_CARD_FROM_CJ_WALLET',
            'ORDER_CANCELLED',
            'ORDER_CREATED',
            'ORDER_EXPIRED',
            'ORDER_FULFILLED',
            'PLUTON_WITHDRAW',
            'PLUTUS_WALLET_WITHDRAW_FEE',
            'SELL_ORDER_FEE',
            'SELL_ORDER_LOAD',
            'SUBSCRIPTION_CHARGE',
            'TRANSACTION_CANCELLED',
            'UNLOAD_PLUTUS_CARD_TO_CJ_WALLET',
            'WITHDRAWAL_FEE',
            'WITHDRAWAL_REQUEST_CREATED',
            'WITHDRAWAL_REQUEST_REJECTED',
        ],
    }),
    __metadata("design:type", Object)
], FiatTransactions.prototype, "type", void 0);
__decorate([
    (0, typeorm_1.Column)('numeric', {
        name: 'fiat_amount',
        precision: 19,
        scale: 2,
        default: () => '0',
    }),
    __metadata("design:type", String)
], FiatTransactions.prototype, "fiatAmount", void 0);
__decorate([
    (0, typeorm_1.Column)('enum', { name: 'fiat_currency', enum: ['EUR', 'GBP', 'USD',], }),
    __metadata("design:type", String)
], FiatTransactions.prototype, "fiatCurrency", void 0);
__decorate([
    (0, typeorm_1.Column)('text', { name: 'reference_type', }),
    __metadata("design:type", String)
], FiatTransactions.prototype, "referenceType", void 0);
__decorate([
    (0, typeorm_1.Column)('uuid', { name: 'reference_id', }),
    __metadata("design:type", String)
], FiatTransactions.prototype, "referenceId", void 0);
__decorate([
    (0, typeorm_1.Column)('timestamp with time zone', { name: 'created_at', }),
    __metadata("design:type", Date)
], FiatTransactions.prototype, "createdAt", void 0);
__decorate([
    (0, typeorm_1.Column)('timestamp with time zone', { name: 'updated_at', nullable: true, }),
    __metadata("design:type", Object)
], FiatTransactions.prototype, "updatedAt", void 0);
__decorate([
    (0, typeorm_1.Column)('enum', {
        name: 'status',
        nullable: true,
        enum: ['FAILED', 'PENDING', 'SETTLED',],
        default: () => "'PENDING'",
    }),
    __metadata("design:type", Object)
], FiatTransactions.prototype, "status", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => User_1.User, (users) => users.fiatTransactions),
    (0, typeorm_1.JoinColumn)([{ name: 'user_id', referencedColumnName: 'auth0Id', },]),
    __metadata("design:type", User_1.User)
], FiatTransactions.prototype, "user", void 0);
FiatTransactions = __decorate([
    (0, typeorm_1.Index)('fiat_transactions_pkey', ['id',], { unique: true, }),
    (0, typeorm_1.Entity)('fiat_transactions', { schema: 'public', })
], FiatTransactions);
exports.FiatTransactions = FiatTransactions;
//# sourceMappingURL=FiatTransactions.js.map