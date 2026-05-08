---
title: FindOneOptions
source: https://github.com/remix-run/remix/blob/main/packages/data-table/src/lib/database.ts#L244
---

# FindOneOptions

## Summary

Options for loading a single row from a table.

## Signature

```ts
type FindOneOptions<table, relations> = Omit<
  FindManyOptions<table, relations>,
  "limit" | "offset"
> & { where: SingleTableWhere<table> };

```