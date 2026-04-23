---
title: TableColumnName
---

# TableColumnName

<a href="https://github.com/remix-run/remix/blob/remix@3.0.0-alpha.5/packages/data-table/src/lib/table.ts#L332" target="_blank">View Source</a>

## Summary

Unqualified column names for a concrete table.

## Signature

```ts
type TableColumnName<table> = keyof TableColumns<table> & string;

```