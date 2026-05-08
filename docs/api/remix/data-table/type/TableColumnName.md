---
title: TableColumnName
source: https://github.com/remix-run/remix/blob/main/packages/data-table/src/lib/table.ts#L332
---

# TableColumnName

## Summary

Unqualified column names for a concrete table.

## Signature

```ts
type TableColumnName<table> = keyof TableColumns<table> & string;

```