---
title: DatabaseAdapter
source: https://github.com/remix-run/remix/blob/remix@3.0.0-beta.0/packages/data-table/src/lib/adapter.ts#L622
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

### capabilities

Feature flags describing the adapter's supported behaviors.

### dialect

Database dialect name exposed by the adapter.

## Methods

### acquireMigrationLock(): Promise<void>

Acquires the adapter's migration lock when supported.

### beginTransaction(options: TransactionOptions): Promise<TransactionToken>

Starts a new database transaction.

#### `options`

### commitTransaction(token: TransactionToken): Promise<void>

Commits an open transaction.

#### `token`

### compileSql(operation: SelectOperation<AnyTable> | CountOperation<AnyTable> | ExistsOperation<AnyTable> | InsertOperation<AnyTable> | InsertManyOperation<AnyTable> | UpdateOperation<AnyTable> | DeleteOperation<AnyTable> | UpsertOperation<AnyTable> | RawOperation | CreateTableOperation | AlterTableOperation | RenameTableOperation | DropTableOperation | CreateIndexOperation | DropIndexOperation | RenameIndexOperation | AddForeignKeyOperation | DropForeignKeyOperation | AddCheckOperation | DropCheckOperation): SqlStatement[]

Compiles a data or migration operation into executable SQL statements.

#### `operation`

### createSavepoint(token: TransactionToken, name: string): Promise<void>

Creates a savepoint inside an open transaction.

#### `token`

#### `name`

### execute(request: DataManipulationRequest): Promise<DataManipulationResult>

Executes a data-manipulation request.

#### `request`

### hasColumn(table: TableRef, column: string, transaction: TransactionToken): Promise<boolean>

Checks whether a column exists on a table.

#### `table`

#### `column`

#### `transaction`

### hasTable(table: TableRef, transaction: TransactionToken): Promise<boolean>

Checks whether a table exists.

#### `table`

#### `transaction`

### migrate(request: DataMigrationRequest): Promise<DataMigrationResult>

Executes a migration request.

#### `request`

### releaseMigrationLock(): Promise<void>

Releases the adapter's migration lock when supported.

### releaseSavepoint(token: TransactionToken, name: string): Promise<void>

Releases a previously created savepoint.

#### `token`

#### `name`

### rollbackToSavepoint(token: TransactionToken, name: string): Promise<void>

Rolls back to a previously created savepoint.

#### `token`

#### `name`

### rollbackTransaction(token: TransactionToken): Promise<void>

Rolls back an open transaction.

#### `token`