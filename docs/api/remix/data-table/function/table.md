---
title: table
---

# table

<a href="https://github.com/remix-run/remix/blob/remix@3.0.0-alpha.5/packages/data-table/src/lib/table.ts#L718" target="_blank">View Source</a>

## Summary

Creates a table object with symbol-backed metadata and direct column references.

## Signature

```ts
function table<
  name extends string,
  columns extends TableColumnsDefinition,
  primaryKey extends
    | string
    | readonly ColumnNameFromColumns<columns>[]
    | undefined,
>(
  options: CreateTableOptions<name, columns, primaryKey>,
): Table<name, columns, NormalizePrimaryKey<columns, primaryKey>>;

```

## Example

```ts
import { column as c, table } from 'remix/data-table'

let users = table({
  name: 'users',
  columns: {
    id: c.integer(),
    email: c.varchar(255),
  },
  primaryKey: 'id',
})
```

## Params

### options

Table declaration options.

## Returns

A frozen table object.