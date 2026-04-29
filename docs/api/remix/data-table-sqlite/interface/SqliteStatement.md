---
title: SqliteStatement
---

# SqliteStatement

<a href="https://github.com/remix-run/remix/blob/remix@3.0.0-alpha.6/packages/data-table-sqlite/src/lib/adapter.ts#L38" target="_blank">View Source</a>

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