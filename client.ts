/*
Earth-2 Inference Server

API for submitting to the Earth-2 Inference Server.

The version of the OpenAPI document: 0.1.0
Contact: earth2-support@exchange.nvidia.com

NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/

import { AxiosRequestConfig } from "axios";
import {
  ChatApi,
  DefaultApi,
  InferenceApi,
  ModelsApi,
  MultimodalApiApi,
  CuOptApiApi,
  ForecastApi,
  NvidiaEmbeddingsQa4Api,
  NvidiaRerankingApi,
} from "./api";
import { Configuration, ConfigurationParameters } from "./configuration";
import { NvidiaNimCustom } from "./client-custom";

export class NvidiaNim extends NvidiaNimCustom {
  readonly chat: ChatApi;
  readonly default: DefaultApi;
  readonly inference: InferenceApi;
  readonly models: ModelsApi;
  readonly multimodalApi: MultimodalApiApi;
  readonly cuOptApi: CuOptApiApi;
  readonly forecast: ForecastApi;
  readonly nvidiaEmbeddingsQa4: NvidiaEmbeddingsQa4Api;
  readonly nvidiaReranking: NvidiaRerankingApi;

  constructor(configurationParameters: ConfigurationParameters) {
    super(configurationParameters);
    const configuration = new Configuration(configurationParameters);
    this.chat = new ChatApi(configuration);
    this.default = new DefaultApi(configuration);
    this.inference = new InferenceApi(configuration);
    this.models = new ModelsApi(configuration);
    this.multimodalApi = new MultimodalApiApi(configuration);
    this.cuOptApi = new CuOptApiApi(configuration);
    this.forecast = new ForecastApi(configuration);
    this.nvidiaEmbeddingsQa4 = new NvidiaEmbeddingsQa4Api(configuration);
    this.nvidiaReranking = new NvidiaRerankingApi(configuration);
  }

}
