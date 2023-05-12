import type { ConfigInterface, } from './db-config.interface';


export const configuration = (): ConfigInterface => ({
  db: {
    type: 'postgres',
    host: process.env.DB_HOST,
    port: parseInt(process.env.DB_PORT ?? '', 10),
    username: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME,
    entities: ['dist/src/entities/*{.js,.ts,.d.ts}',],
    synchronize: false,
  },
});
