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
exports.ClearJunctionWithdrawalRequests = void 0;
const typeorm_1 = require("typeorm");
const User_1 = require("./User");
const WithdrawalMethods_1 = require("./WithdrawalMethods");
let ClearJunctionWithdrawalRequests = class ClearJunctionWithdrawalRequests {
};
__decorate([
    (0, typeorm_1.Column)('uuid', {
        primary: true,
        name: 'id',
        default: () => 'uuid_generate_v4()',
    }),
    __metadata("design:type", String)
], ClearJunctionWithdrawalRequests.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)('numeric', { name: 'amount', precision: 19, scale: 2, }),
    __metadata("design:type", String)
], ClearJunctionWithdrawalRequests.prototype, "amount", void 0);
__decorate([
    (0, typeorm_1.Column)('character varying', { name: 'currency', length: 3, }),
    __metadata("design:type", String)
], ClearJunctionWithdrawalRequests.prototype, "currency", void 0);
__decorate([
    (0, typeorm_1.Column)('enum', {
        name: 'status',
        enum: ['COMPLETED', 'PENDING', 'REJECTED', 'TRANSFERED',],
    }),
    __metadata("design:type", String)
], ClearJunctionWithdrawalRequests.prototype, "status", void 0);
__decorate([
    (0, typeorm_1.Column)('json', { name: 'api_response', nullable: true, }),
    __metadata("design:type", Object)
], ClearJunctionWithdrawalRequests.prototype, "apiResponse", void 0);
__decorate([
    (0, typeorm_1.Column)('timestamp with time zone', {
        name: 'created_at',
        default: () => 'now()',
    }),
    __metadata("design:type", Date)
], ClearJunctionWithdrawalRequests.prototype, "createdAt", void 0);
__decorate([
    (0, typeorm_1.Column)('timestamp with time zone', {
        name: 'updated_at',
        default: () => 'now()',
    }),
    __metadata("design:type", Date)
], ClearJunctionWithdrawalRequests.prototype, "updatedAt", void 0);
__decorate([
    (0, typeorm_1.Column)('uuid', { name: 'clear_junction_wallet_id', nullable: true, }),
    __metadata("design:type", Object)
], ClearJunctionWithdrawalRequests.prototype, "clearJunctionWalletId", void 0);
__decorate([
    (0, typeorm_1.Column)('numeric', {
        name: 'fee',
        precision: 19,
        scale: 2,
        default: () => '0',
    }),
    __metadata("design:type", String)
], ClearJunctionWithdrawalRequests.prototype, "fee", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => WithdrawalMethods_1.WithdrawalMethods, (withdrawalMethods) => withdrawalMethods.clearJunctionWithdrawalRequests),
    (0, typeorm_1.JoinColumn)([{ name: 'withdrawal_method_id', referencedColumnName: 'id', },]),
    __metadata("design:type", WithdrawalMethods_1.WithdrawalMethods)
], ClearJunctionWithdrawalRequests.prototype, "withdrawalMethod", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => User_1.User, (users) => users.clearJunctionWithdrawalRequests),
    (0, typeorm_1.JoinColumn)([{ name: 'user_id', referencedColumnName: 'auth0Id', },]),
    __metadata("design:type", User_1.User)
], ClearJunctionWithdrawalRequests.prototype, "user", void 0);
ClearJunctionWithdrawalRequests = __decorate([
    (0, typeorm_1.Index)('clear_junction_withdrawal_requests_pkey', ['id',], { unique: true, }),
    (0, typeorm_1.Entity)('clear_junction_withdrawal_requests', { schema: 'public', })
], ClearJunctionWithdrawalRequests);
exports.ClearJunctionWithdrawalRequests = ClearJunctionWithdrawalRequests;
//# sourceMappingURL=ClearJunctionWithdrawalRequests.js.map