---
title: TableBeforeWriteContext
---

# TableBeforeWriteContext

<a href="https://github.com/remix-run/remix/blob/remix@3.0.0-alpha.3/packages/data-table/src/lib/table.ts#L75" target="_blank">View Source</a>

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