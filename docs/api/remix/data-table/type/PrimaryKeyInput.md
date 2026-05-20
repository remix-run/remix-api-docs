---
title: PrimaryKeyInput
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