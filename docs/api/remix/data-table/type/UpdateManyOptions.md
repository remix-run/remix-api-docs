---
title: UpdateManyOptions
source: https://github.com/remix-run/remix/blob/remix@3.0.0-beta.10/packages/data-table/src/lib/database.ts#L280
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