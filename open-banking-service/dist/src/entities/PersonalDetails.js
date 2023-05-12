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
exports.PersonalDetails = void 0;
const typeorm_1 = require("typeorm");
const User_1 = require("./User");
let PersonalDetails = class PersonalDetails {
};
__decorate([
    (0, typeorm_1.Column)('uuid', {
        primary: true,
        name: 'id',
        default: () => 'uuid_generate_v4()',
    }),
    __metadata("design:type", String)
], PersonalDetails.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)('character varying', {
        name: 'user_id',
        nullable: true,
        unique: true,
        length: 255,
    }),
    __metadata("design:type", Object)
], PersonalDetails.prototype, "userId", void 0);
__decorate([
    (0, typeorm_1.Column)('character varying', {
        name: 'first_name',
        nullable: true,
        length: 255,
    }),
    __metadata("design:type", String)
], PersonalDetails.prototype, "firstName", void 0);
__decorate([
    (0, typeorm_1.Column)('character varying', {
        name: 'last_name',
        nullable: true,
        length: 255,
    }),
    __metadata("design:type", Object)
], PersonalDetails.prototype, "lastName", void 0);
__decorate([
    (0, typeorm_1.Column)('timestamp with time zone', { name: 'date_of_birth', nullable: true, }),
    __metadata("design:type", Object)
], PersonalDetails.prototype, "dateOfBirth", void 0);
__decorate([
    (0, typeorm_1.Column)('character varying', {
        name: 'citizenship',
        nullable: true,
        length: 255,
    }),
    __metadata("design:type", Object)
], PersonalDetails.prototype, "citizenship", void 0);
__decorate([
    (0, typeorm_1.Column)('character varying', {
        name: 'phone_code',
        nullable: true,
        unique: true,
        length: 255,
    }),
    __metadata("design:type", String)
], PersonalDetails.prototype, "phoneCode", void 0);
__decorate([
    (0, typeorm_1.Column)('character varying', {
        name: 'phone_number',
        nullable: true,
        unique: true,
        length: 255,
    }),
    __metadata("design:type", String)
], PersonalDetails.prototype, "phoneNumber", void 0);
__decorate([
    (0, typeorm_1.Column)('timestamp with time zone', { name: 'created_at', }),
    __metadata("design:type", Date)
], PersonalDetails.prototype, "createdAt", void 0);
__decorate([
    (0, typeorm_1.Column)('timestamp with time zone', { name: 'updated_at', }),
    __metadata("design:type", Date)
], PersonalDetails.prototype, "updatedAt", void 0);
__decorate([
    (0, typeorm_1.Column)('character varying', {
        name: 'industry',
        nullable: true,
        length: 255,
    }),
    __metadata("design:type", Object)
], PersonalDetails.prototype, "industry", void 0);
__decorate([
    (0, typeorm_1.Column)('character varying', {
        name: 'monthly_spend',
        nullable: true,
        length: 255,
    }),
    __metadata("design:type", Object)
], PersonalDetails.prototype, "monthlySpend", void 0);
__decorate([
    (0, typeorm_1.Column)('character varying', {
        name: 'nationality',
        nullable: true,
        length: 255,
    }),
    __metadata("design:type", Object)
], PersonalDetails.prototype, "nationality", void 0);
__decorate([
    (0, typeorm_1.Column)('character varying', {
        name: 'tax_residency',
        nullable: true,
        length: 255,
    }),
    __metadata("design:type", Object)
], PersonalDetails.prototype, "taxResidency", void 0);
__decorate([
    (0, typeorm_1.OneToOne)(() => User_1.User, (users) => users.personalDetails),
    (0, typeorm_1.JoinColumn)([{ name: 'user_id', referencedColumnName: 'auth0Id', },]),
    __metadata("design:type", User_1.User)
], PersonalDetails.prototype, "user", void 0);
PersonalDetails = __decorate([
    (0, typeorm_1.Index)('personal_details_pkey', ['id',], { unique: true, }),
    (0, typeorm_1.Index)('personal_details_phone_unique', ['phoneCode', 'phoneNumber',], {
        unique: true,
    }),
    (0, typeorm_1.Index)('personal_details_user_id_key', ['userId',], { unique: true, }),
    (0, typeorm_1.Entity)('personal_details', { schema: 'public', })
], PersonalDetails);
exports.PersonalDetails = PersonalDetails;
//# sourceMappingURL=PersonalDetails.js.map