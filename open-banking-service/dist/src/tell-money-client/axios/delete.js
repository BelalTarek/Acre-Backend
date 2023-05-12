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
exports.Delete = void 0;
const axios_1 = __importDefault(require("axios"));
const error_1 = require("../error");
const map_axios_response_1 = require("./map-axios-response");
const Delete = (url, Authorization, config = {}) => __awaiter(void 0, void 0, void 0, function* () {
    return yield axios_1.default
        .delete(url, Object.assign(Object.assign({}, config), { headers: Object.assign({}, (Authorization === undefined ? {} : { Authorization, })) }))
        .then(map_axios_response_1.mapAxiosResponse)
        .catch(error_1.mapAndThrow);
});
exports.Delete = Delete;
//# sourceMappingURL=delete.js.map