---
title: getTableAfterWrite
---

# getTableAfterWrite

## Summary

Returns a table's optional after-write lifecycle callback.

## Signature

```ts
function getTableAfterWrite<table extends AnyTable>(
  table: table,
):
  | TableAfterWrite<{
      [key in string]: {
        [column in string]: ColumnOutput<TableColumns<table>[column]>;
      }[key];
    }>
  | undefined;

```

## Returns

After-write callback or `undefined`.