---
title: getTableAfterDelete
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