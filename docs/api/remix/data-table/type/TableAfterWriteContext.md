---
title: TableAfterWriteContext
---

# TableAfterWriteContext

## Summary

Context passed to the `afterWrite` hook.

## Signature

```ts
type TableAfterWriteContext<row> = {
  affectedRows: number;
  insertId?: unknown;
  operation: TableWriteOperation;
  tableName: string;
  values: ReadonlyArray<Partial<row>>;
};

```