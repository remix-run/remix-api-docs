---
title: createDatabase
---

# createDatabase

<a href="https://github.com/remix-run/remix/blob/3.0.0-alpha.2/packages/data-table/src/lib/database.ts#L763" target="_blank">View Source</a>

## Summary

Creates a database runtime from an adapter.

## Signature

```ts
function createDatabase(
  adapter: DatabaseAdapter,
  options: { now?: () => unknown },
): Database;

```

## Params

### adapter

Adapter implementation responsible for SQL execution.

### options

Optional runtime options.

## Returns

A `Database` API instance.