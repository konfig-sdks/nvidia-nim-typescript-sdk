/*
Earth-2 Inference Server

API for submitting to the Earth-2 Inference Server.

The version of the OpenAPI document: 0.1.0
Contact: earth2-support@exchange.nvidia.com

NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"

import { InfeasibleResultData2 } from './infeasible-result-data2';
import { VehicleData5 } from './vehicle-data5';

/**
 * Infeasible solution, this can mean the problem itself is infeasible or solver requires more time to find a solution. Setting default solve time is suggested in case you are not aware of the expected time.
 * @export
 * @interface InFeasibleSolve1SolverInfeasibleResponse
 */
export interface InFeasibleSolve1SolverInfeasibleResponse {
    /**
     * 1 - Infeasible solution is available  
     * @type {number}
     * @memberof InFeasibleSolve1SolverInfeasibleResponse
     */
    'status'?: number;
    /**
     * Number of vehicle being used for the solution
     * @type {number}
     * @memberof InFeasibleSolve1SolverInfeasibleResponse
     */
    'num_vehicles'?: number;
    /**
     * Total cost of the solution
     * @type {number}
     * @memberof InFeasibleSolve1SolverInfeasibleResponse
     */
    'solution_cost'?: number;
    /**
     * All the details of vehicle routes and timestamps
     * @type {{ [key: string]: VehicleData5; }}
     * @memberof InFeasibleSolve1SolverInfeasibleResponse
     */
    'vehicle_data'?: { [key: string]: VehicleData5; };
    /**
     * Any information pertaining to the run.
     * @type {string}
     * @memberof InFeasibleSolve1SolverInfeasibleResponse
     */
    'msg'?: string | null;
}

