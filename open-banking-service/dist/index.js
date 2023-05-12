"use strict";
/* eslint-disable @typescript-eslint/restrict-template-expressions */
/* eslint-disable promise/always-return */
/* eslint-disable no-process-exit */
/* eslint-disable no-console */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const http_1 = require("http");
const express_routemap_1 = __importDefault(require("express-routemap"));
const plutus_middlewares_1 = require("plutus-middlewares");
const app_1 = __importDefault(require("./app"));
const app_data_source_1 = require("./config/app-data-source");
require("./env");
app_data_source_1.appDataSource.initialize().then((connction) => {
    plutus_middlewares_1.logger.info(`Database connection: ${connction}`);
}).catch((err) => {
    plutus_middlewares_1.logger.error(err);
    process.exit(1);
});
const server = (0, http_1.createServer)(app_1.default);
server.listen(process.env.PORT, () => {
    const { address, port, } = server.address();
    plutus_middlewares_1.logger.info(`Started app listening at http://${address}:${port}`);
    (0, express_routemap_1.default)(app_1.default);
    if (process.env.NODE_ENV === 'development') {
        // Only in dev environment
        (0, express_routemap_1.default)(app_1.default, 'routes.log');
    }
});
//# sourceMappingURL=index.js.map