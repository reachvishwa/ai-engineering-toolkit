# Browser MCP

**Type:** MCP Server
**Status:** :material-check-circle: Active — placeholder

## Overview

The Browser MCP server lets an AI assistant drive a real browser — navigating pages, reading rendered content, filling forms, and taking screenshots.

## Problem

Some information only exists behind a rendered, JavaScript-heavy web UI that a plain HTTP fetch can't retrieve or interact with.

## Solution

Run a browser-automation MCP server (backed by Playwright or similar) so the assistant can navigate, click, type, and read the resulting DOM or screenshot.

## Example

**Prompt:**

```text
Open our internal status page and tell me if any service is currently marked degraded.
```

**What happens:**

```text
Claude navigates to the URL, waits for the page to render, extracts the status list, and reports any non-'operational' entries.
```

## Code snippets

Example client configuration:

```json
{
  "mcpServers": {
    "browser": {
      "command": "npx",
      "args": ["-y", "@modelcontextprotocol/server-browser"]
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
