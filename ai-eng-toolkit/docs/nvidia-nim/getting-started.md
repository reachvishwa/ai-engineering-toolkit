# Getting Started

## Overview

A first-deployment walkthrough for running a NIM container locally or on a GPU-equipped server, from container pull to first inference call.

## Problem

NIM containers are large and GPU-driver-sensitive, so the first deployment is where most friction (driver mismatches, missing NGC auth, insufficient VRAM) shows up.

## Solution

Follow a minimal, verifiable path: authenticate to NGC, pull one small model's NIM container, run it locally, and confirm a single successful inference call before building anything on top of it.

## Example

Deploying a Llama 3 8B NIM container on a workstation with a single 24GB GPU, confirmed working via a curl request before wiring it into an application.

## Code snippets

```bash
# Authenticate and pull the container
docker login nvcr.io --username='$oauthtoken' --password=$NGC_API_KEY
docker pull nvcr.io/nim/meta/llama3-8b-instruct:latest

# Run it, exposing the OpenAI-compatible API on 8000
docker run --gpus all -p 8000:8000 \
  -e NGC_API_KEY=$NGC_API_KEY \
  nvcr.io/nim/meta/llama3-8b-instruct:latest

# Confirm with a test call
curl -s http://localhost:8000/v1/chat/completions \
  -H 'Content-Type: application/json' \
  -d '{"model":"meta/llama3-8b-instruct","messages":[{"role":"user","content":"Say hello"}]}'
```

## Notes

- Confirm GPU driver and CUDA compatibility against NVIDIA's NIM support matrix before the first pull — this is the most common blocker.
- NIM exposes an OpenAI-compatible `/v1/chat/completions` endpoint, so existing OpenAI-client code usually works with just a base-URL change.
- Start with the smallest model in a family to validate the whole pipeline before sizing up.

## References

- [NVIDIA NIM documentation](https://docs.nvidia.com/nim/)
- [NVIDIA API Catalog](https://build.nvidia.com/)
