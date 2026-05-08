---
title: RenameIndexOperation
source: https://github.com/remix-run/remix/blob/main/packages/data-table/src/lib/adapter.ts#L492
---

# RenameIndexOperation

## Summary

Operation that renames an index.

## Signature

```ts
type RenameIndexOperation = {
  from: string;
  kind: "renameIndex";
  table: TableRef;
  to: string;
};

```