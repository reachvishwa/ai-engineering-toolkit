# Qlik

Notes on Qlik Sense data modelling, scripting, and debugging from real project work.

## Overview

Qlik's associative engine is powerful but has different failure modes than a traditional star-schema BI tool — this section focuses on the load-script and data-model patterns that avoid common pitfalls.

## Problem

Qlik's implicit table associations (joining on matching field names) are convenient until two tables share an unintended field name, producing a **synthetic key** or **circular reference** that silently distorts results.

## Solution

Use explicit, qualified field names and deliberate `JOIN`/`KEEP`/`CONCATENATE` statements in the load script rather than relying on Qlik's automatic association — see the worked example below.

## Example

Two source tables both contain a generic `Date` field that should **not** be associated directly:

```qlikview
Orders:
LOAD
    OrderID,
    CustomerID,
    OrderDate as Date,
    Revenue
FROM [lib://Data/orders.csv] (txt, utf8, embedded labels, delimiter is ',');

Shipments:
LOAD
    OrderID,
    ShipDate as Date,   // <- would create an unwanted synthetic association with Orders.Date
    Carrier
FROM [lib://Data/shipments.csv] (txt, utf8, embedded labels, delimiter is ',');
```

## Code snippets

Fixed version using qualified field names to avoid the unintended association:

```qlikview
Orders:
LOAD
    OrderID,
    CustomerID,
    OrderDate,
    Revenue
FROM [lib://Data/orders.csv] (txt, utf8, embedded labels, delimiter is ',');

Shipments:
LOAD
    OrderID,
    ShipDate,
    Carrier
FROM [lib://Data/shipments.csv] (txt, utf8, embedded labels, delimiter is ',');
```

Detecting synthetic keys via the reload log or Document Model Viewer, and resolving with a composite key when a genuine multi-field join is intended:

```qlikview
LOAD
    OrderID & '|' & LineNumber as %OrderLineKey,
    *
FROM [lib://Data/order_lines.csv] (txt, utf8, embedded labels, delimiter is ',');
```

## Notes

- Open the **Document Model Viewer** after every reload during development — synthetic keys and circular references are visible immediately.
- Prefer explicit composite keys (`Field1 & '|' & Field2`) over letting Qlik infer multi-field associations.
- `QUALIFY *` at the top of a script forces all field names to be table-prefixed, making unintended associations far less likely — useful while first exploring a new data source.

## References

- [Qlik Help: Synthetic keys](https://help.qlik.com/en-US/sense/latest/Subsystems/Hub/Content/Sense_Hub/Scripting/synthetic-keys.htm)
- [Qlik Debugging Skill](../claude-code/qlik-debugging-skill.md)
