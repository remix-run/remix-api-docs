---
title: DatabaseAdapter
source: https://github.com/remix-run/remix/blob/main/packages/data-table/src/lib/adapter.ts#L622
---

# DatabaseAdapter

## Summary

Runtime contract implemented by concrete database adapters.

## Signature

```ts
interface DatabaseAdapter {
  capabilities: AdapterCapabilities;
  dialect: string;
  acquireMigrationLock(): Promise<void>;
  beginTransaction(options: TransactionOptions): Promise<TransactionToken>;
  commitTransaction(token: TransactionToken): Promise<void>;
  compileSql(
    operation:
      | SelectOperation<AnyTable>
      | CountOperation<AnyTable>
      | ExistsOperation<AnyTable>
      | InsertOperation<AnyTable>
      | InsertManyOperation<AnyTable>
      | UpdateOperation<AnyTable>
      | DeleteOperation<AnyTable>
      | UpsertOperation<AnyTable>
      | RawOperation
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
      | DropCheckOperation,
  ): SqlStatement[];
  createSavepoint(token: TransactionToken, name: string): Promise<void>;
  execute(request: DataManipulationRequest): Promise<DataManipulationResult>;
  hasColumn(
    table: TableRef,
    column: string,
    transaction: TransactionToken,
  ): Promise<boolean>;
  hasTable(table: TableRef, transaction: TransactionToken): Promise<boolean>;
  migrate(request: DataMigrationRequest): Promise<DataMigrationResult>;
  releaseMigrationLock(): Promise<void>;
  releaseSavepoint(token: TransactionToken, name: string): Promise<void>;
  rollbackToSavepoint(token: TransactionToken, name: string): Promise<void>;
  rollbackTransaction(token: TransactionToken): Promise<void>;
}

```

## Properties

### `capabilities`

Feature flags describing the adapter's supported behaviors.

### `dialect`

Database dialect name exposed by the adapter.

## Methods

### `acquireMigrationLock(): Promise<void>`

Acquires the adapter's migration lock when supported.



### `beginTransaction(options: TransactionOptions): Promise<TransactionToken>`

Starts a new database transaction.



### `commitTransaction(token: TransactionToken): Promise<void>`

Commits an open transaction.



### `compileSql(operation: SelectOperation<AnyTable> | CountOperation<AnyTable> | ExistsOperation<AnyTable> | InsertOperation<AnyTable> | InsertManyOperation<AnyTable> | UpdateOperation<AnyTable> | DeleteOperation<AnyTable> | UpsertOperation<AnyTable> | RawOperation | CreateTableOperation | AlterTableOperation | RenameTableOperation | DropTableOperation | CreateIndexOperation | DropIndexOperation | RenameIndexOperation | AddForeignKeyOperation | DropForeignKeyOperation | AddCheckOperation | DropCheckOperation): SqlStatement[]`

Compiles a data or migration operation into executable SQL statements.



### `createSavepoint(token: TransactionToken, name: string): Promise<void>`

Creates a savepoint inside an open transaction.



### `execute(request: DataManipulationRequest): Promise<DataManipulationResult>`

Executes a data-manipulation request.



### `hasColumn(table: TableRef, column: string, transaction: TransactionToken): Promise<boolean>`

Checks whether a column exists on a table.



### `hasTable(table: TableRef, transaction: TransactionToken): Promise<boolean>`

Checks whether a table exists.



### `migrate(request: DataMigrationRequest): Promise<DataMigrationResult>`

Executes a migration request.



### `releaseMigrationLock(): Promise<void>`

Releases the adapter's migration lock when supported.



### `releaseSavepoint(token: TransactionToken, name: string): Promise<void>`

Releases a previously created savepoint.



### `rollbackToSavepoint(token: TransactionToken, name: string): Promise<void>`

Rolls back to a previously created savepoint.



### `rollbackTransaction(token: TransactionToken): Promise<void>`

Rolls back an open transaction.

