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
 * @interface OrderVehicleMatch
 */
export interface OrderVehicleMatch {
    /**
     * dtype: int32, order_id >= 0.    Indices of orders which can be served by this particular vehicleOrder id as an integer
     * @type {number}
     * @memberof OrderVehicleMatch
     */
    'order_id': number;
    /**
     * dtype: int32, vehicle_id >= 0.    Indices of the vehicles which can serve this particular order.  
     * @type {Array<number>}
     * @memberof OrderVehicleMatch
     */
    'vehicle_ids': Array<number>;
}

