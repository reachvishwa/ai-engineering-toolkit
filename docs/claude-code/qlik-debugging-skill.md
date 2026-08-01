# Qlik Debugging Skill

**Type:** Claude Code Skill
**Status:** :material-check-circle: Active — template

## Overview

The **Qlik Debugging Skill** is a Claude Code skill that activates when a Qlik load script error, synthetic key, or unexpected chart result needs diagnosis. It packages domain knowledge and a repeatable workflow so Claude produces consistent, high-quality output instead of ad-hoc responses each time.

## Problem

Qlik's associative model produces failure modes (synthetic keys, circular references, silent data loss on JOINs) that are hard to reason about from the load script alone.

## Solution

A skill that reads the load script and reload log, identifies synthetic keys and circular references, and explains — in the context of Qlik's associative engine — why a chart expression is returning unexpected results.

This skill is defined as a `SKILL.md` file with YAML frontmatter describing when it should trigger, plus a body of instructions, examples, and constraints. Claude Code loads it automatically when the description matches the current task.

## Example

**Input prompt:**

```text
My reload succeeded but revenue by region shows the wrong totals. Here's the load script.
```

**Skill behaviour:**

```text
Claude spots a synthetic key formed between two tables sharing two ambiguous fields and explains how to resolve it with a composite key or qualify().
```

## Code snippets

Skill definition skeleton (`SKILL.md`):

```markdown
---
name: qlik-debugging-skill
description: >
  Use this skill when a Qlik load script error, synthetic key, or unexpected chart result needs diagnosis.
  Trigger examples: "..." , "..."
---

# Qlik Debugging Skill

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
mkdir -p .claude/skills/qlik-debugging-skill
cp SKILL.md .claude/skills/qlik-debugging-skill/SKILL.md
```

## Notes

- Keep the skill's `description` field specific — vague descriptions cause skills to either never trigger or trigger too often.
- Prefer several small, focused skills over one large multi-purpose skill.
- Version-control skills alongside the project so teammates share the same behaviour.

## References

- [Claude Code documentation](https://docs.claude.com/en/docs/claude-code)
- [Agent Skills overview](https://docs.claude.com/en/docs/claude-code/skills)
