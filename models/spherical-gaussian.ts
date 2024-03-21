/*
Earth-2 Inference Server

API for submitting to the Earth-2 Inference Server.

The version of the OpenAPI document: 0.1.0
Contact: earth2-support@exchange.nvidia.com

NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"


/**
 * Base model for holding parameter information for Spherical Gaussian perturbation method.  Parameters ---------- alpha : float, default is 2         Regularity parameter. Larger means smoother. tau : float, default is 3     Lenght-scale parameter. Larger means more scales. sigma : float, default is None     Scale parameter. Larger means bigger.     If None, sigma = tau**(0.5*(2*alpha - 2.0)). noise_amplitude : float, default is 0.05     Noise amplitude.
 * @export
 * @interface SphericalGaussian
 */
export interface SphericalGaussian {
    /**
     * 
     * @type {number}
     * @memberof SphericalGaussian
     */
    'alpha'?: number;
    /**
     * 
     * @type {number}
     * @memberof SphericalGaussian
     */
    'noise_amplitude'?: number;
    /**
     * 
     * @type {number}
     * @memberof SphericalGaussian
     */
    'sigma'?: number | null;
    /**
     * 
     * @type {number}
     * @memberof SphericalGaussian
     */
    'tau'?: number;
    /**
     * 
     * @type {any}
     * @memberof SphericalGaussian
     */
    'type'?: any;
}

