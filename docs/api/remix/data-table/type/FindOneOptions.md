---
title: FindOneOptions
source: https://github.com/remix-run/remix/blob/remix@3.0.0-beta.0/packages/data-table/src/lib/database.ts#L244
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