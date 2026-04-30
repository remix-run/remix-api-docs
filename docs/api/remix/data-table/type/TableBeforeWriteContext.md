---
title: TableBeforeWriteContext
source: https://github.com/remix-run/remix/blob/main/packages/data-table/src/lib/table.ts#L75
---

# TableBeforeWriteContext

## Summary

Context passed to the `beforeWrite` hook.

## Signature

```ts
type TableBeforeWriteContext<row> = {
  operation: TableWriteOperation;
  tableName: string;
  value: Partial<row>;
};

```