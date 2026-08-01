# Repository Analysis Skill

**Type:** Claude Code Skill
**Status:** :material-check-circle: Active — template

## Overview

The **Repository Analysis Skill** is a Claude Code skill that activates when the user asks for an architecture overview, code-quality review, or onboarding summary of a codebase. It packages domain knowledge and a repeatable workflow so Claude produces consistent, high-quality output instead of ad-hoc responses each time.

## Problem

Getting oriented in an unfamiliar repository — its architecture, conventions, and weak spots — usually takes a new contributor hours of manual exploration.

## Solution

A skill that walks the directory structure, key entry points, and dependency manifests, then produces a concise architecture summary plus a short list of code-quality observations.

This skill is defined as a `SKILL.md` file with YAML frontmatter describing when it should trigger, plus a body of instructions, examples, and constraints. Claude Code loads it automatically when the description matches the current task.

## Example

**Input prompt:**

```text
Give me an architecture overview of this repo and anything that looks risky before I start contributing.
```

**Skill behaviour:**

```text
Claude summarises the module layout as a Mermaid diagram, lists key entry points, and flags an untested payment module as higher-risk.
```

## Code snippets

Skill definition skeleton (`SKILL.md`):

```markdown
---
name: repository-analysis-skill
description: >
  Use this skill when the user asks for an architecture overview, code-quality review, or onboarding summary of a codebase.
  Trigger examples: "..." , "..."
---

# Repository Analysis Skill

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
mkdir -p .claude/skills/repository-analysis-skill
cp SKILL.md .claude/skills/repository-analysis-skill/SKILL.md
```

## Notes

- Keep the skill's `description` field specific — vague descriptions cause skills to either never trigger or trigger too often.
- Prefer several small, focused skills over one large multi-purpose skill.
- Version-control skills alongside the project so teammates share the same behaviour.

## References

- [Claude Code documentation](https://docs.claude.com/en/docs/claude-code)
- [Agent Skills overview](https://docs.claude.com/en/docs/claude-code/skills)
