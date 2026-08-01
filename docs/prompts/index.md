# Prompt Library

Reusable prompt templates for coding, analysis, documentation, and automation tasks.

## Overview

These are prompts I return to often enough to save, generalize, and refine — not one-off requests. Each is written to be copy-pasted and adapted with minimal editing.

## Problem

Rewriting the same kind of prompt (a code review request, a data-summary request) from scratch each time leads to inconsistent results and wastes effort re-deriving structure that already works.

## Solution

Keep a small library of parameterized templates with placeholders clearly marked, organized by task type.

## Example

**Task:** Ask for a structured code review with consistent sections every time.

```text
Review the following code for correctness, performance, and readability.

Code:
{{PASTE_CODE_HERE}}

Respond in this structure:
1. Summary (1-2 sentences)
2. Correctness issues (if any)
3. Performance considerations
4. Readability / style suggestions
5. Suggested rewrite (only if changes are non-trivial)

Be specific — reference line numbers or function names where possible.
```

## Code snippets

**Data-summary template:**

```text
You are analysing a dataset for a technical but non-expert audience.

Dataset description: {{DATASET_DESCRIPTION}}
Data (or a representative sample): {{DATA}}

Provide:
- 3-5 key observations
- Any obvious data-quality issues
- One suggested next analysis step

Keep the whole response under 200 words.
```

**Documentation template:**

```text
Write user-facing documentation for the following feature, following this structure:
Overview / Problem / Solution / Example / Notes.

Feature description: {{FEATURE_DESCRIPTION}}
Target audience: {{AUDIENCE}}

Keep language plain and avoid marketing tone.
```

## Notes

- Keep placeholders in a consistent `{{LIKE_THIS}}` format so they're easy to find and replace.
- Templates that specify an explicit output structure produce far more consistent results than open-ended requests.
- See [Downloads](../downloads/index.md) for a downloadable bundle of these templates.

## References

- [Anthropic prompt engineering guide](https://docs.claude.com/en/docs/build-with-claude/prompt-engineering/overview)
