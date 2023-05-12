"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.mapAxiosError = void 0;
const build_error_1 = require("./build-error");
const mapAxiosError = (error) => {
    var _a, _b;
    return (0, build_error_1.buildError)((_a = error.response) === null || _a === void 0 ? void 0 : _a.data.Errors.statusCode, (_b = error.response) === null || _b === void 0 ? void 0 : _b.data.Errors.error);
};
exports.mapAxiosError = mapAxiosError;
//# sourceMappingURL=map-axios-error.js.map