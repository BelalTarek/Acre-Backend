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
exports.Address = void 0;
const typeorm_1 = require("typeorm");
const User_1 = require("./User");
let Address = class Address {
};
__decorate([
    (0, typeorm_1.Column)('uuid', { primary: true, name: 'id', }),
    __metadata("design:type", String)
], Address.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)('character varying', { name: 'user_id', nullable: true, length: 255, }),
    __metadata("design:type", Object)
], Address.prototype, "userId", void 0);
__decorate([
    (0, typeorm_1.Column)('character varying', {
        name: 'country_code',
        nullable: true,
        length: 255,
    }),
    __metadata("design:type", String)
], Address.prototype, "countryCode", void 0);
__decorate([
    (0, typeorm_1.Column)('character varying', { name: 'street', length: 255, }),
    __metadata("design:type", String)
], Address.prototype, "street", void 0);
__decorate([
    (0, typeorm_1.Column)('character varying', { name: 'suite', nullable: true, length: 255, }),
    __metadata("design:type", Object)
], Address.prototype, "suite", void 0);
__decorate([
    (0, typeorm_1.Column)('character varying', { name: 'postcode', length: 255, }),
    __metadata("design:type", String)
], Address.prototype, "postcode", void 0);
__decorate([
    (0, typeorm_1.Column)('timestamp with time zone', { name: 'created_at', }),
    __metadata("design:type", Date)
], Address.prototype, "createdAt", void 0);
__decorate([
    (0, typeorm_1.Column)('timestamp with time zone', { name: 'updated_at', }),
    __metadata("design:type", Date)
], Address.prototype, "updatedAt", void 0);
__decorate([
    (0, typeorm_1.Column)('character varying', { name: 'city', nullable: true, length: 255, }),
    __metadata("design:type", String)
], Address.prototype, "city", void 0);
__decorate([
    (0, typeorm_1.Column)('boolean', { name: 'is_active', nullable: true, }),
    __metadata("design:type", Object)
], Address.prototype, "isActive", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => User_1.User, (users) => users.addresses),
    (0, typeorm_1.JoinColumn)([{ name: 'user_id', referencedColumnName: 'auth0Id', },]),
    __metadata("design:type", User_1.User)
], Address.prototype, "user", void 0);
Address = __decorate([
    (0, typeorm_1.Index)('addresses_pkey', ['id',], { unique: true, }),
    (0, typeorm_1.Index)('addresses_user_id_is_active_key_index', ['userId',], { unique: true, }),
    (0, typeorm_1.Entity)('addresses', { schema: 'public', })
], Address);
exports.Address = Address;
//# sourceMappingURL=Address.js.map