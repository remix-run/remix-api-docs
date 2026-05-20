---
title: TableAfterReadResult
---

# TableAfterReadResult

## Summary

Result returned from the `afterRead` hook.

## Signature

```ts
type TableAfterReadResult<row> = { value: Partial<row> } | ValidationFailure;

```