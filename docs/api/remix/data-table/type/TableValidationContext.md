---
title: TableValidationContext
source: https://github.com/remix-run/remix/blob/main/packages/data-table/src/lib/table.ts#L52
---

# TableValidationContext

## Summary

Context passed to the `validate` hook.

## Signature

```ts
type TableValidationContext<row> = {
  operation: TableValidationOperation;
  tableName: string;
  value: Partial<row>;
};

```