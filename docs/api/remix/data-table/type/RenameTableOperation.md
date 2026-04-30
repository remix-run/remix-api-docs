---
title: RenameTableOperation
source: https://github.com/remix-run/remix/blob/main/packages/data-table/src/lib/adapter.ts#L454
---

# RenameTableOperation

## Summary

Operation that renames a table.

## Signature

```ts
type RenameTableOperation = {
  from: TableRef;
  kind: "renameTable";
  to: TableRef;
};

```