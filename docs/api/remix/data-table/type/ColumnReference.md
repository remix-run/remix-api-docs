---
title: ColumnReference
---

# ColumnReference

<a href="https://github.com/remix-run/remix/blob/remix@3.0.0-alpha.3/packages/data-table/src/lib/table.ts#L231" target="_blank">View Source</a>

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