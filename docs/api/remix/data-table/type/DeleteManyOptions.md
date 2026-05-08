---
title: DeleteManyOptions
source: https://github.com/remix-run/remix/blob/main/packages/data-table/src/lib/database.ts#L276
---

# DeleteManyOptions

## Summary

Options for deleting many rows.

## Signature

```ts
type DeleteManyOptions<table> = {
  limit?: number;
  offset?: number;
  orderBy?: OrderByInput<table>;
  where: SingleTableWhere<table>;
};

```