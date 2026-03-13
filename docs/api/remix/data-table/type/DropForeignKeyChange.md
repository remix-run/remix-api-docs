---
title: DropForeignKeyChange
---

# DropForeignKeyChange

<a href="https://github.com/remix-run/remix/blob/remix@3.0.0-alpha.3/packages/data-table/src/lib/adapter.ts#L394" target="_blank">View Source</a>

## Summary

Alter-table change that drops a foreign key constraint.

## Signature

```ts
type DropForeignKeyChange = {
  kind: "dropForeignKey";
  name: string;
};

```