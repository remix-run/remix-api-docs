---
title: createPostgresDatabase
source: https://github.com/remix-run/remix/blob/remix@3.0.0-beta.6/packages/data-table-postgres/src/lib/database.ts#L40
---

# createPostgresDatabase

## Summary

Creates a PostgreSQL-backed database.

## Signature

```ts
function createPostgresDatabase(
  input: PostgresDatabaseInput,
  options: PostgresDatabaseOptions,
): PostgresDatabase

```

## Example

```ts
import { createPostgresDatabase } from 'remix/data-table/postgres'

let db = createPostgresDatabase({
  connectionString: process.env.DATABASE_URL,
})

```

## Parameters

### `input`

PostgreSQL pool configuration, pool, or client.

### `options`

Database runtime and recreation options.

## Returns

A PostgreSQL database.