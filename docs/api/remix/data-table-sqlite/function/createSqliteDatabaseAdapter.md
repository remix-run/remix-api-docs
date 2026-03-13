---
title: createSqliteDatabaseAdapter
---

# createSqliteDatabaseAdapter

<a href="https://github.com/remix-run/remix/blob/remix@3.0.0-alpha.3/packages/data-table-sqlite/src/lib/adapter.ts#L281" target="_blank">View Source</a>

## Summary

Creates a sqlite `DatabaseAdapter`.

## Signature

```ts
function createSqliteDatabaseAdapter(
  database: Database,
  options: SqliteDatabaseAdapterOptions,
): SqliteDatabaseAdapter;

```

## Example

```ts
import BetterSqlite3 from 'better-sqlite3'
import { createDatabase } from 'remix/data-table'
import { createSqliteDatabaseAdapter } from 'remix/data-table-sqlite'

let sqlite = new BetterSqlite3('./data/app.db')
let adapter = createSqliteDatabaseAdapter(sqlite)
let db = createDatabase(adapter)
```

## Params

### database

Better SQLite3 database instance.

### options

Optional adapter capability overrides.

## Returns

A configured sqlite adapter.