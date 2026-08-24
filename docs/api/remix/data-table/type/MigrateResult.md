---
title: MigrateResult
source: https://github.com/remix-run/remix/blob/brookslybrand/fix-css-range-media-queries/packages/data-table/src/lib/migrations.ts#L98
---

# MigrateResult

## Summary

Result returned by `Database.migrate()`.

## Signature

```ts
type MigrateResult = {
  applied: MigrationStatusEntry[]
  reverted: MigrationStatusEntry[]
  sql: string[]
}

```