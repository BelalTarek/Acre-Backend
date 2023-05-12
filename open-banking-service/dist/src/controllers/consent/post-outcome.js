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
const interfaces_1 = require("../../interfaces");
const validation = (req, res, next) => {
    console.log('validation');
    return next();
};
const postOutcome = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const postOutcomeRequest = (0, interfaces_1.mapPostOutcomeTellMoneyRequest)(req.body);
        const postOutcomeResponse = yield clients_1.tellMoneyClient.postOutcome(postOutcomeRequest);
        res.status(200).send(postOutcomeResponse);
    }
    catch (error) {
        next(error);
    }
});
exports.default = [validation, postOutcome,];
//# sourceMappingURL=post-outcome.js.map