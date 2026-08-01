# PostgreSQL MCP

**Type:** MCP Server
**Status:** :material-check-circle: Active — placeholder

## Overview

The PostgreSQL MCP server gives an AI assistant read (and optionally write) SQL access to a Postgres database, along with schema introspection tools.

## Problem

Debugging data issues or answering ad-hoc questions against a production-like database usually means switching to a separate SQL client and copy-pasting results back into the conversation.

## Solution

Connect a PostgreSQL MCP server using a read-only role by default, so the assistant can introspect schemas and run queries directly, with results returned inline.

## Example

**Prompt:**

```text
What indexes exist on the orders table, and is there one covering (customer_id, created_at)?
```

**What happens:**

```text
Claude queries pg_indexes via the MCP tool and confirms whether a matching composite index exists.
```

## Code snippets

Example client configuration:

```json
{
  "mcpServers": {
    "postgres": {
      "command": "npx",
      "args": ["-y", "@modelcontextprotocol/server-postgres", "postgresql://readonly_user:password@localhost:5432/analytics"]
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
