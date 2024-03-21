/*
Earth-2 Inference Server

API for submitting to the Earth-2 Inference Server.

The version of the OpenAPI document: 0.1.0
Contact: earth2-support@exchange.nvidia.com

NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"


/**
 * Abstract class for defining various regions/windows over the globe.
 * @export
 * @interface Global
 */
export interface Global {
    /**
     * 
     * @type {number}
     * @memberof Global
     */
    'lat_max'?: number;
    /**
     * 
     * @type {number}
     * @memberof Global
     */
    'lat_min'?: number;
    /**
     * 
     * @type {number}
     * @memberof Global
     */
    'lon_max'?: number;
    /**
     * 
     * @type {number}
     * @memberof Global
     */
    'lon_min'?: number;
    /**
     * 
     * @type {any}
     * @memberof Global
     */
    'name'?: any;
    /**
     * 
     * @type {any}
     * @memberof Global
     */
    'type'?: any;
}

