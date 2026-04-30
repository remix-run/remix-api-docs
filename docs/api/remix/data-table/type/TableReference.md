---
title: TableReference
source: https://github.com/remix-run/remix/blob/remix@3.0.0-beta.0/packages/data-table/src/lib/table.ts#L347
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