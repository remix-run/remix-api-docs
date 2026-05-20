---
title: TableValidationResult
---

# TableValidationResult

## Summary

Result returned from the `validate` hook.

## Signature

```ts
type TableValidationResult<row> = { value: Partial<row> } | ValidationFailure;

```