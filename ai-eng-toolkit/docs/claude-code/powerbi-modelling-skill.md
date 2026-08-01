# Power BI Modelling Skill

**Type:** Claude Code Skill
**Status:** :material-check-circle: Active — template

## Overview

The **Power BI Modelling Skill** is a Claude Code skill that activates when a semantic model, DAX measure, or .pbip/TMDL file is being reviewed or built. It packages domain knowledge and a repeatable workflow so Claude produces consistent, high-quality output instead of ad-hoc responses each time.

## Problem

Semantic models drift over time — ambiguous relationships, duplicated measures, and inefficient DAX accumulate, and reviewing them manually is time-consuming.

## Solution

A skill that reads TMDL/model.bim definitions, checks relationship cardinality and direction, flags DAX anti-patterns (e.g. unnecessary iterators, CALCULATE misuse), and suggests a cleaned-up model structure.

This skill is defined as a `SKILL.md` file with YAML frontmatter describing when it should trigger, plus a body of instructions, examples, and constraints. Claude Code loads it automatically when the description matches the current task.

## Example

**Input prompt:**

```text
Review this Power BI semantic model folder and tell me what's wrong with the DAX in the Sales measures table.
```

**Skill behaviour:**

```text
Claude flags a measure using FILTER(Table, Table[Col]=x) instead of a simple boolean filter, notes a bidirectional relationship causing ambiguity, and proposes corrected DAX.
```

## Code snippets

Skill definition skeleton (`SKILL.md`):

```markdown
---
name: powerbi-modelling-skill
description: >
  Use this skill when a semantic model, DAX measure, or .pbip/TMDL file is being reviewed or built.
  Trigger examples: "..." , "..."
---

# Power BI Modelling Skill

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
mkdir -p .claude/skills/powerbi-modelling-skill
cp SKILL.md .claude/skills/powerbi-modelling-skill/SKILL.md
```

## Notes

- Keep the skill's `description` field specific — vague descriptions cause skills to either never trigger or trigger too often.
- Prefer several small, focused skills over one large multi-purpose skill.
- Version-control skills alongside the project so teammates share the same behaviour.

## References

- [Claude Code documentation](https://docs.claude.com/en/docs/claude-code)
- [Agent Skills overview](https://docs.claude.com/en/docs/claude-code/skills)
