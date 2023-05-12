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
exports.FiatBalance = void 0;
const typeorm_1 = require("typeorm");
const User_1 = require("./User");
let FiatBalance = class FiatBalance {
};
__decorate([
    (0, typeorm_1.Column)('uuid', { primary: true, name: 'id', }),
    __metadata("design:type", String)
], FiatBalance.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)('character varying', { name: 'user_id', nullable: true, length: 255, }),
    __metadata("design:type", Object)
], FiatBalance.prototype, "userId", void 0);
__decorate([
    (0, typeorm_1.Column)('enum', { name: 'currency', enum: ['EUR', 'GBP', 'USD',], }),
    __metadata("design:type", String)
], FiatBalance.prototype, "currency", void 0);
__decorate([
    (0, typeorm_1.Column)('numeric', {
        name: 'amount',
        precision: 19,
        scale: 2,
        default: () => '0',
    }),
    __metadata("design:type", String)
], FiatBalance.prototype, "amount", void 0);
__decorate([
    (0, typeorm_1.Column)('timestamp with time zone', { name: 'created_at', }),
    __metadata("design:type", Date)
], FiatBalance.prototype, "createdAt", void 0);
__decorate([
    (0, typeorm_1.Column)('timestamp with time zone', { name: 'updated_at', nullable: true, }),
    __metadata("design:type", Object)
], FiatBalance.prototype, "updatedAt", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => User_1.User, (users) => users.fiatBalances),
    (0, typeorm_1.JoinColumn)([{ name: 'user_id', referencedColumnName: 'auth0Id', },]),
    __metadata("design:type", User_1.User)
], FiatBalance.prototype, "user", void 0);
FiatBalance = __decorate([
    (0, typeorm_1.Index)('user_currency_fiat_balance', ['currency', 'userId',], { unique: true, }),
    (0, typeorm_1.Index)('fiat_balance_pkey', ['id',], { unique: true, }),
    (0, typeorm_1.Entity)('fiat_balance', { schema: 'public', })
], FiatBalance);
exports.FiatBalance = FiatBalance;
//# sourceMappingURL=FiatBalance.js.map