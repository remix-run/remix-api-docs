---
title: createSqliteDatabaseAdapter
---

# createSqliteDatabaseAdapter

<a href="https://github.com/remix-run/remix/blob/3.0.0-alpha.2/packages/data-table-sqlite/src/lib/adapter.ts#L134" target="_blank">View Source</a>

## Summary

Creates a sqlite `DatabaseAdapter`.

## Signature

```ts
function createSqliteDatabaseAdapter(
  database: Database,
  options: SqliteDatabaseAdapterOptions,
): SqliteDatabaseAdapter;

```

## Params

### database

Better SQLite3 database instance.

### options

Optional adapter capability overrides.

## Returns

A configured sqlite adapter.