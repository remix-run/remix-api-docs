---
title: TableBeforeWriteResult
source: https://github.com/remix-run/remix/blob/remix@3.0.0-beta.0/packages/data-table/src/lib/table.ts#L84
---

# TableBeforeWriteResult

## Summary

Result returned from the `beforeWrite` hook.

## Signature

```ts
type TableBeforeWriteResult<row> = { value: Partial<row> } | ValidationFailure;

```