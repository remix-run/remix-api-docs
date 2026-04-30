---
title: TableColumnName
source: https://github.com/remix-run/remix/blob/remix@3.0.0-beta.0/packages/data-table/src/lib/table.ts#L332
---

# TableColumnName

## Summary

Unqualified column names for a concrete table.

## Signature

```ts
type TableColumnName<table> = keyof TableColumns<table> & string;

```