---
title: TableValidationContext
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