---
title: WriteResult
---

# WriteResult

<a href="https://github.com/remix-run/remix/blob/main/packages/data-table/src/lib/database.ts#L229" target="_blank">View Source</a>

## Summary

Result metadata for write operations that do not return rows.

## Signature

```ts
type WriteResult = {
  affectedRows: number;
  insertId?: unknown;
};

```