---
title: PostgresDatabaseAdapter
source: https://github.com/remix-run/remix/blob/remix@3.0.0-beta.2/packages/data-table-postgres/src/lib/adapter.ts#L30
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
  compileSql(operation: DataManipulationOperation): SqlStatement[];
  createSavepoint(token: TransactionToken, name: string): Promise<void>;
  execute(request: DataManipulationRequest): Promise<DataManipulationResult>;
  executeScript(sql: string, transaction: TransactionToken): Promise<void>;
  hasColumn(
    table: TableRef,
    column: string,
    transaction: TransactionToken,
  ): Promise<boolean>;
  hasTable(table: TableRef, transaction: TransactionToken): Promise<boolean>;
  releaseMigrationLock(): Promise<void>;
  releaseSavepoint(token: TransactionToken, name: string): Promise<void>;
  rollbackToSavepoint(token: TransactionToken, name: string): Promise<void>;
  rollbackTransaction(token: TransactionToken): Promise<void>;
}

```

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

#### Parameters

##### `options`

Transaction options.

### `commitTransaction(token: TransactionToken): Promise<void>`

Commits an open postgres transaction.

#### Parameters

##### `token`

Transaction token to commit.

### `compileSql(operation: DataManipulationOperation): SqlStatement[]`

Compiles a data-manipulation operation to postgres SQL statements.

#### Parameters

##### `operation`

Operation to compile.

### `createSavepoint(token: TransactionToken, name: string): Promise<void>`

Creates a savepoint in an open postgres transaction.

#### Parameters

##### `token`

Transaction token to use.

##### `name`

Savepoint name.

### `execute(request: DataManipulationRequest): Promise<DataManipulationResult>`

Executes a postgres data-manipulation request.

#### Parameters

##### `request`

Request to execute.

### `executeScript(sql: string, transaction: TransactionToken): Promise<void>`

Executes a multi-statement postgres SQL script.

Postgres natively supports multi-statement scripts when `query` is called
without a parameter array.

#### Parameters

##### `sql`

SQL script to execute.

##### `transaction`

Optional transaction token.

### `hasColumn(table: TableRef, column: string, transaction: TransactionToken): Promise<boolean>`

Checks whether a column exists in postgres.

#### Parameters

##### `table`

Table reference to inspect.

##### `column`

Column name to look up.

##### `transaction`

Optional transaction token.

### `hasTable(table: TableRef, transaction: TransactionToken): Promise<boolean>`

Checks whether a table exists in postgres.

#### Parameters

##### `table`

Table reference to inspect.

##### `transaction`

Optional transaction token.

### `releaseMigrationLock(): Promise<void>`

Releases the postgres migration lock.



### `releaseSavepoint(token: TransactionToken, name: string): Promise<void>`

Releases a savepoint in an open postgres transaction.

#### Parameters

##### `token`

Transaction token to use.

##### `name`

Savepoint name.

### `rollbackToSavepoint(token: TransactionToken, name: string): Promise<void>`

Rolls back to a savepoint in an open postgres transaction.

#### Parameters

##### `token`

Transaction token to use.

##### `name`

Savepoint name.

### `rollbackTransaction(token: TransactionToken): Promise<void>`

Rolls back an open postgres transaction.

#### Parameters

##### `token`

Transaction token to roll back.