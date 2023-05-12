import { TellMoneyClientFactory, configFromEnv, } from 'tell-money-client';


export const tellMoneyClient = TellMoneyClientFactory(configFromEnv());

