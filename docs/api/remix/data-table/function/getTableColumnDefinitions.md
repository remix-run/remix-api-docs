---
title: getTableColumnDefinitions
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

## Returns

Column definition map.