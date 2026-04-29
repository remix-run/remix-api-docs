---
title: WriteRowsResult
---

# WriteRowsResult

<a href="https://github.com/remix-run/remix/blob/remix@3.0.0-alpha.6/packages/data-table/src/lib/database.ts#L170" target="_blank">View Source</a>

## Summary

Result metadata for write operations that return multiple rows.

## Signature

```ts
type WriteRowsResult<row> = {
  affectedRows: number;
  insertId?: unknown;
  rows: row[];
};

```