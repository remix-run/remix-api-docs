---
title: DropPrimaryKeyChange
source: https://github.com/remix-run/remix/blob/main/packages/data-table/src/lib/adapter.ts#L362
---

# DropPrimaryKeyChange

## Summary

Alter-table change that drops a primary key.

## Signature

```ts
type DropPrimaryKeyChange = {
  kind: "dropPrimaryKey";
  name: string;
};

```