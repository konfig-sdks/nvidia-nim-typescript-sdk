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
 * @interface CreateEmbedding400Response
 */
export interface CreateEmbedding400Response {
    /**
     * 
     * @type {string}
     * @memberof CreateEmbedding400Response
     */
    'object'?: string;
    /**
     * 
     * @type {string}
     * @memberof CreateEmbedding400Response
     */
    'message'?: string;
    /**
     * 
     * @type {{ [key: string]: any; }}
     * @memberof CreateEmbedding400Response
     */
    'detail'?: { [key: string]: any; };
    /**
     * 
     * @type {string}
     * @memberof CreateEmbedding400Response
     */
    'type'?: string;
}

