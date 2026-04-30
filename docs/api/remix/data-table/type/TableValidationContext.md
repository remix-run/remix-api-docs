---
title: TableValidationContext
source: https://github.com/remix-run/remix/blob/remix@3.0.0-beta.0/packages/data-table/src/lib/table.ts#L52
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