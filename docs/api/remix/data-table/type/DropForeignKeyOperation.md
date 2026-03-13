---
title: DropForeignKeyOperation
---

# DropForeignKeyOperation

<a href="https://github.com/remix-run/remix/blob/main/packages/data-table/src/lib/adapter.ts#L511" target="_blank">View Source</a>

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