---
title: SqliteDatabase
---

# SqliteDatabase

<a href="https://github.com/remix-run/remix/blob/remix@3.0.0-alpha.6/packages/data-table-sqlite/src/lib/adapter.ts#L30" target="_blank">View Source</a>

## Summary

Synchronous SQLite database client accepted by the sqlite adapter.

This matches the shared surface of Node's `node:sqlite` `DatabaseSync`, Bun's `bun:sqlite`
`Database`, and `better-sqlite3` database instances.

## Signature

```ts
interface SqliteDatabase {
  exec(sql: string): unknown;
  prepare(sql: string): SqliteStatement;
}

```