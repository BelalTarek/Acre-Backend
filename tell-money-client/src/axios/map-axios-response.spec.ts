import { mapAxiosResponse, } from './map-axios-response';


describe('mapAxiosResponse', () => {
  it('should return data from axios response', () => {
    expect.hasAssertions();
    expect(mapAxiosResponse<string>({
      status: 200,
      statusText: 'Ok',
      headers:{},
      config:{},
      data:'expected',})).toBe('expected');
  });
});
