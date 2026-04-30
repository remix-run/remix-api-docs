---
title: AddPrimaryKeyChange
source: https://github.com/remix-run/remix/blob/remix@3.0.0-beta.0/packages/data-table/src/lib/adapter.ts#L354
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