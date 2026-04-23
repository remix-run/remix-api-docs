---
title: createDatabase
---

# createDatabase

<a href="https://github.com/remix-run/remix/blob/remix@3.0.0-alpha.5/packages/data-table/src/lib/database.ts#L827" target="_blank">View Source</a>

## Summary

Creates a database runtime from an adapter.
Thin wrapper around `new Database(adapter, options)`.

## Signature

```ts
function createDatabase(
  adapter: DatabaseAdapter,
  options: { now?: () => unknown },
): Database;

```

## Example

```ts
import { column as c, createDatabase, table } from 'remix/data-table'

let users = table({
  name: 'users',
  columns: {
    id: c.integer(),
    email: c.varchar(255),
  },
})

let db = createDatabase(adapter)
let rows = await db.query(users).where({ id: 1 }).all()
```

## Params

### adapter

Adapter implementation responsible for SQL execution.

### options

Optional runtime options.

## Returns

A [`Database`](/api/remix/data-table/class/Database/) API instance.