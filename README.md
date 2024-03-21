<div align="center">

[![Visit Nvidia](./header.png)](https://www.nvidia.com&#x2F;en-us&#x2F;ai&#x2F;)

# [Nvidia](https://www.nvidia.com&#x2F;en-us&#x2F;ai&#x2F;)<a id="nvidia"></a>

API for submitting to the Earth-2 Inference Server.

</div>

## Table of Contents<a id="table-of-contents"></a>

<!-- toc -->

- [Installation](#installation)
- [Getting Started](#getting-started)
- [Reference](#reference)
  * [`nvidianim.chat.generateModelResponse`](#nvidianimchatgeneratemodelresponse)
  * [`nvidianim.default.docking`](#nvidianimdefaultdocking)
  * [`nvidianim.default.fq2bam`](#nvidianimdefaultfq2bam)
  * [`nvidianim.default.generate`](#nvidianimdefaultgenerate)
  * [`nvidianim.default.proteinStructurePredictionNoAln`](#nvidianimdefaultproteinstructurepredictionnoaln)
  * [`nvidianim.default.runParabricksUvcInference`](#nvidianimdefaultrunparabricksuvcinference)
  * [`nvidianim.inference.stabilityPrediction`](#nvidianiminferencestabilityprediction)
  * [`nvidianim.inference.stabilityPrediction_0`](#nvidianiminferencestabilityprediction_0)
  * [`nvidianim.inference.stableVideoDiffusionPost`](#nvidianiminferencestablevideodiffusionpost)
  * [`nvidianim.models.runInferenceVista3d`](#nvidianimmodelsruninferencevista3d)
  * [`nvidianim.multimodalApi.invokeModelInference`](#nvidianimmultimodalapiinvokemodelinference)
  * [`nvidianim.multimodalApi.requestModelInference`](#nvidianimmultimodalapirequestmodelinference)
  * [`nvidianim.multimodalApi.requestModelResponse`](#nvidianimmultimodalapirequestmodelresponse)
  * [`nvidianim.multimodalApi.requestModelResponse_0`](#nvidianimmultimodalapirequestmodelresponse_0)
  * [`nvidianim.cuOptApi.functionResultGet`](#nvidianimcuoptapifunctionresultget)
  * [`nvidianim.cuOptApi.managedServiceEndpoint`](#nvidianimcuoptapimanagedserviceendpoint)
  * [`nvidianim.forecast.inferenceSubmission`](#nvidianimforecastinferencesubmission)
  * [`nvidianim.nvidiaEmbeddingsQa4.embedding`](#nvidianimnvidiaembeddingsqa4embedding)
  * [`nvidianim.nvidiaReranking.passageRanking`](#nvidianimnvidiarerankingpassageranking)

<!-- tocstop -->

## Installation<a id="installation"></a>
<div align="center">
  <a href="https://konfigthis.com/sdk-sign-up?company=NVIDIA&serviceName=NIM&language=TypeScript">
    <img src="https://raw.githubusercontent.com/konfig-dev/brand-assets/HEAD/cta-images/typescript-cta.png" width="70%">
  </a>
</div>

## Getting Started<a id="getting-started"></a>

```typescript
import { NvidiaNim } from "nvidia-nim-typescript-sdk";

const nvidianim = new NvidiaNim({
  // Defining the base path is optional and defaults to https://climate.api.nvidia.com/v1
  // basePath: "https://climate.api.nvidia.com/v1",
  accessToken: "ACCESS_TOKEN",
  accessToken: "ACCESS_TOKEN",
});

const generateModelResponseResponse =
  await nvidianim.chat.generateModelResponse({
    model: "mistralai/mixtral-8x7b-instruct-v0.1",
    max_tokens: 1024,
    stream: false,
    temperature: 0.3,
    top_p: 1,
    frequency_penalty: 0,
    presence_penalty: 0,
    seed: null,
    messages: "string_example",
  });

console.log(generateModelResponseResponse);
```

## Reference<a id="reference"></a>


### `nvidianim.chat.generateModelResponse`<a id="nvidianimchatgeneratemodelresponse"></a>

Given a list of messages comprising a conversation, the model will return a response. Compatible with OpenAI. See https://platform.openai.com/docs/api-reference/chat/create

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const generateModelResponseResponse =
  await nvidianim.chat.generateModelResponse({
    model: "mistralai/mixtral-8x7b-instruct-v0.1",
    max_tokens: 1024,
    stream: false,
    temperature: 0.3,
    top_p: 1,
    frequency_penalty: 0,
    presence_penalty: 0,
    seed: null,
    messages: "string_example",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### messages: [`MessagesProperty`](./models/messages-property.ts)<a id="messages-messagespropertymodelsmessages-propertyts"></a>

##### model: `string`<a id="model-string"></a>

##### max_tokens: `number`<a id="max_tokens-number"></a>

The maximum number of tokens to generate in any given call. Note that the model is not aware of this value, and generation will simply stop at the number of tokens specified.

##### stream: `boolean`<a id="stream-boolean"></a>

If set, partial message deltas will be sent. Tokens will be sent as data-only server-sent events (SSE) as they become available (JSON responses are prefixed by `data: `), with the stream terminated by a `data: [DONE]` message.

##### temperature: `number`<a id="temperature-number"></a>

The sampling temperature to use for text generation. The higher the temperature value is, the less deterministic the output text will be. It is not recommended to modify both temperature and top_p in the same call.

##### top_p: `number`<a id="top_p-number"></a>

The top-p sampling mass used for text generation. The top-p value determines the probability mass that is sampled at sampling time. For example, if top_p = 0.2, only the most likely tokens (summing to 0.2 cumulative probability) will be sampled. It is not recommended to modify both temperature and top_p in the same call.

##### stop: [`StopProperty`](./models/stop-property.ts)<a id="stop-stoppropertymodelsstop-propertyts"></a>

##### frequency_penalty: `number`<a id="frequency_penalty-number"></a>

Indicates how much to penalize new tokens based on their existing frequency in the text so far, decreasing model likelihood to repeat the same line verbatim.

##### presence_penalty: `number`<a id="presence_penalty-number"></a>

Positive values penalize new tokens based on whether they appear in the text so far, increasing model likelihood to talk about new topics.

##### seed:<a id="seed"></a>

The model generates random results. Changing the input seed alone will produce a different response with similar characteristics. It is possible to reproduce results by fixing the input seed (assuming all other hyperparameters are also fixed).

#### 🔄 Return<a id="🔄-return"></a>

[ChatCompletionResponse](./models/chat-completion-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/chat/completions` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `nvidianim.default.docking`<a id="nvidianimdefaultdocking"></a>

Predict molecular docking

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const dockingResponse = await nvidianim.default.docking({
  ligand: "ligand_example",
  ligand_file_type: "mol2",
  protein: "protein_example",
  num_poses: 20,
  time_divisions: 20,
  steps: 18,
  save_trajectory: false,
  is_staged: true,
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### ligand: `string`<a id="ligand-string"></a>

Ligand to be docked. Mol2 string or NVCF asset id

##### ligand_file_type: [`LigandFormat`](./models/ligand-format.ts)<a id="ligand_file_type-ligandformatmodelsligand-formatts"></a>

Ligand(mol2) to be docked. Mol2 string or NVCF asset id

##### protein: `string`<a id="protein-string"></a>

Protein(PDB). PDB string or NVCF asset id

##### num_poses: `number`<a id="num_poses-number"></a>

Number of poses to generate

##### time_divisions: `number`<a id="time_divisions-number"></a>

Number of diffusion time divisions

##### steps: `number`<a id="steps-number"></a>

Number of diffusion steps to be computed

##### save_trajectory: `boolean`<a id="save_trajectory-boolean"></a>

Return the trajectory

##### is_staged: `boolean`<a id="is_staged-boolean"></a>

Are the files for ligand and protein staged?

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/biology/mit/diffdock` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `nvidianim.default.fq2bam`<a id="nvidianimdefaultfq2bam"></a>

Submits the reads for alignment with Parabricks fq2bam.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const fq2bamResponse = await nvidianim.default.fq2bam({
  in_ref_tarball: "jUR,rZ#UM/?R,Fp^l6$ARj",
  in_fq: "in_fq_example",
  out_bam: ["out_bam_example"],
  out_bam_parts_manifest: "out_bam_parts_manifest_example",
  out_bai: "out_bai_example",
  out_chrs: "out_chrs_example",
  out_stderr: "out_stderr_example",
  out_stdout: "out_stdout_example",
  additional_args: "",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### in_ref_tarball: `string`<a id="in_ref_tarball-string"></a>

##### in_fq: `string`<a id="in_fq-string"></a>

##### out_bam: `string`[]<a id="out_bam-string"></a>

##### out_bam_parts_manifest: `string`<a id="out_bam_parts_manifest-string"></a>

##### out_bai: `string`<a id="out_bai-string"></a>

##### out_chrs: `string`<a id="out_chrs-string"></a>

##### out_stderr: `string`<a id="out_stderr-string"></a>

##### out_stdout: `string`<a id="out_stdout-string"></a>

##### additional_args: `string`<a id="additional_args-string"></a>

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/genomics/nvidia/fq2bam` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `nvidianim.default.generate`<a id="nvidianimdefaultgenerate"></a>

Samples novel molecules around the encoded input SMILES.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const generateResponse = await nvidianim.default.generate({
  algorithm: "CMA-ES",
  num_molecules: 10,
  iterations: 10,
  property_name: "QED",
  particles: 20,
  minimize: false,
  min_similarity: 0.7,
  scaled_radius: 1,
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### algorithm: [`ControlGenerationAlgo`](./models/control-generation-algo.ts)<a id="algorithm-controlgenerationalgomodelscontrol-generation-algots"></a>

##### smi: `string`<a id="smi-string"></a>

##### num_molecules: `number`<a id="num_molecules-number"></a>

##### iterations: `number`<a id="iterations-number"></a>

##### property_name: [`ControlGenerationProp`](./models/control-generation-prop.ts)<a id="property_name-controlgenerationpropmodelscontrol-generation-propts"></a>

##### particles: `number`<a id="particles-number"></a>

##### minimize: `boolean`<a id="minimize-boolean"></a>

##### min_similarity: `number`<a id="min_similarity-number"></a>

##### scaled_radius: `number`<a id="scaled_radius-number"></a>

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/biology/nvidia/molmim/generate` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `nvidianim.default.proteinStructurePredictionNoAln`<a id="nvidianimdefaultproteinstructurepredictionnoaln"></a>

Call predict function of a model that does not use multiple sequence alignments for prediction

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const proteinStructurePredictionNoAlnResponse =
  await nvidianim.default.proteinStructurePredictionNoAln({
    sequence: "FWMIPKKWAACSPKADNVLKAY",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### sequence: `string`<a id="sequence-string"></a>

Amino acid sequence of a protein

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/biology/nvidia/esmfold` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `nvidianim.default.runParabricksUvcInference`<a id="nvidianimdefaultrunparabricksuvcinference"></a>

Run parabricks universal_variant_calling

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const runParabricksUvcInferenceResponse =
  await nvidianim.default.runParabricksUvcInference({
    in_ref_tarball: "jUR,rZ#UM/?R,Fp^l6$ARj",
    in_bam: "in_bam_example",
    in_bai: "in_bai_example",
    mode: "shortread",
    use_gvcf: false,
    use_wes_model: false,
    out_variants: ["out_variants_example"],
    out_variants_parts_manifest: "out_variants_parts_manifest_example",
    out_stderr: "out_stderr_example",
    out_stdout: "out_stdout_example",
    additional_args: "",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### in_ref_tarball: `string`<a id="in_ref_tarball-string"></a>

A URL to a flat tarfile containing the reference genome and indices.

##### in_bam: `string`<a id="in_bam-string"></a>

A URL to a BAM file.

##### in_bai: `string`<a id="in_bai-string"></a>

A URL to the BAM index.

##### out_variants: `string`[]<a id="out_variants-string"></a>

A list of presigned S3 URLs for file upload.

##### out_variants_parts_manifest: `string`<a id="out_variants_parts_manifest-string"></a>

A single S3 presigned POST URL for the multipart signing manifest of out_variants.

##### out_stderr: `string`<a id="out_stderr-string"></a>

A presigned POST URL.

##### out_stdout: `string`<a id="out_stdout-string"></a>

A presigned POST URL.

##### mode: `string`<a id="mode-string"></a>

The sequencing read mode to use [shortread].

##### use_gvcf: `boolean`<a id="use_gvcf-boolean"></a>

Output genomic VCF, rather than VCF.

##### use_wes_model: `boolean`<a id="use_wes_model-boolean"></a>

Use the Whole Exome Model

##### additional_args: `string`<a id="additional_args-string"></a>

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/genomics/nvidia/deepvariant` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `nvidianim.inference.stabilityPrediction`<a id="nvidianiminferencestabilityprediction"></a>

 Infer

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const stabilityPredictionResponse =
  await nvidianim.inference.stabilityPrediction({
    height: 1024,
    width: 1024,
    text_prompts: [
      {
        text: "A photo of a Shiba Inu dog with a backpack riding a bike",
        weight: 1,
      },
    ],
    cfg_scale: 5,
    clip_guidance_preset: null,
    sampler: "K_DPM_2_ANCESTRAL",
    samples: 1,
    seed: 0,
    steps: 25,
    style_preset: null,
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### text_prompts: [`TextPrompt`](./models/text-prompt.ts)[]<a id="text_prompts-textpromptmodelstext-promptts"></a>

An array of text prompts to use for generation

##### height: `number`<a id="height-number"></a>

Height of the image to generate, in pixels. Only height=1024 is supported

##### width: `number`<a id="width-number"></a>

Width of the image to generate, in pixels. Only width=1024 is supported

##### cfg_scale: `number`<a id="cfg_scale-number"></a>

How strictly the diffusion process adheres to the prompt text (higher values keep your image closer to your prompt).

##### clip_guidance_preset: `any`<a id="clip_guidance_preset-any"></a>

clip guidance preset. Only clip_guidance_preset=`NONE` is supported

##### sampler: `string`<a id="sampler-string"></a>

The sampler to use for generation. Varying diffusion samplers will vary outputs significantly.

##### samples: `number`<a id="samples-number"></a>

Number of images to generate. Only samples=1 is supported

##### seed: `number`<a id="seed-number"></a>

The seed which governs generation. Omit this option or use 0 for a random seed

##### steps: `number`<a id="steps-number"></a>

Number of diffusion steps to run

##### style_preset: `any`<a id="style_preset-any"></a>

Pass in a style preset to guide the image model towards a particular style. This list of style presets is subject to change. style_preset=`none` is supported

#### 🔄 Return<a id="🔄-return"></a>

[ImageResponse](./models/image-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/genai/stabilityai/sdxl-turbo` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `nvidianim.inference.stabilityPrediction_0`<a id="nvidianiminferencestabilityprediction_0"></a>

 Infer

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const stabilityPrediction_0Response =
  await nvidianim.inference.stabilityPrediction_0({
    height: 1024,
    width: 1024,
    text_prompts: [
      {
        text: "A photo of a Shiba Inu dog with a backpack riding a bike",
        weight: 1,
      },
    ],
    cfg_scale: 5,
    clip_guidance_preset: null,
    sampler: "K_DPM_2_ANCESTRAL",
    samples: 1,
    seed: 0,
    steps: 25,
    style_preset: null,
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### text_prompts: [`TextPrompt`](./models/text-prompt.ts)[]<a id="text_prompts-textpromptmodelstext-promptts"></a>

An array of text prompts to use for generation

##### height: `number`<a id="height-number"></a>

Height of the image to generate, in pixels. Only height=1024 is supported

##### width: `number`<a id="width-number"></a>

Width of the image to generate, in pixels. Only width=1024 is supported

##### cfg_scale: `number`<a id="cfg_scale-number"></a>

How strictly the diffusion process adheres to the prompt text (higher values keep your image closer to your prompt).

##### clip_guidance_preset: `any`<a id="clip_guidance_preset-any"></a>

clip guidance preset. Only clip_guidance_preset=`NONE` is supported

##### sampler: `string`<a id="sampler-string"></a>

The sampler to use for generation. Varying diffusion samplers will vary outputs significantly.

##### samples: `number`<a id="samples-number"></a>

Number of images to generate. Only samples=1 is supported

##### seed: `number`<a id="seed-number"></a>

The seed which governs generation. Omit this option or use 0 for a random seed

##### steps: `number`<a id="steps-number"></a>

Number of diffusion steps to run

##### style_preset: `any`<a id="style_preset-any"></a>

Pass in a style preset to guide the image model towards a particular style. This list of style presets is subject to change. style_preset=`none` is supported

#### 🔄 Return<a id="🔄-return"></a>

[ImageResponse](./models/image-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/genai/stabilityai/sdxl` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `nvidianim.inference.stableVideoDiffusionPost`<a id="nvidianiminferencestablevideodiffusionpost"></a>

 Infer

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const stableVideoDiffusionPostResponse =
  await nvidianim.inference.stableVideoDiffusionPost({
    image:
      "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAIAAACQd1PeAAAAEElEQVR4nGK6HcwNCAAA//8DTgE8HuxwEQAAAABJRU5ErkJggg==",
    seed: 0,
    cfg_scale: 1.8,
    motion_bucket_id: 127,
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### image: `string`<a id="image-string"></a>

A base64-encoded string of the initial image that will be scaled to 1024x576. Images should be in form of `data:image/{format};base64,{base64encodedimage}` if it\\\'s smaller than 200KB. Otherwise, it needs to be uploaded to a presigned S3 bucket using NVCF Asset APIs.Once uploaded you can refer to it using the following format: `data:image/png;asset_id,{asset_id}`.Accepted formats are `jpg`, `png` and `jpeg`.

##### seed: `number`<a id="seed-number"></a>

The seed which governs generation. Omit this option or use 0 for a random seed

##### cfg_scale: `number`<a id="cfg_scale-number"></a>

How strongly the video sticks to the original image. Use lower values to allow the model more freedom to make changes and higher values to correct motion distortions.

##### motion_bucket_id: `number`<a id="motion_bucket_id-number"></a>

Controls how much motion to add/remove from the image. Only motion_bucket_id=127 is supported

#### 🔄 Return<a id="🔄-return"></a>

[VideoResponse](./models/video-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/genai/stabilityai/stable-video-diffusion` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `nvidianim.models.runInferenceVista3d`<a id="nvidianimmodelsruninferencevista3d"></a>

Run Inference function of a model for segmenting and annotating human anatomies

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const runInferenceVista3dResponse = await nvidianim.models.runInferenceVista3d({
  image:
    "https://raw.githubusercontent.com/NVIDIA/ai-assisted-annotation-client/master/py_client/test-data/image.nii.gz",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### image: `string`<a id="image-string"></a>

A Valid URL representing a 3D medical Image (nifti/nrrd)

##### prompts: [`PromptsNullable`](./models/prompts-nullable.ts)<a id="prompts-promptsnullablemodelsprompts-nullablets"></a>

##### output: [`OutputTypeNullable`](./models/output-type-nullable.ts)<a id="output-outputtypenullablemodelsoutput-type-nullablets"></a>

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/medicalimaging/nvidia/vista-3d` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `nvidianim.multimodalApi.invokeModelInference`<a id="nvidianimmultimodalapiinvokemodelinference"></a>

Invokes inference using the model chat parameters. If uploading large images, this POST should be used in conjunction with the NVCF API which allows for the upload of large assets. 
You can find details on how to use NVCF Asset APIs here: https://docs.api.nvidia.com/cloud-functions/reference/createasset

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const invokeModelInferenceResponse =
  await nvidianim.multimodalApi.invokeModelInference({
    messages: [
      {
        role: "system",
      },
    ],
    temperature: 0.2,
    top_p: 0.7,
    max_tokens: 1024,
    seed: 42,
    stream: false,
    grounded_response: true,
    response_mode: "detailed",
    task: "VQA",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### messages: [`MessagesProperty1Inner`](./models/messages-property1-inner.ts)[]<a id="messages-messagesproperty1innermodelsmessages-property1-innerts"></a>

A list of messages comprising the conversation so far. The roles of the messages must be alternating between `user` and `assistant`. The last input message should have role `user` or `assistant`. A message with the `system` role is optional, and must be the very first message if it is present.

##### temperature: `number`<a id="temperature-number"></a>

The sampling temperature to use for text generation. The higher the temperature value is, the less deterministic the output text will be. It is not recommended to modify both temperature and top_p in the same call.

##### top_p: `number`<a id="top_p-number"></a>

The top-p sampling mass used for text generation. The top-p value determines the probability mass that is sampled at sampling time. For example, if top_p = 0.2, only the most likely tokens (summing to 0.2 cumulative probability) will be sampled. It is not recommended to modify both temperature and top_p in the same call.

##### max_tokens: `number`<a id="max_tokens-number"></a>

The maximum number of tokens to generate in any given call. Note that the model is not aware of this value, and generation will simply stop at the number of tokens specified.

##### seed: `number`<a id="seed-number"></a>

If specified, our system will make a best effort to sample deterministically, such that repeated requests with the same seed and parameters should return the same result.

##### stream: `boolean`<a id="stream-boolean"></a>

If set, partial message deltas will be sent. Tokens will be sent as data-only server-sent events (SSE) as they become available (JSON responses are prefixed by `data: `), with the stream terminated by a `data: [DONE]` message.

##### grounded_response: `boolean`<a id="grounded_response-boolean"></a>

Grounding refers to the process of connecting or associating text with the visual world by  <br>perceiving object descriptions, such as bounding boxes, within an image. So if set, the model will produce  <br>bounding boxes for entities mentioned in the generated text.

##### bounding_boxes: `boolean`<a id="bounding_boxes-boolean"></a>

[Deprecated parameter]: use `grounded_response` instead

##### response_mode: `string`<a id="response_mode-string"></a>

These modes determine the level of information provided in the response.  <br>When it is set `detailed` response will have a bit more information

##### task: `string`<a id="task-string"></a>

Model is capable of performing two tasks: Visual Question Answering (VQA) and image captioning.  <br>Visual Question Answering involves answering questions about an image. Image captioning, on the other hand,  <br>generates descriptive captions for images. In image captioning both content and entities are ignored

##### nvcfInputAssetReferences: `string`<a id="nvcfinputassetreferences-string"></a>

String of asset IDs separated by commas. Data is uploaded to AWS S3 using NVCF Asset APIs and associated with these asset IDs.If the size of an image is more than 200KB, it needs to be uploaded to a presigned S3 URL bucket. The presigned URL allows for secure and temporary access to the S3 bucket for uploading the image. Once the asset is requested, an asset ID is generated for it. Please include this asset ID in this header and to use the uploaded image in a prompt, you need to refer to it using the following format: `<img src=\"data:image/png;asset_id,{asset_id}\" />`.

#### 🔄 Return<a id="🔄-return"></a>

[ChatCompletion](./models/chat-completion.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/vlm/nvidia/neva-22b` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `nvidianim.multimodalApi.requestModelInference`<a id="nvidianimmultimodalapirequestmodelinference"></a>

Invokes inference using the model chat parameters. If uploading large images, this POST should be used in conjunction with the NVCF API which allows for the upload of large assets. 
You can find details on how to use NVCF Asset APIs here: https://docs.api.nvidia.com/cloud-functions/reference/createasset

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const requestModelInferenceResponse =
  await nvidianim.multimodalApi.requestModelInference({
    messages: [
      {
        role: "system",
      },
    ],
    temperature: 0.2,
    top_p: 0.7,
    max_tokens: 1024,
    seed: 42,
    stream: false,
    grounded_response: true,
    response_mode: "detailed",
    task: "VQA",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### messages: [`MessagesProperty1Inner`](./models/messages-property1-inner.ts)[]<a id="messages-messagesproperty1innermodelsmessages-property1-innerts"></a>

A list of messages comprising the conversation so far. The roles of the messages must be alternating between `user` and `assistant`. The last input message should have role `user` or `assistant`. A message with the `system` role is optional, and must be the very first message if it is present.

##### temperature: `number`<a id="temperature-number"></a>

The sampling temperature to use for text generation. The higher the temperature value is, the less deterministic the output text will be. It is not recommended to modify both temperature and top_p in the same call.

##### top_p: `number`<a id="top_p-number"></a>

The top-p sampling mass used for text generation. The top-p value determines the probability mass that is sampled at sampling time. For example, if top_p = 0.2, only the most likely tokens (summing to 0.2 cumulative probability) will be sampled. It is not recommended to modify both temperature and top_p in the same call.

##### max_tokens: `number`<a id="max_tokens-number"></a>

The maximum number of tokens to generate in any given call. Note that the model is not aware of this value, and generation will simply stop at the number of tokens specified.

##### seed: `number`<a id="seed-number"></a>

If specified, our system will make a best effort to sample deterministically, such that repeated requests with the same seed and parameters should return the same result.

##### stream: `boolean`<a id="stream-boolean"></a>

If set, partial message deltas will be sent. Tokens will be sent as data-only server-sent events (SSE) as they become available (JSON responses are prefixed by `data: `), with the stream terminated by a `data: [DONE]` message.

##### grounded_response: `boolean`<a id="grounded_response-boolean"></a>

Grounding refers to the process of connecting or associating text with the visual world by  <br>perceiving object descriptions, such as bounding boxes, within an image. So if set, the model will produce  <br>bounding boxes for entities mentioned in the generated text.

##### bounding_boxes: `boolean`<a id="bounding_boxes-boolean"></a>

[Deprecated parameter]: use `grounded_response` instead

##### response_mode: `string`<a id="response_mode-string"></a>

These modes determine the level of information provided in the response.  <br>When it is set `detailed` response will have a bit more information

##### task: `string`<a id="task-string"></a>

Model is capable of performing two tasks: Visual Question Answering (VQA) and image captioning.  <br>Visual Question Answering involves answering questions about an image. Image captioning, on the other hand,  <br>generates descriptive captions for images. In image captioning both content and entities are ignored

##### nvcfInputAssetReferences: `string`<a id="nvcfinputassetreferences-string"></a>

String of asset IDs separated by commas. Data is uploaded to AWS S3 using NVCF Asset APIs and associated with these asset IDs.If the size of an image is more than 200KB, it needs to be uploaded to a presigned S3 URL bucket. The presigned URL allows for secure and temporary access to the S3 bucket for uploading the image. Once the asset is requested, an asset ID is generated for it. Please include this asset ID in this header and to use the uploaded image in a prompt, you need to refer to it using the following format:  `<img src=\"data:image/png;asset_id,{asset_id}\" />`.

#### 🔄 Return<a id="🔄-return"></a>

[ChatCompletion](./models/chat-completion.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/vlm/google/deplot` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `nvidianim.multimodalApi.requestModelResponse`<a id="nvidianimmultimodalapirequestmodelresponse"></a>

Invokes inference using the model chat parameters. If uploading large images, this POST should be used in conjunction with the NVCF API which allows for the upload of large assets. 
You can find details on how to use NVCF Asset APIs here: https://docs.api.nvidia.com/cloud-functions/reference/createasset

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const requestModelResponseResponse =
  await nvidianim.multimodalApi.requestModelResponse({
    messages: [
      {
        role: "system",
      },
    ],
    temperature: 0.2,
    top_p: 0.7,
    max_tokens: 1024,
    seed: 42,
    stream: false,
    grounded_response: true,
    response_mode: "detailed",
    task: "VQA",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### messages: [`MessagesProperty1Inner`](./models/messages-property1-inner.ts)[]<a id="messages-messagesproperty1innermodelsmessages-property1-innerts"></a>

A list of messages comprising the conversation so far. The roles of the messages must be alternating between `user` and `assistant`. The last input message should have role `user` or `assistant`. A message with the `system` role is optional, and must be the very first message if it is present.

##### temperature: `number`<a id="temperature-number"></a>

The sampling temperature to use for text generation. The higher the temperature value is, the less deterministic the output text will be. It is not recommended to modify both temperature and top_p in the same call.

##### top_p: `number`<a id="top_p-number"></a>

The top-p sampling mass used for text generation. The top-p value determines the probability mass that is sampled at sampling time. For example, if top_p = 0.2, only the most likely tokens (summing to 0.2 cumulative probability) will be sampled. It is not recommended to modify both temperature and top_p in the same call.

##### max_tokens: `number`<a id="max_tokens-number"></a>

The maximum number of tokens to generate in any given call. Note that the model is not aware of this value, and generation will simply stop at the number of tokens specified.

##### seed: `number`<a id="seed-number"></a>

If specified, our system will make a best effort to sample deterministically, such that repeated requests with the same seed and parameters should return the same result.

##### stream: `boolean`<a id="stream-boolean"></a>

If set, partial message deltas will be sent. Tokens will be sent as data-only server-sent events (SSE) as they become available (JSON responses are prefixed by `data: `), with the stream terminated by a `data: [DONE]` message.

##### grounded_response: `boolean`<a id="grounded_response-boolean"></a>

Grounding refers to the process of connecting or associating text with the visual world by  <br>perceiving object descriptions, such as bounding boxes, within an image. So if set, the model will produce  <br>bounding boxes for entities mentioned in the generated text.

##### bounding_boxes: `boolean`<a id="bounding_boxes-boolean"></a>

[Deprecated parameter]: use `grounded_response` instead

##### response_mode: `string`<a id="response_mode-string"></a>

These modes determine the level of information provided in the response.  <br>When it is set `detailed` response will have a bit more information

##### task: `string`<a id="task-string"></a>

Model is capable of performing two tasks: Visual Question Answering (VQA) and image captioning.  <br>Visual Question Answering involves answering questions about an image. Image captioning, on the other hand,  <br>generates descriptive captions for images. In image captioning both content and entities are ignored

##### nvcfInputAssetReferences: `string`<a id="nvcfinputassetreferences-string"></a>

String of asset IDs separated by commas. Data is uploaded to AWS S3 using NVCF Asset APIs and associated with these asset IDs.If the size of an image is more than 200KB, it needs to be uploaded to a presigned S3 URL bucket. The presigned URL allows for secure and temporary access to the S3 bucket for uploading the image. Once the asset is requested, an asset ID is generated for it. Please include this asset ID in this header and to use the uploaded image in a prompt, you need to refer to it using the following format: `<img src=\"data:image/png;asset_id,{asset_id}\" />`.

#### 🔄 Return<a id="🔄-return"></a>

[ChatCompletion](./models/chat-completion.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/vlm/adept/fuyu-8b` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `nvidianim.multimodalApi.requestModelResponse_0`<a id="nvidianimmultimodalapirequestmodelresponse_0"></a>

Invokes inference using the model chat parameters. If uploading large images, this POST should be used in conjunction with the NVCF API which allows for the upload of large assets. 
You can find details on how to use NVCF Asset APIs here: https://docs.api.nvidia.com/cloud-functions/reference/createasset

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const requestModelResponse_0Response =
  await nvidianim.multimodalApi.requestModelResponse_0({
    messages: [
      {
        role: "system",
      },
    ],
    temperature: 0.2,
    top_p: 0.7,
    max_tokens: 1024,
    seed: 42,
    stream: false,
    grounded_response: true,
    response_mode: "detailed",
    task: "VQA",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### messages: [`MessagesProperty1Inner`](./models/messages-property1-inner.ts)[]<a id="messages-messagesproperty1innermodelsmessages-property1-innerts"></a>

A list of messages comprising the conversation so far. The roles of the messages must be alternating between `user` and `assistant`. The last input message should have role `user` or `assistant`. A message with the `system` role is optional, and must be the very first message if it is present.

##### temperature: `number`<a id="temperature-number"></a>

The sampling temperature to use for text generation. The higher the temperature value is, the less deterministic the output text will be. It is not recommended to modify both temperature and top_p in the same call.

##### top_p: `number`<a id="top_p-number"></a>

The top-p sampling mass used for text generation. The top-p value determines the probability mass that is sampled at sampling time. For example, if top_p = 0.2, only the most likely tokens (summing to 0.2 cumulative probability) will be sampled. It is not recommended to modify both temperature and top_p in the same call.

##### max_tokens: `number`<a id="max_tokens-number"></a>

The maximum number of tokens to generate in any given call. Note that the model is not aware of this value, and generation will simply stop at the number of tokens specified.

##### seed: `number`<a id="seed-number"></a>

If specified, our system will make a best effort to sample deterministically, such that repeated requests with the same seed and parameters should return the same result.

##### stream: `boolean`<a id="stream-boolean"></a>

If set, partial message deltas will be sent. Tokens will be sent as data-only server-sent events (SSE) as they become available (JSON responses are prefixed by `data: `), with the stream terminated by a `data: [DONE]` message.

##### grounded_response: `boolean`<a id="grounded_response-boolean"></a>

Grounding refers to the process of connecting or associating text with the visual world by  <br>perceiving object descriptions, such as bounding boxes, within an image. So if set, the model will produce  <br>bounding boxes for entities mentioned in the generated text.

##### bounding_boxes: `boolean`<a id="bounding_boxes-boolean"></a>

[Deprecated parameter]: use `grounded_response` instead

##### response_mode: `string`<a id="response_mode-string"></a>

These modes determine the level of information provided in the response.  <br>When it is set `detailed` response will have a bit more information

##### task: `string`<a id="task-string"></a>

Model is capable of performing two tasks: Visual Question Answering (VQA) and image captioning.  <br>Visual Question Answering involves answering questions about an image. Image captioning, on the other hand,  <br>generates descriptive captions for images. In image captioning both content and entities are ignored

##### nvcfInputAssetReferences: `string`<a id="nvcfinputassetreferences-string"></a>

String of asset IDs separated by commas. Data is uploaded to AWS S3 using NVCF Asset APIs and associated with these asset IDs.If the size of an image is more than 200KB, it needs to be uploaded to a presigned S3 URL bucket. The presigned URL allows for secure and temporary access to the S3 bucket for uploading the image. Once the asset is requested, an asset ID is generated for it. Please include this asset ID in this header and to use the uploaded image in a prompt, you need to refer to it using the following format: `<img src=\"data:image/png;asset_id,{asset_id}\" />`.

#### 🔄 Return<a id="🔄-return"></a>

[ChatCompletion](./models/chat-completion.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/vlm/microsoft/kosmos-2` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `nvidianim.cuOptApi.functionResultGet`<a id="nvidianimcuoptapifunctionresultget"></a>

Gets the result of an earlier function invocation request that returned a status of 202.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const functionResultGetResponse = await nvidianim.cuOptApi.functionResultGet({
  requestId: "requestId_example",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### requestId: `string`<a id="requestid-string"></a>

requestId to poll results

#### 🔄 Return<a id="🔄-return"></a>

[ChatCompletion](./models/chat-completion.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/status/{requestId}` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `nvidianim.cuOptApi.managedServiceEndpoint`<a id="nvidianimcuoptapimanagedserviceendpoint"></a>

Note: This is for managed service. Takes all the data and options at once, solves the routing problem and returns result.  This POST should be used in conjunction with the NVCF API which allows for the upload of large assets. 
You can find details on how to use NVCF Asset APIs here: https://docs.api.nvidia.com/cloud-functions/reference/createasset

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const managedServiceEndpointResponse =
  await nvidianim.cuOptApi.managedServiceEndpoint({
    action: "cuOpt_OptimizedRouting",
    data: {
      fleet_data: {
        vehicle_locations: [
          [0, 0],
          [0, 0],
        ],
        vehicle_ids: ["veh-1", "veh-2"],
        capacities: [
          [2, 2],
          [4, 1],
        ],
        priorities: [0, 1],
        vehicle_time_windows: [
          [0, 10],
          [0, 10],
        ],
        vehicle_break_time_windows: [
          [
            [1, 2],
            [2, 3],
          ],
        ],
        vehicle_break_durations: [[1, 1]],
        vehicle_break_locations: [0, 1],
        vehicle_types: [1, 2],
        vehicle_order_match: [
          {
            vehicle_id: 1,
            order_ids: [1],
          },
          {},
        ],
        skip_first_trips: [true, false],
        drop_return_trips: [true, false],
        min_vehicles: 2,
        vehicle_max_costs: [7, 10],
        vehicle_max_times: [7, 10],
        vehicle_fixed_costs: [15, 5],
      },
      task_data: {
        task_locations: [1, 2],
        task_ids: ["Task-A", "Task-B"],
        demand: [
          [1, 1],
          [3, 1],
        ],
        task_time_windows: [
          [0, 5],
          [3, 9],
        ],
        order_vehicle_match: [
          {
            order_id: 1,
            vehicle_ids: [1],
          },
          {},
        ],
      },
    },
    client_version: "",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### data: [`OptimizedRoutingDataProperty1`](./models/optimized-routing-data-property1.ts)<a id="data-optimizedroutingdataproperty1modelsoptimized-routing-data-property1ts"></a>

##### parameters: `object`<a id="parameters-object"></a>

unused/ignored but retained for compatibility

##### action: `string`<a id="action-string"></a>

Action to be performed by the service, validator action just validates input against format and base rules.

##### client_version: `string`<a id="client_version-string"></a>

cuOpt client version. Set to \\\'custom\\\' to skip version check.

##### nvcfInputAssetReferences: `string`<a id="nvcfinputassetreferences-string"></a>

String of asset IDs separated by commas. Data is uploaded to AWS S3 using NVCF Asset APIs and associated with these asset IDs.If the size of the json is more than 200KB, it needs to be uploaded to a presigned S3 URL bucket. The presigned URL allows for secure and temporary access to the S3 bucket for uploading the image. Once the asset is requested, an asset ID is generated for it. Please include this asset ID in this header and to use the uploaded json the \'data\' field in the request body should be null; otherwise, it will be ignored.

#### 🔄 Return<a id="🔄-return"></a>

[CuOptApiManagedServiceEndpointResponse](./models/cu-opt-api-managed-service-endpoint-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/nvidia/cuopt` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `nvidianim.forecast.inferenceSubmission`<a id="nvidianimforecastinferencesubmission"></a>

Submits an inference configuration file to the server.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const inferenceSubmissionResponse =
  await nvidianim.forecast.inferenceSubmission({
    parameters: {
      inference_model: "persistence_1step",
      initial_output_time: 0,
      initial_time: "1970-01-01T00:00:00.00Z",
      io_frequency: 1,
      number_of_ensembles: 1,
      output_format: "zarr",
      random_seed: 0,
      return_control_forecast: true,
      simulation_length: 20,
    },
    outputs: [
      {
        diagnostics: [
          {
            channels: [],
            _function: [],
            type: "full_ensemble",
          },
        ],
        domain: {
          lat_max: 90,
          lat_min: -90,
          lon_max: 360,
          lon_min: 0,
          name: "K",
          type: null,
        },
      },
    ],
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### parameters: [`SimulationParameters`](./models/simulation-parameters.ts)<a id="parameters-simulationparametersmodelssimulation-parametersts"></a>

##### outputs: [`Output`](./models/output.ts)[]<a id="outputs-outputmodelsoutputts"></a>

#### 🔄 Return<a id="🔄-return"></a>

[ResponseConfig](./models/response-config.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/nvidia/ai-weather-forecasting` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `nvidianim.nvidiaEmbeddingsQa4.embedding`<a id="nvidianimnvidiaembeddingsqa4embedding"></a>

Creates an embedding vector from the input text.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const embeddingResponse = await nvidianim.nvidiaEmbeddingsQa4.embedding({
  input: null,
  model: "NV-Embed-QA",
  input_type: "passage",
  encoding_format: "float",
  truncate: "NONE",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### input: [`CreateEmbeddingRequestInput`](./models/create-embedding-request-input.ts)<a id="input-createembeddingrequestinputmodelscreate-embedding-request-inputts"></a>

##### model: `string`<a id="model-string"></a>

ID of the embedding model.

##### input_type: `string`<a id="input_type-string"></a>

NV-Embed-QA and E5 models operate in `passage` or `query` mode, and thus require the `input_type` parameter. `passage` is used when generating embeddings during indexing. `query` is used when generating embeddings during querying. It is very important to use the correct `input_type`. Failure to do so will result in large drops in retrieval accuracy. As an alternative, it is possible to add the `-query` or `-passage` suffix to the `model` parameter like `NV-Embed-QA-query` and not use the `input_type` field at all for OpenAI API compliance. Please note that the GTE model _does not_ accept the `input_type` parameter since both the query and passage are processed in the same way.

##### encoding_format: `string`<a id="encoding_format-string"></a>

The format to return the embeddings in.

##### truncate: `string`<a id="truncate-string"></a>

Specifies how inputs longer than the maximum token length of the model are handled. Passing `START` discards the start of the input. `END` discards the end of the input. In both cases, input is discarded until the remaining input is exactly the maximum input token length for the model. If `NONE` is selected, when the input exceeds the maximum input token length an error will be returned.

##### user: `string`<a id="user-string"></a>

Not implemented, but provided for API compliance. This field is ignored.

#### 🔄 Return<a id="🔄-return"></a>

[CreateEmbeddingResponse](./models/create-embedding-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/retrieval/nvidia/embeddings` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `nvidianim.nvidiaReranking.passageRanking`<a id="nvidianimnvidiarerankingpassageranking"></a>

Order a list of passages by their relation to a query.

Note that if a given query + passage pair is longer than the ranking model's context window,
it will be automatically truncated.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const passageRankingResponse = await nvidianim.nvidiaReranking.passageRanking({
  model: "nv-rerank-qa-mistral-4b:1",
  query: {
    text: "jUR,rZ#UM/?R,Fp^l6$ARj",
  },
  passages: [{}],
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### model: `string`<a id="model-string"></a>

Supported models.

##### query: [`MultiModalData`](./models/multi-modal-data.ts)<a id="query-multimodaldatamodelsmulti-modal-datats"></a>

A text query for ranking the passages

##### passages: [`MultiModalData`](./models/multi-modal-data.ts)[]<a id="passages-multimodaldatamodelsmulti-modal-datats"></a>

Text passages to rank based on the query

#### 🔄 Return<a id="🔄-return"></a>

[RankResponse](./models/rank-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/retrieval/nvidia/reranking` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


## Author<a id="author"></a>
This TypeScript package is automatically generated by [Konfig](https://konfigthis.com)
