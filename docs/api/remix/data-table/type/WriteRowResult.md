---
title: WriteRowResult
source: https://github.com/remix-run/remix/blob/remix@3.0.0-beta.0/packages/data-table/src/lib/database.ts#L179
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