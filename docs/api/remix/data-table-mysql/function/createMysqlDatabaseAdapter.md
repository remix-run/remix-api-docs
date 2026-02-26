---
title: createMysqlDatabaseAdapter
---

# createMysqlDatabaseAdapter

<a href="https://github.com/remix-run/remix/blob/remix@3.0.0-alpha.2/packages/data-table-mysql/src/lib/adapter.ts#L225" target="_blank">View Source</a>

## Summary

Creates a mysql `DatabaseAdapter`.

## Signature

```ts
function createMysqlDatabaseAdapter(
  client: MysqlQueryable,
  options: MysqlDatabaseAdapterOptions,
): MysqlDatabaseAdapter;

```

## Params

### client

Mysql pool or connection.

### options

Optional adapter capability overrides.

## Returns

A configured mysql adapter.