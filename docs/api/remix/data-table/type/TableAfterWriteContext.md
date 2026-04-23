---
title: TableAfterWriteContext
---

# TableAfterWriteContext

<a href="https://github.com/remix-run/remix/blob/remix@3.0.0-alpha.5/packages/data-table/src/lib/table.ts#L98" target="_blank">View Source</a>

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