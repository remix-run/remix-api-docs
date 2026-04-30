---
title: QueryTableInput
source: https://github.com/remix-run/remix/blob/remix@3.0.0-beta.0/packages/data-table/src/lib/database.ts#L135
---

# QueryTableInput

## Summary

Table-like metadata accepted by `database.query()`.

## Signature

```ts
type QueryTableInput<tableName, row, primaryKey> = TableMetadataLike<
  tableName,
  { [column in keyof row & string]: ColumnBuilder<row[column]> },
  primaryKey,
  TimestampConfig | null
> & {
  [tableMetadataKey]: {
    columnDefinitions: Record<string, ColumnDefinition>;
    columns: { [column in keyof row & string]: ColumnBuilder<row[column]> };
    name: tableName;
    primaryKey: primaryKey;
    timestamps: TimestampConfig | null;
    validate?: TableValidate<Record<string, unknown>>;
  };
} & Record<string, unknown>;

```