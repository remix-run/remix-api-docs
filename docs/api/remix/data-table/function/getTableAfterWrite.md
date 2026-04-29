---
title: getTableAfterWrite
---

# getTableAfterWrite

<a href="https://github.com/remix-run/remix/blob/remix@3.0.0-alpha.6/packages/data-table/src/lib/table.ts#L432" target="_blank">View Source</a>

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

## Params

### table

## Returns

After-write callback or `undefined`.