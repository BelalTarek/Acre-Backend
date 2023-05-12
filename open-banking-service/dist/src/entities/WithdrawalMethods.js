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
exports.WithdrawalMethods = void 0;
const typeorm_1 = require("typeorm");
const ClearJunctionWithdrawalRequests_1 = require("./ClearJunctionWithdrawalRequests");
const FiatWithdrawalRequests_1 = require("./FiatWithdrawalRequests");
const User_1 = require("./User");
let WithdrawalMethods = class WithdrawalMethods {
};
__decorate([
    (0, typeorm_1.Column)('uuid', {
        primary: true,
        name: 'id',
        default: () => 'uuid_generate_v4()',
    }),
    __metadata("design:type", String)
], WithdrawalMethods.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)('character varying', { name: 'currency', length: 3, }),
    __metadata("design:type", String)
], WithdrawalMethods.prototype, "currency", void 0);
__decorate([
    (0, typeorm_1.Column)('enum', {
        name: 'type',
        enum: ['BANK_TRANSFER_EU', 'BANK_TRANSFER_UK', 'CREDIT_CARD',],
    }),
    __metadata("design:type", String)
], WithdrawalMethods.prototype, "type", void 0);
__decorate([
    (0, typeorm_1.Column)('json', { name: 'details', }),
    __metadata("design:type", Object)
], WithdrawalMethods.prototype, "details", void 0);
__decorate([
    (0, typeorm_1.Column)('timestamp with time zone', {
        name: 'created_at',
        default: () => 'now()',
    }),
    __metadata("design:type", Date)
], WithdrawalMethods.prototype, "createdAt", void 0);
__decorate([
    (0, typeorm_1.Column)('timestamp with time zone', {
        name: 'updated_at',
        default: () => 'now()',
    }),
    __metadata("design:type", Date)
], WithdrawalMethods.prototype, "updatedAt", void 0);
__decorate([
    (0, typeorm_1.Column)('timestamp with time zone', { name: 'deleted_at', nullable: true, }),
    __metadata("design:type", Object)
], WithdrawalMethods.prototype, "deletedAt", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => ClearJunctionWithdrawalRequests_1.ClearJunctionWithdrawalRequests, (clearJunctionWithdrawalRequests) => clearJunctionWithdrawalRequests.withdrawalMethod),
    __metadata("design:type", Array)
], WithdrawalMethods.prototype, "clearJunctionWithdrawalRequests", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => FiatWithdrawalRequests_1.FiatWithdrawalRequests, (fiatWithdrawalRequests) => fiatWithdrawalRequests.withdrawalMethod),
    __metadata("design:type", Array)
], WithdrawalMethods.prototype, "fiatWithdrawalRequests", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => User_1.User, (users) => users.withdrawalMethods),
    (0, typeorm_1.JoinColumn)([{ name: 'user_id', referencedColumnName: 'auth0Id', },]),
    __metadata("design:type", User_1.User)
], WithdrawalMethods.prototype, "user", void 0);
WithdrawalMethods = __decorate([
    (0, typeorm_1.Index)('withdrawal_methods_pkey', ['id',], { unique: true, }),
    (0, typeorm_1.Entity)('withdrawal_methods', { schema: 'public', })
], WithdrawalMethods);
exports.WithdrawalMethods = WithdrawalMethods;
//# sourceMappingURL=WithdrawalMethods.js.map