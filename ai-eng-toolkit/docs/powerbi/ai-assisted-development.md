# AI Assisted Development

## Overview

Practical patterns for using an AI assistant (Claude Code, Copilot, etc.) throughout the Power BI development lifecycle — from initial model design through DAX authoring and report QA.

## Problem

Power BI development involves a lot of repetitive, error-prone work: writing similar DAX patterns repeatedly, remembering naming conventions, and manually checking a model for common mistakes.

## Solution

Treat the AI assistant as a pair-programmer for the TMDL/PBIP project files: it drafts measures against a documented style guide, reviews model changes before publish, and explains existing DAX during onboarding.

## Example

Working in [PBIP (Power BI Project) format](https://learn.microsoft.com/power-bi/developer/projects/projects-overview) with Git, an assistant with [file system](../mcp/filesystem-mcp.md) and [git](../mcp/git-mcp.md) MCP access can review a pull request's `.tmdl` diff and flag a measure that doesn't follow the team's `CALCULATE` conventions.

## Code snippets

Example style-guide prompt used consistently across a project:

```text
When writing DAX measures for this model:
- Use explicit CALCULATE(<expr>, <filter>) rather than nested FILTER() where possible.
- Time-intelligence measures must be suffixed "YTD", "PY", or "MoM".
- Every measure needs a one-line description in TMDL.
```

## Notes

- PBIP format (rather than binary `.pbix`) is what makes AI-assisted, diff-friendly review practical.
- Keep a short "house style" document in the repo and reference it explicitly in prompts for consistent output.
- Always validate generated DAX against a real query before trusting it in a published report.

## References

- [PBIP project format overview](https://learn.microsoft.com/power-bi/developer/projects/projects-overview)
- [Power BI Modelling Skill](../claude-code/powerbi-modelling-skill.md)
