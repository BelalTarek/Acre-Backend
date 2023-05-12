import dotEnv from 'dotenv-safe';


// eslint-disable-next-line @typescript-eslint/strict-boolean-expressions
if (!process.env.CI) dotEnv.config();
