---
title: SqliteRunResult
source: https://github.com/remix-run/remix/blob/main/packages/data-table-sqlite/src/lib/adapter.ts#L50
---

# SqliteRunResult

## Summary

SQLite write execution metadata.

## Signature

```ts
interface SqliteRunResult {
  changes: number | bigint;
  lastInsertRowid: unknown;
}

```