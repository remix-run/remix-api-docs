---
title: DatabaseMigrateOptions
source: https://github.com/remix-run/remix/blob/remix@3.0.0-beta.10/packages/data-table/src/lib/migrations.ts#L128
---

# DatabaseMigrateOptions

## Summary

Options for applying or reverting migrations through `Database.migrate()`.

## Signature

```ts
type DatabaseMigrateOptions = MigrationOperationOptions & {
  direction?: MigrationDirection
  journalTable?: string
}

```