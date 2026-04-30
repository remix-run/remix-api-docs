---
title: TableValidate
source: https://github.com/remix-run/remix/blob/main/packages/data-table/src/lib/table.ts#L68
---

# TableValidate

## Summary

Validation hook that runs before writes.

## Signature

```ts
type TableValidate<row> = (
  context: TableValidationContext<row>,
) => TableValidationResult<row>;

```