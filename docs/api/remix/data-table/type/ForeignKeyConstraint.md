---
title: ForeignKeyConstraint
source: https://github.com/remix-run/remix/blob/remix@3.0.0-beta.0/packages/data-table/src/lib/adapter.ts#L272
---

# ForeignKeyConstraint

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