---
title: DeleteManyOptions
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