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
 * @interface VehicleOrderMatch1
 */
export interface VehicleOrderMatch1 {
    /**
     * dtype: int32, vehicle_id >= 0.    Vehicle id as an integer, and can serve all the order listed in order_ids.
     * @type {number}
     * @memberof VehicleOrderMatch1
     */
    'vehicle_id': number;
    /**
     * dtype: int32, order_id >= 0.    Indices of orders which can be served by this particular vehicle
     * @type {Array<number>}
     * @memberof VehicleOrderMatch1
     */
    'order_ids': Array<number>;
}

