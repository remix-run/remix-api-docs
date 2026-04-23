---
title: getTableBeforeDelete
---

# getTableBeforeDelete

<a href="https://github.com/remix-run/remix/blob/remix@3.0.0-alpha.5/packages/data-table/src/lib/table.ts#L443" target="_blank">View Source</a>

## Summary

Returns a table's optional before-delete lifecycle callback.

## Signature

```ts
function getTableBeforeDelete<table extends AnyTable>(
  table: table,
): TableBeforeDelete | undefined;

```

## Params

### table

## Returns

Before-delete callback or `undefined`.