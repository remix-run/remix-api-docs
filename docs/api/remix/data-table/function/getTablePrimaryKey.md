---
title: getTablePrimaryKey
source: https://github.com/remix-run/remix/blob/main/packages/data-table/src/lib/table.ts#L477
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