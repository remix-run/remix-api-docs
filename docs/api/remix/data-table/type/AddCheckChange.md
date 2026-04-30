---
title: AddCheckChange
source: https://github.com/remix-run/remix/blob/main/packages/data-table/src/lib/adapter.ts#L402
---

# AddCheckChange

## Summary

Alter-table change that adds a check constraint.

## Signature

```ts
type AddCheckChange = {
  constraint: CheckConstraint;
  kind: "addCheck";
};

```