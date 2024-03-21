/*
Earth-2 Inference Server

API for submitting to the Earth-2 Inference Server.

The version of the OpenAPI document: 0.1.0
Contact: earth2-support@exchange.nvidia.com

NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"


/**
 * 
 * @export
 * @interface Errors
 */
export interface Errors {
    /**
     * Error title
     * @type {string}
     * @memberof Errors
     */
    'title': string;
    /**
     * Error type
     * @type {string}
     * @memberof Errors
     */
    'type': string;
    /**
     * Error status code
     * @type {number}
     * @memberof Errors
     */
    'status': number;
    /**
     * Detailed information about the error
     * @type {string}
     * @memberof Errors
     */
    'detail': string;
    /**
     * Function instance used to invoke the request
     * @type {string}
     * @memberof Errors
     */
    'instance': string;
    /**
     * UUID of the request
     * @type {string}
     * @memberof Errors
     */
    'requestId': string;
}

