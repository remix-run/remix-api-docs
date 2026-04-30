---
title: RenameColumnChange
source: https://github.com/remix-run/remix/blob/remix@3.0.0-beta.0/packages/data-table/src/lib/adapter.ts#L336
---

# RenameColumnChange

## Summary

Alter-table change that renames a column.

## Signature

```ts
type RenameColumnChange = {
  from: string;
  kind: "renameColumn";
  to: string;
};

```