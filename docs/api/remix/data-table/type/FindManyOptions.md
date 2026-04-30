---
title: FindManyOptions
source: https://github.com/remix-run/remix/blob/remix@3.0.0-beta.0/packages/data-table/src/lib/database.ts#L230
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