---
title: WriteRowsResult
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