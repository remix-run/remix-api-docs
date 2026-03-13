---
title: AddCheckChange
---

# AddCheckChange

<a href="https://github.com/remix-run/remix/blob/remix@3.0.0-alpha.3/packages/data-table/src/lib/adapter.ts#L402" target="_blank">View Source</a>

## Summary

Alter-table change that adds a check constraint.

## Signature

```ts
type AddCheckChange = {
  constraint: CheckConstraint;
  kind: "addCheck";
};

```