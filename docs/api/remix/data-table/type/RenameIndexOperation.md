---
title: RenameIndexOperation
source: https://github.com/remix-run/remix/blob/remix@3.0.0-beta.0/packages/data-table/src/lib/adapter.ts#L492
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