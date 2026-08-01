# Power BI MCP

**Type:** MCP Server
**Status:** :material-check-circle: Active — placeholder

## Overview

The Power BI MCP server connects an AI assistant to Power BI semantic models via the XMLA endpoint or Power BI REST API, enabling DAX queries and metadata inspection.

## Problem

Understanding or modifying a Power BI semantic model normally requires opening Desktop or Tabular Editor — there's no quick way to ask an assistant 'what does this model look like' or 'run this DAX query'.

## Solution

Connect an MCP server to the workspace's XMLA endpoint so the assistant can list tables/measures, run DAX queries, and propose model changes as TMDL.

## Example

**Prompt:**

```text
List all measures in the Sales model and run a DAX query for total revenue by year.
```

**What happens:**

```text
Claude enumerates measures via the MCP tool, then submits an EVALUATE DAX query and renders the returned table.
```

## Code snippets

Example client configuration:

```json
{
  "mcpServers": {
    "powerbi": {
      "command": "npx",
      "args": ["-y", "mcp-server-powerbi"],
      "env": {
        "PBI_XMLA_ENDPOINT": "powerbi://api.powerbi.com/v1.0/myorg/YourWorkspace",
        "PBI_TENANT_ID": "your-tenant-id"
      }
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
