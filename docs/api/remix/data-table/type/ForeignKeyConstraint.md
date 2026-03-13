---
title: ForeignKeyConstraint
---

# ForeignKeyConstraint

<a href="https://github.com/remix-run/remix/blob/main/packages/data-table/src/lib/adapter.ts#L272" target="_blank">View Source</a>

## Summary

Foreign key constraint definition.

## Signature

```ts
type ForeignKeyConstraint = {
  columns: string[];
  name: string;
  onDelete?: ForeignKeyAction;
  onUpdate?: ForeignKeyAction;
  references: { columns: string[]; table: TableRef };
};

```