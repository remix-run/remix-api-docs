---
title: AddForeignKeyChange
---

# AddForeignKeyChange

<a href="https://github.com/remix-run/remix/blob/remix@3.0.0-alpha.5/packages/data-table/src/lib/adapter.ts#L386" target="_blank">View Source</a>

## Summary

Alter-table change that adds a foreign key constraint.

## Signature

```ts
type AddForeignKeyChange = {
  constraint: ForeignKeyConstraint;
  kind: "addForeignKey";
};

```