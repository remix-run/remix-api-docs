---
title: DatabaseAdapter
source: https://github.com/remix-run/remix/blob/remix@3.0.0-beta.3/packages/data-table/src/lib/adapter.ts#L297
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



### `compileSql(operation: DataManipulationOperation): SqlStatement[]`

Compiles a data-manipulation operation into executable SQL statements.



### `createSavepoint(token: TransactionToken, name: string): Promise<void>`

Creates a savepoint inside an open transaction.



### `execute(request: DataManipulationRequest): Promise<DataManipulationResult>`

Executes a data-manipulation request.



### `executeScript(sql: string, transaction: TransactionToken): Promise<void>`

Executes a raw SQL script that may contain multiple statements.

Drivers must be configured to accept multi-statement scripts where required
(for example, mysql2 needs `multipleStatements: true`).



### `hasColumn(table: TableRef, column: string, transaction: TransactionToken): Promise<boolean>`

Checks whether a column exists on a table.



### `hasTable(table: TableRef, transaction: TransactionToken): Promise<boolean>`

Checks whether a table exists.



### `releaseMigrationLock(): Promise<void>`

Releases the adapter's migration lock when supported.



### `releaseSavepoint(token: TransactionToken, name: string): Promise<void>`

Releases a previously created savepoint.



### `rollbackToSavepoint(token: TransactionToken, name: string): Promise<void>`

Rolls back to a previously created savepoint.



### `rollbackTransaction(token: TransactionToken): Promise<void>`

Rolls back an open transaction.

