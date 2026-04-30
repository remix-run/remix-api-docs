---
title: TableBeforeWriteContext
source: https://github.com/remix-run/remix/blob/remix@3.0.0-beta.0/packages/data-table/src/lib/table.ts#L75
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