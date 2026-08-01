# File System MCP

**Type:** MCP Server
**Status:** :material-check-circle: Active — placeholder

## Overview

The File System MCP server exposes a scoped local directory to an AI assistant, allowing it to read, list, search, and (optionally) write files without shell access.

## Problem

AI assistants often need to work with local files, but giving them unrestricted shell access is a much larger surface area than the task requires.

## Solution

Run the official filesystem MCP server pointed at one or more allow-listed directories. The assistant gets structured read/write tools instead of raw shell commands, making behaviour easier to audit.

## Example

**Prompt:**

```text
List every Markdown file under docs/ that has not been updated in the last 6 months.
```

**What happens:**

```text
Claude lists directory contents via the filesystem MCP tools, reads file metadata, and returns a filtered list without shell access.
```

## Code snippets

Example client configuration:

```json
{
  "mcpServers": {
    "filesystem": {
      "command": "npx",
      "args": ["-y", "@modelcontextprotocol/server-filesystem", "/path/to/project"]
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
