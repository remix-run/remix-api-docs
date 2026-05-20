---
title: UpdateManyOptions
---

# UpdateManyOptions

## Summary

Options for updating many rows.

## Signature

```ts
type UpdateManyOptions<table> = {
  limit?: number;
  offset?: number;
  orderBy?: OrderByInput<table>;
  touch?: boolean;
  where: SingleTableWhere<table>;
};

```