# File Search Skill

**Type:** Claude Code Skill
**Status:** :material-check-circle: Active — template

## Overview

The **File Search Skill** is a Claude Code skill that activates when the user needs to locate specific content or files across a large repository or filesystem. It packages domain knowledge and a repeatable workflow so Claude produces consistent, high-quality output instead of ad-hoc responses each time.

## Problem

In large repos, knowing the right filename or exact search term is often the hardest part of a task — naive grep either misses relevant files or returns too much noise.

## Solution

A skill that combines filename heuristics, ripgrep-based content search, and iterative query refinement to find the smallest relevant set of files, then summarises what each contains.

This skill is defined as a `SKILL.md` file with YAML frontmatter describing when it should trigger, plus a body of instructions, examples, and constraints. Claude Code loads it automatically when the description matches the current task.

## Example

**Input prompt:**

```text
Where is the retry logic for the Power BI MCP client implemented?
```

**Skill behaviour:**

```text
Claude searches for 'retry', 'backoff', and 'MCP client' across the repo, narrows to two candidate files, and confirms the correct one by reading its contents.
```

## Code snippets

Skill definition skeleton (`SKILL.md`):

```markdown
---
name: file-search-skill
description: >
  Use this skill when the user needs to locate specific content or files across a large repository or filesystem.
  Trigger examples: "..." , "..."
---

# File Search Skill

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
mkdir -p .claude/skills/file-search-skill
cp SKILL.md .claude/skills/file-search-skill/SKILL.md
```

## Notes

- Keep the skill's `description` field specific — vague descriptions cause skills to either never trigger or trigger too often.
- Prefer several small, focused skills over one large multi-purpose skill.
- Version-control skills alongside the project so teammates share the same behaviour.

## References

- [Claude Code documentation](https://docs.claude.com/en/docs/claude-code)
- [Agent Skills overview](https://docs.claude.com/en/docs/claude-code/skills)
