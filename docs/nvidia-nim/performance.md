# Performance

## Overview

Notes on throughput, latency, and GPU sizing when running NIM containers, based on informal benchmarking rather than vendor figures.

## Problem

Published benchmark numbers rarely match a specific workload's prompt lengths, concurrency, and hardware, so real capacity planning needs local measurement.

## Solution

Benchmark with a request pattern that matches production (concurrent requests, realistic prompt/response lengths) rather than single sequential calls, and track both latency and GPU memory headroom.

## Example

Measuring p50/p95 latency for a Llama 3 8B NIM under 10 concurrent requests on a single 24GB GPU, to size an autoscaling policy.

## Code snippets

```bash
# Simple concurrent load test with hey
hey -n 100 -c 10 -m POST \
  -H 'Content-Type: application/json' \
  -d '{"model":"meta/llama3-8b-instruct","messages":[{"role":"user","content":"Summarise this paragraph..."}]}' \
  http://localhost:8000/v1/chat/completions
```

```bash
# Watch GPU memory during the load test
watch -n 1 nvidia-smi
```

## Notes

- Latency scales non-linearly with concurrency once GPU memory or compute saturates — measure at the concurrency you actually expect.
- Quantized model variants trade some quality for meaningfully lower VRAM use and higher throughput.
- Watch GPU memory during load tests to catch pressure before it causes request failures.

## References

- [NVIDIA NIM documentation](https://docs.nvidia.com/nim/)
- [NVIDIA NIM support matrix](https://docs.nvidia.com/nim/large-language-models/latest/support-matrix.html)
