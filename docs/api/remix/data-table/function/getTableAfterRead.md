---
title: getTableAfterRead
source: https://github.com/remix-run/remix/blob/main/packages/data-table/src/lib/table.ts#L466
---

# getTableAfterRead

## Summary

Returns a table's optional after-read lifecycle callback.
The callback receives the current read shape, which may be a projected partial row.

## Signature

```ts
function getTableAfterRead<table extends AnyTable>(
  table: table,
):
  | TableAfterRead<{
      [key in string]: {
        [column in string]: ColumnOutput<TableColumns<table>[column]>;
      }[key];
    }>
  | undefined;

```

## Returns

After-read callback or `undefined`.