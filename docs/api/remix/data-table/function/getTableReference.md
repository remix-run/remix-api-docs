---
title: getTableReference
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