---
title: Database
---

# Database

<a href="https://github.com/remix-run/remix/blob/remix@3.0.0-alpha.6/packages/data-table/src/lib/database.ts#L347" target="_blank">View Source</a>

## Summary

High-level database runtime used to build and execute data manipulation operations.

Create instances directly with `new Database(adapter, options)` or use
`createDatabase(adapter, options)` as a thin wrapper.

## Signature

```ts
class Database {
  constructor(adapter: DatabaseAdapter, options: DatabaseOptions): Database

  // Accessors
  get adapter(): DatabaseAdapter

  // Methods
  [executeOperation](operation: DataManipulationOperation): Promise<DataManipulationResult>
  count<table extends AnyTable>(table: table, options: CountOptions<table>): Promise<number>
  create<table extends AnyTable>(table: table, values: Partial<TableRow<table>>, options: CreateResultOptions): Promise<WriteResult>
  create<table extends AnyTable, relations extends RelationMapForSourceName<TableName<table>>>(table: table, values: Partial<TableRow<table>>, options: CreateRowOptions<table, relations>): Promise<{ [key in string | number | symbol]: ({ [key in string]: { [column in string]: ColumnOutput<TableColumns<table>[column]> }[key] } & { [key in string | number | symbol]: { [name in string | number | symbol]: RelationResult<relations[name]> }[key] })[key] }>
  createMany<table extends AnyTable>(table: table, values: Partial<{ [key in string]: { [column in string]: ColumnOutput<TableColumns<table>[column]> }[key] }>[], options: CreateManyResultOptions): Promise<WriteResult>
  createMany<table extends AnyTable>(table: table, values: Partial<{ [key in string]: { [column in string]: ColumnOutput<TableColumns<table>[column]> }[key] }>[], options: CreateManyRowsOptions): Promise<{ [key in string]: { [column in string]: ColumnOutput<TableColumns<table>[column]> }[key] }[]>
  delete<table extends AnyTable>(table: table, value: PrimaryKeyInput<table>): Promise<boolean>
  deleteMany<table extends AnyTable>(table: table, options: DeleteManyOptions<table>): Promise<WriteResult>
  exec(statement: string | SqlStatement, values: unknown[]): Promise<DataManipulationResult>
  exec<input extends AnyQuery>(input: input): Promise<QueryExecutionResult<input>>
  find<table extends AnyTable, relations extends RelationMapForSourceName<TableName<table>>>(table: table, value: PrimaryKeyInput<table>, options: { with?: relations }): Promise<{ [key in string | number | symbol]: ({ [key in string]: { [column in string]: ColumnOutput<TableColumns<(...)>[column]> }[key] } & { [key in string | number | symbol]: { [name in string | number | symbol]: RelationResult<relations[name]> }[key] })[key] } | null>
  findMany<table extends AnyTable, relations extends RelationMapForSourceName<TableName<table>>>(table: table, options: FindManyOptions<table, relations>): Promise<{ [key in string | number | symbol]: ({ [key in string]: { [column in string]: ColumnOutput<TableColumns<(...)>[column]> }[key] } & { [key in string | number | symbol]: { [name in string | number | symbol]: RelationResult<relations[name]> }[key] })[key] }[]>
  findOne<table extends AnyTable, relations extends RelationMapForSourceName<TableName<table>>>(table: table, options: FindOneOptions<table, relations>): Promise<{ [key in string | number | symbol]: ({ [key in string]: { [column in string]: ColumnOutput<TableColumns<(...)>[column]> }[key] } & { [key in string | number | symbol]: { [name in string | number | symbol]: RelationResult<relations[name]> }[key] })[key] } | null>
  now(): unknown
  query<tableName extends string, row extends Record<string, unknown>, primaryKey extends readonly (keyof row & string)[]>(table: QueryTableInput<tableName, row, primaryKey>): Query<QueryTableInput<tableName, row, primaryKey>, { [key in string]: QueryColumnTypeMapFromRow<tableName, row>[key] }, row, {}, BoundQueryPhase<"all">>
  transaction<result>(callback: (database: Database) => Promise<result>, options: TransactionOptions): Promise<result>
  update<table extends AnyTable, relations extends RelationMapForSourceName<TableName<table>>>(table: table, value: PrimaryKeyInput<table>, changes: Partial<TableRow<table>>, options: UpdateOptions<table, relations>): Promise<{ [key in string | number | symbol]: ({ [key in string]: { [column in string]: ColumnOutput<TableColumns<table>[column]> }[key] } & { [key in string | number | symbol]: { [name in string | number | symbol]: RelationResult<relations[name]> }[key] })[key] }>
  updateMany<table extends AnyTable>(table: table, changes: Partial<TableRow<table>>, options: UpdateManyOptions<table>): Promise<WriteResult>
  [createInternalDatabase](adapter: DatabaseAdapter, options: DatabaseOptions | undefined, internal: DatabaseInternalState): Database
}
```

## Constructor Params

### adapter

### options

## Accessors

### adapter

## Methods

### [executeOperation](operation: DataManipulationOperation): Promise<DataManipulationResult>

#### operation

### count<table extends AnyTable>(table: table, options: CountOptions<table>): Promise<number>

#### table

#### options

### create<table extends AnyTable>(table: table, values: Partial<TableRow<table>>, options: CreateResultOptions): Promise<WriteResult>

#### table

#### values

#### options

### create<table extends AnyTable, relations extends RelationMapForSourceName<TableName<table>>>(table: table, values: Partial<TableRow<table>>, options: CreateRowOptions<table, relations>): Promise<{ [key in string | number | symbol]: ({ [key in string]: { [column in string]: ColumnOutput<TableColumns<table>[column]> }[key] } & { [key in string | number | symbol]: { [name in string | number | symbol]: RelationResult<relations[name]> }[key] })[key] }>

#### table

#### values

#### options

### createMany<table extends AnyTable>(table: table, values: Partial<{ [key in string]: { [column in string]: ColumnOutput<TableColumns<table>[column]> }[key] }>[], options: CreateManyResultOptions): Promise<WriteResult>

#### table

#### values

#### options

### createMany<table extends AnyTable>(table: table, values: Partial<{ [key in string]: { [column in string]: ColumnOutput<TableColumns<table>[column]> }[key] }>[], options: CreateManyRowsOptions): Promise<{ [key in string]: { [column in string]: ColumnOutput<TableColumns<table>[column]> }[key] }[]>

#### table

#### values

#### options

### delete<table extends AnyTable>(table: table, value: PrimaryKeyInput<table>): Promise<boolean>

#### table

#### value

### deleteMany<table extends AnyTable>(table: table, options: DeleteManyOptions<table>): Promise<WriteResult>

#### table

#### options

### exec(statement: string | SqlStatement, values: unknown[]): Promise<DataManipulationResult>

#### statement

#### values

### exec<input extends AnyQuery>(input: input): Promise<QueryExecutionResult<input>>

#### input

### find<table extends AnyTable, relations extends RelationMapForSourceName<TableName<table>>>(table: table, value: PrimaryKeyInput<table>, options: { with?: relations }): Promise<{ [key in string | number | symbol]: ({ [key in string]: { [column in string]: ColumnOutput<TableColumns<(...)>[column]> }[key] } & { [key in string | number | symbol]: { [name in string | number | symbol]: RelationResult<relations[name]> }[key] })[key] } | null>

#### table

#### value

#### options

### findMany<table extends AnyTable, relations extends RelationMapForSourceName<TableName<table>>>(table: table, options: FindManyOptions<table, relations>): Promise<{ [key in string | number | symbol]: ({ [key in string]: { [column in string]: ColumnOutput<TableColumns<(...)>[column]> }[key] } & { [key in string | number | symbol]: { [name in string | number | symbol]: RelationResult<relations[name]> }[key] })[key] }[]>

#### table

#### options

### findOne<table extends AnyTable, relations extends RelationMapForSourceName<TableName<table>>>(table: table, options: FindOneOptions<table, relations>): Promise<{ [key in string | number | symbol]: ({ [key in string]: { [column in string]: ColumnOutput<TableColumns<(...)>[column]> }[key] } & { [key in string | number | symbol]: { [name in string | number | symbol]: RelationResult<relations[name]> }[key] })[key] } | null>

#### table

#### options

### now(): unknown

### query<tableName extends string, row extends Record<string, unknown>, primaryKey extends readonly (keyof row & string)[]>(table: QueryTableInput<tableName, row, primaryKey>): Query<QueryTableInput<tableName, row, primaryKey>, { [key in string]: QueryColumnTypeMapFromRow<tableName, row>[key] }, row, {}, BoundQueryPhase<"all">>

#### table

### transaction<result>(callback: (database: Database) => Promise<result>, options: TransactionOptions): Promise<result>

#### callback

#### options

### update<table extends AnyTable, relations extends RelationMapForSourceName<TableName<table>>>(table: table, value: PrimaryKeyInput<table>, changes: Partial<TableRow<table>>, options: UpdateOptions<table, relations>): Promise<{ [key in string | number | symbol]: ({ [key in string]: { [column in string]: ColumnOutput<TableColumns<table>[column]> }[key] } & { [key in string | number | symbol]: { [name in string | number | symbol]: RelationResult<relations[name]> }[key] })[key] }>

#### table

#### value

#### changes

#### options

### updateMany<table extends AnyTable>(table: table, changes: Partial<TableRow<table>>, options: UpdateManyOptions<table>): Promise<WriteResult>

#### table

#### changes

#### options

### [createInternalDatabase](adapter: DatabaseAdapter, options: DatabaseOptions | undefined, internal: DatabaseInternalState): Database

#### adapter

#### options

#### internal