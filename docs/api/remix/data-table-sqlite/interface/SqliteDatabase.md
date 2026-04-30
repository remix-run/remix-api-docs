---
title: SqliteDatabase
source: https://github.com/remix-run/remix/blob/remix@3.0.0-beta.0/packages/data-table-sqlite/src/lib/adapter.ts#L30
---

# SqliteDatabase

## Summary

Synchronous SQLite database client accepted by the sqlite adapter.

This matches the shared surface of Node's `node:sqlite` `DatabaseSync`, Bun's `bun:sqlite`
`Database`, and compatible synchronous SQLite clients.

## Signature

```ts
interface SqliteDatabase {
  exec(sql: string): unknown;
  prepare(sql: string): SqliteStatement;
}

```