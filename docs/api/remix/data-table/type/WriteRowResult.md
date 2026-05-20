---
title: WriteRowResult
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