---
title: FindManyOptions
---

# FindManyOptions

## Summary

Options for loading many rows from a table.

## Signature

```ts
type FindManyOptions<table, relations> = {
  limit?: number;
  offset?: number;
  orderBy?: OrderByInput<table>;
  where?: SingleTableWhere<table>;
  with?: relations;
};

```