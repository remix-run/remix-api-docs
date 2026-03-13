---
title: AddPrimaryKeyChange
---

# AddPrimaryKeyChange

<a href="https://github.com/remix-run/remix/blob/remix@3.0.0-alpha.3/packages/data-table/src/lib/adapter.ts#L354" target="_blank">View Source</a>

## Summary

Alter-table change that adds a primary key.

## Signature

```ts
type AddPrimaryKeyChange = {
  constraint: PrimaryKeyConstraint;
  kind: "addPrimaryKey";
};

```