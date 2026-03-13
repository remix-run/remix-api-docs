---
title: MigrateResult
---

# MigrateResult

<a href="https://github.com/remix-run/remix/blob/main/packages/data-table/src/lib/migrations.ts#L156" target="_blank">View Source</a>

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