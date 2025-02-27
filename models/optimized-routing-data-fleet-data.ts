/*
Earth-2 Inference Server

API for submitting to the Earth-2 Inference Server.

The version of the OpenAPI document: 0.1.0
Contact: earth2-support@exchange.nvidia.com

NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"

import { FleetData1 } from './fleet-data1';
import { VehicleOrderMatch1 } from './vehicle-order-match1';

/**
 * All Fleet information
 * @export
 * @interface OptimizedRoutingDataFleetData
 */
export interface OptimizedRoutingDataFleetData {
    /**
     * dtype: int32, vehicle_location >= 0.    Start and end location of the vehicles in the given set of locations in WayPointGraph or CostMatrices. Example: For 2 vehicles,         [            [veh_1_start_loc, veh_1_end_loc],            [veh_2_start_loc, veh_2_end_loc]        ]
     * @type {Array<Array<number>>}
     * @memberof OptimizedRoutingDataFleetData
     */
    'vehicle_locations': Array<Array<number>>;
    /**
     * List of the vehicle ids or names provided as a string.
     * @type {Array<string>}
     * @memberof OptimizedRoutingDataFleetData
     */
    'vehicle_ids'?: Array<string> | null;
    /**
     * dtype: int32, capacity >= 0.    Note: For this release number of capacity dimensions are limited to 3.    Lists of capacities of each vehicle. Multiple capacities can be added and each list will represent one kind of capacity. Order of kind of the capacities should match order of the demands. Total capacity for each type should be sufficient to complete all demand of that type.Example: In case of two sets of capacities per vehicle with 3 vehicles,         [            [cap_1_veh_1, cap_1_veh_2, cap_1_veh_3],            [cap_2_veh_1, cap_2_veh_2, cap_2_veh_3]        ]
     * @type {Array<Array<number>>}
     * @memberof OptimizedRoutingDataFleetData
     */
    'capacities'?: Array<Array<number>> | null;
    /**
     * dtype: int32    Priorities of each vehicle, lower the value higher the priority, value should be within [0, 255]
     * @type {Array<number>}
     * @memberof OptimizedRoutingDataFleetData
     */
    'priorities'?: Array<number> | null;
    /**
     * dtype: int32, time >= 0.    Earliest and Latest time window pairs for each vehicle, for example the data would look as follows for 2 vehicles,          [            [veh_1_earliest, veh_1_latest],            [veh_2_earliest, veh_2_latest]        ]
     * @type {Array<Array<number>>}
     * @memberof OptimizedRoutingDataFleetData
     */
    'vehicle_time_windows'?: Array<Array<number>> | null;
    /**
     * dtype: int32, time >= 0.    Multiple break time windows can be added for each vehicle.Earliest and Latest break time window pairs for each vehicle, For example, in case of 2 sets of breaks for each vehicle which translates to 2 dimensions of breaks,         [            [[brk_1_veh_1_earliest, brk_1_veh_1_latest], [brk_1_veh_2_earliest, brk_1_veh_2_latest]]            [[brk_2_veh_1_earliest, brk_2_veh_1_latest], [brk_2_veh_2_earliest, brk_2_veh_2_latest]]        ]    The break duration within this time window is provided through vehicle_break_durations.
     * @type {Array<Array<Array<number>>>}
     * @memberof OptimizedRoutingDataFleetData
     */
    'vehicle_break_time_windows'?: Array<Array<Array<number>>> | null;
    /**
     * dtype: int32, time >= 0.    Break duration for each vehicle. vehicle_break_time_windows should be provided to use this option.For example, in case of having 2 breaks for each vehicle,         [            [brk_1_veh_1_duration, brk_1_veh_2_duration],            [brk_2_veh_1_duration, brk_2_veh_2_duration],        ]
     * @type {Array<Array<number>>}
     * @memberof OptimizedRoutingDataFleetData
     */
    'vehicle_break_durations'?: Array<Array<number>> | null;
    /**
     * dtype: int32, location >= 0.    Break location where vehicles can take breaks. If not set, any location can be used for the break.
     * @type {Array<number>}
     * @memberof OptimizedRoutingDataFleetData
     */
    'vehicle_break_locations'?: Array<number> | null;
    /**
     * dtype: uint8.    Types of vehicles in the fleet given as positive integers.
     * @type {Array<number>}
     * @memberof OptimizedRoutingDataFleetData
     */
    'vehicle_types'?: Array<number> | null;
    /**
     * A list of vehicle order match, where the match would contain a vehicle id and a list of orders that vehicle can serve.
     * @type {Array<VehicleOrderMatch1>}
     * @memberof OptimizedRoutingDataFleetData
     */
    'vehicle_order_match'?: Array<VehicleOrderMatch1> | null;
    /**
     * Drop the cost of trip to first location for that vehicle.
     * @type {Array<boolean>}
     * @memberof OptimizedRoutingDataFleetData
     */
    'skip_first_trips'?: Array<boolean> | null;
    /**
     * Drop cost of return trip for each vehicle.
     * @type {Array<boolean>}
     * @memberof OptimizedRoutingDataFleetData
     */
    'drop_return_trips'?: Array<boolean> | null;
    /**
     * dtype: int32, min_vehicles >= 1.    Solution should consider minimum number of vehicles
     * @type {number}
     * @memberof OptimizedRoutingDataFleetData
     */
    'min_vehicles'?: number | null;
    /**
     * dtype: float32, max_costs >= 0.    Maximum cost a vehicle can incur and it is based on cost matrix/cost waypoint graph.
     * @type {Array<number>}
     * @memberof OptimizedRoutingDataFleetData
     */
    'vehicle_max_costs'?: Array<number> | null;
    /**
     * dtype: float32, max_time >= 0.    Maximum time a vehicle can operate (includes drive, service and wait time), this is based on travel time matrix/travel time waypoint graph.
     * @type {Array<number>}
     * @memberof OptimizedRoutingDataFleetData
     */
    'vehicle_max_times'?: Array<number> | null;
    /**
     * dtype: float32, fixed_cost >= 0.    Cost of each vehicle.This helps in routing where may be 2 vehicles with less cost is effective compared to 1 vehicle with huge cost. As example shows veh-0 (15) > veh-1 (5) + veh-2 (5)
     * @type {Array<number>}
     * @memberof OptimizedRoutingDataFleetData
     */
    'vehicle_fixed_costs'?: Array<number> | null;
}

