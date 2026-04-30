---
title: DropForeignKeyChange
source: https://github.com/remix-run/remix/blob/main/packages/data-table/src/lib/adapter.ts#L394
---

# DropForeignKeyChange

## Summary

Alter-table change that drops a foreign key constraint.

## Signature

```ts
type DropForeignKeyChange = {
  kind: "dropForeignKey";
  name: string;
};

```