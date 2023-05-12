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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.get = void 0;
/* eslint-disable no-console */
/* eslint-disable @typescript-eslint/no-unsafe-return */
const axios_1 = __importDefault(require("axios"));
const error_1 = require("../error");
const map_axios_response_1 = require("./map-axios-response");
const get = (url, Authorization, contentType = 'application/json', config = {}) => __awaiter(void 0, void 0, void 0, function* () {
    return yield axios_1.default.get(url, Object.assign(Object.assign({}, config), { headers: Object.assign(Object.assign({}, (Authorization === undefined ? {} : { Authorization, })), { 'Content-Type': contentType }) })).then(map_axios_response_1.mapAxiosResponse)
        .catch(error_1.mapAndThrow);
});
exports.get = get;
//# sourceMappingURL=get.js.map