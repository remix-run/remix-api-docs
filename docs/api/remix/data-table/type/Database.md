---
title: Database
---

# Database

<a href="https://github.com/remix-run/remix/blob/main/packages/data-table/src/lib/database.ts#L398" target="_blank">View Source</a>

## Summary

High-level database runtime used to build and execute data manipulation operations.

Create instances with createDatabase.

## Signature

```ts
type Database = {
  adapter: DatabaseAdapter
  query: QueryMethod
  count<table extends AnyTable>(table: table, options: CountOptions<table>): Promise<number>
  create<table extends AnyTable>(table: table, values: Partial<TableRow<table>>, options: CreateResultOptions): Promise<WriteResult>
  create<table extends AnyTable, relations extends RelationMapForSourceName<TableName<table>>>(table: table, values: Partial<TableRow<table>>, options: CreateRowOptions<table, relations>): Promise<{ [key in string | number | symbol]: ({ [key in string]: { [column in string]: ColumnOutput<TableColumns<(...)>[column]> }[key] } & { [key in string | number | symbol]: { [name in string | number | symbol]: RelationResult<relations[name]> }[key] })[key] }>
  createMany<table extends AnyTable>(table: table, values: Partial<{ [key in string]: { [column in string]: ColumnOutput<TableColumns<table>[column]> }[key] }>[], options: CreateManyResultOptions): Promise<WriteResult>
  createMany<table extends AnyTable>(table: table, values: Partial<{ [key in string]: { [column in string]: ColumnOutput<TableColumns<table>[column]> }[key] }>[], options: CreateManyRowsOptions): Promise<{ [key in string]: { [column in string]: ColumnOutput<TableColumns<table>[column]> }[key] }[]>
  delete<table extends AnyTable>(table: table, value: PrimaryKeyInput<table>): Promise<boolean>
  deleteMany<table extends AnyTable>(table: table, options: DeleteManyOptions<table>): Promise<WriteResult>
  exec(statement: string | SqlStatement, values: unknown[]): Promise<DataManipulationResult>
  find<table extends AnyTable, relations extends RelationMapForSourceName<TableName<table>>>(table: table, value: PrimaryKeyInput<table>, options: { with?: relations }): Promise<{ [key in string | number | symbol]: ({ [key in string]: { [column in string]: ColumnOutput<(...)[(...)]> }[key] } & { [key in string | number | symbol]: { [name in string | number | symbol]: RelationResult<(...)[(...)]> }[key] })[key] } | null>
  findMany<table extends AnyTable, relations extends RelationMapForSourceName<TableName<table>>>(table: table, options: FindManyOptions<table, relations>): Promise<{ [key in string | number | symbol]: ({ [key in string]: { [column in string]: ColumnOutput<(...)[(...)]> }[key] } & { [key in string | number | symbol]: { [name in string | number | symbol]: RelationResult<(...)[(...)]> }[key] })[key] }[]>
  findOne<table extends AnyTable, relations extends RelationMapForSourceName<TableName<table>>>(table: table, options: FindOneOptions<table, relations>): Promise<{ [key in string | number | symbol]: ({ [key in string]: { [column in string]: ColumnOutput<(...)[(...)]> }[key] } & { [key in string | number | symbol]: { [name in string | number | symbol]: RelationResult<(...)[(...)]> }[key] })[key] } | null>
  now(): unknown
  transaction<result>(callback: (database: Database) => Promise<result>, options: TransactionOptions): Promise<result>
  update<table extends AnyTable, relations extends RelationMapForSourceName<TableName<table>>>(table: table, value: PrimaryKeyInput<table>, changes: Partial<TableRow<table>>, options: UpdateOptions<table, relations>): Promise<{ [key in string | number | symbol]: ({ [key in string]: { [column in string]: ColumnOutput<TableColumns<(...)>[column]> }[key] } & { [key in string | number | symbol]: { [name in string | number | symbol]: RelationResult<relations[name]> }[key] })[key] }>
  updateMany<table extends AnyTable>(table: table, changes: Partial<TableRow<table>>, options: UpdateManyOptions<table>): Promise<WriteResult>

}
```