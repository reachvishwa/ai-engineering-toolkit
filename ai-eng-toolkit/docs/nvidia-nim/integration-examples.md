# Integration Examples

## Overview

Patterns for calling a running NIM endpoint from application code, using the OpenAI-compatible API surface.

## Problem

Teams often want to swap between a hosted LLM API and a self-hosted NIM endpoint (for cost, latency, or data-residency reasons) without rewriting application code.

## Solution

Use an OpenAI-compatible client library pointed at the NIM endpoint's base URL, so switching between hosted and self-hosted inference is a configuration change, not a code change.

## Example

An application originally built against the OpenAI API is repointed at a local NIM deployment by changing only the `base_url` and `model` values.

## Code snippets

```python
from openai import OpenAI

client = OpenAI(
    base_url="http://localhost:8000/v1",  # local NIM endpoint
    api_key="not-required-for-local-nim",
)

response = client.chat.completions.create(
    model="meta/llama3-8b-instruct",
    messages=[
        {"role": "system", "content": "You are a concise assistant."},
        {"role": "user", "content": "Summarise the attached quarterly report."},
    ],
    stream=False,
)

print(response.choices[0].message.content)
```

## Notes

- Keep the `base_url` and `model` name in environment/config, not hardcoded, to make this swap trivial.
- Streaming responses work the same way as the OpenAI API — no special handling needed for NIM.
- Add a health-check call (`/v1/models`) at application startup so failures surface immediately rather than on the first user request.

## References

- [NVIDIA NIM documentation](https://docs.nvidia.com/nim/)
- [OpenAI Python client](https://github.com/openai/openai-python)
