---
title: DropPrimaryKeyChange
---

# DropPrimaryKeyChange

<a href="https://github.com/remix-run/remix/blob/remix@3.0.0-alpha.3/packages/data-table/src/lib/adapter.ts#L362" target="_blank">View Source</a>

## Summary

Alter-table change that drops a primary key.

## Signature

```ts
type DropPrimaryKeyChange = {
  kind: "dropPrimaryKey";
  name: string;
};

```