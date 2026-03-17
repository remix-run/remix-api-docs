---
title: MysqlDatabaseAdapter
---

# MysqlDatabaseAdapter

<a href="https://github.com/remix-run/remix/blob/remix@3.0.0-alpha.3/packages/data-table-mysql/src/lib/adapter.ts#L55" target="_blank">View Source</a>

## Summary

`DatabaseAdapter` implementation for mysql-compatible clients.

## Signature

```ts
class MysqlDatabaseAdapter {
  constructor(
    client: MysqlQueryable,
    options: MysqlDatabaseAdapterOptions,
  ): MysqlDatabaseAdapter;

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

### client

### options

## Properties

### capabilities

Feature flags describing the mysql behaviors supported by this adapter.

### dialect

The SQL dialect identifier reported by this adapter.

## Methods

### acquireMigrationLock(): Promise<void>

Acquires the mysql migration lock.

### beginTransaction(options: TransactionOptions): Promise<TransactionToken>

Starts a mysql transaction.

#### options

Transaction options.

### commitTransaction(token: TransactionToken): Promise<void>

Commits an open mysql transaction.

#### token

Transaction token to commit.

### compileSql(operation: SelectOperation<AnyTable> | CountOperation<AnyTable> | ExistsOperation<AnyTable> | InsertOperation<AnyTable> | InsertManyOperation<AnyTable> | UpdateOperation<AnyTable> | DeleteOperation<AnyTable> | UpsertOperation<AnyTable> | RawOperation | CreateTableOperation | AlterTableOperation | RenameTableOperation | DropTableOperation | CreateIndexOperation | DropIndexOperation | RenameIndexOperation | AddForeignKeyOperation | DropForeignKeyOperation | AddCheckOperation | DropCheckOperation): SqlStatement[]

Compiles a data or migration operation to mysql SQL statements.

#### operation

Operation to compile.

### createSavepoint(token: TransactionToken, name: string): Promise<void>

Creates a savepoint in an open mysql transaction.

#### token

Transaction token to use.

#### name

Savepoint name.

### execute(request: DataManipulationRequest): Promise<DataManipulationResult>

Executes a mysql data-manipulation request.

#### request

Request to execute.

### hasColumn(table: TableRef, column: string, transaction: TransactionToken): Promise<boolean>

Checks whether a column exists in mysql.

#### table

Table reference to inspect.

#### column

Column name to look up.

#### transaction

Optional transaction token.

### hasTable(table: TableRef, transaction: TransactionToken): Promise<boolean>

Checks whether a table exists in mysql.

#### table

Table reference to inspect.

#### transaction

Optional transaction token.

### migrate(request: DataMigrationRequest): Promise<DataMigrationResult>

Executes mysql migration operations.

#### request

Migration request to execute.

### releaseMigrationLock(): Promise<void>

Releases the mysql migration lock.

### releaseSavepoint(token: TransactionToken, name: string): Promise<void>

Releases a savepoint in an open mysql transaction.

#### token

Transaction token to use.

#### name

Savepoint name.

### rollbackToSavepoint(token: TransactionToken, name: string): Promise<void>

Rolls back to a savepoint in an open mysql transaction.

#### token

Transaction token to use.

#### name

Savepoint name.

### rollbackTransaction(token: TransactionToken): Promise<void>

Rolls back an open mysql transaction.

#### token

Transaction token to roll back.