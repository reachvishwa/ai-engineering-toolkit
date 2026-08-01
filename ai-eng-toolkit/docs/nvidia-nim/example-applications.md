# Example Applications

## Overview

Worked end-to-end examples of NIM in real applications, beyond a single API call.

## Problem

It's easy to find isolated NIM "hello world" examples but harder to find realistic, end-to-end application patterns that show where NIM fits in a larger system.

## Solution

Document small but complete examples: a retrieval-augmented generation (RAG) pipeline and a document-extraction pipeline, both using a self-hosted NIM endpoint as the generation step.

```mermaid
flowchart LR
    A[User Question] --> B[Embed Query]
    B --> C[Vector Search over Local Docs]
    C --> D[Relevant Chunks]
    D --> E[NIM Endpoint - Generation]
    E --> F[Answer]
```

## Example

A RAG pipeline where documents are embedded and stored locally, relevant chunks are retrieved for a user question, and a self-hosted NIM endpoint generates the final answer — keeping all data on-premises.

## Code snippets

```python
# Minimal RAG generation step against a local NIM endpoint
from openai import OpenAI

client = OpenAI(base_url="http://localhost:8000/v1", api_key="not-required")

context = "\n".join(retrieved_chunks)  # from a local vector search step

response = client.chat.completions.create(
    model="meta/llama3-8b-instruct",
    messages=[
        {"role": "system", "content": "Answer using only the provided context."},
        {"role": "user", "content": f"Context:\n{context}\n\nQuestion: What is our refund policy?"},
    ],
)

print(response.choices[0].message.content)
```

## Notes

- Self-hosted NIM is particularly attractive for RAG pipelines with sensitive source documents that can't leave the environment.
- Keep the retrieval and generation steps independently testable — most RAG quality issues turn out to be retrieval problems, not generation problems.
- Cache embeddings; re-embedding on every run is a common, avoidable cost.

## References

- [NVIDIA NIM documentation](https://docs.nvidia.com/nim/)
- [DuckDB MCP](../mcp/duckdb-mcp.md) for local retrieval experiments
