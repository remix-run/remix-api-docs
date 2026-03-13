---
title: PrimaryKeyInput
---

# PrimaryKeyInput

<a href="https://github.com/remix-run/remix/blob/remix@3.0.0-alpha.3/packages/data-table/src/lib/table.ts#L997" target="_blank">View Source</a>

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