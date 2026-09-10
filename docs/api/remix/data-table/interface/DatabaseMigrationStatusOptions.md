---
title: DatabaseMigrationStatusOptions
source: https://github.com/remix-run/remix/blob/main/packages/data-table/src/lib/migrations.ts#L141
---

# DatabaseMigrationStatusOptions

## Summary

Options for reading migration status through `Database.migrationStatus()`.

## Signature

```ts
interface DatabaseMigrationStatusOptions {
  journalTable?: string
}

```

## Properties

### `journalTable`

Journal table used to record applied migrations.
Defaults to `data_table_migrations`.