---
title: getTablePrimaryKey
---

# getTablePrimaryKey

## Summary

Returns a table's primary key columns.

## Signature

```ts
function getTablePrimaryKey<table extends AnyTable>(
  table: table,
): TablePrimaryKey<table>;

```

## Returns

Primary key columns.