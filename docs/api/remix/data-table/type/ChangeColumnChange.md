---
title: ChangeColumnChange
source: https://github.com/remix-run/remix/blob/main/packages/data-table/src/lib/adapter.ts#L327
---

# ChangeColumnChange

## Summary

Alter-table change that replaces a column definition.

## Signature

```ts
type ChangeColumnChange = {
  column: string;
  definition: ColumnDefinition;
  kind: "changeColumn";
};

```