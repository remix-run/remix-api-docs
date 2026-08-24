---
title: TableAfterWriteContext
source: https://github.com/remix-run/remix/blob/brookslybrand/fix-css-range-media-queries/packages/data-table/src/lib/table.ts#L98
---

# TableAfterWriteContext

## Summary

Context passed to the `afterWrite` hook.

## Signature

```ts
type TableAfterWriteContext<row> = {
  affectedRows: number
  insertId?: unknown
  operation: TableWriteOperation
  tableName: string
  values: ReadonlyArray<Partial<row>>
}

```