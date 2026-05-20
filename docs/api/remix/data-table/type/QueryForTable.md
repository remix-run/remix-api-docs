---
title: QueryForTable
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