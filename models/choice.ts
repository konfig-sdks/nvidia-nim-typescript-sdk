/*
Earth-2 Inference Server

API for submitting to the Earth-2 Inference Server.

The version of the OpenAPI document: 0.1.0
Contact: earth2-support@exchange.nvidia.com

NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"

import { Message } from './message';

/**
 * 
 * @export
 * @interface Choice
 */
export interface Choice {
    /**
     * The index of the choice in the list of choices (always 0).
     * @type {number}
     * @memberof Choice
     */
    'index'?: number;
    /**
     * A chat completion message generated by the model.
     * @type {Message}
     * @memberof Choice
     */
    'message': Message;
    /**
     * The reason the model stopped generating tokens. This will be `stop` if the model hit a natural stop point or a provided stop sequence, or `length` if the maximum number of tokens specified in the request was reached.
     * @type {string}
     * @memberof Choice
     */
    'finish_reason'?: ChoiceFinishReasonEnum;
}

type ChoiceFinishReasonEnum = 'stop' | 'length'


