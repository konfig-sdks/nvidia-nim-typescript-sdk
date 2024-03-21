/* tslint:disable */
/* eslint-disable */
/*
Earth-2 Inference Server

API for submitting to the Earth-2 Inference Server.

The version of the OpenAPI document: 0.1.0
Contact: earth2-support@exchange.nvidia.com

NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/

import globalAxios, { AxiosPromise, AxiosInstance, AxiosRequestConfig } from 'axios';
import { Configuration } from '../configuration';
// Some imports not used depending on template conditions
// @ts-ignore
import { DUMMY_BASE_URL, assertParamExists, setApiKeyToObject, setBasicAuthToObject, setBearerAuthToObject, setSearchParams, serializeDataIfNeeded, toPathString, createRequestFunction, isBrowser } from '../common';
// @ts-ignore
import { BASE_PATH, COLLECTION_FORMATS, RequestArgs, BaseAPI, RequiredError } from '../base';
// @ts-ignore
import { MultiModalData } from '../models';
// @ts-ignore
import { RankRequest } from '../models';
// @ts-ignore
import { RankResponse } from '../models';
import { paginate } from "../pagination/paginate";
import type * as buffer from "buffer"
import { requestBeforeHook } from '../requestBeforeHook';
/**
 * NvidiaRerankingApi - axios parameter creator
 * @export
 */
export const NvidiaRerankingApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * Order a list of passages by their relation to a query.  Note that if a given query + passage pair is longer than the ranking model\'s context window, it will be automatically truncated.
         * @summary Rank passages by their relation to a query.
         * @param {RankRequest} rankRequest 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        passageRanking: async (rankRequest: RankRequest, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'rankRequest' is not null or undefined
            assertParamExists('passageRanking', 'rankRequest', rankRequest)
            const localVarPath = `/retrieval/nvidia/reranking`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions: AxiosRequestConfig = { method: 'POST', ...baseOptions, ...options};
            const localVarHeaderParameter = configuration && !isBrowser() ? { "User-Agent": configuration.userAgent } : {} as any;
            const localVarQueryParameter = {} as any;

            // authentication bearerAuth required
            // http bearer authentication required
            await setBearerAuthToObject(localVarHeaderParameter, configuration)

    
            localVarHeaderParameter['Content-Type'] = 'application/json';


            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            requestBeforeHook({
                requestBody: rankRequest,
                queryParameters: localVarQueryParameter,
                requestConfig: localVarRequestOptions,
                path: localVarPath,
                configuration,
                pathTemplate: '/retrieval/nvidia/reranking',
                httpMethod: 'POST'
            });
            localVarRequestOptions.data = serializeDataIfNeeded(rankRequest, localVarRequestOptions, configuration)

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
    }
};

/**
 * NvidiaRerankingApi - functional programming interface
 * @export
 */
export const NvidiaRerankingApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = NvidiaRerankingApiAxiosParamCreator(configuration)
    return {
        /**
         * Order a list of passages by their relation to a query.  Note that if a given query + passage pair is longer than the ranking model\'s context window, it will be automatically truncated.
         * @summary Rank passages by their relation to a query.
         * @param {NvidiaRerankingApiPassageRankingRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async passageRanking(requestParameters: NvidiaRerankingApiPassageRankingRequest, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<RankResponse>> {
            const rankRequest: RankRequest = {
                model: requestParameters.model,
                query: requestParameters.query,
                passages: requestParameters.passages
            };
            const localVarAxiosArgs = await localVarAxiosParamCreator.passageRanking(rankRequest, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
    }
};

/**
 * NvidiaRerankingApi - factory interface
 * @export
 */
export const NvidiaRerankingApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = NvidiaRerankingApiFp(configuration)
    return {
        /**
         * Order a list of passages by their relation to a query.  Note that if a given query + passage pair is longer than the ranking model\'s context window, it will be automatically truncated.
         * @summary Rank passages by their relation to a query.
         * @param {NvidiaRerankingApiPassageRankingRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        passageRanking(requestParameters: NvidiaRerankingApiPassageRankingRequest, options?: AxiosRequestConfig): AxiosPromise<RankResponse> {
            return localVarFp.passageRanking(requestParameters, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * Request parameters for passageRanking operation in NvidiaRerankingApi.
 * @export
 * @interface NvidiaRerankingApiPassageRankingRequest
 */
export type NvidiaRerankingApiPassageRankingRequest = {
    
} & RankRequest

/**
 * NvidiaRerankingApiGenerated - object-oriented interface
 * @export
 * @class NvidiaRerankingApiGenerated
 * @extends {BaseAPI}
 */
export class NvidiaRerankingApiGenerated extends BaseAPI {
    /**
     * Order a list of passages by their relation to a query.  Note that if a given query + passage pair is longer than the ranking model\'s context window, it will be automatically truncated.
     * @summary Rank passages by their relation to a query.
     * @param {NvidiaRerankingApiPassageRankingRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof NvidiaRerankingApiGenerated
     */
    public passageRanking(requestParameters: NvidiaRerankingApiPassageRankingRequest, options?: AxiosRequestConfig) {
        return NvidiaRerankingApiFp(this.configuration).passageRanking(requestParameters, options).then((request) => request(this.axios, this.basePath));
    }
}
