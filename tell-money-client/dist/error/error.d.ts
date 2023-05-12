import type { TellMoneyErrorInterface } from './tell-money-error-interface';
export declare class TellMoneyError extends Error implements TellMoneyErrorInterface {
    statusCode: number;
    error: string;
    message: string;
    constructor(statusCode: number, error: string, message: string);
}
//# sourceMappingURL=error.d.ts.map