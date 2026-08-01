# Claude Code Skills

Reusable [Claude Code](https://docs.claude.com/en/docs/claude-code) skills used across my day-to-day AI engineering work. Each skill page follows the same template: overview, problem, solution, a worked example, code, notes, and references — so a new skill can be dropped in without inventing new structure.

## Skills in this section

| Skill | Purpose |
|---|---|
| [Screenshot Analysis Skill](screenshot-analysis-skill.md) | Extract structured insight from dashboard/UI screenshots |
| [Jira Automation Skill](jira-automation-skill.md) | Create, triage, and update Jira issues from natural language |
| [Power BI Modelling Skill](powerbi-modelling-skill.md) | Review and improve semantic models and DAX |
| [SQL Assistant Skill](sql-assistant-skill.md) | Generate, explain, and optimize SQL |
| [Python Data Analysis Skill](python-data-analysis-skill.md) | Explore and summarize tabular datasets |
| [Qlik Debugging Skill](qlik-debugging-skill.md) | Diagnose load script and expression errors in Qlik |
| [File Search Skill](file-search-skill.md) | Locate relevant files/content across a large repo |
| [Repository Analysis Skill](repository-analysis-skill.md) | Summarize architecture and quality of a codebase |

## Adding a new skill

1. Copy `docs/claude-code/_skill-template.md` conceptually (see any existing skill page as a starting point).
2. Create a new Markdown file in `docs/claude-code/`.
3. Add one entry under **Claude Code Skills** in `mkdocs.yml`.
4. Commit and push — the site rebuilds automatically.
