---
title: SqliteRunResult
source: https://github.com/remix-run/remix/blob/remix@3.0.0-beta.2/packages/data-table-sqlite/src/lib/adapter.ts#L41
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