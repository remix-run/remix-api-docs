---
title: FindManyOptions
source: https://github.com/remix-run/remix/blob/brookslybrand/fix-css-range-media-queries/packages/data-table/src/lib/database.ts#L245
---

# FindManyOptions

## Summary

Options for loading many rows from a table.

## Signature

```ts
type FindManyOptions<table, relations> = {
  limit?: number
  offset?: number
  orderBy?: OrderByInput<table>
  where?: SingleTableWhere<table>
  with?: relations
}

```