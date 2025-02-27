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
 * @interface VehicleData2
 */
export interface VehicleData2 {
    /**
     * task_ids being assigned to vehicle along with depot and breaks
     * @type {Array<string>}
     * @memberof VehicleData2
     */
    'task_id'?: Array<string>;
    /**
     * arrival stamps at each task locations
     * @type {Array<number>}
     * @memberof VehicleData2
     */
    'arrival_stamp'?: Array<number>;
    /**
     * Route indices as per waypoint graph or cost matrix provided
     * @type {Array<number>}
     * @memberof VehicleData2
     */
    'route'?: Array<number>;
    /**
     * Type of routing point, whether it is Depot, Waypoint - w  Delivery, Break, Pickup  
     * @type {Array<string>}
     * @memberof VehicleData2
     */
    'type'?: Array<VehicleData2TypeEnum>;
}

type VehicleData2TypeEnum = 'Depot' | 'Pickup' | 'Delivery' | 'Break' | 'w'


