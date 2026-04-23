---
title: Table
---

# Table

<a href="https://github.com/remix-run/remix/blob/remix@3.0.0-alpha.5/packages/data-table/src/lib/table.ts#L267" target="_blank">View Source</a>

## Summary

Fully-typed table object returned by table.

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