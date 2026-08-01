# Jira Automation Skill

**Type:** Claude Code Skill
**Status:** :material-check-circle: Active — template

## Overview

The **Jira Automation Skill** is a Claude Code skill that activates when the user describes work that should become one or more Jira issues, or asks to triage existing issues. It packages domain knowledge and a repeatable workflow so Claude produces consistent, high-quality output instead of ad-hoc responses each time.

## Problem

Turning meeting notes, bug reports, or verbal requests into well-formed Jira issues (with correct fields, labels, and linked issues) is slow and often skipped, leading to poorly tracked work.

## Solution

A skill that maps natural-language requests to structured Jira issue payloads, applies team conventions (labels, components, story-point placeholders), and uses the Jira MCP server or REST API to create or update issues.

This skill is defined as a `SKILL.md` file with YAML frontmatter describing when it should trigger, plus a body of instructions, examples, and constraints. Claude Code loads it automatically when the description matches the current task.

## Example

**Input prompt:**

```text
We agreed in standup to split the reporting bug into a backend fix and a frontend fix. Create both as linked Jira issues under PROJ, priority High.
```

**Skill behaviour:**

```text
Claude drafts two issue payloads with titles, descriptions, priority=High, an 'is blocked by' link between them, and confirms before calling the Jira API.
```

## Code snippets

Skill definition skeleton (`SKILL.md`):

```markdown
---
name: jira-automation-skill
description: >
  Use this skill when the user describes work that should become one or more Jira issues, or asks to triage existing issues.
  Trigger examples: "..." , "..."
---

# Jira Automation Skill

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
mkdir -p .claude/skills/jira-automation-skill
cp SKILL.md .claude/skills/jira-automation-skill/SKILL.md
```

## Notes

- Keep the skill's `description` field specific — vague descriptions cause skills to either never trigger or trigger too often.
- Prefer several small, focused skills over one large multi-purpose skill.
- Version-control skills alongside the project so teammates share the same behaviour.

## References

- [Claude Code documentation](https://docs.claude.com/en/docs/claude-code)
- [Agent Skills overview](https://docs.claude.com/en/docs/claude-code/skills)
