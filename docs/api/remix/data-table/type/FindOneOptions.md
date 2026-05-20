---
title: FindOneOptions
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