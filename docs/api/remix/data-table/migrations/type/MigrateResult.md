---
title: MigrateResult
source: https://github.com/remix-run/remix/blob/remix@3.0.0-beta.0/packages/data-table/src/lib/migrations.ts#L151
---

# MigrateResult

## Summary

Result shape returned by migration runner commands.

## Signature

```ts
type MigrateResult = {
  applied: MigrationStatusEntry[];
  reverted: MigrationStatusEntry[];
  sql: SqlStatement[];
};

```