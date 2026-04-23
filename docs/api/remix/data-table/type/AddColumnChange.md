---
title: AddColumnChange
---

# AddColumnChange

<a href="https://github.com/remix-run/remix/blob/remix@3.0.0-alpha.5/packages/data-table/src/lib/adapter.ts#L318" target="_blank">View Source</a>

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