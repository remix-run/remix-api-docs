---
title: getTableReference
---

# getTableReference

<a href="https://github.com/remix-run/remix/blob/remix@3.0.0-alpha.6/packages/data-table/src/lib/table.ts#L360" target="_blank">View Source</a>

## Summary

Creates a plain table reference snapshot from a table instance.

## Signature

```ts
function getTableReference<table extends AnyTable>(
  table: table,
): TableReference<table>;

```

## Params

### table

## Returns

Table metadata snapshot.