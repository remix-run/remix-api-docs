---
title: MigrationRunner
---

# MigrationRunner

<a href="https://github.com/remix-run/remix/blob/remix@3.0.0-alpha.6/packages/data-table/src/lib/migrations.ts#L324" target="_blank">View Source</a>

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