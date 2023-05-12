"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.mapError = void 0;
/* eslint-disable @typescript-eslint/no-unsafe-return */
const build_error_1 = require("./build-error");
const is_axios_error_1 = require("./is-axios-error");
const map_axios_error_1 = require("./map-axios-error");
const mapError = (error) => (0, is_axios_error_1.isAxiosError)(error) ? (0, map_axios_error_1.mapAxiosError)(error) : (0, build_error_1.buildError)();
exports.mapError = mapError;
//# sourceMappingURL=map-error.js.map