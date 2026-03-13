---
title: getTableAfterDelete
---

# getTableAfterDelete

<a href="https://github.com/remix-run/remix/blob/remix@3.0.0-alpha.3/packages/data-table/src/lib/table.ts#L454" target="_blank">View Source</a>

## Summary

Returns a table's optional after-delete lifecycle callback.

## Signature

```ts
function getTableAfterDelete<table extends AnyTable>(
  table: table,
): TableAfterDelete | undefined;

```

## Params

### table

## Returns

After-delete callback or `undefined`.