---
title: createSqliteDatabase
source: https://github.com/remix-run/remix/blob/main/packages/data-table-sqlite/src/lib/database.ts#L37
---

# createSqliteDatabase

## Summary

Creates a SQLite-backed database.

## Signature

```ts
function createSqliteDatabase(
  input: SqliteDatabaseClient | SqliteDatabaseConfig,
  options: DatabaseOptions,
): SqliteDatabase

```

## Example

```ts
import { createSqliteDatabase } from 'remix/data-table/sqlite'

let db = createSqliteDatabase({
  filename: './data/app.db',
  foreignKeys: true,
})

```

## Parameters

### `input`

SQLite configuration or synchronous database client.

### `options`

Database runtime options.

## Returns

A SQLite database.