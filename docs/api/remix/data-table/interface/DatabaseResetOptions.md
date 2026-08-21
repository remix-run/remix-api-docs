---
title: DatabaseResetOptions
source: https://github.com/remix-run/remix/blob/main/packages/data-table/src/lib/migrations.ts#L152
---

# DatabaseResetOptions

## Summary

Options for rebuilding a database through `Database.reset()`.

## Signature

```ts
interface DatabaseResetOptions {
  journalTable?: string
  migrations: Migrations
  seed?: Seed
}

```

## Properties

### `journalTable`

Journal table used to record applied migrations.
Defaults to `data_table_migrations`.

### `migrations`

Migrations to apply after wiping the database.

### `seed`

Function that initializes application data after migrations finish.