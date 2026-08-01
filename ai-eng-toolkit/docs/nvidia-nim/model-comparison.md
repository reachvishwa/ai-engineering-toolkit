# Model Comparison

## Overview

NVIDIA NIM packages a range of open models (Llama, Mistral, and others) as optimized, self-hostable inference containers, plus hosted endpoints on build.nvidia.com for evaluation before self-hosting.

## Problem

Picking a model for self-hosted inference means balancing quality, latency, licensing, and the GPU memory actually available, and NIM's catalog changes as new optimized models are released.

## Solution

Evaluate candidate models first via the hosted NIM API (no GPU required), then narrow to one or two for self-hosted benchmarking against your own prompts and hardware.

## Example

Comparing a Llama 3 8B NIM against a Mistral 7B NIM for a structured data-extraction task, using the same prompt set against both hosted endpoints before committing to self-hosting either.

## Code snippets

```bash
# Quick comparison call against a hosted NIM endpoint
curl -s https://integrate.api.nvidia.com/v1/chat/completions \
  -H "Authorization: Bearer $NVIDIA_API_KEY" \
  -H "Content-Type: application/json" \
  -d '{
    "model": "meta/llama3-8b-instruct",
    "messages": [{"role": "user", "content": "Extract the invoice total from: ..."}]
  }'
```

## Notes

- Always benchmark against your own representative prompts, not published leaderboard scores alone.
- Licensing terms vary by model family — check before self-hosting for commercial use.
- Smaller models plus good prompting and structured-output constraints often beat a larger model with a weak prompt.

## References

- [NVIDIA NIM documentation](https://docs.nvidia.com/nim/)
- [NVIDIA API Catalog](https://build.nvidia.com/)
