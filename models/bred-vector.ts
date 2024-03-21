/*
Earth-2 Inference Server

API for submitting to the Earth-2 Inference Server.

The version of the OpenAPI document: 0.1.0
Contact: earth2-support@exchange.nvidia.com

NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"


/**
 * Bred Vector class containing perturbation parameters.  Parameters ---------- noise_amplitude : float = 0.05     Noise amplitude integration_steps : int = 20     Number of integration steps to use in forward call. ensemble_perturb : bool = False     Whether to perturb the ensemble in an interacting fashion.
 * @export
 * @interface BredVector
 */
export interface BredVector {
    /**
     * 
     * @type {boolean}
     * @memberof BredVector
     */
    'ensemble_perturb'?: boolean;
    /**
     * 
     * @type {number}
     * @memberof BredVector
     */
    'integration_steps'?: number;
    /**
     * 
     * @type {number}
     * @memberof BredVector
     */
    'noise_amplitude'?: number;
    /**
     * 
     * @type {any}
     * @memberof BredVector
     */
    'type'?: any;
}

