import { mapError, } from './map-error';


export const mapAndThrow = <E>(error: E): never => {
  throw mapError(error);
};
