---
title: AddForeignKeyOperation
---

# AddForeignKeyOperation

<a href="https://github.com/remix-run/remix/blob/remix@3.0.0-alpha.3/packages/data-table/src/lib/adapter.ts#L502" target="_blank">View Source</a>

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