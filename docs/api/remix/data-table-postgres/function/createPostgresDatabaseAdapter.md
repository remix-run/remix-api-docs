---
title: createPostgresDatabaseAdapter
source: https://github.com/remix-run/remix/blob/main/packages/data-table-postgres/src/lib/adapter.ts#L326
---

# createPostgresDatabaseAdapter

## Summary

Creates a postgres `DatabaseAdapter`.

## Signature

```ts
function createPostgresDatabaseAdapter(
  client: PostgresQueryable,
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

### `client`

`pg` pool or pool client.

## Returns

A configured postgres adapter.