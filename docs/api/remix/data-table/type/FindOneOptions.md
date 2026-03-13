---
title: FindOneOptions
---

# FindOneOptions

<a href="https://github.com/remix-run/remix/blob/remix@3.0.0-alpha.3/packages/data-table/src/lib/database.ts#L311" target="_blank">View Source</a>

## Summary

Options for loading a single row from a table.

## Signature

```ts
type FindOneOptions<table, relations> = Omit<
  FindManyOptions<table, relations>,
  "limit" | "offset"
> & { where: SingleTableWhere<table> };

```