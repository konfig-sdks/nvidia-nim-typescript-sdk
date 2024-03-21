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
import { ChatCompletion } from '../models';
// @ts-ignore
import { ChatCompletionChunk } from '../models';
// @ts-ignore
import { ChatRequest } from '../models';
// @ts-ignore
import { Errors } from '../models';
// @ts-ignore
import { MessagesProperty1Inner } from '../models';
import { paginate } from "../pagination/paginate";
import type * as buffer from "buffer"
import { requestBeforeHook } from '../requestBeforeHook';
/**
 * MultimodalApiApi - axios parameter creator
 * @export
 */
export const MultimodalApiApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * Invokes inference using the model chat parameters. If uploading large images, this POST should be used in conjunction with the NVCF API which allows for the upload of large assets.  You can find details on how to use NVCF Asset APIs here: https://docs.api.nvidia.com/cloud-functions/reference/createasset
         * @summary Request response from the model
         * @param {ChatRequest} chatRequest 
         * @param {string} [nvcfInputAssetReferences] String of asset IDs separated by commas. Data is uploaded to AWS S3 using NVCF Asset APIs and associated with these asset IDs.If the size of an image is more than 200KB, it needs to be uploaded to a presigned S3 URL bucket. The presigned URL allows for secure and temporary access to the S3 bucket for uploading the image. Once the asset is requested, an asset ID is generated for it. Please include this asset ID in this header and to use the uploaded image in a prompt, you need to refer to it using the following format: &#x60;&lt;img src&#x3D;\&quot;data:image/png;asset_id,{asset_id}\&quot; /&gt;&#x60;.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        invokeModelInference: async (chatRequest: ChatRequest, nvcfInputAssetReferences?: string, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'chatRequest' is not null or undefined
            assertParamExists('invokeModelInference', 'chatRequest', chatRequest)
            const localVarPath = `/vlm/nvidia/neva-22b`;
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
            if (nvcfInputAssetReferences != null) {
                localVarHeaderParameter['NVCF-INPUT-ASSET-REFERENCES'] = String(nvcfInputAssetReferences);
            }


    
            localVarHeaderParameter['Content-Type'] = 'application/json';


            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            requestBeforeHook({
                requestBody: chatRequest,
                queryParameters: localVarQueryParameter,
                requestConfig: localVarRequestOptions,
                path: localVarPath,
                configuration,
                pathTemplate: '/vlm/nvidia/neva-22b',
                httpMethod: 'POST'
            });
            localVarRequestOptions.data = serializeDataIfNeeded(chatRequest, localVarRequestOptions, configuration)

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Invokes inference using the model chat parameters. If uploading large images, this POST should be used in conjunction with the NVCF API which allows for the upload of large assets.  You can find details on how to use NVCF Asset APIs here: https://docs.api.nvidia.com/cloud-functions/reference/createasset
         * @summary Request response from the model
         * @param {ChatRequest} chatRequest 
         * @param {string} [nvcfInputAssetReferences] String of asset IDs separated by commas. Data is uploaded to AWS S3 using NVCF Asset APIs and associated with these asset IDs.If the size of an image is more than 200KB, it needs to be uploaded to a presigned S3 URL bucket. The presigned URL allows for secure and temporary access to the S3 bucket for uploading the image. Once the asset is requested, an asset ID is generated for it. Please include this asset ID in this header and to use the uploaded image in a prompt, you need to refer to it using the following format:  &#x60;&lt;img src&#x3D;\&quot;data:image/png;asset_id,{asset_id}\&quot; /&gt;&#x60;.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        requestModelInference: async (chatRequest: ChatRequest, nvcfInputAssetReferences?: string, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'chatRequest' is not null or undefined
            assertParamExists('requestModelInference', 'chatRequest', chatRequest)
            const localVarPath = `/vlm/google/deplot`;
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
            if (nvcfInputAssetReferences != null) {
                localVarHeaderParameter['NVCF-INPUT-ASSET-REFERENCES'] = String(nvcfInputAssetReferences);
            }


    
            localVarHeaderParameter['Content-Type'] = 'application/json';


            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            requestBeforeHook({
                requestBody: chatRequest,
                queryParameters: localVarQueryParameter,
                requestConfig: localVarRequestOptions,
                path: localVarPath,
                configuration,
                pathTemplate: '/vlm/google/deplot',
                httpMethod: 'POST'
            });
            localVarRequestOptions.data = serializeDataIfNeeded(chatRequest, localVarRequestOptions, configuration)

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Invokes inference using the model chat parameters. If uploading large images, this POST should be used in conjunction with the NVCF API which allows for the upload of large assets.  You can find details on how to use NVCF Asset APIs here: https://docs.api.nvidia.com/cloud-functions/reference/createasset
         * @summary Request response from the model
         * @param {ChatRequest} chatRequest 
         * @param {string} [nvcfInputAssetReferences] String of asset IDs separated by commas. Data is uploaded to AWS S3 using NVCF Asset APIs and associated with these asset IDs.If the size of an image is more than 200KB, it needs to be uploaded to a presigned S3 URL bucket. The presigned URL allows for secure and temporary access to the S3 bucket for uploading the image. Once the asset is requested, an asset ID is generated for it. Please include this asset ID in this header and to use the uploaded image in a prompt, you need to refer to it using the following format: &#x60;&lt;img src&#x3D;\&quot;data:image/png;asset_id,{asset_id}\&quot; /&gt;&#x60;.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        requestModelResponse: async (chatRequest: ChatRequest, nvcfInputAssetReferences?: string, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'chatRequest' is not null or undefined
            assertParamExists('requestModelResponse', 'chatRequest', chatRequest)
            const localVarPath = `/vlm/adept/fuyu-8b`;
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
            if (nvcfInputAssetReferences != null) {
                localVarHeaderParameter['NVCF-INPUT-ASSET-REFERENCES'] = String(nvcfInputAssetReferences);
            }


    
            localVarHeaderParameter['Content-Type'] = 'application/json';


            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            requestBeforeHook({
                requestBody: chatRequest,
                queryParameters: localVarQueryParameter,
                requestConfig: localVarRequestOptions,
                path: localVarPath,
                configuration,
                pathTemplate: '/vlm/adept/fuyu-8b',
                httpMethod: 'POST'
            });
            localVarRequestOptions.data = serializeDataIfNeeded(chatRequest, localVarRequestOptions, configuration)

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Invokes inference using the model chat parameters. If uploading large images, this POST should be used in conjunction with the NVCF API which allows for the upload of large assets.  You can find details on how to use NVCF Asset APIs here: https://docs.api.nvidia.com/cloud-functions/reference/createasset
         * @summary Request response from the model
         * @param {ChatRequest} chatRequest 
         * @param {string} [nvcfInputAssetReferences] String of asset IDs separated by commas. Data is uploaded to AWS S3 using NVCF Asset APIs and associated with these asset IDs.If the size of an image is more than 200KB, it needs to be uploaded to a presigned S3 URL bucket. The presigned URL allows for secure and temporary access to the S3 bucket for uploading the image. Once the asset is requested, an asset ID is generated for it. Please include this asset ID in this header and to use the uploaded image in a prompt, you need to refer to it using the following format: &#x60;&lt;img src&#x3D;\&quot;data:image/png;asset_id,{asset_id}\&quot; /&gt;&#x60;.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        requestModelResponse_1: async (chatRequest: ChatRequest, nvcfInputAssetReferences?: string, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'chatRequest' is not null or undefined
            assertParamExists('requestModelResponse_1', 'chatRequest', chatRequest)
            const localVarPath = `/vlm/microsoft/kosmos-2`;
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
            if (nvcfInputAssetReferences != null) {
                localVarHeaderParameter['NVCF-INPUT-ASSET-REFERENCES'] = String(nvcfInputAssetReferences);
            }


    
            localVarHeaderParameter['Content-Type'] = 'application/json';


            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            requestBeforeHook({
                requestBody: chatRequest,
                queryParameters: localVarQueryParameter,
                requestConfig: localVarRequestOptions,
                path: localVarPath,
                configuration,
                pathTemplate: '/vlm/microsoft/kosmos-2',
                httpMethod: 'POST'
            });
            localVarRequestOptions.data = serializeDataIfNeeded(chatRequest, localVarRequestOptions, configuration)

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
    }
};

/**
 * MultimodalApiApi - functional programming interface
 * @export
 */
export const MultimodalApiApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = MultimodalApiApiAxiosParamCreator(configuration)
    return {
        /**
         * Invokes inference using the model chat parameters. If uploading large images, this POST should be used in conjunction with the NVCF API which allows for the upload of large assets.  You can find details on how to use NVCF Asset APIs here: https://docs.api.nvidia.com/cloud-functions/reference/createasset
         * @summary Request response from the model
         * @param {MultimodalApiApiInvokeModelInferenceRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async invokeModelInference(requestParameters: MultimodalApiApiInvokeModelInferenceRequest, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<ChatCompletion>> {
            const chatRequest: ChatRequest = {
                messages: requestParameters.messages,
                temperature: requestParameters.temperature,
                top_p: requestParameters.top_p,
                max_tokens: requestParameters.max_tokens,
                seed: requestParameters.seed,
                stream: requestParameters.stream,
                grounded_response: requestParameters.grounded_response,
                bounding_boxes: requestParameters.bounding_boxes,
                response_mode: requestParameters.response_mode,
                task: requestParameters.task
            };
            const localVarAxiosArgs = await localVarAxiosParamCreator.invokeModelInference(chatRequest, requestParameters.nvcfInputAssetReferences, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * Invokes inference using the model chat parameters. If uploading large images, this POST should be used in conjunction with the NVCF API which allows for the upload of large assets.  You can find details on how to use NVCF Asset APIs here: https://docs.api.nvidia.com/cloud-functions/reference/createasset
         * @summary Request response from the model
         * @param {MultimodalApiApiRequestModelInferenceRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async requestModelInference(requestParameters: MultimodalApiApiRequestModelInferenceRequest, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<ChatCompletion>> {
            const chatRequest: ChatRequest = {
                messages: requestParameters.messages,
                temperature: requestParameters.temperature,
                top_p: requestParameters.top_p,
                max_tokens: requestParameters.max_tokens,
                seed: requestParameters.seed,
                stream: requestParameters.stream,
                grounded_response: requestParameters.grounded_response,
                bounding_boxes: requestParameters.bounding_boxes,
                response_mode: requestParameters.response_mode,
                task: requestParameters.task
            };
            const localVarAxiosArgs = await localVarAxiosParamCreator.requestModelInference(chatRequest, requestParameters.nvcfInputAssetReferences, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * Invokes inference using the model chat parameters. If uploading large images, this POST should be used in conjunction with the NVCF API which allows for the upload of large assets.  You can find details on how to use NVCF Asset APIs here: https://docs.api.nvidia.com/cloud-functions/reference/createasset
         * @summary Request response from the model
         * @param {MultimodalApiApiRequestModelResponseRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async requestModelResponse(requestParameters: MultimodalApiApiRequestModelResponseRequest, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<ChatCompletion>> {
            const chatRequest: ChatRequest = {
                messages: requestParameters.messages,
                temperature: requestParameters.temperature,
                top_p: requestParameters.top_p,
                max_tokens: requestParameters.max_tokens,
                seed: requestParameters.seed,
                stream: requestParameters.stream,
                grounded_response: requestParameters.grounded_response,
                bounding_boxes: requestParameters.bounding_boxes,
                response_mode: requestParameters.response_mode,
                task: requestParameters.task
            };
            const localVarAxiosArgs = await localVarAxiosParamCreator.requestModelResponse(chatRequest, requestParameters.nvcfInputAssetReferences, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * Invokes inference using the model chat parameters. If uploading large images, this POST should be used in conjunction with the NVCF API which allows for the upload of large assets.  You can find details on how to use NVCF Asset APIs here: https://docs.api.nvidia.com/cloud-functions/reference/createasset
         * @summary Request response from the model
         * @param {MultimodalApiApiRequestModelResponse0Request} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async requestModelResponse_1(requestParameters: MultimodalApiApiRequestModelResponse0Request, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<ChatCompletion>> {
            const chatRequest: ChatRequest = {
                messages: requestParameters.messages,
                temperature: requestParameters.temperature,
                top_p: requestParameters.top_p,
                max_tokens: requestParameters.max_tokens,
                seed: requestParameters.seed,
                stream: requestParameters.stream,
                grounded_response: requestParameters.grounded_response,
                bounding_boxes: requestParameters.bounding_boxes,
                response_mode: requestParameters.response_mode,
                task: requestParameters.task
            };
            const localVarAxiosArgs = await localVarAxiosParamCreator.requestModelResponse_1(chatRequest, requestParameters.nvcfInputAssetReferences, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
    }
};

/**
 * MultimodalApiApi - factory interface
 * @export
 */
export const MultimodalApiApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = MultimodalApiApiFp(configuration)
    return {
        /**
         * Invokes inference using the model chat parameters. If uploading large images, this POST should be used in conjunction with the NVCF API which allows for the upload of large assets.  You can find details on how to use NVCF Asset APIs here: https://docs.api.nvidia.com/cloud-functions/reference/createasset
         * @summary Request response from the model
         * @param {MultimodalApiApiInvokeModelInferenceRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        invokeModelInference(requestParameters: MultimodalApiApiInvokeModelInferenceRequest, options?: AxiosRequestConfig): AxiosPromise<ChatCompletion> {
            return localVarFp.invokeModelInference(requestParameters, options).then((request) => request(axios, basePath));
        },
        /**
         * Invokes inference using the model chat parameters. If uploading large images, this POST should be used in conjunction with the NVCF API which allows for the upload of large assets.  You can find details on how to use NVCF Asset APIs here: https://docs.api.nvidia.com/cloud-functions/reference/createasset
         * @summary Request response from the model
         * @param {MultimodalApiApiRequestModelInferenceRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        requestModelInference(requestParameters: MultimodalApiApiRequestModelInferenceRequest, options?: AxiosRequestConfig): AxiosPromise<ChatCompletion> {
            return localVarFp.requestModelInference(requestParameters, options).then((request) => request(axios, basePath));
        },
        /**
         * Invokes inference using the model chat parameters. If uploading large images, this POST should be used in conjunction with the NVCF API which allows for the upload of large assets.  You can find details on how to use NVCF Asset APIs here: https://docs.api.nvidia.com/cloud-functions/reference/createasset
         * @summary Request response from the model
         * @param {MultimodalApiApiRequestModelResponseRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        requestModelResponse(requestParameters: MultimodalApiApiRequestModelResponseRequest, options?: AxiosRequestConfig): AxiosPromise<ChatCompletion> {
            return localVarFp.requestModelResponse(requestParameters, options).then((request) => request(axios, basePath));
        },
        /**
         * Invokes inference using the model chat parameters. If uploading large images, this POST should be used in conjunction with the NVCF API which allows for the upload of large assets.  You can find details on how to use NVCF Asset APIs here: https://docs.api.nvidia.com/cloud-functions/reference/createasset
         * @summary Request response from the model
         * @param {MultimodalApiApiRequestModelResponse0Request} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        requestModelResponse_1(requestParameters: MultimodalApiApiRequestModelResponse0Request, options?: AxiosRequestConfig): AxiosPromise<ChatCompletion> {
            return localVarFp.requestModelResponse_1(requestParameters, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * Request parameters for invokeModelInference operation in MultimodalApiApi.
 * @export
 * @interface MultimodalApiApiInvokeModelInferenceRequest
 */
export type MultimodalApiApiInvokeModelInferenceRequest = {
    
    /**
    * String of asset IDs separated by commas. Data is uploaded to AWS S3 using NVCF Asset APIs and associated with these asset IDs.If the size of an image is more than 200KB, it needs to be uploaded to a presigned S3 URL bucket. The presigned URL allows for secure and temporary access to the S3 bucket for uploading the image. Once the asset is requested, an asset ID is generated for it. Please include this asset ID in this header and to use the uploaded image in a prompt, you need to refer to it using the following format: `<img src=\"data:image/png;asset_id,{asset_id}\" />`.
    * @type {string}
    * @memberof MultimodalApiApiInvokeModelInference
    */
    readonly nvcfInputAssetReferences?: string
    
} & ChatRequest

/**
 * Request parameters for requestModelInference operation in MultimodalApiApi.
 * @export
 * @interface MultimodalApiApiRequestModelInferenceRequest
 */
export type MultimodalApiApiRequestModelInferenceRequest = {
    
    /**
    * String of asset IDs separated by commas. Data is uploaded to AWS S3 using NVCF Asset APIs and associated with these asset IDs.If the size of an image is more than 200KB, it needs to be uploaded to a presigned S3 URL bucket. The presigned URL allows for secure and temporary access to the S3 bucket for uploading the image. Once the asset is requested, an asset ID is generated for it. Please include this asset ID in this header and to use the uploaded image in a prompt, you need to refer to it using the following format:  `<img src=\"data:image/png;asset_id,{asset_id}\" />`.
    * @type {string}
    * @memberof MultimodalApiApiRequestModelInference
    */
    readonly nvcfInputAssetReferences?: string
    
} & ChatRequest

/**
 * Request parameters for requestModelResponse operation in MultimodalApiApi.
 * @export
 * @interface MultimodalApiApiRequestModelResponseRequest
 */
export type MultimodalApiApiRequestModelResponseRequest = {
    
    /**
    * String of asset IDs separated by commas. Data is uploaded to AWS S3 using NVCF Asset APIs and associated with these asset IDs.If the size of an image is more than 200KB, it needs to be uploaded to a presigned S3 URL bucket. The presigned URL allows for secure and temporary access to the S3 bucket for uploading the image. Once the asset is requested, an asset ID is generated for it. Please include this asset ID in this header and to use the uploaded image in a prompt, you need to refer to it using the following format: `<img src=\"data:image/png;asset_id,{asset_id}\" />`.
    * @type {string}
    * @memberof MultimodalApiApiRequestModelResponse
    */
    readonly nvcfInputAssetReferences?: string
    
} & ChatRequest

/**
 * Request parameters for requestModelResponse_1 operation in MultimodalApiApi.
 * @export
 * @interface MultimodalApiApiRequestModelResponse0Request
 */
export type MultimodalApiApiRequestModelResponse0Request = {
    
    /**
    * String of asset IDs separated by commas. Data is uploaded to AWS S3 using NVCF Asset APIs and associated with these asset IDs.If the size of an image is more than 200KB, it needs to be uploaded to a presigned S3 URL bucket. The presigned URL allows for secure and temporary access to the S3 bucket for uploading the image. Once the asset is requested, an asset ID is generated for it. Please include this asset ID in this header and to use the uploaded image in a prompt, you need to refer to it using the following format: `<img src=\"data:image/png;asset_id,{asset_id}\" />`.
    * @type {string}
    * @memberof MultimodalApiApiRequestModelResponse0
    */
    readonly nvcfInputAssetReferences?: string
    
} & ChatRequest

/**
 * MultimodalApiApiGenerated - object-oriented interface
 * @export
 * @class MultimodalApiApiGenerated
 * @extends {BaseAPI}
 */
export class MultimodalApiApiGenerated extends BaseAPI {
    /**
     * Invokes inference using the model chat parameters. If uploading large images, this POST should be used in conjunction with the NVCF API which allows for the upload of large assets.  You can find details on how to use NVCF Asset APIs here: https://docs.api.nvidia.com/cloud-functions/reference/createasset
     * @summary Request response from the model
     * @param {MultimodalApiApiInvokeModelInferenceRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof MultimodalApiApiGenerated
     */
    public invokeModelInference(requestParameters: MultimodalApiApiInvokeModelInferenceRequest, options?: AxiosRequestConfig) {
        return MultimodalApiApiFp(this.configuration).invokeModelInference(requestParameters, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Invokes inference using the model chat parameters. If uploading large images, this POST should be used in conjunction with the NVCF API which allows for the upload of large assets.  You can find details on how to use NVCF Asset APIs here: https://docs.api.nvidia.com/cloud-functions/reference/createasset
     * @summary Request response from the model
     * @param {MultimodalApiApiRequestModelInferenceRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof MultimodalApiApiGenerated
     */
    public requestModelInference(requestParameters: MultimodalApiApiRequestModelInferenceRequest, options?: AxiosRequestConfig) {
        return MultimodalApiApiFp(this.configuration).requestModelInference(requestParameters, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Invokes inference using the model chat parameters. If uploading large images, this POST should be used in conjunction with the NVCF API which allows for the upload of large assets.  You can find details on how to use NVCF Asset APIs here: https://docs.api.nvidia.com/cloud-functions/reference/createasset
     * @summary Request response from the model
     * @param {MultimodalApiApiRequestModelResponseRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof MultimodalApiApiGenerated
     */
    public requestModelResponse(requestParameters: MultimodalApiApiRequestModelResponseRequest, options?: AxiosRequestConfig) {
        return MultimodalApiApiFp(this.configuration).requestModelResponse(requestParameters, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Invokes inference using the model chat parameters. If uploading large images, this POST should be used in conjunction with the NVCF API which allows for the upload of large assets.  You can find details on how to use NVCF Asset APIs here: https://docs.api.nvidia.com/cloud-functions/reference/createasset
     * @summary Request response from the model
     * @param {MultimodalApiApiRequestModelResponse0Request} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof MultimodalApiApiGenerated
     */
    public requestModelResponse_1(requestParameters: MultimodalApiApiRequestModelResponse0Request, options?: AxiosRequestConfig) {
        return MultimodalApiApiFp(this.configuration).requestModelResponse_1(requestParameters, options).then((request) => request(this.axios, this.basePath));
    }
}
