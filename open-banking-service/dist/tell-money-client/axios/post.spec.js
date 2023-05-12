"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
/* eslint-disable jest/no-jasmine-globals */
/* eslint-disable jest/no-conditional-expect */
/* eslint-disable max-statements */
/* eslint-disable max-statements-per-line */
const axios_1 = __importDefault(require("axios"));
const error = __importStar(require("../error"));
const mapAxiosResponse = __importStar(require("./map-axios-response"));
const post_1 = require("./post");
describe('post', () => {
    afterEach(() => {
        jest.clearAllMocks();
    });
    it('should call post with default content type', () => __awaiter(void 0, void 0, void 0, function* () {
        expect.hasAssertions();
        const successfulResponse = {
            status: 200,
            statusText: 'Ok',
            headers: {},
            config: {},
            data: 'successful',
        };
        const axiosSpy = jest.spyOn(axios_1.default, 'post').mockReturnValue(Promise.resolve(successfulResponse));
        const mapAxiosResponseSpy = jest.spyOn(mapAxiosResponse, 'mapAxiosResponse').mockReturnValue('expected');
        const mapAndThrowSpy = jest.spyOn(error, 'mapAndThrow');
        yield expect((0, post_1.post)('url', 'request', 'token')).resolves.toBe('expected');
        expect(axiosSpy).toHaveBeenCalledTimes(1);
        expect(axiosSpy).toHaveBeenCalledWith('url', 'request', { headers: { Authorization: 'token', 'Content-Type': 'application/json', }, });
        expect(mapAxiosResponseSpy).toHaveBeenCalledTimes(1);
        expect(mapAxiosResponseSpy).toHaveBeenCalledWith(successfulResponse);
        expect(mapAndThrowSpy).toHaveBeenCalledTimes(0);
    }));
    it('should throw en error if the response is not successful', () => __awaiter(void 0, void 0, void 0, function* () {
        expect.hasAssertions();
        const failedCheckoutRawResponse = {
            request_id: '123',
            error_type: 'some_type',
            error_codes: ['some_code1', 'code2',],
        };
        const failResponse = {
            config: {},
            isAxiosError: true,
            toJSON: () => ({}),
            name: 'Failure',
            message: 'Failed Response',
            response: {
                status: 500,
                statusText: 'Internal Server Errror',
                headers: {},
                config: {},
                data: failedCheckoutRawResponse,
            },
        };
        const axiosSpy = jest.spyOn(axios_1.default, 'post').mockImplementation(() => __awaiter(void 0, void 0, void 0, function* () { throw failResponse; }));
        const mapAxiosResponseSpy = jest.spyOn(mapAxiosResponse, 'mapAxiosResponse').mockReturnValue('expected');
        const checkoutError = {
            status: 500,
            message: 'Internal Server Error',
            name: 'Checkout Error',
            type: 'some_type',
            codes: ['code1', 'code2',],
        };
        const mapAndThrowSpy = jest.spyOn(error, 'mapAndThrow').mockImplementation(() => {
            throw checkoutError;
        });
        try {
            yield (0, post_1.post)('url', 'failed_request', 'token');
            fail('No error is thrown');
        }
        catch (e) {
            expect(e).toBe(checkoutError);
        }
        expect(axiosSpy).toHaveBeenCalledTimes(1);
        expect(axiosSpy).toHaveBeenCalledWith('url', 'failed_request', { headers: { Authorization: 'token', 'Content-Type': 'application/json', }, });
        expect(mapAxiosResponseSpy).toHaveBeenCalledTimes(0);
        expect(mapAndThrowSpy).toHaveBeenCalledTimes(1);
        expect(mapAndThrowSpy).toHaveBeenCalledWith(failResponse);
    }));
});
//# sourceMappingURL=post.spec.js.map