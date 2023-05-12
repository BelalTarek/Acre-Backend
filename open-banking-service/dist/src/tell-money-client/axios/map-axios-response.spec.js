"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const map_axios_response_1 = require("./map-axios-response");
describe('mapAxiosResponse', () => {
    it('should return data from axios response', () => {
        expect.hasAssertions();
        expect((0, map_axios_response_1.mapAxiosResponse)({
            status: 200,
            statusText: 'Ok',
            headers: {},
            config: {},
            data: 'expected',
        })).toBe('expected');
    });
});
//# sourceMappingURL=map-axios-response.spec.js.map