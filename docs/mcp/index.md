# MCP Servers

The [Model Context Protocol](https://modelcontextprotocol.io) (MCP) is an open standard for connecting AI assistants to external tools and data sources. This section documents the MCP servers I use regularly, including configuration and real usage examples.

## Servers in this section

| Server | Purpose |
|---|---|
| [File System MCP](filesystem-mcp.md) | Read/write access to a scoped local directory |
| [DuckDB MCP](duckdb-mcp.md) | In-process analytical SQL over local files |
| [Power BI MCP](powerbi-mcp.md) | Query and manage Power BI semantic models |
| [Browser MCP](browser-mcp.md) | Automate and inspect a web browser |
| [Git MCP](git-mcp.md) | Repository history, diffs, and branch operations |
| [PostgreSQL MCP](postgresql-mcp.md) | Query and introspect a Postgres database |

## General MCP configuration pattern

Most MCP servers are registered the same way in a client's configuration file:

```json
{
  "mcpServers": {
    "server-name": {
      "command": "npx",
      "args": ["-y", "@some-org/mcp-server-name"],
      "env": {
        "API_KEY": "your-key-here"
      }
    }
  }
}
```

See [Downloads](../downloads/index.md) for ready-to-copy example configurations.
