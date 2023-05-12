"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const is_axios_error_1 = require("./is-axios-error");
describe('isAxiosError', () => {
    it('should return true, if it is an axios error', () => {
        expect.hasAssertions();
        expect((0, is_axios_error_1.isAxiosError)({ isAxiosError: true, })).toBe(true);
    });
    it('should return false, if it is undefined', () => {
        expect.hasAssertions();
        expect((0, is_axios_error_1.isAxiosError)(undefined)).toBe(false);
    });
    it('should return false, if it is generic error', () => {
        expect.hasAssertions();
        expect((0, is_axios_error_1.isAxiosError)(new Error('Generic error'))).toBe(false);
    });
    it('should return false, if it is a number', () => {
        expect.hasAssertions();
        expect((0, is_axios_error_1.isAxiosError)(5)).toBe(false);
    });
    it('should return false, if it is a string', () => {
        expect.hasAssertions();
        expect((0, is_axios_error_1.isAxiosError)('some string')).toBe(false);
    });
});
//# sourceMappingURL=is-axios-error.spec.js.map