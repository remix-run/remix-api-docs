---
title: DataMigrationOperation
---

# DataMigrationOperation

<a href="https://github.com/remix-run/remix/blob/main/packages/data-table/src/lib/adapter.ts#L538" target="_blank">View Source</a>

## Summary

Union of schema and migration operations understood by adapters.

## Signature

```ts
type DataMigrationOperation =
  | CreateTableOperation
  | AlterTableOperation
  | RenameTableOperation
  | DropTableOperation
  | CreateIndexOperation
  | DropIndexOperation
  | RenameIndexOperation
  | AddForeignKeyOperation
  | DropForeignKeyOperation
  | AddCheckOperation
  | DropCheckOperation
  | RawOperation;

```