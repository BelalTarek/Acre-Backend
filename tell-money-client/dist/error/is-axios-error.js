"use strict";
/* eslint-disable @typescript-eslint/no-unsafe-return */
Object.defineProperty(exports, "__esModule", { value: true });
exports.isAxiosError = void 0;
const axios_1 = require("axios");
const isAxiosError = (error) => error instanceof axios_1.AxiosError ? error.isAxiosError : false;
exports.isAxiosError = isAxiosError;
//# sourceMappingURL=is-axios-error.js.map