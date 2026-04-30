---
title: AddForeignKeyChange
source: https://github.com/remix-run/remix/blob/remix@3.0.0-beta.0/packages/data-table/src/lib/adapter.ts#L386
---

# AddForeignKeyChange

## Summary

Alter-table change that adds a foreign key constraint.

## Signature

```ts
type AddForeignKeyChange = {
  constraint: ForeignKeyConstraint;
  kind: "addForeignKey";
};

```