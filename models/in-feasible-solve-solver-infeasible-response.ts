/*
Earth-2 Inference Server

API for submitting to the Earth-2 Inference Server.

The version of the OpenAPI document: 0.1.0
Contact: earth2-support@exchange.nvidia.com

NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"

import { InfeasibleResultData1 } from './infeasible-result-data1';
import { VehicleData2 } from './vehicle-data2';

/**
 * Infeasible solution, this can mean the problem itself is infeasible or solver requires more time to find a solution. Setting default solve time is suggested in case you are not aware of the expected time.
 * @export
 * @interface InFeasibleSolveSolverInfeasibleResponse
 */
export interface InFeasibleSolveSolverInfeasibleResponse {
    /**
     * 1 - Infeasible solution is available  
     * @type {number}
     * @memberof InFeasibleSolveSolverInfeasibleResponse
     */
    'status'?: number;
    /**
     * Number of vehicle being used for the solution
     * @type {number}
     * @memberof InFeasibleSolveSolverInfeasibleResponse
     */
    'num_vehicles'?: number;
    /**
     * Total cost of the solution
     * @type {number}
     * @memberof InFeasibleSolveSolverInfeasibleResponse
     */
    'solution_cost'?: number;
    /**
     * All the details of vehicle routes and timestamps
     * @type {{ [key: string]: VehicleData2; }}
     * @memberof InFeasibleSolveSolverInfeasibleResponse
     */
    'vehicle_data'?: { [key: string]: VehicleData2; };
    /**
     * Any information pertaining to the run.
     * @type {string}
     * @memberof InFeasibleSolveSolverInfeasibleResponse
     */
    'msg'?: string | null;
}

