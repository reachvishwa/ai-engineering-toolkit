# Git MCP

**Type:** MCP Server
**Status:** :material-check-circle: Active — placeholder

## Overview

The Git MCP server exposes repository operations — log, diff, blame, branch listing — as structured tools instead of raw shell commands.

## Problem

Asking an assistant to 'look at recent history' usually means it runs raw git commands via shell access, which is harder to constrain and audit.

## Solution

Use a Git MCP server scoped to a specific repository, giving the assistant read (and optionally write) access to git history and diffs through defined tools.

## Example

**Prompt:**

```text
Summarise what changed in the last 5 commits to the powerbi/ folder.
```

**What happens:**

```text
Claude calls the git-log and git-diff tools scoped to that path and produces a plain-language summary of the changes.
```

## Code snippets

Example client configuration:

```json
{
  "mcpServers": {
    "git": {
      "command": "npx",
      "args": ["-y", "@modelcontextprotocol/server-git", "--repository", "/path/to/repo"]
    }
  }
}
```

## Notes

- Scope credentials and file/database access as narrowly as possible — MCP servers execute with the permissions you grant them.
- Restart the client (Claude Desktop, Claude Code, etc.) after changing MCP server configuration.
- Log tool calls during development to catch unexpected or overly broad queries early.

## References

- [Model Context Protocol specification](https://modelcontextprotocol.io)
- [MCP server registry](https://github.com/modelcontextprotocol/servers)
