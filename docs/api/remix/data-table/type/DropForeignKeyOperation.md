---
title: DropForeignKeyOperation
source: https://github.com/remix-run/remix/blob/remix@3.0.0-beta.0/packages/data-table/src/lib/adapter.ts#L511
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