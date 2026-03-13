---
title: getTableBeforeWrite
---

# getTableBeforeWrite

<a href="https://github.com/remix-run/remix/blob/main/packages/data-table/src/lib/table.ts#L421" target="_blank">View Source</a>

## Summary

Returns a table's optional before-write lifecycle callback.

## Signature

```ts
function getTableBeforeWrite<table extends AnyTable>(
  table: table,
):
  | TableBeforeWrite<{
      [key in string]: {
        [column in string]: ColumnOutput<TableColumns<table>[column]>;
      }[key];
    }>
  | undefined;

```

## Params

### table

## Returns

Before-write callback or `undefined`.