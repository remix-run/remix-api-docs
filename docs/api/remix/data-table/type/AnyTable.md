---
title: AnyTable
---

# AnyTable

<a href="https://github.com/remix-run/remix/blob/main/packages/data-table/src/lib/table.ts#L278" target="_blank">View Source</a>

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