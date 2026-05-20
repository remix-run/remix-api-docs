---
title: ColumnReferenceForQualifiedName
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