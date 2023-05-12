"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.configuration = void 0;
const configuration = () => {
    var _a;
    return ({
        db: {
            type: 'postgres',
            host: process.env.DB_HOST,
            port: parseInt((_a = process.env.DB_PORT) !== null && _a !== void 0 ? _a : '', 10),
            username: process.env.DB_USER,
            password: process.env.DB_PASS,
            database: process.env.DB_NAME,
            entities: ['dist/src/entities/*{.js,.ts,.d.ts}',],
            synchronize: false,
        },
    });
};
exports.configuration = configuration;
//# sourceMappingURL=db-configuration.js.map