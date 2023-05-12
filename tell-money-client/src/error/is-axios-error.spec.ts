import { isAxiosError, } from './is-axios-error';


describe('isAxiosError', () => {
  it('should return true, if it is an axios error', () => {
    expect.hasAssertions();
    expect(isAxiosError({isAxiosError: true,})).toBe(true);
  });
  it('should return false, if it is undefined', () => {
    expect.hasAssertions();
    expect(isAxiosError(undefined)).toBe(false);
  });
  it('should return false, if it is generic error', () => {
    expect.hasAssertions();
    expect(isAxiosError(new Error('Generic error'))).toBe(false);
  });
  it('should return false, if it is a number', () => {
    expect.hasAssertions();
    expect(isAxiosError(5)).toBe(false);
  });
  it('should return false, if it is a string', () => {
    expect.hasAssertions();
    expect(isAxiosError('some string')).toBe(false);
  });
});
