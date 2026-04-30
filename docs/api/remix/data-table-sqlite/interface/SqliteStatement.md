---
title: SqliteStatement
source: https://github.com/remix-run/remix/blob/remix@3.0.0-beta.0/packages/data-table-sqlite/src/lib/adapter.ts#L38
---

# SqliteStatement

## Summary

Prepared statement shape used by SqliteDatabase.

## Signature

```ts
interface SqliteStatement {
  columnNames?: string[];
  columns?: () => unknown[];
  reader?: boolean;
  all(values: unknown[]): unknown[];
  get(values: unknown[]): unknown;
  run(values: unknown[]): SqliteRunResult;
}

```