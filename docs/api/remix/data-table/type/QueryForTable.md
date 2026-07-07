---
title: QueryForTable
source: https://github.com/remix-run/remix/blob/main/packages/data-table/src/lib/database.ts#L193
---

# QueryForTable

## Summary

Query type produced for a concrete table.

## Signature

```ts
type QueryForTable<table, loaded> = Query<
  QueryTableInput<TableName<table>, TableRow<table>, TablePrimaryKey<table>>,
  QueryColumnTypesForTable<table>,
  TableRow<table>,
  loaded,
  BoundQueryPhase<"all">
>;

```