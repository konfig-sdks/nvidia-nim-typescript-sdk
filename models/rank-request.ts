/*
Earth-2 Inference Server

API for submitting to the Earth-2 Inference Server.

The version of the OpenAPI document: 0.1.0
Contact: earth2-support@exchange.nvidia.com

NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"

import { MultiModalData } from './multi-modal-data';

/**
 * A request to the rank endpoint.
 * @export
 * @interface RankRequest
 */
export interface RankRequest {
    /**
     * Supported models.
     * @type {string}
     * @memberof RankRequest
     */
    'model': string;
    /**
     * A text query for ranking the passages
     * @type {MultiModalData}
     * @memberof RankRequest
     */
    'query': MultiModalData;
    /**
     * Text passages to rank based on the query
     * @type {Array<MultiModalData>}
     * @memberof RankRequest
     */
    'passages': Array<MultiModalData>;
}

