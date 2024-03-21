type Parameter = {
    name: string
}
type Entry = {
    parameters: Parameter[]
}
export const operationParameterMap: Record<string, Entry> = {
    '/chat/completions-POST': {
        parameters: [
            {
                name: 'messages'
            },
            {
                name: 'model'
            },
            {
                name: 'max_tokens'
            },
            {
                name: 'stream'
            },
            {
                name: 'temperature'
            },
            {
                name: 'top_p'
            },
            {
                name: 'stop'
            },
            {
                name: 'frequency_penalty'
            },
            {
                name: 'presence_penalty'
            },
            {
                name: 'seed'
            },
        ]
    },
    '/biology/mit/diffdock-POST': {
        parameters: [
            {
                name: 'ligand'
            },
            {
                name: 'ligand_file_type'
            },
            {
                name: 'protein'
            },
            {
                name: 'num_poses'
            },
            {
                name: 'time_divisions'
            },
            {
                name: 'steps'
            },
            {
                name: 'save_trajectory'
            },
            {
                name: 'is_staged'
            },
        ]
    },
    '/genomics/nvidia/fq2bam-POST': {
        parameters: [
            {
                name: 'in_ref_tarball'
            },
            {
                name: 'in_fq'
            },
            {
                name: 'out_bam'
            },
            {
                name: 'out_bam_parts_manifest'
            },
            {
                name: 'out_bai'
            },
            {
                name: 'out_chrs'
            },
            {
                name: 'out_stderr'
            },
            {
                name: 'out_stdout'
            },
            {
                name: 'additional_args'
            },
        ]
    },
    '/biology/nvidia/molmim/generate-POST': {
        parameters: [
            {
                name: 'algorithm'
            },
            {
                name: 'smi'
            },
            {
                name: 'num_molecules'
            },
            {
                name: 'iterations'
            },
            {
                name: 'property_name'
            },
            {
                name: 'particles'
            },
            {
                name: 'minimize'
            },
            {
                name: 'min_similarity'
            },
            {
                name: 'scaled_radius'
            },
        ]
    },
    '/biology/nvidia/esmfold-POST': {
        parameters: [
            {
                name: 'sequence'
            },
        ]
    },
    '/genomics/nvidia/deepvariant-POST': {
        parameters: [
            {
                name: 'in_ref_tarball'
            },
            {
                name: 'in_bam'
            },
            {
                name: 'in_bai'
            },
            {
                name: 'out_variants'
            },
            {
                name: 'out_variants_parts_manifest'
            },
            {
                name: 'out_stderr'
            },
            {
                name: 'out_stdout'
            },
            {
                name: 'mode'
            },
            {
                name: 'use_gvcf'
            },
            {
                name: 'use_wes_model'
            },
            {
                name: 'additional_args'
            },
        ]
    },
    '/genai/stabilityai/sdxl-turbo-POST': {
        parameters: [
            {
                name: 'text_prompts'
            },
            {
                name: 'height'
            },
            {
                name: 'width'
            },
            {
                name: 'cfg_scale'
            },
            {
                name: 'clip_guidance_preset'
            },
            {
                name: 'sampler'
            },
            {
                name: 'samples'
            },
            {
                name: 'seed'
            },
            {
                name: 'steps'
            },
            {
                name: 'style_preset'
            },
        ]
    },
    '/genai/stabilityai/sdxl-POST': {
        parameters: [
            {
                name: 'text_prompts'
            },
            {
                name: 'height'
            },
            {
                name: 'width'
            },
            {
                name: 'cfg_scale'
            },
            {
                name: 'clip_guidance_preset'
            },
            {
                name: 'sampler'
            },
            {
                name: 'samples'
            },
            {
                name: 'seed'
            },
            {
                name: 'steps'
            },
            {
                name: 'style_preset'
            },
        ]
    },
    '/genai/stabilityai/stable-video-diffusion-POST': {
        parameters: [
            {
                name: 'image'
            },
            {
                name: 'seed'
            },
            {
                name: 'cfg_scale'
            },
            {
                name: 'motion_bucket_id'
            },
        ]
    },
    '/medicalimaging/nvidia/vista-3d-POST': {
        parameters: [
            {
                name: 'image'
            },
            {
                name: 'prompts'
            },
            {
                name: 'output'
            },
        ]
    },
    '/vlm/nvidia/neva-22b-POST': {
        parameters: [
            {
                name: 'messages'
            },
            {
                name: 'temperature'
            },
            {
                name: 'top_p'
            },
            {
                name: 'max_tokens'
            },
            {
                name: 'seed'
            },
            {
                name: 'stream'
            },
            {
                name: 'grounded_response'
            },
            {
                name: 'bounding_boxes'
            },
            {
                name: 'response_mode'
            },
            {
                name: 'task'
            },
            {
                name: 'NVCF-INPUT-ASSET-REFERENCES'
            },
        ]
    },
    '/vlm/google/deplot-POST': {
        parameters: [
            {
                name: 'messages'
            },
            {
                name: 'temperature'
            },
            {
                name: 'top_p'
            },
            {
                name: 'max_tokens'
            },
            {
                name: 'seed'
            },
            {
                name: 'stream'
            },
            {
                name: 'grounded_response'
            },
            {
                name: 'bounding_boxes'
            },
            {
                name: 'response_mode'
            },
            {
                name: 'task'
            },
            {
                name: 'NVCF-INPUT-ASSET-REFERENCES'
            },
        ]
    },
    '/vlm/adept/fuyu-8b-POST': {
        parameters: [
            {
                name: 'messages'
            },
            {
                name: 'temperature'
            },
            {
                name: 'top_p'
            },
            {
                name: 'max_tokens'
            },
            {
                name: 'seed'
            },
            {
                name: 'stream'
            },
            {
                name: 'grounded_response'
            },
            {
                name: 'bounding_boxes'
            },
            {
                name: 'response_mode'
            },
            {
                name: 'task'
            },
            {
                name: 'NVCF-INPUT-ASSET-REFERENCES'
            },
        ]
    },
    '/vlm/microsoft/kosmos-2-POST': {
        parameters: [
            {
                name: 'messages'
            },
            {
                name: 'temperature'
            },
            {
                name: 'top_p'
            },
            {
                name: 'max_tokens'
            },
            {
                name: 'seed'
            },
            {
                name: 'stream'
            },
            {
                name: 'grounded_response'
            },
            {
                name: 'bounding_boxes'
            },
            {
                name: 'response_mode'
            },
            {
                name: 'task'
            },
            {
                name: 'NVCF-INPUT-ASSET-REFERENCES'
            },
        ]
    },
    '/status/{requestId}-GET': {
        parameters: [
            {
                name: 'requestId'
            },
        ]
    },
    '/nvidia/cuopt-POST': {
        parameters: [
            {
                name: 'data'
            },
            {
                name: 'parameters'
            },
            {
                name: 'action'
            },
            {
                name: 'client_version'
            },
            {
                name: 'NVCF-INPUT-ASSET-REFERENCES'
            },
        ]
    },
    '/nvidia/ai-weather-forecasting-POST': {
        parameters: [
            {
                name: 'parameters'
            },
            {
                name: 'outputs'
            },
        ]
    },
    '/retrieval/nvidia/embeddings-POST': {
        parameters: [
            {
                name: 'input'
            },
            {
                name: 'model'
            },
            {
                name: 'input_type'
            },
            {
                name: 'encoding_format'
            },
            {
                name: 'truncate'
            },
            {
                name: 'user'
            },
        ]
    },
    '/retrieval/nvidia/reranking-POST': {
        parameters: [
            {
                name: 'model'
            },
            {
                name: 'query'
            },
            {
                name: 'passages'
            },
        ]
    },
}