# DuckDB MCP

**Type:** MCP Server
**Status:** :material-check-circle: Active — placeholder

## Overview

The DuckDB MCP server gives an AI assistant SQL query access to local CSV, Parquet, and DuckDB files using DuckDB's fast, in-process analytical engine.

## Problem

Ad-hoc analysis of local data files usually means writing throwaway pandas scripts, even for questions that are naturally expressed as SQL.

## Solution

Expose one or more local data files through a DuckDB MCP server so the assistant can write and execute SQL directly, returning results as structured data.

## Example

**Prompt:**

```text
Using the sales.parquet file, show monthly revenue by region for 2025.
```

**What happens:**

```text
Claude writes a SELECT with date_trunc and GROUP BY, executes it via the DuckDB MCP tool, and formats the result as a Markdown table.
```

## Code snippets

Example client configuration:

```json
{
  "mcpServers": {
    "duckdb": {
      "command": "npx",
      "args": ["-y", "mcp-server-duckdb", "--db", "./data/analytics.duckdb"]
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
