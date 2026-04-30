---
title: AlterTableChange
source: https://github.com/remix-run/remix/blob/remix@3.0.0-beta.0/packages/data-table/src/lib/adapter.ts#L426
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