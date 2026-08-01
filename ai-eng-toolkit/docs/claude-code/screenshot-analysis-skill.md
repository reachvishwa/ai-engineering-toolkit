# Screenshot Analysis Skill

**Type:** Claude Code Skill
**Status:** :material-check-circle: Active — template

## Overview

The **Screenshot Analysis Skill** is a Claude Code skill that activates when a screenshot of a dashboard, UI, or chart is provided for analysis. It packages domain knowledge and a repeatable workflow so Claude produces consistent, high-quality output instead of ad-hoc responses each time.

## Problem

Dashboards and UI screenshots get shared constantly in reviews and tickets, but manually describing what's shown, spotting anomalies, and turning that into structured notes is repetitive and inconsistent between people.

## Solution

A skill that instructs Claude to systematically read a screenshot: identify chart types, extract visible values, flag anomalies or broken visuals, and output a structured Markdown summary ready to paste into a ticket or report.

This skill is defined as a `SKILL.md` file with YAML frontmatter describing when it should trigger, plus a body of instructions, examples, and constraints. Claude Code loads it automatically when the description matches the current task.

## Example

**Input prompt:**

```text
Here is a screenshot of our Power BI sales dashboard. Summarise what it shows and flag anything that looks wrong.
```

**Skill behaviour:**

```text
Claude identifies each visual (KPI cards, bar chart, matrix), extracts visible numbers, notes a mis-scaled axis on the trend chart, and returns a structured summary with a 'Possible Issues' section.
```

## Code snippets

Skill definition skeleton (`SKILL.md`):

```markdown
---
name: screenshot-analysis-skill
description: >
  Use this skill when a screenshot of a dashboard, UI, or chart is provided for analysis.
  Trigger examples: "..." , "..."
---

# Screenshot Analysis Skill

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
mkdir -p .claude/skills/screenshot-analysis-skill
cp SKILL.md .claude/skills/screenshot-analysis-skill/SKILL.md
```

## Notes

- Keep the skill's `description` field specific — vague descriptions cause skills to either never trigger or trigger too often.
- Prefer several small, focused skills over one large multi-purpose skill.
- Version-control skills alongside the project so teammates share the same behaviour.

## References

- [Claude Code documentation](https://docs.claude.com/en/docs/claude-code)
- [Agent Skills overview](https://docs.claude.com/en/docs/claude-code/skills)
