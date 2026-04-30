---
title: AddForeignKeyOperation
source: https://github.com/remix-run/remix/blob/remix@3.0.0-beta.0/packages/data-table/src/lib/adapter.ts#L502
---

# AddForeignKeyOperation

## Summary

Operation that adds a table-level foreign key.

## Signature

```ts
type AddForeignKeyOperation = {
  constraint: ForeignKeyConstraint;
  kind: "addForeignKey";
  table: TableRef;
};

```