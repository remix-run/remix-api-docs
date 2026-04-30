---
title: getTableBeforeDelete
source: https://github.com/remix-run/remix/blob/remix@3.0.0-beta.0/packages/data-table/src/lib/table.ts#L443
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

## Params

### `table`

## Returns

Before-delete callback or `undefined`.