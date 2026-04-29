---
title: TableValidate
---

# TableValidate

<a href="https://github.com/remix-run/remix/blob/remix@3.0.0-alpha.6/packages/data-table/src/lib/table.ts#L68" target="_blank">View Source</a>

## Summary

Validation hook that runs before writes.

## Signature

```ts
type TableValidate<row> = (
  context: TableValidationContext<row>,
) => TableValidationResult<row>;

```