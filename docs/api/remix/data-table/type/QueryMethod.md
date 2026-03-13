---
title: QueryMethod
---

# QueryMethod

<a href="https://github.com/remix-run/remix/blob/main/packages/data-table/src/lib/database.ts#L218" target="_blank">View Source</a>

## Summary

Signature of the database `query` helper.

## Signature

```ts
type QueryMethod = (
  table: QueryTableInput<tableName, row, primaryKey>,
) => QueryBuilderFor<tableName, row, primaryKey>;

```