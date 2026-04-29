---
title: DeleteManyOptions
---

# DeleteManyOptions

<a href="https://github.com/remix-run/remix/blob/remix@3.0.0-alpha.6/packages/data-table/src/lib/database.ts#L276" target="_blank">View Source</a>

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