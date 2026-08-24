---
title: TableAfterReadContext
source: https://github.com/remix-run/remix/blob/brookslybrand/fix-css-range-media-queries/packages/data-table/src/lib/table.ts#L154
---

# TableAfterReadContext

## Summary

Context passed to the `afterRead` hook.

## Signature

```ts
type TableAfterReadContext<row> = {
  tableName: string
  value: Partial<row>
}

```