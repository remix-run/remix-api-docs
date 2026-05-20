---
title: SqliteStatement
---

# SqliteStatement

## Summary

Prepared statement shape used by [`SqliteDatabase`](/api/remix/data-table/sqlite/interface/SqliteDatabase/).

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