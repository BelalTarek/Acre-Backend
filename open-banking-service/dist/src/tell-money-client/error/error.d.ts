import type { TellMoneyErrorInterface } from './tell-money-error-interface';
export declare class TellMoneyError extends Error implements TellMoneyErrorInterface {
    message: string;
    statusCode: number;
    error: string;
    constructor(message: string, statusCode: number, error: string);
}
//# sourceMappingURL=error.d.ts.map