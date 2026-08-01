# Best Practices

## Overview

A checklist-style collection of practices that consistently improve Power BI performance, governance, and maintainability across projects.

## Problem

Without agreed conventions, Power BI projects drift: inconsistent naming, uncontrolled proliferation of near-duplicate measures, and reports that quietly get slower as the model grows.

## Solution

Adopt a short, enforced set of conventions early, and check new work against them during review — either manually or with an [AI-assisted review step](ai-assisted-development.md).

## Example

A pre-publish checklist applied to every new report before it moves from a dev workspace to production.

## Code snippets

Naming convention example enforced in TMDL:

```tmdl
measure 'Total Revenue' = SUM ( FactSales[Revenue] )
    displayFolder: Sales\Core
    formatString: "#,##0"
```

## Notes

- **Performance**: prefer import mode where feasible; use Performance Analyzer before and after any model change; avoid calculated columns where a measure will do.
- **Governance**: use workspaces + deployment pipelines (Dev/Test/Prod) rather than manual publish; enforce Row-Level Security at the model, not the report, level.
- **Naming**: consistent prefixes/suffixes for time-intelligence measures; PascalCase table names; no spaces in column names used in DAX-heavy expressions.
- **Documentation**: every measure gets a one-line description; every fact table's grain is documented in its TMDL description.

## References

- [Microsoft Learn: Power BI adoption roadmap](https://learn.microsoft.com/power-bi/guidance/powerbi-adoption-roadmap)
- [Best Practices](best-practices.md) · [Data Modelling](data-modelling.md) · [DAX](dax.md)
