---
title: WriteRowResult
source: https://github.com/remix-run/remix/blob/main/packages/data-table/src/lib/database.ts#L179
---

# WriteRowResult

## Summary

Result metadata for write operations that return a single row.

## Signature

```ts
type WriteRowResult<row> = {
  affectedRows: number;
  insertId?: unknown;
  row: row | null;
};

```