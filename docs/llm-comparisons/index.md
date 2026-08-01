# LLM Comparisons

Practical, task-based comparisons of LLMs — not benchmark leaderboards, but "which model actually worked best for this job."

## Overview

Model choice matters less for raw capability than for fit: cost per task, latency requirements, and how well a model follows structured-output instructions for your specific use case.

## Problem

General leaderboards rarely predict performance on a narrow, specific task like "extract these five fields from a scanned invoice" or "write SQL against this exact schema."

## Solution

Run a small, fixed evaluation set (10-30 real examples) through each candidate model with identical prompts, and score on task-specific criteria rather than general quality.

## Example

**Task:** Extract structured JSON (vendor, date, total) from 20 real invoice PDFs.

| Model | Field accuracy | Avg. latency | Cost / 1K docs | Notes |
|---|---|---|---|---|
| Claude Sonnet | 98% | 1.8s | $$ | Best JSON-schema adherence |
| GPT-4o-mini | 94% | 1.2s | $ | Occasional date-format errors |
| Llama 3 8B (NIM, self-hosted) | 89% | 0.9s | $ (infra only) | Good for high-volume, low-sensitivity docs |

## Code snippets

A minimal harness for running the same prompt across multiple providers:

```python
def run_eval(prompt: str, examples: list[dict], client_fn) -> dict:
    """client_fn(prompt, example) -> model output string"""
    results = []
    for ex in examples:
        output = client_fn(prompt, ex["input"])
        correct = output.strip() == ex["expected"].strip()
        results.append({"id": ex["id"], "correct": correct, "output": output})
    accuracy = sum(r["correct"] for r in results) / len(results)
    return {"accuracy": accuracy, "results": results}
```

## Notes

- Fix the prompt and examples across all models being compared — only the model should vary.
- Re-run flaky comparisons at least twice; sampling temperature introduces real variance.
- Cost comparisons should include infrastructure cost for self-hosted options, not just "free."

## References

- [Prompt Library](../prompts/index.md)
- [NVIDIA NIM Model Comparison](../nvidia-nim/model-comparison.md)
