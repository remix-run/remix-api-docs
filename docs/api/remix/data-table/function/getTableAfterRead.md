---
title: getTableAfterRead
---

# getTableAfterRead

<a href="https://github.com/remix-run/remix/blob/main/packages/data-table/src/lib/table.ts#L466" target="_blank">View Source</a>

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

## Params

### table

## Returns

After-read callback or `undefined`.