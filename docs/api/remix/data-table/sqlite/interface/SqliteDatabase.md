---
title: SqliteDatabase
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