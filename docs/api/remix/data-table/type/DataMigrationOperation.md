---
title: DataMigrationOperation
source: https://github.com/remix-run/remix/blob/remix@3.0.0-beta.0/packages/data-table/src/lib/adapter.ts#L538
---

# DataMigrationOperation

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