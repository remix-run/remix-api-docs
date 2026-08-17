---
title: SqliteDatabaseConfig
source: https://github.com/remix-run/remix/blob/remix@3.0.0-beta.10/packages/data-table-sqlite/src/lib/driver.ts#L80
---

# SqliteDatabaseConfig

## Summary

Configuration for a SQLite database created by `createSqliteDatabase()`.

## Signature

```ts
interface SqliteDatabaseConfig {
  busyTimeout?: number
  filename: string
  foreignKeys?: boolean
}

```

## Properties

### `busyTimeout`

SQLite `busy_timeout` in milliseconds, applied whenever the database opens a connection.
Defaults to `5000`. Set `0` to fail immediately when another process holds a write lock.

### `filename`

SQLite database filename or `:memory:` for an in-memory database.

### `foreignKeys`

Enables SQLite foreign key enforcement whenever the database opens a connection.
Defaults to `false` (enforcement off) on every runtime, including Node.js where
`node:sqlite` would otherwise enable it by default.