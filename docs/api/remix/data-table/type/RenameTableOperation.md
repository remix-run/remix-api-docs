---
title: RenameTableOperation
---

# RenameTableOperation

<a href="https://github.com/remix-run/remix/blob/main/packages/data-table/src/lib/adapter.ts#L454" target="_blank">View Source</a>

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