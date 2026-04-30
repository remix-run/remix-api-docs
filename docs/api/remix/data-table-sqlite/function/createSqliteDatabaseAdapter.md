---
title: createSqliteDatabaseAdapter
source: https://github.com/remix-run/remix/blob/remix@3.0.0-beta.0/packages/data-table-sqlite/src/lib/adapter.ts#L298
---

# createSqliteDatabaseAdapter

## Summary

Creates a sqlite `DatabaseAdapter`.

## Signature

```ts
function createSqliteDatabaseAdapter(
  database: SqliteDatabase,
): SqliteDatabaseAdapter;

```

## Example

```ts
import { DatabaseSync } from 'node:sqlite'
import { createDatabase } from 'remix/data-table'
import { createSqliteDatabaseAdapter } from 'remix/data-table-sqlite'

let sqlite = new DatabaseSync('./data/app.db')
let adapter = createSqliteDatabaseAdapter(sqlite)
let db = createDatabase(adapter)
```

## Params

### `database`

Synchronous SQLite database client.

## Returns

A configured sqlite adapter.