---
title: ColumnNamespace
source: https://github.com/remix-run/remix/blob/main/packages/data-table/src/lib/column.ts#L303
---

# ColumnNamespace

## Summary

Public constructor namespace for column builders.

## Signature

```ts
type ColumnNamespace = {
  bigint(): ColumnBuilder;
  binary(length: number): ColumnBuilder;
  boolean(): ColumnBuilder<boolean>;
  date(): ColumnBuilder;
  decimal(precision: number, scale: number): ColumnBuilder<number>;
  enum<values extends readonly string[]>(
    values: values,
  ): ColumnBuilder<values[number]>;
  integer(): ColumnBuilder<number>;
  json(): ColumnBuilder;
  text(): ColumnBuilder<string>;
  time(options: { precision?: number; withTimezone?: boolean }): ColumnBuilder;
  timestamp(options: {
    precision?: number;
    withTimezone?: boolean;
  }): ColumnBuilder;
  uuid(): ColumnBuilder<string>;
  varchar(length: number): ColumnBuilder<string>;
};

```