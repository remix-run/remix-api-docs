---
title: createPostgresDatabaseAdapter
---

# createPostgresDatabaseAdapter

<a href="https://github.com/remix-run/remix/blob/remix@3.0.0-alpha.3/packages/data-table-postgres/src/lib/adapter.ts#L364" target="_blank">View Source</a>

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

## Example

```ts
import { Pool } from 'pg'
import { createDatabase } from 'remix/data-table'
import { createPostgresDatabaseAdapter } from 'remix/data-table-postgres'

let pool = new Pool({ connectionString: process.env.DATABASE_URL })
let adapter = createPostgresDatabaseAdapter(pool)
let db = createDatabase(adapter)
```

## Params

### client

Postgres pool or client.

### options

Optional adapter capability overrides.

## Returns

A configured postgres adapter.