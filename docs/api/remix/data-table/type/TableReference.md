---
title: TableReference
---

# TableReference

<a href="https://github.com/remix-run/remix/blob/main/packages/data-table/src/lib/table.ts#L347" target="_blank">View Source</a>

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