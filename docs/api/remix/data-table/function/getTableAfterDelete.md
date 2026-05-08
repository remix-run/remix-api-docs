---
title: getTableAfterDelete
source: https://github.com/remix-run/remix/blob/main/packages/data-table/src/lib/table.ts#L454
---

# getTableAfterDelete

## Summary

Returns a table's optional after-delete lifecycle callback.

## Signature

```ts
function getTableAfterDelete<table extends AnyTable>(
  table: table,
): TableAfterDelete | undefined;

```

## Returns

After-delete callback or `undefined`.