/*
Earth-2 Inference Server

API for submitting to the Earth-2 Inference Server.

The version of the OpenAPI document: 0.1.0
Contact: earth2-support@exchange.nvidia.com

NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"

import { FeasibleSolveSolverResponse } from './feasible-solve-solver-response';

/**
 * 
 * @export
 * @interface FeasibleSolve
 */
export interface FeasibleSolve {
    /**
     * 
     * @type {FeasibleSolveSolverResponse}
     * @memberof FeasibleSolve
     */
    'solver_response'?: FeasibleSolveSolverResponse;
    /**
     * Etl and Solve times of the solve call
     * @type {object}
     * @memberof FeasibleSolve
     */
    'perf_times'?: object | null;
}

