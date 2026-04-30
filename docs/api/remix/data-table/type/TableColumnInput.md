---
title: TableColumnInput
source: https://github.com/remix-run/remix/blob/remix@3.0.0-beta.0/packages/data-table/src/lib/table.ts#L340
---

# TableColumnInput

## Summary

Column input accepted for a concrete table.

## Signature

```ts
type TableColumnInput<table> = ColumnInput<
  TableColumnName<table> | QualifiedTableColumnName<table>
>;

```