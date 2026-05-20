---
title: ColumnReference
---

# ColumnReference

## Summary

Typed reference to a table column.

## Signature

```ts
type ColumnReference<tableName, columnName> =
  ColumnReferenceLike<`${tableName}.${columnName}`> & {
    [columnMetadataKey]: {
      columnName: columnName;
      qualifiedName: `${tableName}.${columnName}`;
      tableName: tableName;
    };
  };

```