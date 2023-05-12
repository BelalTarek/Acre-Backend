"use strict";
/* eslint-disable no-console */
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
const clients_1 = require("../../clients");
const validation = (req, res, next) => {
    console.log('validation');
    return next();
};
const getUserConsents = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const getUserConsentsResponse = yield clients_1.tellMoneyClient.getUserConsents(req.params.userId);
        res.status(200).send(getUserConsentsResponse);
    }
    catch (error) {
        console.log(error);
    }
});
exports.default = [validation, getUserConsents,];
//# sourceMappingURL=get-user-consents.js.map