---
title: WriteRowsResult
source: https://github.com/remix-run/remix/blob/remix@3.0.0-beta.0/packages/data-table/src/lib/database.ts#L170
---

# WriteRowsResult

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