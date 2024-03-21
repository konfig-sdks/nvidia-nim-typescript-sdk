/*
Earth-2 Inference Server

API for submitting to the Earth-2 Inference Server.

The version of the OpenAPI document: 0.1.0
Contact: earth2-support@exchange.nvidia.com

NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"

import { IOEnum } from './ioenum';
import { InferenceModels } from './inference-models';
import { PerturbationMethodProperty } from './perturbation-method-property';

/**
 * Parameters required to construct simulation.  Parameters ---------- inference_model : InferenceModel     Model to use in the simulation. initial_time : datetime.datetime, optional     t = 0, used to define the initial condition. If not provided,     defaults to the nearest 6 hour UTC time. simulation_length : int     How many 6-hour integration steps to simulate. initial_output_time : int = 0     The first time step to include in the output file. io_frequency : int = 1     The frequency of times to include in the output file. return_control_forecast: bool = True     Whether to return the deterministic control forecast number_of_ensembles : int     The total number of ensemble members generated. perturbation_method : PertubationMethod     The method used to perturb the initial conditions to create an ensemble. random_seed: int     The random seed to set for randomness during perturbations. output_format: str = [\'zarr\', \'netcdf\', \'h5\']     The output file format.
 * @export
 * @interface SimulationParameters
 */
export interface SimulationParameters {
    /**
     * 
     * @type {any}
     * @memberof SimulationParameters
     */
    'example'?: any;
    /**
     * Inference Model Options.
     * @type {InferenceModels}
     * @memberof SimulationParameters
     */
    'inference_model': InferenceModels;
    /**
     * 
     * @type {number}
     * @memberof SimulationParameters
     */
    'initial_output_time'?: number;
    /**
     * 
     * @type {string}
     * @memberof SimulationParameters
     */
    'initial_time': string;
    /**
     * 
     * @type {number}
     * @memberof SimulationParameters
     */
    'io_frequency'?: number;
    /**
     * 
     * @type {number}
     * @memberof SimulationParameters
     */
    'number_of_ensembles'?: number;
    /**
     * Allow choice of output type.
     * @type {IOEnum}
     * @memberof SimulationParameters
     */
    'output_format'?: IOEnum;
    /**
     * 
     * @type {PerturbationMethodProperty}
     * @memberof SimulationParameters
     */
    'perturbation_method'?: PerturbationMethodProperty;
    /**
     * 
     * @type {number}
     * @memberof SimulationParameters
     */
    'random_seed'?: number;
    /**
     * 
     * @type {boolean}
     * @memberof SimulationParameters
     */
    'return_control_forecast'?: boolean;
    /**
     * 
     * @type {number}
     * @memberof SimulationParameters
     */
    'simulation_length'?: number;
    /**
     * 
     * @type {any}
     * @memberof SimulationParameters
     */
    'x-konfig-original-example'?: any;
}

