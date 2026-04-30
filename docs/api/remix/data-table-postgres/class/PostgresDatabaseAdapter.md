---
title: PostgresDatabaseAdapter
source: https://github.com/remix-run/remix/blob/main/packages/data-table-postgres/src/lib/adapter.ts#L39
---

# PostgresDatabaseAdapter

## Summary

`DatabaseAdapter` implementation for postgres-compatible clients.

## Signature

```ts
class PostgresDatabaseAdapter {
  constructor(client: PostgresQueryable): PostgresDatabaseAdapter;

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

## Constructor Params

### `client`

## Properties

### `capabilities`

Feature flags describing the postgres behaviors supported by this adapter.

### `dialect`

The SQL dialect identifier reported by this adapter.

## Methods

### `acquireMigrationLock(): Promise<void>`

Acquires the postgres migration lock.

### `beginTransaction(options: TransactionOptions): Promise<TransactionToken>`

Starts a postgres transaction.

#### `options`

Transaction options.

### `commitTransaction(token: TransactionToken): Promise<void>`

Commits an open postgres transaction.

#### `token`

Transaction token to commit.

### `compileSql(operation: SelectOperation<AnyTable> | CountOperation<AnyTable> | ExistsOperation<AnyTable> | InsertOperation<AnyTable> | InsertManyOperation<AnyTable> | UpdateOperation<AnyTable> | DeleteOperation<AnyTable> | UpsertOperation<AnyTable> | RawOperation | CreateTableOperation | AlterTableOperation | RenameTableOperation | DropTableOperation | CreateIndexOperation | DropIndexOperation | RenameIndexOperation | AddForeignKeyOperation | DropForeignKeyOperation | AddCheckOperation | DropCheckOperation): SqlStatement[]`

Compiles a data or migration operation to postgres SQL statements.

#### `operation`

Operation to compile.

### `createSavepoint(token: TransactionToken, name: string): Promise<void>`

Creates a savepoint in an open postgres transaction.

#### `token`

Transaction token to use.

#### `name`

Savepoint name.

### `execute(request: DataManipulationRequest): Promise<DataManipulationResult>`

Executes a postgres data-manipulation request.

#### `request`

Request to execute.

### `hasColumn(table: TableRef, column: string, transaction: TransactionToken): Promise<boolean>`

Checks whether a column exists in postgres.

#### `table`

Table reference to inspect.

#### `column`

Column name to look up.

#### `transaction`

Optional transaction token.

### `hasTable(table: TableRef, transaction: TransactionToken): Promise<boolean>`

Checks whether a table exists in postgres.

#### `table`

Table reference to inspect.

#### `transaction`

Optional transaction token.

### `migrate(request: DataMigrationRequest): Promise<DataMigrationResult>`

Executes postgres migration operations.

#### `request`

Migration request to execute.

### `releaseMigrationLock(): Promise<void>`

Releases the postgres migration lock.

### `releaseSavepoint(token: TransactionToken, name: string): Promise<void>`

Releases a savepoint in an open postgres transaction.

#### `token`

Transaction token to use.

#### `name`

Savepoint name.

### `rollbackToSavepoint(token: TransactionToken, name: string): Promise<void>`

Rolls back to a savepoint in an open postgres transaction.

#### `token`

Transaction token to use.

#### `name`

Savepoint name.

### `rollbackTransaction(token: TransactionToken): Promise<void>`

Rolls back an open postgres transaction.

#### `token`

Transaction token to roll back.