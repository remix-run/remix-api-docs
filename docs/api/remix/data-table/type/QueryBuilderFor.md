---
title: QueryBuilderFor
---

# QueryBuilderFor

<a href="https://github.com/remix-run/remix/blob/main/packages/data-table/src/lib/database.ts#L202" target="_blank">View Source</a>

## Summary

Query builder type produced for a table-like input.

## Signature

```ts
type QueryBuilderFor<tableName, row, primaryKey, loaded> = QueryBuilder<
  Pretty<QueryColumnTypeMapFromRow<tableName, row>>,
  row,
  loaded,
  tableName,
  primaryKey
>;

```