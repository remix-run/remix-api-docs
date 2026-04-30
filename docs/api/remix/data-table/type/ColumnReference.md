---
title: ColumnReference
source: https://github.com/remix-run/remix/blob/remix@3.0.0-beta.0/packages/data-table/src/lib/table.ts#L231
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