# Python

Practical Python patterns for data analysis, automation, and AI tooling.

## Overview

Most of the Python here sits at the boundary between data engineering and AI tooling: scripts that clean and shape data, and small utilities that wrap LLM APIs or MCP servers for repeatable tasks.

## Problem

One-off analysis scripts often skip basic data-quality checks (nulls, dtypes, duplicates), leading to bugs that surface much later, further downstream.

## Solution

Start every new dataset with a small, repeatable "first look" function rather than jumping straight into analysis.

## Example

A reusable exploratory function applied to a new CSV before any real analysis begins.

## Code snippets

```python
import pandas as pd

def first_look(path: str) -> None:
    """Print a quick data-quality summary for a CSV/Parquet file."""
    df = pd.read_parquet(path) if path.endswith(".parquet") else pd.read_csv(path)

    print(f"Shape: {df.shape}")
    print("\nDtypes:\n", df.dtypes)

    nulls = df.isna().sum()
    nulls = nulls[nulls > 0]
    print("\nColumns with nulls:\n", nulls if not nulls.empty else "None")

    dupes = df.duplicated().sum()
    print(f"\nDuplicate rows: {dupes}")

    print("\nNumeric summary:\n", df.describe(include="number").T)

if __name__ == "__main__":
    first_look("sales.csv")
```

Example output structure:

```text
Shape: (48213, 9)

Dtypes:
 order_id       int64
 order_date    object   # <- likely should be datetime64
 revenue       float64
 ...

Columns with nulls:
 discount_pct    312

Duplicate rows: 0
```

## Notes

- Casting `order_date` to `datetime64` early avoids silent string-sort bugs later in the pipeline.
- Treat `first_look()` output as a checklist, not just print output — decide explicitly what to do about every flagged column.
- For files too large for pandas, the same checks translate directly to a [DuckDB](../mcp/duckdb-mcp.md) SQL query.

## References

- [pandas documentation](https://pandas.pydata.org/docs/)
- [Python Data Analysis Skill](../claude-code/python-data-analysis-skill.md)
