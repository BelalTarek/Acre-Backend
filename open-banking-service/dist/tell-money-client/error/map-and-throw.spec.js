"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const map_and_throw_1 = require("./map-and-throw");
describe('mapAndThrow', () => {
    it('shold call mapError and throw result', () => {
        expect.hasAssertions();
        const generic = new Error('Generic');
        expect(() => (0, map_and_throw_1.mapAndThrow)(generic)).toThrow('error');
    });
});
//# sourceMappingURL=map-and-throw.spec.js.map