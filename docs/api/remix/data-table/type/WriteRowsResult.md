---
title: WriteRowsResult
source: https://github.com/remix-run/remix/blob/main/packages/data-table/src/lib/database.ts#L170
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