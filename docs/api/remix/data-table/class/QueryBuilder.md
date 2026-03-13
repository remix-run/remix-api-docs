---
title: QueryBuilder
---

# QueryBuilder

<a href="https://github.com/remix-run/remix/blob/main/packages/data-table/src/lib/database.ts#L957" target="_blank">View Source</a>

## Summary

Immutable query builder used by `db.query(table)`.

## Signature

```ts
class QueryBuilder<columnTypes, row, loaded, tableName, primaryKey> {
  constructor(database: DatabaseRuntime, table: AnyTable, state: QueryState): QueryBuilder<columnTypes, row, loaded, tableName, primaryKey>

  // Methods
  [loadRowsWithRelations](): Promise<Record<string, unknown>[]>
  all(): Promise<(row & loaded)[]>
  count(): Promise<number>
  delete(options: { returning?: ReturningInput<row> }): Promise<WriteResult | WriteRowsResult<row>>
  distinct(value: boolean): QueryBuilder<columnTypes, row, loaded, tableName, primaryKey>
  exists(): Promise<boolean>
  find(value: PrimaryKeyInputForRow<row, primaryKey>): Promise<row & loaded | null>
  first(): Promise<row & loaded | null>
  groupBy(columns: QueryColumnInput<columnTypes>[]): QueryBuilder<columnTypes, row, loaded, tableName, primaryKey>
  having(input: WhereInput<Extract<keyof columnTypes, string>>): QueryBuilder<columnTypes, row, loaded, tableName, primaryKey>
  insert(values: Partial<row>, options: { returning?: ReturningInput<row>; touch?: boolean }): Promise<WriteResult | WriteRowResult<row>>
  insertMany(values: Partial<row>[], options: { returning?: ReturningInput<row>; touch?: boolean }): Promise<WriteResult | WriteRowsResult<row>>
  join<target extends AnyTable>(target: target, on: Predicate<Extract<keyof columnTypes, string> | QueryColumnName<target>>, type: JoinType): QueryBuilder<{ [key in string]: { [column in string]: column extends RowColumnName<{ [key in string]: { [column in string]: ColumnOutput<(...)> }[key] }> | `${TableName<target>}.${RowColumnName<{ [key in string]: { [column in (...)]: (...) }[key] }>}` ? column<column> extends keyof columnTypes ? columnTypes[column<column>] | { [key in string]: QueryColumnTypeMapFromRow<(...), (...)>[key] }[column<column>] : { [key in string]: QueryColumnTypeMapFromRow<TableName<(...)>, { [key in (...)]: (...) }>[key] }[column<column>] : column extends keyof columnTypes ? columnTypes[column<column>] : never }[key] }, row, loaded, tableName, primaryKey>
  leftJoin<target extends AnyTable>(target: target, on: Predicate<Extract<keyof columnTypes, string> | QueryColumnName<target>>): QueryBuilder<{ [key in string]: { [column in string]: column extends RowColumnName<{ [key in string]: { [column in string]: ColumnOutput<(...)> }[key] }> | `${TableName<target>}.${RowColumnName<{ [key in string]: { [column in (...)]: (...) }[key] }>}` ? column<column> extends keyof columnTypes ? columnTypes[column<column>] | { [key in string]: QueryColumnTypeMapFromRow<(...), (...)>[key] }[column<column>] : { [key in string]: QueryColumnTypeMapFromRow<TableName<(...)>, { [key in (...)]: (...) }>[key] }[column<column>] : column extends keyof columnTypes ? columnTypes[column<column>] : never }[key] }, row, loaded, tableName, primaryKey>
  limit(value: number): QueryBuilder<columnTypes, row, loaded, tableName, primaryKey>
  offset(value: number): QueryBuilder<columnTypes, row, loaded, tableName, primaryKey>
  orderBy(column: QueryColumnInput<columnTypes>, direction: OrderDirection): QueryBuilder<columnTypes, row, loaded, tableName, primaryKey>
  rightJoin<target extends AnyTable>(target: target, on: Predicate<Extract<keyof columnTypes, string> | QueryColumnName<target>>): QueryBuilder<{ [key in string]: { [column in string]: column extends RowColumnName<{ [key in string]: { [column in string]: ColumnOutput<(...)> }[key] }> | `${TableName<target>}.${RowColumnName<{ [key in string]: { [column in (...)]: (...) }[key] }>}` ? column<column> extends keyof columnTypes ? columnTypes[column<column>] | { [key in string]: QueryColumnTypeMapFromRow<(...), (...)>[key] }[column<column>] : { [key in string]: QueryColumnTypeMapFromRow<TableName<(...)>, { [key in (...)]: (...) }>[key] }[column<column>] : column extends keyof columnTypes ? columnTypes[column<column>] : never }[key] }, row, loaded, tableName, primaryKey>
  select<selection extends (keyof row & string)[]>(columns: selection): QueryBuilder<columnTypes, Pick<row, selection[number]>, loaded, tableName, primaryKey>
  select<selection extends Record<string, QueryColumnInput<columnTypes>>>(selection: selection): QueryBuilder<columnTypes, { [key in string | number | symbol]: { [alias in string | number | symbol]: NormalizeColumnInput<selection[alias]> extends keyof columnTypes ? columnTypes[keyof columnTypes & NormalizeColumnInput<selection[alias]>] : never }[key] }, loaded, tableName, primaryKey>
  update(changes: Partial<row>, options: { returning?: ReturningInput<row>; touch?: boolean }): Promise<WriteResult | WriteRowsResult<row>>
  upsert(values: Partial<row>, options: { conflictTarget?: (keyof row & string)[]; returning?: ReturningInput<row>; touch?: boolean; update?: Partial<row> }): Promise<WriteResult | WriteRowResult<row>>
  where(input: WhereInput<Extract<keyof columnTypes, string>>): QueryBuilder<columnTypes, row, loaded, tableName, primaryKey>
  with<relations extends RelationMapForSourceName<tableName>>(relations: relations): QueryBuilder<columnTypes, row, loaded & { [key in string | number | symbol]: { [name in string | number | symbol]: RelationResult<relations[name]> }[key] }, tableName, primaryKey>
}
```

## Constructor Params

### database

### table

### state

## Methods

### [loadRowsWithRelations](): Promise<Record<string, unknown>[]>

Executes the built select query and hydrates any configured eager-loaded relations.

### all(): Promise<(row & loaded)[]>

Executes the query and returns all rows.

### count(): Promise<number>

Executes a count query.

### delete(options: { returning?: ReturningInput<row> }): Promise<WriteResult | WriteRowsResult<row>>

Deletes scoped rows.

#### options

Delete options.

### distinct(value: boolean): QueryBuilder<columnTypes, row, loaded, tableName, primaryKey>

Toggles `distinct` selection.

#### value

When `true`, eliminates duplicate rows.

### exists(): Promise<boolean>

Executes an existence query.

### find(value: PrimaryKeyInputForRow<row, primaryKey>): Promise<row & loaded | null>

Loads a single row by primary key.

#### value

Primary-key value or composite-key object.

### first(): Promise<row & loaded | null>

Executes the query and returns the first row.

### groupBy(columns: QueryColumnInput<columnTypes>[]): QueryBuilder<columnTypes, row, loaded, tableName, primaryKey>

Appends group-by columns.

#### columns

Columns to include in the grouping set.

### having(input: WhereInput<Extract<keyof columnTypes, string>>): QueryBuilder<columnTypes, row, loaded, tableName, primaryKey>

Adds a having predicate.

#### input

Predicate expression or aggregate filter shorthand.

### insert(values: Partial<row>, options: { returning?: ReturningInput<row>; touch?: boolean }): Promise<WriteResult | WriteRowResult<row>>

Inserts one row.

#### values

Values to insert.

#### options

Insert options.

### insertMany(values: Partial<row>[], options: { returning?: ReturningInput<row>; touch?: boolean }): Promise<WriteResult | WriteRowsResult<row>>

Inserts many rows.

#### values

Values to insert.

#### options

Insert options.

### join<target extends AnyTable>(target: target, on: Predicate<Extract<keyof columnTypes, string> | QueryColumnName<target>>, type: JoinType): QueryBuilder<{ [key in string]: { [column in string]: column extends RowColumnName<{ [key in string]: { [column in string]: ColumnOutput<(...)> }[key] }> | `${TableName<target>}.${RowColumnName<{ [key in string]: { [column in (...)]: (...) }[key] }>}` ? column<column> extends keyof columnTypes ? columnTypes[column<column>] | { [key in string]: QueryColumnTypeMapFromRow<(...), (...)>[key] }[column<column>] : { [key in string]: QueryColumnTypeMapFromRow<TableName<(...)>, { [key in (...)]: (...) }>[key] }[column<column>] : column extends keyof columnTypes ? columnTypes[column<column>] : never }[key] }, row, loaded, tableName, primaryKey>

Adds a join clause.

#### target

#### on

Join predicate.

#### type

Join type.

### leftJoin<target extends AnyTable>(target: target, on: Predicate<Extract<keyof columnTypes, string> | QueryColumnName<target>>): QueryBuilder<{ [key in string]: { [column in string]: column extends RowColumnName<{ [key in string]: { [column in string]: ColumnOutput<(...)> }[key] }> | `${TableName<target>}.${RowColumnName<{ [key in string]: { [column in (...)]: (...) }[key] }>}` ? column<column> extends keyof columnTypes ? columnTypes[column<column>] | { [key in string]: QueryColumnTypeMapFromRow<(...), (...)>[key] }[column<column>] : { [key in string]: QueryColumnTypeMapFromRow<TableName<(...)>, { [key in (...)]: (...) }>[key] }[column<column>] : column extends keyof columnTypes ? columnTypes[column<column>] : never }[key] }, row, loaded, tableName, primaryKey>

Adds a left join clause.

#### target

#### on

Join predicate.

### limit(value: number): QueryBuilder<columnTypes, row, loaded, tableName, primaryKey>

Limits returned rows.

#### value

Maximum number of rows to return.

### offset(value: number): QueryBuilder<columnTypes, row, loaded, tableName, primaryKey>

Skips returned rows.

#### value

Number of rows to skip.

### orderBy(column: QueryColumnInput<columnTypes>, direction: OrderDirection): QueryBuilder<columnTypes, row, loaded, tableName, primaryKey>

Appends an order-by clause.

#### column

Column to sort by.

#### direction

Sort direction.

### rightJoin<target extends AnyTable>(target: target, on: Predicate<Extract<keyof columnTypes, string> | QueryColumnName<target>>): QueryBuilder<{ [key in string]: { [column in string]: column extends RowColumnName<{ [key in string]: { [column in string]: ColumnOutput<(...)> }[key] }> | `${TableName<target>}.${RowColumnName<{ [key in string]: { [column in (...)]: (...) }[key] }>}` ? column<column> extends keyof columnTypes ? columnTypes[column<column>] | { [key in string]: QueryColumnTypeMapFromRow<(...), (...)>[key] }[column<column>] : { [key in string]: QueryColumnTypeMapFromRow<TableName<(...)>, { [key in (...)]: (...) }>[key] }[column<column>] : column extends keyof columnTypes ? columnTypes[column<column>] : never }[key] }, row, loaded, tableName, primaryKey>

Adds a right join clause.

#### target

#### on

Join predicate.

### select<selection extends (keyof row & string)[]>(columns: selection): QueryBuilder<columnTypes, Pick<row, selection[number]>, loaded, tableName, primaryKey>

Narrows selected columns, optionally with aliases.

#### columns

### select<selection extends Record<string, QueryColumnInput<columnTypes>>>(selection: selection): QueryBuilder<columnTypes, { [key in string | number | symbol]: { [alias in string | number | symbol]: NormalizeColumnInput<selection[alias]> extends keyof columnTypes ? columnTypes[keyof columnTypes & NormalizeColumnInput<selection[alias]>] : never }[key] }, loaded, tableName, primaryKey>

Narrows selected columns, optionally with aliases.

#### selection

### update(changes: Partial<row>, options: { returning?: ReturningInput<row>; touch?: boolean }): Promise<WriteResult | WriteRowsResult<row>>

Updates scoped rows.

#### changes

Column changes to apply.

#### options

Update options.

### upsert(values: Partial<row>, options: { conflictTarget?: (keyof row & string)[]; returning?: ReturningInput<row>; touch?: boolean; update?: Partial<row> }): Promise<WriteResult | WriteRowResult<row>>

Performs an upsert operation.

#### values

Values to insert.

#### options

Upsert options.

### where(input: WhereInput<Extract<keyof columnTypes, string>>): QueryBuilder<columnTypes, row, loaded, tableName, primaryKey>

Adds a where predicate.

#### input

Predicate expression or column-value shorthand.

### with<relations extends RelationMapForSourceName<tableName>>(relations: relations): QueryBuilder<columnTypes, row, loaded & { [key in string | number | symbol]: { [name in string | number | symbol]: RelationResult<relations[name]> }[key] }, tableName, primaryKey>

Configures eager-loaded relations.

#### relations