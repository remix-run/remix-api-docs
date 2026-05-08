---
title: createMysqlDatabaseAdapter
source: https://github.com/remix-run/remix/blob/main/packages/data-table-mysql/src/lib/adapter.ts#L360
---

# createMysqlDatabaseAdapter

## Summary

Creates a mysql `DatabaseAdapter`.

## Signature

```ts
function createMysqlDatabaseAdapter(
  client: MysqlQueryable,
): MysqlDatabaseAdapter;

```

## Example

```ts
import { createPool } from "mysql2/promise";
import { createDatabase } from "remix/data-table";
import { createMysqlDatabaseAdapter } from "remix/data-table-mysql";

let pool = createPool({ uri: process.env.DATABASE_URL });
let adapter = createMysqlDatabaseAdapter(pool);
let db = createDatabase(adapter);

```

## Parameters

### `client`

Mysql pool or connection.

## Returns

A configured mysql adapter.