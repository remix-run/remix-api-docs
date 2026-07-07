---
title: getTableBeforeDelete
source: https://github.com/remix-run/remix/blob/main/packages/data-table/src/lib/table.ts#L443
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