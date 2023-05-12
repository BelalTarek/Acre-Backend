
import { TellMoneyError, } from './error';
import { mapAxiosError, } from './map-axios-error';

import type { TellMoneyErrorInterface, } from './tell-money-error-interface';
import type { TellMoneyErrorRawResponse, } from './tell-money-error-raw-response';
import type { AxiosError, } from 'axios';


describe('mapAxiosError', () => {
  it('should map error with response from contis', () => {
    expect.hasAssertions();
    const error: AxiosError<TellMoneyErrorRawResponse> = {
      config: {},
      isAxiosError: true,
      toJSON: () => ({}),
      name: 'Error name',
      message: 'message',
      response: {
        status: 500,
        statusText: 'Status Text',
        data: {
          Errors: 
            {
              error: 'Error Detail',
              statusCode: 500,
            },
        },
        headers: {},
        config: {},
      },
    };
    const expectedError: TellMoneyErrorInterface = new TellMoneyError(
      'Status Text',
      500,
      'Error name'
    );
    expect(mapAxiosError(error)).toStrictEqual(expectedError);
  });
});
