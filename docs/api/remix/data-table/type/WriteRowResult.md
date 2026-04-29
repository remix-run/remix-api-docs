---
title: WriteRowResult
---

# WriteRowResult

<a href="https://github.com/remix-run/remix/blob/remix@3.0.0-alpha.6/packages/data-table/src/lib/database.ts#L179" target="_blank">View Source</a>

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