/*
Earth-2 Inference Server

API for submitting to the Earth-2 Inference Server.

The version of the OpenAPI document: 0.1.0
Contact: earth2-support@exchange.nvidia.com

NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"

import { OptimizedRoutingDataProperty } from './optimized-routing-data-property';

/**
 * 
 * @export
 * @interface CuoptData
 */
export interface CuoptData {
    /**
     * unused/ignored but retained for compatibility
     * @type {object}
     * @memberof CuoptData
     */
    'parameters'?: object | null;
    /**
     * Action to be performed by the service, validator action just validates input against format and base rules.
     * @type {string}
     * @memberof CuoptData
     */
    'action'?: CuoptDataActionEnum;
    /**
     * 
     * @type {OptimizedRoutingDataProperty}
     * @memberof CuoptData
     */
    'data': OptimizedRoutingDataProperty | null;
    /**
     * cuOpt client version. Set to \'custom\' to skip version check.
     * @type {string}
     * @memberof CuoptData
     */
    'client_version'?: string | null;
}

type CuoptDataActionEnum = 'cuOpt_OptimizedRouting' | 'cuOpt_RoutingValidator' | '0'


