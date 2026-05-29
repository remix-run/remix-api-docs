---
title: MigrationRunner
source: https://github.com/remix-run/remix/blob/remix@3.0.0-beta.3/packages/data-table/src/lib/migrations.ts#L119
---

# MigrationRunner

## Summary

Migration runner API for applying, reverting, and inspecting migration state.

## Signature

```ts
type MigrationRunner = {
  down(options: MigrateOptions): Promise<MigrateResult>;
  status(): Promise<MigrationStatusEntry[]>;
  up(options: MigrateOptions): Promise<MigrateResult>;
};

```