---
title: QueryForTable
---

# QueryForTable

<a href="https://github.com/remix-run/remix/blob/main/packages/data-table/src/lib/database.ts#L260" target="_blank">View Source</a>

## Summary

Query builder type produced for a concrete table.

## Signature

```ts
type QueryForTable<table, loaded> = QueryBuilder<
  QueryColumnTypesForTable<table>,
  TableRow<table>,
  loaded,
  TableName<table>,
  TablePrimaryKey<table>
>;

```