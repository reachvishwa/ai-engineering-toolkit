# SQL

Query patterns, performance notes, and database design for analytics engineering.

## Overview

SQL patterns collected from analytics engineering work — mostly Postgres and DuckDB — with an emphasis on queries that stay readable and stay fast as data grows.

## Problem

A query that works fine on a small development dataset can become a production bottleneck once it runs against real data volumes, especially when window functions or correlated subqueries are involved.

## Solution

Prefer set-based operations and window functions over correlated subqueries, and confirm plans with `EXPLAIN ANALYZE` rather than assuming a query is fast because it's short.

## Example

Finding each customer's most recent order without a correlated subquery.

## Code snippets

```sql
-- Anti-pattern: correlated subquery, re-executed per row
SELECT o.*
FROM orders o
WHERE o.order_date = (
    SELECT MAX(o2.order_date)
    FROM orders o2
    WHERE o2.customer_id = o.customer_id
);

-- Preferred: window function, single pass
SELECT *
FROM (
    SELECT
        o.*,
        ROW_NUMBER() OVER (
            PARTITION BY o.customer_id
            ORDER BY o.order_date DESC
        ) AS rn
    FROM orders o
) ranked
WHERE rn = 1;
```

Checking the plan:

```sql
EXPLAIN ANALYZE
SELECT * FROM orders WHERE customer_id = 1042;
```

## Notes

- A composite index on `(customer_id, order_date DESC)` makes the window-function version above especially fast.
- `EXPLAIN ANALYZE` actually executes the query — be cautious running it against write-heavy or very large production tables.
- DuckDB uses the same window-function syntax, making it a convenient local sandbox for testing Postgres-bound queries.

## References

- [PostgreSQL documentation: Window functions](https://www.postgresql.org/docs/current/tutorial-window.html)
- [SQL Assistant Skill](../claude-code/sql-assistant-skill.md) · [PostgreSQL MCP](../mcp/postgresql-mcp.md)
