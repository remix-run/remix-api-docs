---
title: AddColumnChange
source: https://github.com/remix-run/remix/blob/main/packages/data-table/src/lib/adapter.ts#L318
---

# AddColumnChange

## Summary

Alter-table change that adds a column.

## Signature

```ts
type AddColumnChange = {
  column: string;
  definition: ColumnDefinition;
  kind: "addColumn";
};

```