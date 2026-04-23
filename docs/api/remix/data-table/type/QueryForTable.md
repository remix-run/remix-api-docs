---
title: QueryForTable
---

# QueryForTable

<a href="https://github.com/remix-run/remix/blob/remix@3.0.0-alpha.5/packages/data-table/src/lib/database.ts#L193" target="_blank">View Source</a>

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