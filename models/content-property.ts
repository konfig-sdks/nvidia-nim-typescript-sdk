/*
Earth-2 Inference Server

API for submitting to the Earth-2 Inference Server.

The version of the OpenAPI document: 0.1.0
Contact: earth2-support@exchange.nvidia.com

NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"

import { ContentPropertyAnyOfInner } from './content-property-any-of-inner';

/**
 * @type ContentProperty
 * The contents of the message. <br>Can only be `null` as part of a last request message with role=`assistant` (for \"completion mode\", i.e. providing the beginning of the assistant response). <br>To pass images (only with role=`user`): <br>    - When content is a string, images can be passed together with the text with `img` HTML tags with base64 data: `<img src=\"data:image/{format};base64,{base64encodedimage}\" />` .  If the size of an image is more than 200KB, it needs to be uploaded to a presigned S3 bucket using NVCF Asset APIs. Once uploaded you can refer to it using the following format: `<img src=\"data:image/png;asset_id,{asset_id}\" />` . <br>    - When content is a list of objects, images can be passed with objects with type=`image_url`, and image_url containing the base64 image data: `data:image/{format};base64,{base64encodedimage}`. HTML `img` tags will not be parsed from objects with type=`text`. <br>    - In both cases, images can be PNG, JPG or JPEG. <br>For `system` and `assistant` roles, the object list format is not supported. 
 * @export
 */
export type ContentProperty = string | Array<ContentPropertyAnyOfInner>;


