---
title: TableValidationResult
---

# TableValidationResult

<a href="https://github.com/remix-run/remix/blob/main/packages/data-table/src/lib/table.ts#L61" target="_blank">View Source</a>

## Summary

Result returned from the `validate` hook.

## Signature

```ts
type TableValidationResult<row> = { value: Partial<row> } | ValidationFailure;

```