---
title: Table
---

# Table

## Summary

Fully-typed table object returned by [`table`](/api/remix/data-table/function/table/).

## Signature

```ts
type Table<name, columns, primaryKey> = TableMetadataLike<
  name,
  columns,
  primaryKey,
  TimestampConfig | null
> & {
  [tableMetadataKey]: TableMetadata<name, columns, primaryKey>;
} & TableColumnReferences<name, columns>;

```