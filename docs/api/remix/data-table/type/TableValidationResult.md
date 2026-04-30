---
title: TableValidationResult
source: https://github.com/remix-run/remix/blob/main/packages/data-table/src/lib/table.ts#L61
---

# TableValidationResult

## Summary

Result returned from the `validate` hook.

## Signature

```ts
type TableValidationResult<row> = { value: Partial<row> } | ValidationFailure;

```