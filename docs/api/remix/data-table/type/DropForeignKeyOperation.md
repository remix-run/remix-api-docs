---
title: DropForeignKeyOperation
source: https://github.com/remix-run/remix/blob/main/packages/data-table/src/lib/adapter.ts#L511
---

# DropForeignKeyOperation

## Summary

Operation that drops a table-level foreign key.

## Signature

```ts
type DropForeignKeyOperation = {
  kind: "dropForeignKey";
  name: string;
  table: TableRef;
};

```