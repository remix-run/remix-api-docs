---
title: createDatabase
source: https://github.com/remix-run/remix/blob/main/packages/data-table/src/lib/database.ts#L827
---

# createDatabase

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
import { column as c, createDatabase, table } from "remix/data-table";

let users = table({
  name: "users",
  columns: {
    id: c.integer(),
    email: c.varchar(255),
  },
});

let db = createDatabase(adapter);
let rows = await db.query(users).where({ id: 1 }).all();

```

## Parameters

### `adapter`

Adapter implementation responsible for SQL execution.

### `options`

Optional runtime options.

## Returns

A [`Database`](/api/remix/data-table/class/Database/) API instance.