---
title: PostgresQueryResult
---

# PostgresQueryResult

<a href="https://github.com/remix-run/remix/blob/main/packages/data-table-postgres/src/lib/adapter.ts#L32" target="_blank">View Source</a>

## Summary

Result shape returned by postgres client `query()` calls.

## Signature

```ts
type PostgresQueryResult = {
  rowCount: number | null;
  rows: unknown[];
};

```