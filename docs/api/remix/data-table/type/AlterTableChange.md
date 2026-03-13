---
title: AlterTableChange
---

# AlterTableChange

<a href="https://github.com/remix-run/remix/blob/remix@3.0.0-alpha.3/packages/data-table/src/lib/adapter.ts#L426" target="_blank">View Source</a>

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