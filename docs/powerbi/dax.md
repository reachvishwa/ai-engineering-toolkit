# DAX

## Overview

DAX (Data Analysis Expressions) is the formula language behind Power BI measures and calculated columns. This page collects patterns I return to most often — especially around `CALCULATE` and time intelligence.

## Problem

DAX's evaluation context model (row context vs. filter context) is unintuitive coming from SQL, and it's easy to write measures that are subtly wrong — correct for the default view but broken once sliced by another dimension.

## Solution

Lean on a small set of well-understood patterns — explicit `CALCULATE` filters, `SUMMARIZECOLUMNS` for multi-grain outputs, and the built-in time-intelligence functions — rather than ad-hoc expressions.

## Example

Year-to-date revenue that correctly respects other filters (region, product) already applied on the report page.

## Code snippets

```dax
Total Revenue =
SUM ( FactSales[Revenue] )

Revenue YTD =
CALCULATE (
    [Total Revenue],
    DATESYTD ( DimDate[Date] )
)

Revenue PY =
CALCULATE (
    [Total Revenue],
    SAMEPERIODLASTYEAR ( DimDate[Date] )
)

Revenue YoY % =
DIVIDE ( [Total Revenue] - [Revenue PY], [Revenue PY] )
```

A common anti-pattern to avoid — filtering with `FILTER` over an entire table when a simple boolean filter works:

```dax
-- Avoid:
Revenue High Value (slow) =
CALCULATE (
    [Total Revenue],
    FILTER ( FactSales, FactSales[Revenue] > 1000 )
)

-- Prefer:
Revenue High Value (fast) =
CALCULATE (
    [Total Revenue],
    FactSales[Revenue] > 1000
)
```

## Notes

- `CALCULATE` filter arguments should be boolean column predicates or table expressions — prefer the simplest form that expresses the intent.
- Always test time-intelligence measures against a fiscal calendar, not just a standard calendar, if your organisation uses one.
- Use Performance Analyzer in Power BI Desktop to confirm a rewritten measure is actually faster, not just cleaner-looking.

## References

- [DAX guide — SQLBI](https://www.sqlbi.com/guides/dax/)
- [Microsoft Learn: DAX overview](https://learn.microsoft.com/dax/dax-overview)
