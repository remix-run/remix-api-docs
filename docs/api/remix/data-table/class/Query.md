---
title: Query
source: https://github.com/remix-run/remix/blob/main/packages/data-table/src/lib/query.ts#L231
---

# Query

## Summary

Type-safe query builder for `@remix-run/data-table` sources. Construct via
[`query`](/api/remix/data-table/function/query/) and chain calls (`select`, `where`, `orderBy`, etc.) to build
up a plan; run it by `await`-ing on a runtime-bound query, or by passing an
unbound one to a runtime.

The five generic parameters track, in order: the source/table, the column
type map, the projected row shape, any loaded relations, and the
binding/execution-mode phase. Most consumers do not need to spell them out
— `query(table)` infers everything.

## Signature

```ts
class Query<source, columnTypes, row, loaded, phase> {
  constructor(table: source): Query<source, columnTypes, row, loaded, phase>

  // Properties
  [queryTypeBrand]: { binding: QueryPhaseBinding<phase>; mode: QueryPhaseMode<phase> }

  // Methods
  [bindQueryRuntime](runtime: QueryRuntime): Query<source, columnTypes, row, loaded, BoundQueryPhase<QueryPhaseMode<phase>>>
  [querySnapshot](): QuerySnapshot<source, row, QueryPhaseMode<phase>>
  all(this: Query<source, columnTypes, row, loaded, BoundQueryPhase<"all">>): Promise<(row & loaded)[]>
  count(this: Query<source, columnTypes, row, loaded, QueryAllPhase<phase>>): QueryTerminalResult<Query<source, columnTypes, row, loaded, QueryAllPhase<phase>>, "count", number>
  delete(this: Query<source, columnTypes, row, loaded, QueryAllPhase<phase>>, options: DeleteQueryOptions<row>): QueryTerminalResult<Query<source, columnTypes, row, loaded, QueryAllPhase<phase>>, "delete", WriteResult | WriteRowsResult<row>>
  distinct(this: Query<source, columnTypes, row, loaded, QueryAllPhase<phase>>, value: boolean): Query<source, columnTypes, row, loaded, QueryAllPhase<phase>>
  exists(this: Query<source, columnTypes, row, loaded, QueryAllPhase<phase>>): QueryTerminalResult<Query<source, columnTypes, row, loaded, QueryAllPhase<phase>>, "exists", boolean>
  find(this: Query<source, columnTypes, row, loaded, QueryAllPhase<phase>>, value: PrimaryKeyInputForRow<row, QuerySourcePrimaryKey<source>>): QueryTerminalResult<Query<source, columnTypes, row, loaded, QueryAllPhase<phase>>, "find", row & loaded | null>
  first(this: Query<source, columnTypes, row, loaded, QueryAllPhase<phase>>): QueryTerminalResult<Query<source, columnTypes, row, loaded, QueryAllPhase<phase>>, "first", row & loaded | null>
  groupBy(this: Query<source, columnTypes, row, loaded, QueryAllPhase<phase>>, columns: QueryColumnInput<columnTypes>[]): Query<source, columnTypes, row, loaded, QueryAllPhase<phase>>
  having(this: Query<source, columnTypes, row, loaded, QueryAllPhase<phase>>, input: WhereInput<QueryColumns<columnTypes>>): Query<source, columnTypes, row, loaded, QueryAllPhase<phase>>
  insert(this: Query<source, columnTypes, row, loaded, QueryAllPhase<phase>>, values: Partial<row>, options: InsertQueryOptions<row>): QueryTerminalResult<Query<source, columnTypes, row, loaded, QueryAllPhase<phase>>, "insert", WriteResult | WriteRowResult<row>>
  insertMany(this: Query<source, columnTypes, row, loaded, QueryAllPhase<phase>>, values: Partial<row>[], options: InsertQueryOptions<row>): QueryTerminalResult<Query<source, columnTypes, row, loaded, QueryAllPhase<phase>>, "insertMany", WriteResult | WriteRowsResult<row>>
  join<target extends AnyTable>(this: Query<source, columnTypes, row, loaded, QueryAllPhase<phase>>, target: target, on: Predicate<QueryColumns<columnTypes> | QueryColumnName<target>>, type: JoinType): Query<source, { [key in string]: { [column in string]: column extends RowColumnName<{ [key in string]: { [column in string]: ColumnOutput<(...)> }[key] }> | `${TableName<target>}.${RowColumnName<{ [key in string]: { [column in (...)]: (...) }[key] }>}` ? column extends keyof columnTypes ? columnTypes[column] | { [key in string]: QueryColumnTypeMapFromRow<(...), (...)>[key] }[column] : { [key in string]: QueryColumnTypeMapFromRow<TableName<(...)>, { [key in (...)]: (...) }>[key] }[column] : column extends keyof columnTypes ? columnTypes[column] : never }[key] }, row, loaded, QueryAllPhase<phase>>
  leftJoin<target extends AnyTable>(this: Query<source, columnTypes, row, loaded, QueryAllPhase<phase>>, target: target, on: Predicate<QueryColumns<columnTypes> | QueryColumnName<target>>): Query<source, { [key in string]: { [column in string]: column extends RowColumnName<{ [key in string]: { [column in string]: ColumnOutput<(...)> }[key] }> | `${TableName<target>}.${RowColumnName<{ [key in string]: { [column in (...)]: (...) }[key] }>}` ? column extends keyof columnTypes ? columnTypes[column] | { [key in string]: QueryColumnTypeMapFromRow<(...), (...)>[key] }[column] : { [key in string]: QueryColumnTypeMapFromRow<TableName<(...)>, { [key in (...)]: (...) }>[key] }[column] : column extends keyof columnTypes ? columnTypes[column] : never }[key] }, row, loaded, QueryAllPhase<phase>>
  limit(this: Query<source, columnTypes, row, loaded, QueryAllPhase<phase>>, value: number): Query<source, columnTypes, row, loaded, QueryAllPhase<phase>>
  offset(this: Query<source, columnTypes, row, loaded, QueryAllPhase<phase>>, value: number): Query<source, columnTypes, row, loaded, QueryAllPhase<phase>>
  orderBy(this: Query<source, columnTypes, row, loaded, QueryAllPhase<phase>>, column: QueryColumnInput<columnTypes>, direction: "asc" | "desc"): Query<source, columnTypes, row, loaded, QueryAllPhase<phase>>
  rightJoin<target extends AnyTable>(this: Query<source, columnTypes, row, loaded, QueryAllPhase<phase>>, target: target, on: Predicate<QueryColumns<columnTypes> | QueryColumnName<target>>): Query<source, { [key in string]: { [column in string]: column extends RowColumnName<{ [key in string]: { [column in string]: ColumnOutput<(...)> }[key] }> | `${TableName<target>}.${RowColumnName<{ [key in string]: { [column in (...)]: (...) }[key] }>}` ? column extends keyof columnTypes ? columnTypes[column] | { [key in string]: QueryColumnTypeMapFromRow<(...), (...)>[key] }[column] : { [key in string]: QueryColumnTypeMapFromRow<TableName<(...)>, { [key in (...)]: (...) }>[key] }[column] : column extends keyof columnTypes ? columnTypes[column] : never }[key] }, row, loaded, QueryAllPhase<phase>>
  select<selection extends (keyof row & string)[]>(this: Query<source, columnTypes, row, loaded, QueryAllPhase<phase>>, columns: selection): Query<source, columnTypes, Pick<row, selection[number]>, loaded, QueryAllPhase<phase>>
  select<selection extends Record<string, QueryColumnInput<columnTypes>>>(this: Query<source, columnTypes, row, loaded, QueryAllPhase<phase>>, selection: selection): Query<source, columnTypes, { [key in string | number | symbol]: { [alias in string | number | symbol]: NormalizeColumnInput<selection[alias]> extends keyof columnTypes ? columnTypes[keyof columnTypes & NormalizeColumnInput<selection[alias]>] : never }[key] }, loaded, QueryAllPhase<phase>>
  update(this: Query<source, columnTypes, row, loaded, QueryAllPhase<phase>>, changes: Partial<row>, options: InsertQueryOptions<row>): QueryTerminalResult<Query<source, columnTypes, row, loaded, QueryAllPhase<phase>>, "update", WriteResult | WriteRowsResult<row>>
  upsert(this: Query<source, columnTypes, row, loaded, QueryAllPhase<phase>>, values: Partial<row>, options: UpsertQueryOptions<row>): QueryTerminalResult<Query<source, columnTypes, row, loaded, QueryAllPhase<phase>>, "upsert", WriteResult | WriteRowResult<row>>
  where(this: Query<source, columnTypes, row, loaded, QueryAllPhase<phase>>, input: WhereInput<QueryColumns<columnTypes>>): Query<source, columnTypes, row, loaded, QueryAllPhase<phase>>
  with<relations extends RelationMapForSourceName<QuerySourceTableName<source>>>(this: Query<source, columnTypes, row, loaded, QueryAllPhase<phase>>, relations: relations): Query<source, columnTypes, row, loaded & { [key in string | number | symbol]: { [name in string | number | symbol]: RelationResult<relations[name]> }[key] }, QueryAllPhase<phase>>
}
```