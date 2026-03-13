---
title: getTableColumnDefinitions
---

# getTableColumnDefinitions

<a href="https://github.com/remix-run/remix/blob/remix@3.0.0-alpha.3/packages/data-table/src/lib/table.ts#L395" target="_blank">View Source</a>

## Summary

Returns a table's resolved physical column definitions.

## Signature

```ts
function getTableColumnDefinitions<table extends AnyTable>(
  table: table,
): { [column in string]: ColumnDefinition };

```

## Params

### table

## Returns

Column definition map.