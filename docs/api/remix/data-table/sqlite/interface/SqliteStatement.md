---
title: SqliteStatement
source: https://github.com/remix-run/remix/blob/remix@3.0.0-beta.10/packages/data-table-sqlite/src/lib/driver.ts#L99
---

# SqliteStatement

## Summary

Prepared statement shape used by [`SqliteDatabaseClient`](/api/remix/data-table/sqlite/interface/SqliteDatabaseClient/).

## Signature

```ts
interface SqliteStatement {
  columnNames?: string[]
  columns?: () => unknown[]
  reader?: boolean
  all(values: unknown[]): unknown[]
  get(values: unknown[]): unknown
  run(values: unknown[]): SqliteRunResult
}

```