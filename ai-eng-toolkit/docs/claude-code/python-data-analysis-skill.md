# Python Data Analysis Skill

**Type:** Claude Code Skill
**Status:** :material-check-circle: Active — template

## Overview

The **Python Data Analysis Skill** is a Claude Code skill that activates when a CSV, Parquet, or DataFrame-like dataset needs exploration, cleaning, or summarisation. It packages domain knowledge and a repeatable workflow so Claude produces consistent, high-quality output instead of ad-hoc responses each time.

## Problem

Early-stage data exploration (types, nulls, distributions, obvious data-quality issues) is repetitive boilerplate that's easy to under-invest in, leading to bugs downstream.

## Solution

A skill that runs a standard exploratory pass with pandas — shape, dtypes, missingness, summary stats, duplicate checks — and reports findings in plain language before any deeper analysis begins.

This skill is defined as a `SKILL.md` file with YAML frontmatter describing when it should trigger, plus a body of instructions, examples, and constraints. Claude Code loads it automatically when the description matches the current task.

## Example

**Input prompt:**

```text
Here's sales.csv. Give me a first look before we build anything on top of it.
```

**Skill behaviour:**

```text
Claude loads the file, reports 3 columns with unexpected nulls, one duplicate-looking key column, and a date column stored as text, then suggests a cleaning plan.
```

## Code snippets

Skill definition skeleton (`SKILL.md`):

```markdown
---
name: python-data-analysis-skill
description: >
  Use this skill when a CSV, Parquet, or DataFrame-like dataset needs exploration, cleaning, or summarisation.
  Trigger examples: "..." , "..."
---

# Python Data Analysis Skill

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
mkdir -p .claude/skills/python-data-analysis-skill
cp SKILL.md .claude/skills/python-data-analysis-skill/SKILL.md
```

## Notes

- Keep the skill's `description` field specific — vague descriptions cause skills to either never trigger or trigger too often.
- Prefer several small, focused skills over one large multi-purpose skill.
- Version-control skills alongside the project so teammates share the same behaviour.

## References

- [Claude Code documentation](https://docs.claude.com/en/docs/claude-code)
- [Agent Skills overview](https://docs.claude.com/en/docs/claude-code/skills)
