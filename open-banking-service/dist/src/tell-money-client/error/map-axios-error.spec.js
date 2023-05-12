"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const error_1 = require("./error");
const map_axios_error_1 = require("./map-axios-error");
describe('mapAxiosError', () => {
    it('should map error with response from contis', () => {
        expect.hasAssertions();
        const error = {
            config: {},
            isAxiosError: true,
            toJSON: () => ({}),
            name: 'Error name',
            message: 'message',
            response: {
                status: 500,
                statusText: 'Status Text',
                data: {
                    Errors: {
                        error: 'Error Detail',
                        statusCode: 500,
                    },
                },
                headers: {},
                config: {},
            },
        };
        const expectedError = new error_1.TellMoneyError('Status Text', 500, 'Error name');
        expect((0, map_axios_error_1.mapAxiosError)(error)).toStrictEqual(expectedError);
    });
});
//# sourceMappingURL=map-axios-error.spec.js.map