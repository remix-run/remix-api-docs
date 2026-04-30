---
title: AddUniqueChange
source: https://github.com/remix-run/remix/blob/remix@3.0.0-beta.0/packages/data-table/src/lib/adapter.ts#L370
---

# AddUniqueChange

## Summary

Alter-table change that adds a unique constraint.

## Signature

```ts
type AddUniqueChange = {
  constraint: UniqueConstraint;
  kind: "addUnique";
};

```