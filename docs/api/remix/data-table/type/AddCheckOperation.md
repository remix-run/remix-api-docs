---
title: AddCheckOperation
source: https://github.com/remix-run/remix/blob/remix@3.0.0-beta.0/packages/data-table/src/lib/adapter.ts#L520
---

# AddCheckOperation

## Summary

Operation that adds a table-level check constraint.

## Signature

```ts
type AddCheckOperation = {
  constraint: CheckConstraint;
  kind: "addCheck";
  table: TableRef;
};

```