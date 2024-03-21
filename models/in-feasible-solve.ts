/*
Earth-2 Inference Server

API for submitting to the Earth-2 Inference Server.

The version of the OpenAPI document: 0.1.0
Contact: earth2-support@exchange.nvidia.com

NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"

import { InFeasibleSolveSolverInfeasibleResponse } from './in-feasible-solve-solver-infeasible-response';

/**
 * 
 * @export
 * @interface InFeasibleSolve
 */
export interface InFeasibleSolve {
    /**
     * 
     * @type {InFeasibleSolveSolverInfeasibleResponse}
     * @memberof InFeasibleSolve
     */
    'solver_infeasible_response'?: InFeasibleSolveSolverInfeasibleResponse;
    /**
     * Etl and Solve times of the solve call
     * @type {object}
     * @memberof InFeasibleSolve
     */
    'perf_times'?: object | null;
}

