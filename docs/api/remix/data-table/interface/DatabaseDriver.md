---
title: DatabaseDriver
source: https://github.com/remix-run/remix/blob/remix@3.0.0-beta.10/packages/data-table/src/lib/driver.ts#L291
---

# DatabaseDriver

## Summary

Low-level contract that connects a `Database` to a database engine.

## Signature

```ts
interface DatabaseDriver<dialect> {
  capabilities: DatabaseCapabilities
  dialect: dialect
  beginTransaction(options: TransactionOptions): Promise<TransactionToken>
  close(): void | Promise<void>
  commitTransaction(token: TransactionToken): Promise<void>
  createSavepoint(token: TransactionToken, name: string): Promise<void>
  execute(request: DataManipulationRequest): Promise<DataManipulationResult>
  executeScript(sql: string, transaction: TransactionToken): Promise<void>
  hasColumn(table: TableRef, column: string, transaction: TransactionToken): Promise<boolean>
  hasTable(table: TableRef, transaction: TransactionToken): Promise<boolean>
  releaseSavepoint(token: TransactionToken, name: string): Promise<void>
  rollbackToSavepoint(token: TransactionToken, name: string): Promise<void>
  rollbackTransaction(token: TransactionToken): Promise<void>
  wipe(): Promise<void>
  withMigrationLock<result>(
    name: string,
    run: (driver: DatabaseDriver<dialect>) => Promise<result>,
  ): Promise<result>
}

```

## Properties

### `capabilities`

Immutable feature flags used by shared query and migration behavior.

### `dialect`

Stable identifier for the SQL dialect.

## Methods

### `beginTransaction(options: TransactionOptions): Promise<TransactionToken>`

Starts a new database transaction.



### `close(): void | Promise<void>`

Releases connection handles owned by the driver. Must be safe to call repeatedly.



### `commitTransaction(token: TransactionToken): Promise<void>`

Commits an open transaction.



### `createSavepoint(token: TransactionToken, name: string): Promise<void>`

Creates a savepoint inside an open transaction.



### `execute(request: DataManipulationRequest): Promise<DataManipulationResult>`

Executes a data-manipulation request.



### `executeScript(sql: string, transaction: TransactionToken): Promise<void>`

Executes a raw SQL script that may contain multiple statements.



### `hasColumn(table: TableRef, column: string, transaction: TransactionToken): Promise<boolean>`

Checks whether a column exists on a table.



### `hasTable(table: TableRef, transaction: TransactionToken): Promise<boolean>`

Checks whether a table exists.



### `releaseSavepoint(token: TransactionToken, name: string): Promise<void>`

Releases a previously created savepoint.



### `rollbackToSavepoint(token: TransactionToken, name: string): Promise<void>`

Rolls back to a previously created savepoint.



### `rollbackTransaction(token: TransactionToken): Promise<void>`

Rolls back an open transaction.



### `wipe(): Promise<void>`

Destructively recreates the configured database.



### `withMigrationLock<result>(name: string, run: (driver: DatabaseDriver<dialect>) => Promise<result>): Promise<result>`

Runs migration work while holding a driver-specific lock.

The callback receives a driver bound to the connection that owns the lock. Drivers must
release the lock when the callback rejects as well as when it resolves.

#### Parameters

##### `name`

Logical migration lock name.

##### `run`

Migration work to run with the connection-bound driver.