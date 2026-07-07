---
title: getTableReference
source: https://github.com/remix-run/remix/blob/main/packages/data-table/src/lib/table.ts#L360
---

# getTableReference

## Summary

Creates a plain table reference snapshot from a table instance.

## Signature

```ts
function getTableReference<table extends AnyTable>(
  table: table,
): TableReference<table>;

```

## Returns

Table metadata snapshot.