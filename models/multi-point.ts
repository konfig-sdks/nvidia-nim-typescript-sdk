/*
Earth-2 Inference Server

API for submitting to the Earth-2 Inference Server.

The version of the OpenAPI document: 0.1.0
Contact: earth2-support@exchange.nvidia.com

NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"


/**
 * MultiPoint domain, specifies a list of lat/lon points.  Parameters ---------- lat : List[float]     latitude points. lon : List[float]     longitude points. location : Union[List[str], List[int]]     Name given to the collection of lat/lon points. diagnostics : List[Diagnostic]     List of diagnostics to be computed for this domain.
 * @export
 * @interface MultiPoint
 */
export interface MultiPoint {
    /**
     * 
     * @type {Array<number>}
     * @memberof MultiPoint
     */
    'lat': Array<number>;
    /**
     * 
     * @type {Array<string>}
     * @memberof MultiPoint
     */
    'location': Array<string>;
    /**
     * 
     * @type {Array<number>}
     * @memberof MultiPoint
     */
    'lon': Array<number>;
    /**
     * 
     * @type {string}
     * @memberof MultiPoint
     */
    'name': string;
    /**
     * 
     * @type {any}
     * @memberof MultiPoint
     */
    'type': any;
}

