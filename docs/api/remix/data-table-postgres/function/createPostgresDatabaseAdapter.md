---
title: createPostgresDatabaseAdapter
---

# createPostgresDatabaseAdapter

<a href="https://github.com/remix-run/remix/blob/3.0.0-alpha.2/packages/data-table-postgres/src/lib/adapter.ts#L211" target="_blank">View Source</a>

## Summary

Creates a postgres `DatabaseAdapter`.

## Signature

```ts
function createPostgresDatabaseAdapter(
  client: {
    connect?: () => Promise<{ release?: () => void; query: any }>;
    query: any;
  },
  options: PostgresDatabaseAdapterOptions,
): PostgresDatabaseAdapter;

```

## Params

### client

Postgres pool or client.

### options

Optional adapter capability overrides.

## Returns

A configured postgres adapter.