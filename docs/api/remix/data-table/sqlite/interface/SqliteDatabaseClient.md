---
title: SqliteDatabaseClient
source: https://github.com/remix-run/remix/blob/main/packages/data-table-sqlite/src/lib/driver.ts#L25
---

# SqliteDatabaseClient

## Summary

Synchronous SQLite client accepted by `createSqliteDatabase()`.

This matches the shared surface of Node's `node:sqlite` `DatabaseSync`, Bun's `bun:sqlite`
`Database`, and compatible synchronous SQLite clients.

## Signature

```ts
interface SqliteDatabaseClient {
  close?: () => void
  exec(sql: string): unknown
  prepare(sql: string): SqliteStatement
}

```