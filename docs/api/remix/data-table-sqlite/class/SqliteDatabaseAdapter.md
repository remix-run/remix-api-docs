---
title: SqliteDatabaseAdapter
---

# SqliteDatabaseAdapter

<a href="https://github.com/remix-run/remix/blob/remix@3.0.0-alpha.6/packages/data-table-sqlite/src/lib/adapter.ts#L58" target="_blank">View Source</a>

## Summary

`DatabaseAdapter` implementation for synchronous SQLite clients.

## Signature

```ts
class SqliteDatabaseAdapter {
  constructor(database: SqliteDatabase): SqliteDatabaseAdapter;

  // Properties
  capabilities: {
    migrationLock: boolean;
    returning: boolean;
    savepoints: boolean;
    transactionalDdl: boolean;
    upsert: boolean;
  };
  dialect: string;

  // Methods
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
  releaseSavepoint(token: TransactionToken, name: string): Promise<void>;
  rollbackToSavepoint(token: TransactionToken, name: string): Promise<void>;
  rollbackTransaction(token: TransactionToken): Promise<void>;
}

```

## Constructor Params

### database

## Properties

### capabilities

Feature flags describing the sqlite behaviors supported by this adapter.

### dialect

The SQL dialect identifier reported by this adapter.

## Methods

### beginTransaction(options: TransactionOptions): Promise<TransactionToken>

Starts a sqlite transaction.

#### options

Transaction options.

### commitTransaction(token: TransactionToken): Promise<void>

Commits an open sqlite transaction.

#### token

Transaction token to commit.

### compileSql(operation: SelectOperation<AnyTable> | CountOperation<AnyTable> | ExistsOperation<AnyTable> | InsertOperation<AnyTable> | InsertManyOperation<AnyTable> | UpdateOperation<AnyTable> | DeleteOperation<AnyTable> | UpsertOperation<AnyTable> | RawOperation | CreateTableOperation | AlterTableOperation | RenameTableOperation | DropTableOperation | CreateIndexOperation | DropIndexOperation | RenameIndexOperation | AddForeignKeyOperation | DropForeignKeyOperation | AddCheckOperation | DropCheckOperation): SqlStatement[]

Compiles a data or migration operation to sqlite SQL statements.

#### operation

Operation to compile.

### createSavepoint(token: TransactionToken, name: string): Promise<void>

Creates a savepoint in an open sqlite transaction.

#### token

Transaction token to use.

#### name

Savepoint name.

### execute(request: DataManipulationRequest): Promise<DataManipulationResult>

Executes a sqlite data-manipulation request.

#### request

Request to execute.

### hasColumn(table: TableRef, column: string, transaction: TransactionToken): Promise<boolean>

Checks whether a column exists in sqlite.

#### table

Table reference to inspect.

#### column

Column name to look up.

#### transaction

Optional transaction token.

### hasTable(table: TableRef, transaction: TransactionToken): Promise<boolean>

Checks whether a table exists in sqlite.

#### table

Table reference to inspect.

#### transaction

Optional transaction token.

### migrate(request: DataMigrationRequest): Promise<DataMigrationResult>

Executes sqlite migration operations.

#### request

Migration request to execute.

### releaseSavepoint(token: TransactionToken, name: string): Promise<void>

Releases a savepoint in an open sqlite transaction.

#### token

Transaction token to use.

#### name

Savepoint name.

### rollbackToSavepoint(token: TransactionToken, name: string): Promise<void>

Rolls back to a savepoint in an open sqlite transaction.

#### token

Transaction token to use.

#### name

Savepoint name.

### rollbackTransaction(token: TransactionToken): Promise<void>

Rolls back an open sqlite transaction.

#### token

Transaction token to roll back.