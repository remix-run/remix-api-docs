---
title: Database
source: https://github.com/remix-run/remix/blob/remix@3.0.0-beta.10/packages/data-table/src/lib/database.ts#L363
---

# Database

## Summary

High-level database runtime used to query and manage a database.

Database dialects extend this class and provide a [`DatabaseDriver`](/api/remix/data-table/interface/DatabaseDriver/) to the constructor.
The driver owns SQL execution, transactions, and connection lifecycle while this class provides
the shared query, persistence, and migration APIs.

## Signature

```ts
class Database<dialect> {
  constructor(driver: DatabaseDriver<dialect>, options: DatabaseOptions): Database<dialect>

  // Accessors
  get capabilities(): DatabaseCapabilities
  get dialect(): dialect

  // Methods
  close(): Promise<void>
  count<table extends AnyTable>(table: table, options: CountOptions<table>): Promise<number>
  create<table extends AnyTable>(table: table, values: Partial<TableRow<table>>, options: CreateResultOptions): Promise<WriteResult>
  create<table extends AnyTable, relations extends RelationMapForSourceName<TableName<table>>>(table: table, values: Partial<TableRow<table>>, options: CreateRowOptions<table, relations>): Promise<{ [key in string | number | symbol]: ({ [key in string]: { [column in string]: ColumnOutput<TableColumns<table>[column]> }[key] } & { [key in string | number | symbol]: { [name in string | number | symbol]: RelationResult<relations[name]> }[key] })[key] }>
  createMany<table extends AnyTable>(table: table, values: Partial<{ [key in string]: { [column in string]: ColumnOutput<TableColumns<table>[column]> }[key] }>[], options: CreateManyResultOptions): Promise<WriteResult>
  createMany<table extends AnyTable>(table: table, values: Partial<{ [key in string]: { [column in string]: ColumnOutput<TableColumns<table>[column]> }[key] }>[], options: CreateManyRowsOptions): Promise<{ [key in string]: { [column in string]: ColumnOutput<TableColumns<table>[column]> }[key] }[]>
  delete<table extends AnyTable>(table: table, value: PrimaryKeyInput<table>): Promise<boolean>
  deleteMany<table extends AnyTable>(table: table, options: DeleteManyOptions<table>): Promise<WriteResult>
  exec(statement: string | SqlStatement, values: unknown[]): Promise<DataManipulationResult>
  exec<input extends AnyQuery>(input: input): Promise<QueryExecutionResult<input>>
  executeScript(sql: string): Promise<void>
  find<table extends AnyTable, relations extends RelationMapForSourceName<TableName<table>>>(table: table, value: PrimaryKeyInput<table>, options: { with?: relations }): Promise<{ [key in string | number | symbol]: ({ [key in string]: { [column in string]: ColumnOutput<TableColumns<(...)>[column]> }[key] } & { [key in string | number | symbol]: { [name in string | number | symbol]: RelationResult<relations[name]> }[key] })[key] } | null>
  findMany<table extends AnyTable, relations extends RelationMapForSourceName<TableName<table>>>(table: table, options: FindManyOptions<table, relations>): Promise<{ [key in string | number | symbol]: ({ [key in string]: { [column in string]: ColumnOutput<TableColumns<(...)>[column]> }[key] } & { [key in string | number | symbol]: { [name in string | number | symbol]: RelationResult<relations[name]> }[key] })[key] }[]>
  findOne<table extends AnyTable, relations extends RelationMapForSourceName<TableName<table>>>(table: table, options: FindOneOptions<table, relations>): Promise<{ [key in string | number | symbol]: ({ [key in string]: { [column in string]: ColumnOutput<TableColumns<(...)>[column]> }[key] } & { [key in string | number | symbol]: { [name in string | number | symbol]: RelationResult<relations[name]> }[key] })[key] } | null>
  hasColumn(table: TableRef, column: string): Promise<boolean>
  hasTable(table: TableRef): Promise<boolean>
  migrate(migrations: Migrations, options: DatabaseMigrateOptions): Promise<MigrateResult>
  migrationStatus(migrations: Migrations, options: DatabaseMigrationStatusOptions): Promise<MigrationStatusEntry[]>
  now(): unknown
  query<tableName extends string, row extends Record<string, unknown>, primaryKey extends readonly (keyof row & string)[]>(table: QueryTableInput<tableName, row, primaryKey>): Query<QueryTableInput<tableName, row, primaryKey>, { [key in string]: QueryColumnTypeMapFromRow<tableName, row>[key] }, row, {}, BoundQueryPhase<"all">>
  reset(options: DatabaseResetOptions): Promise<void>
  transaction<result>(callback: (database: Database<dialect>) => Promise<result>, options: TransactionOptions): Promise<result>
  update<table extends AnyTable, relations extends RelationMapForSourceName<TableName<table>>>(table: table, value: PrimaryKeyInput<table>, changes: Partial<TableRow<table>>, options: UpdateOptions<table, relations>): Promise<{ [key in string | number | symbol]: ({ [key in string]: { [column in string]: ColumnOutput<TableColumns<table>[column]> }[key] } & { [key in string | number | symbol]: { [name in string | number | symbol]: RelationResult<relations[name]> }[key] })[key] }>
  updateMany<table extends AnyTable>(table: table, changes: Partial<TableRow<table>>, options: UpdateManyOptions<table>): Promise<WriteResult>
  wipe(): Promise<void>
}
```

## Constructor

Creates a database backed by a driver.

### Parameters

#### `driver`

Low-level database engine integration.

#### `options`

Database runtime options.

## Accessors

### `capabilities`

Immutable feature flags used by shared query and migration behavior.

### `dialect`

Stable identifier for the SQL dialect.

## Methods

### `close(): Promise<void>`

Closes resources owned by this database.



### `count<table extends AnyTable>(table: table, options: CountOptions<table>): Promise<number>`



### `create<table extends AnyTable>(table: table, values: Partial<TableRow<table>>, options: CreateResultOptions): Promise<WriteResult>`



### `create<table extends AnyTable, relations extends RelationMapForSourceName<TableName<table>>>(table: table, values: Partial<TableRow<table>>, options: CreateRowOptions<table, relations>): Promise<{ [key in string | number | symbol]: ({ [key in string]: { [column in string]: ColumnOutput<TableColumns<table>[column]> }[key] } & { [key in string | number | symbol]: { [name in string | number | symbol]: RelationResult<relations[name]> }[key] })[key] }>`



### `createMany<table extends AnyTable>(table: table, values: Partial<{ [key in string]: { [column in string]: ColumnOutput<TableColumns<table>[column]> }[key] }>[], options: CreateManyResultOptions): Promise<WriteResult>`



### `createMany<table extends AnyTable>(table: table, values: Partial<{ [key in string]: { [column in string]: ColumnOutput<TableColumns<table>[column]> }[key] }>[], options: CreateManyRowsOptions): Promise<{ [key in string]: { [column in string]: ColumnOutput<TableColumns<table>[column]> }[key] }[]>`



### `delete<table extends AnyTable>(table: table, value: PrimaryKeyInput<table>): Promise<boolean>`



### `deleteMany<table extends AnyTable>(table: table, options: DeleteManyOptions<table>): Promise<WriteResult>`



### `exec(statement: string | SqlStatement, values: unknown[]): Promise<DataManipulationResult>`



### `exec<input extends AnyQuery>(input: input): Promise<QueryExecutionResult<input>>`



### `executeScript(sql: string): Promise<void>`

Executes a migration or raw multi-statement SQL script.

#### Parameters

##### `sql`

SQL script to execute.

### `find<table extends AnyTable, relations extends RelationMapForSourceName<TableName<table>>>(table: table, value: PrimaryKeyInput<table>, options: { with?: relations }): Promise<{ [key in string | number | symbol]: ({ [key in string]: { [column in string]: ColumnOutput<TableColumns<(...)>[column]> }[key] } & { [key in string | number | symbol]: { [name in string | number | symbol]: RelationResult<relations[name]> }[key] })[key] } | null>`



### `findMany<table extends AnyTable, relations extends RelationMapForSourceName<TableName<table>>>(table: table, options: FindManyOptions<table, relations>): Promise<{ [key in string | number | symbol]: ({ [key in string]: { [column in string]: ColumnOutput<TableColumns<(...)>[column]> }[key] } & { [key in string | number | symbol]: { [name in string | number | symbol]: RelationResult<relations[name]> }[key] })[key] }[]>`



### `findOne<table extends AnyTable, relations extends RelationMapForSourceName<TableName<table>>>(table: table, options: FindOneOptions<table, relations>): Promise<{ [key in string | number | symbol]: ({ [key in string]: { [column in string]: ColumnOutput<TableColumns<(...)>[column]> }[key] } & { [key in string | number | symbol]: { [name in string | number | symbol]: RelationResult<relations[name]> }[key] })[key] } | null>`



### `hasColumn(table: TableRef, column: string): Promise<boolean>`

Reports whether a column exists on a table.

#### Parameters

##### `table`

Table to inspect.

##### `column`

Column name to inspect.

### `hasTable(table: TableRef): Promise<boolean>`

Reports whether a table exists.

#### Parameters

##### `table`

Table to inspect.

### `migrate(migrations: Migrations, options: DatabaseMigrateOptions): Promise<MigrateResult>`

Applies or reverts migrations in order.

#### Parameters

##### `migrations`

Migration descriptors or registry to apply.

##### `options`

Migration direction, bound, dry-run, and journal configuration.

### `migrationStatus(migrations: Migrations, options: DatabaseMigrationStatusOptions): Promise<MigrationStatusEntry[]>`

Reports the current state of the provided migrations.

#### Parameters

##### `migrations`

Migration descriptors or registry to inspect.

##### `options`

Migration journal configuration.

### `now(): unknown`



### `query<tableName extends string, row extends Record<string, unknown>, primaryKey extends readonly (keyof row & string)[]>(table: QueryTableInput<tableName, row, primaryKey>): Query<QueryTableInput<tableName, row, primaryKey>, { [key in string]: QueryColumnTypeMapFromRow<tableName, row>[key] }, row, {}, BoundQueryPhase<"all">>`



### `reset(options: DatabaseResetOptions): Promise<void>`

Wipes the database, applies migrations, and optionally seeds data.

#### Parameters

##### `options`

Migrations and optional seed function used to rebuild the database.

### `transaction<result>(callback: (database: Database<dialect>) => Promise<result>, options: TransactionOptions): Promise<result>`



### `update<table extends AnyTable, relations extends RelationMapForSourceName<TableName<table>>>(table: table, value: PrimaryKeyInput<table>, changes: Partial<TableRow<table>>, options: UpdateOptions<table, relations>): Promise<{ [key in string | number | symbol]: ({ [key in string]: { [column in string]: ColumnOutput<TableColumns<table>[column]> }[key] } & { [key in string | number | symbol]: { [name in string | number | symbol]: RelationResult<relations[name]> }[key] })[key] }>`



### `updateMany<table extends AnyTable>(table: table, changes: Partial<TableRow<table>>, options: UpdateManyOptions<table>): Promise<WriteResult>`



### `wipe(): Promise<void>`

Destructively recreates the configured database.

