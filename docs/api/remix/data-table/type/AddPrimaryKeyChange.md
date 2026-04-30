---
title: AddPrimaryKeyChange
source: https://github.com/remix-run/remix/blob/main/packages/data-table/src/lib/adapter.ts#L354
---

# AddPrimaryKeyChange

## Summary

Alter-table change that adds a primary key.

## Signature

```ts
type AddPrimaryKeyChange = {
  constraint: PrimaryKeyConstraint;
  kind: "addPrimaryKey";
};

```