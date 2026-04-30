---
title: AlterTableChange
source: https://github.com/remix-run/remix/blob/main/packages/data-table/src/lib/adapter.ts#L426
---

# AlterTableChange

## Summary

Union of supported `alterTable` changes.

## Signature

```ts
type AlterTableChange =
  | AddColumnChange
  | ChangeColumnChange
  | RenameColumnChange
  | DropColumnChange
  | AddPrimaryKeyChange
  | DropPrimaryKeyChange
  | AddUniqueChange
  | DropUniqueChange
  | AddForeignKeyChange
  | DropForeignKeyChange
  | AddCheckChange
  | DropCheckChange
  | SetTableCommentChange;

```