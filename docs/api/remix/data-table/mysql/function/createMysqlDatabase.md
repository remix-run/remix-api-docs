---
title: createMysqlDatabase
source: https://github.com/remix-run/remix/blob/remix@3.0.0-beta.6/packages/data-table-mysql/src/lib/database.ts#L41
---

# createMysqlDatabase

## Summary

Creates a MySQL-backed database.

## Signature

```ts
function createMysqlDatabase(
  input: MysqlDatabaseInput,
  options: MysqlDatabaseOptions,
): MysqlDatabase

```

## Example

```ts
import { createMysqlDatabase } from 'remix/data-table/mysql'

let db = createMysqlDatabase({
  uri: process.env.DATABASE_URL,
  multipleStatements: true,
})

```

## Parameters

### `input`

MySQL pool configuration, pool, connection, or URI.

### `options`

Database runtime and recreation options.

## Returns

A MySQL database.