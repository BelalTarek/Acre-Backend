"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.mapAndThrow = void 0;
const map_error_1 = require("./map-error");
const mapAndThrow = (error) => {
    throw (0, map_error_1.mapError)(error);
};
exports.mapAndThrow = mapAndThrow;
//# sourceMappingURL=map-and-throw.js.map