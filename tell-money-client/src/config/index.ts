import { isDefined, } from '../helpers/isDefined';


export interface TellMoneyConfigInterface {
  host: string;
  apiKey: string;
  apiSecret: string;
  publicKey: string;
};
  
const checkEnv = (name: string): void => {
  if (!isDefined(process.env[name])) {
    throw new Error(`Env ${name} is not defined`);
  }
};


const requiredEnvs = ['TELL_MONEY_HOST','TELL_MONEY_API_KEY', 'TELL_MONEY_API_SECRET', 'TELL_MONEY_PUBLIC_KEY',];
export const configFromEnv = (): TellMoneyConfigInterface => {
  requiredEnvs.forEach(checkEnv);

  return {
    host: process.env.TELL_MONEY_HOST ?? 'https://aspsp.tell.systems/api',
    apiKey: process.env.TELL_MONEY_API_KEY ?? 'c6ae6b7e-c56d-4c08-8484-98a9ab058d22',
    apiSecret: process.env.TELL_MONEY_API_SECRET ?? '16b59897-b6d8-43ec-ab53-c872c5b3832c',
    publicKey: process.env.TELL_MONEY_PUBLIC_KEY ?? '',
  };
};
