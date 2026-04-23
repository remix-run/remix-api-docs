---
title: DropCheckOperation
---

# DropCheckOperation

<a href="https://github.com/remix-run/remix/blob/remix@3.0.0-alpha.5/packages/data-table/src/lib/adapter.ts#L529" target="_blank">View Source</a>

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