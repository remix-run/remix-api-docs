---
title: AnyTable
source: https://github.com/remix-run/remix/blob/remix@3.0.0-beta.0/packages/data-table/src/lib/table.ts#L278
---

# AnyTable

## Summary

Table-like object with erased concrete column types.

## Signature

```ts
type AnyTable = TableMetadataLike<
  string,
  TableColumnsDefinition,
  readonly string[],
  TimestampConfig | null
> & {
  [tableMetadataKey]: {
    afterDelete?: unknown;
    afterRead?: unknown;
    afterWrite?: unknown;
    beforeDelete?: unknown;
    beforeWrite?: unknown;
    columnDefinitions: Record<string, ColumnDefinition>;
    columns: TableColumnsDefinition;
    name: string;
    primaryKey: readonly string[];
    timestamps: TimestampConfig | null;
    validate?: TableValidate<Record<string, unknown>>;
  };
} & Record<string, unknown>;

```