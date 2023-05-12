"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const app_data_source_1 = require("../../config/app-data-source");
const FiatTransactions_1 = require("../../entities/FiatTransactions");
const User_1 = require("../../entities/User");
class TransactionsService {
    constructor() {
        this.getUserTransactions = (userId) => __awaiter(this, void 0, void 0, function* () {
            return yield this.fiatTransactionsRepository.find({
                where: { user: { auth0Id: userId, }, },
            });
        });
        this.userRepository = app_data_source_1.appDataSource.getRepository(User_1.User);
        this.fiatTransactionsRepository = app_data_source_1.appDataSource.getRepository(FiatTransactions_1.FiatTransactions);
    }
    ;
}
exports.default = TransactionsService;
//# sourceMappingURL=transactions.service.js.map