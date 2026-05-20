---
title: TableBeforeWriteResult
---

# TableBeforeWriteResult

## Summary

Result returned from the `beforeWrite` hook.

## Signature

```ts
type TableBeforeWriteResult<row> = { value: Partial<row> } | ValidationFailure;

```