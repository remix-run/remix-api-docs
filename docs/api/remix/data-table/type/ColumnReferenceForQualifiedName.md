---
title: ColumnReferenceForQualifiedName
source: https://github.com/remix-run/remix/blob/main/packages/data-table/src/lib/table.ts#L250
---

# ColumnReferenceForQualifiedName

## Summary

Column reference narrowed by a qualified column name string.

## Signature

```ts
type ColumnReferenceForQualifiedName<qualifiedName> = AnyColumn & {
  [columnMetadataKey]: { qualifiedName: qualifiedName };
};

```