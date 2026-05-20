---
title: TableBeforeWriteContext
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