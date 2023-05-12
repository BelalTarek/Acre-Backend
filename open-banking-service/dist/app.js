"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
/* eslint-disable @typescript-eslint/no-unsafe-call */
const cors_1 = __importDefault(require("cors"));
const express_1 = __importDefault(require("express"));
const plutus_middlewares_1 = require("plutus-middlewares");
require("./env");
const controllers_1 = __importDefault(require("./controllers"));
const app = (0, express_1.default)();
const corsFunc = (0, cors_1.default)();
(0, plutus_middlewares_1.autoConfig)(app, [corsFunc, controllers_1.default,]);
exports.default = app;
//# sourceMappingURL=app.js.map