---
title: PrimaryKeyInput
source: https://github.com/remix-run/remix/blob/main/packages/data-table/src/lib/table.ts#L997
---

# PrimaryKeyInput

## Summary

Primary-key input accepted by `find()`, `update()`, and similar helpers.

## Signature

```ts
type PrimaryKeyInput<table> =
  TablePrimaryKey<table> extends readonly [infer column extends string]
    ? column extends keyof TableColumns<table> & string
      ? ColumnBuilderInput<TableColumns<table>[column]>
      : never
    : Pretty<{
        [column in TablePrimaryKey<table>[number] &
          keyof TableColumns<table> &
          string]: ColumnBuilderInput<TableColumns<table>[column]>;
      }>;

```