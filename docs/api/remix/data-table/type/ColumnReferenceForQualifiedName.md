---
title: ColumnReferenceForQualifiedName
---

# ColumnReferenceForQualifiedName

<a href="https://github.com/remix-run/remix/blob/main/packages/data-table/src/lib/table.ts#L250" target="_blank">View Source</a>

## Summary

Column reference narrowed by a qualified column name string.

## Signature

```ts
type ColumnReferenceForQualifiedName<qualifiedName> = AnyColumn & {
  [columnMetadataKey]: { qualifiedName: qualifiedName };
};

```