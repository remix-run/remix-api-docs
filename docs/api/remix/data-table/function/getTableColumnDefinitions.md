---
title: getTableColumnDefinitions
source: https://github.com/remix-run/remix/blob/remix@3.0.0-beta.0/packages/data-table/src/lib/table.ts#L395
---

# getTableColumnDefinitions

## Summary

Returns a table's resolved physical column definitions.

## Signature

```ts
function getTableColumnDefinitions<table extends AnyTable>(
  table: table,
): { [column in string]: ColumnDefinition };

```

## Params

### `table`

## Returns

Column definition map.