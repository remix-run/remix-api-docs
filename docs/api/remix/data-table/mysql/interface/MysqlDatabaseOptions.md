---
title: MysqlDatabaseOptions
source: https://github.com/remix-run/remix/blob/main/packages/data-table-mysql/src/lib/database.ts#L6
---

# MysqlDatabaseOptions

## Summary

Options for creating a MySQL database.

## Signature

```ts
interface MysqlDatabaseOptions {
  characterSet?: string
  collation?: string
  now?: () => unknown
}

```

## Properties

### `characterSet`

Character set assigned to the recreated database.

### `collation`

Collation assigned to the recreated database.

### `now`

Clock function used for auto-managed timestamps.