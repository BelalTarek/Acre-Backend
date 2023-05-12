
import { mapAndThrow, } from './map-and-throw';


describe('mapAndThrow', () => {
  it('shold call mapError and throw result', () => {
    expect.hasAssertions();
    const generic = new Error('Generic');
    expect(() => mapAndThrow(generic)).toThrow('error');
  });
});
