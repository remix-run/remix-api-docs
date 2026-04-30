---
title: MigrateResult
source: https://github.com/remix-run/remix/blob/main/packages/data-table/src/lib/migrations.ts#L151
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