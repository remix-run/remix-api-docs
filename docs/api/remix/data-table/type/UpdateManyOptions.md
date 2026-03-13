---
title: UpdateManyOptions
---

# UpdateManyOptions

<a href="https://github.com/remix-run/remix/blob/remix@3.0.0-alpha.3/packages/data-table/src/lib/database.ts#L332" target="_blank">View Source</a>

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