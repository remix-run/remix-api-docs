---
title: getTableBeforeDelete
---

# getTableBeforeDelete

## Summary

Returns a table's optional before-delete lifecycle callback.

## Signature

```ts
function getTableBeforeDelete<table extends AnyTable>(
  table: table,
): TableBeforeDelete | undefined;

```

## Returns

Before-delete callback or `undefined`.