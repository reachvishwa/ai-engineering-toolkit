# SQL Assistant Skill

**Type:** Claude Code Skill
**Status:** :material-check-circle: Active — template

## Overview

The **SQL Assistant Skill** is a Claude Code skill that activates when the user asks for a SQL query, an explanation of one, or a performance review, and can supply or reference a schema. It packages domain knowledge and a repeatable workflow so Claude produces consistent, high-quality output instead of ad-hoc responses each time.

## Problem

Writing correct, efficient SQL against an unfamiliar schema — or debugging a slow query — takes context-switching between docs, EXPLAIN plans, and trial and error.

## Solution

A skill that asks for (or infers from context) the relevant schema, generates SQL with inline comments, explains query plans in plain language, and suggests indexing or rewrite options for slow queries.

This skill is defined as a `SKILL.md` file with YAML frontmatter describing when it should trigger, plus a body of instructions, examples, and constraints. Claude Code loads it automatically when the description matches the current task.

## Example

**Input prompt:**

```text
Given this schema (orders, order_items, customers), write a query for top 10 customers by revenue in the last 90 days.
```

**Skill behaviour:**

```text
Claude writes the SQL with a JOIN and date filter, comments on why a covering index on order_items(order_id, quantity, price) would help, and offers a DuckDB-flavoured variant.
```

## Code snippets

Skill definition skeleton (`SKILL.md`):

```markdown
---
name: sql-assistant-skill
description: >
  Use this skill when the user asks for a SQL query, an explanation of one, or a performance review, and can supply or reference a schema.
  Trigger examples: "..." , "..."
---

# SQL Assistant Skill

## Instructions
1. ...
2. ...
3. ...

## Constraints
- ...

## Output format
- ...
```

Invoking from a project's `.claude/skills/` directory:

```bash
mkdir -p .claude/skills/sql-assistant-skill
cp SKILL.md .claude/skills/sql-assistant-skill/SKILL.md
```

## Notes

- Keep the skill's `description` field specific — vague descriptions cause skills to either never trigger or trigger too often.
- Prefer several small, focused skills over one large multi-purpose skill.
- Version-control skills alongside the project so teammates share the same behaviour.

## References

- [Claude Code documentation](https://docs.claude.com/en/docs/claude-code)
- [Agent Skills overview](https://docs.claude.com/en/docs/claude-code/skills)
