---
title: ColumnNamespace
---

# ColumnNamespace

<a href="https://github.com/remix-run/remix/blob/remix@3.0.0-alpha.3/packages/data-table/src/lib/column.ts#L303" target="_blank">View Source</a>

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