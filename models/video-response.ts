/*
Earth-2 Inference Server

API for submitting to the Earth-2 Inference Server.

The version of the OpenAPI document: 0.1.0
Contact: earth2-support@exchange.nvidia.com

NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"

import { FinishReason } from './finish-reason';

/**
 * 
 * @export
 * @interface VideoResponse
 */
export interface VideoResponse {
    /**
     * A base64-encoded string of the generated video (mp4)
     * @type {string}
     * @memberof VideoResponse
     */
    'video': string;
    /**
     * The result of the generation process. `SUCCESS` indicates success. `ERROR` indicates an error. `CONTENT_FILTERED` indicates the result affected by the content filter
     * @type {FinishReason}
     * @memberof VideoResponse
     */
    'finish_reason': FinishReason;
    /**
     * The seed used during generation
     * @type {number}
     * @memberof VideoResponse
     */
    'seed': number;
}

