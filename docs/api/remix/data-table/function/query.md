---
title: query
source: https://github.com/remix-run/remix/blob/main/packages/data-table/src/lib/query.ts#L720
---

# query

## Summary

Begin a [`Query`](/api/remix/data-table/class/Query/) against a `@remix-run/data-table` source. The returned
builder is in `'all'` execution mode and unbound; chain `select`, `where`,
`orderBy`, etc. to refine the plan, and `await` it after binding it to a
runtime to materialize results.

## Signature

```ts
function query<
  tableName extends string,
  row extends Record<string, unknown>,
  primaryKey extends readonly (keyof row & string)[],
>(
  table: QueryTableInput<tableName, row, primaryKey>,
): Query<
  QueryTableInput<tableName, row, primaryKey>,
  QueryColumnTypeMapFromRow<tableName, row>,
  row,
  {},
  UnboundQueryPhase<"all">
>;

```

## Example

```ts
let activeUsers = await query(users)
  .where({ status: "active" })
  .orderBy("createdAt", "desc")
  .select(["id", "email"]);

```

## Parameters

### `table`

The table or source to query.

## Returns

An unbound [`Query`](/api/remix/data-table/class/Query/) builder rooted at `table`.