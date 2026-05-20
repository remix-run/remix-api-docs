---
title: TableReference
---

# TableReference

## Summary

Plain metadata snapshot of a table.

## Signature

```ts
type TableReference<table> = {
  columns: TableColumns<table>;
  kind: "table";
  name: TableName<table>;
  primaryKey: TablePrimaryKey<table>;
  timestamps: TableTimestamps<table>;
};

```