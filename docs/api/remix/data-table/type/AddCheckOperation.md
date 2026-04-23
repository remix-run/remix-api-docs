---
title: AddCheckOperation
---

# AddCheckOperation

<a href="https://github.com/remix-run/remix/blob/remix@3.0.0-alpha.5/packages/data-table/src/lib/adapter.ts#L520" target="_blank">View Source</a>

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