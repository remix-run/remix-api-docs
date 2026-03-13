---
title: WriteRowResult
---

# WriteRowResult

<a href="https://github.com/remix-run/remix/blob/main/packages/data-table/src/lib/database.ts#L246" target="_blank">View Source</a>

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