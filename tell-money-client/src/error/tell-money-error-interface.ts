export interface TellMoneyErrorInterface extends Error {
  statusCode: number;
  error?: string;
  message: string;
}
