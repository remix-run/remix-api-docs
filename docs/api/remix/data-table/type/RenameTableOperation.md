---
title: RenameTableOperation
source: https://github.com/remix-run/remix/blob/remix@3.0.0-beta.0/packages/data-table/src/lib/adapter.ts#L454
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