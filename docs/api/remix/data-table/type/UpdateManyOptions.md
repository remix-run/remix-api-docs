---
title: UpdateManyOptions
source: https://github.com/remix-run/remix/blob/brookslybrand/fix-css-range-media-queries/packages/data-table/src/lib/database.ts#L280
---

# UpdateManyOptions

## Summary

Options for updating many rows.

## Signature

```ts
type UpdateManyOptions<table> = {
  limit?: number
  offset?: number
  orderBy?: OrderByInput<table>
  touch?: boolean
  where: SingleTableWhere<table>
}

```