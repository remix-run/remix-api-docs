---
title: FindManyOptions
---

# FindManyOptions

<a href="https://github.com/remix-run/remix/blob/remix@3.0.0-alpha.5/packages/data-table/src/lib/database.ts#L230" target="_blank">View Source</a>

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