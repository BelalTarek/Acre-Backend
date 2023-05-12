import {getHttpHeaders, } from '../authentication';
import { Delete, get, post, } from '../axios';

import { mapGetConsentResponse, mapGetUserConsentsResponse, } from './interfaces/get-consent-response.interface';
import { mapPostOutcomeRequest, mapPostOutcomeResponse, } from './interfaces/post-outcome-request.interface';

import type { GetConsentRawResponse, GetConsentResponse,} from './interfaces/get-consent-response.interface';
import type { PostOutcomeRawRequest, PostOutcomeRawResponse, PostOutcomeRequest, PostOutcomeResponse,} from './interfaces/post-outcome-request.interface';


export const postOutcome = async (host: string, apiKey: string, apiSecret: string, req: PostOutcomeRequest): Promise<PostOutcomeResponse | undefined> =>
  await post<PostOutcomeRawRequest, PostOutcomeRawResponse>(`${host}/consent`, mapPostOutcomeRequest(req), getHttpHeaders(apiKey, apiSecret)).then((res) => mapPostOutcomeResponse(res));


export const getConsent = async (host: string, apiKey: string, apiSecret: string, ConsentId: string): Promise<GetConsentResponse | undefined> => 
  await get<GetConsentRawResponse>(`${host}/consent/${ConsentId}`, getHttpHeaders(apiKey, apiSecret)).then((res) => mapGetConsentResponse(res));


export const getUserConsents = async (host: string, apiKey: string, apiSecret: string, UserId: string): Promise<GetConsentResponse[] | undefined> => 
  await get<GetConsentRawResponse[]>(`${host}/users/${UserId}/consents`, getHttpHeaders(apiKey, apiSecret)).then((res) => mapGetUserConsentsResponse(res));


export const deleteConsent = async (host: string, apiKey: string, apiSecret: string, ConsentId: string): Promise<string | undefined> => 
  await Delete<string>(`${host}/consent/${ConsentId}`, getHttpHeaders(apiKey, apiSecret));
