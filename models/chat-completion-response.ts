/*
Earth-2 Inference Server

API for submitting to the Earth-2 Inference Server.

The version of the OpenAPI document: 0.1.0
Contact: earth2-support@exchange.nvidia.com

NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"

import { ChatCompletionResponseChoice } from './chat-completion-response-choice';
import { UsageInfo } from './usage-info';

/**
 * 
 * @export
 * @interface ChatCompletionResponse
 */
export interface ChatCompletionResponse {
    /**
     * A unique identifier for the completion.
     * @type {string}
     * @memberof ChatCompletionResponse
     */
    'id'?: string;
    /**
     * 
     * @type {string}
     * @memberof ChatCompletionResponse
     */
    'object'?: string;
    /**
     * 
     * @type {number}
     * @memberof ChatCompletionResponse
     */
    'created'?: number;
    /**
     * 
     * @type {string}
     * @memberof ChatCompletionResponse
     */
    'model': string;
    /**
     * The list of completion choices the model generated for the input prompt.
     * @type {Array<ChatCompletionResponseChoice>}
     * @memberof ChatCompletionResponse
     */
    'choices': Array<ChatCompletionResponseChoice>;
    /**
     * 
     * @type {UsageInfo}
     * @memberof ChatCompletionResponse
     */
    'usage': UsageInfo;
}

