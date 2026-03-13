---
title: AddUniqueChange
---

# AddUniqueChange

<a href="https://github.com/remix-run/remix/blob/remix@3.0.0-alpha.3/packages/data-table/src/lib/adapter.ts#L370" target="_blank">View Source</a>

## Summary

Alter-table change that adds a unique constraint.

## Signature

```ts
type AddUniqueChange = {
  constraint: UniqueConstraint;
  kind: "addUnique";
};

```