---
title: TableValidate
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