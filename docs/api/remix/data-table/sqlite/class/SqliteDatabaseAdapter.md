---
title: SqliteDatabaseAdapter
source: https://github.com/remix-run/remix/blob/remix@3.0.0-beta.2/packages/data-table-sqlite/src/lib/adapter.ts#L49
---

# SqliteDatabaseAdapter

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
  releaseSavepoint(token: TransactionToken, name: string): Promise<void>;
  rollbackToSavepoint(token: TransactionToken, name: string): Promise<void>;
  rollbackTransaction(token: TransactionToken): Promise<void>;
}

```

## Properties

### `capabilities`

Feature flags describing the sqlite behaviors supported by this adapter.

### `dialect`

The SQL dialect identifier reported by this adapter.

## Methods

### `beginTransaction(options: TransactionOptions): Promise<TransactionToken>`

Starts a sqlite transaction.

#### Parameters

##### `options`

Transaction options.

### `commitTransaction(token: TransactionToken): Promise<void>`

Commits an open sqlite transaction.

#### Parameters

##### `token`

Transaction token to commit.

### `compileSql(operation: DataManipulationOperation): SqlStatement[]`

Compiles a data-manipulation operation to sqlite SQL statements.

#### Parameters

##### `operation`

Operation to compile.

### `createSavepoint(token: TransactionToken, name: string): Promise<void>`

Creates a savepoint in an open sqlite transaction.

#### Parameters

##### `token`

Transaction token to use.

##### `name`

Savepoint name.

### `execute(request: DataManipulationRequest): Promise<DataManipulationResult>`

Executes a sqlite data-manipulation request.

#### Parameters

##### `request`

Request to execute.

### `executeScript(sql: string, transaction: TransactionToken): Promise<void>`

Executes a multi-statement sqlite SQL script.

#### Parameters

##### `sql`

SQL script to execute.

##### `transaction`

Optional transaction token (asserted when present).

### `hasColumn(table: TableRef, column: string, transaction: TransactionToken): Promise<boolean>`

Checks whether a column exists in sqlite.

#### Parameters

##### `table`

Table reference to inspect.

##### `column`

Column name to look up.

##### `transaction`

Optional transaction token.

### `hasTable(table: TableRef, transaction: TransactionToken): Promise<boolean>`

Checks whether a table exists in sqlite.

#### Parameters

##### `table`

Table reference to inspect.

##### `transaction`

Optional transaction token.

### `releaseSavepoint(token: TransactionToken, name: string): Promise<void>`

Releases a savepoint in an open sqlite transaction.

#### Parameters

##### `token`

Transaction token to use.

##### `name`

Savepoint name.

### `rollbackToSavepoint(token: TransactionToken, name: string): Promise<void>`

Rolls back to a savepoint in an open sqlite transaction.

#### Parameters

##### `token`

Transaction token to use.

##### `name`

Savepoint name.

### `rollbackTransaction(token: TransactionToken): Promise<void>`

Rolls back an open sqlite transaction.

#### Parameters

##### `token`

Transaction token to roll back.