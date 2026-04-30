---
title: DropCheckOperation
source: https://github.com/remix-run/remix/blob/main/packages/data-table/src/lib/adapter.ts#L529
---

# DropCheckOperation

## Summary

Operation that drops a table-level check constraint.

## Signature

```ts
type DropCheckOperation = {
  kind: "dropCheck";
  name: string;
  table: TableRef;
};

```