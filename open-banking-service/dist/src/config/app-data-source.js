"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.appDataSource = void 0;
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-call */
const typeorm_1 = require("typeorm");
const db_configuration_1 = require("./db-configuration");
exports.appDataSource = new typeorm_1.DataSource((0, db_configuration_1.configuration)().db);
//# sourceMappingURL=app-data-source.js.map