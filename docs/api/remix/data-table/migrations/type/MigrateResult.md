---
title: MigrateResult
---

# MigrateResult

## Summary

Result shape returned by migration runner commands.

## Signature

```ts
type MigrateResult = {
  applied: MigrationStatusEntry[];
  reverted: MigrationStatusEntry[];
  sql: string[];
};

```