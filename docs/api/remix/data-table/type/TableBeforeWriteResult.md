---
title: TableBeforeWriteResult
source: https://github.com/remix-run/remix/blob/brookslybrand/fix-css-range-media-queries/packages/data-table/src/lib/table.ts#L84
---

# TableBeforeWriteResult

## Summary

Result returned from the `beforeWrite` hook.

## Signature

```ts
type TableBeforeWriteResult<row> = { value: Partial<row> } | ValidationFailure

```